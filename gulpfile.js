var extend = require('extend'),
    runSequence = require('run-sequence'),
    fs = require('fs'),
    chmod = require('gulp-chmod'),
    moment = require('moment'),
    less = require('gulp-less'),
    cssmin = require('gulp-cssmin'),
    csscomb = require('gulp-csscomb'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    header = require('gulp-header'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    change = require('gulp-change'),
    sourcemaps = require('gulp-sourcemaps'),
    prettify = require('gulp-jsbeautifier'),
    mkdirp = require('mkdirp'),
    del = require('del'),
    format = require('string-format').extend(String.prototype),
    colors = require('colors'),
    gulp = require('gulp'),
    jsonminify = require('gulp-jsonminify'),
    zui = require('./zui.json'),
    pkg = require('./package.json'),
    babel = require('gulp-babel'),
    showFileDetail = true;

// Disable the 'possible EventEmitter memory leak detected' warning.
gulp.setMaxListeners(0);

// Workaround for https://github.com/gulpjs/gulp/issues/71#issuecomment-68062782
var origSrc = gulp.src;
gulp.src = function () {
    return fixPipe(origSrc.apply(this, arguments));
};
function fixPipe(stream) {
    var origPipe = stream.pipe;
    stream.pipe = function (dest) {
        arguments[0] = dest.on('error', function (error) {
            var nextStreams = dest._nextStreams;
            if (nextStreams) {
                nextStreams.forEach(function (nextStream) {
                    nextStream.emit('error', error);
                });
            } else if (dest.listeners('error').length === 1) {
                throw error;
            }
        });
        var nextStream = fixPipe(origPipe.apply(this, arguments));
        (this._nextStreams || (this._nextStreams = [])).push(nextStream);
        return nextStream;
    };
    return stream;
}
// try load zui.templates.json and merge into zui.
try {
    extend(true, zui, require('./zui.templates.json'));
} catch (e) { }

// try load zui.custom.json and merge into zui.
try {
    var zuiCustom = require('./zui.custom.json');
    if (zuiCustom) extend(true, zui, zuiCustom);
} catch (e) { }

// try load specific config from file by process argument
const configFileArg = process.argv[4];
if (configFileArg && configFileArg.startsWith('--config=')) {
    let configFile = configFileArg.substring('--config='.length);
    if (configFile) {
        try {
            const zuiCustom = require(configFile.replace('~t/', './templates/'));
            if (zuiCustom) extend(true, zui, zuiCustom);
        } catch (e) { }
    }
}

var today = moment();
var typeSet = ['less', 'js', 'resource'],
    lib = zui.lib,
    builds = zui.builds,
    BANNER = ('/*!\n' +
        ' * {title} - v{version} - {date}\n' +
        ' * {homepage}\n' +
        ' * GitHub: {repo} \n' +
        ' * Copyright (c) {year} {author}; Licensed {license}\n' +
        ' */\n\n'),
    BANNER_OPTONS = {
        title: pkg.title || pkg.name,
        version: pkg.version,
        date: today.format('YYYY-MM-DD'),
        homepage: pkg.homepage,
        repo: pkg.repository.url,
        year: today.format('YYYY'),
        author: pkg.author,
        license: pkg.license
    },
    BOOTSTRAP_STATEMENT = '/*! Some code copy from Bootstrap v3.0.0 by @fat and @mdo. (Copyright 2013 Twitter, Inc. Licensed under http://www.apache.org/licenses/)*/\n\n';

function formatBanner(options) {
    if (options && options.title) {
        options.title = BANNER_OPTONS.title + ': ' + options.title;
    }
    options = Object.assign({}, BANNER_OPTONS, options);
    return BANNER.format(options);
}

function tryStatSync(path) {
    try {
        return fs.statSync(path);
    } catch (e) {
        return false;
    }
}

function isFileExist(path) {
    var stats = tryStatSync(path);
    return stats && stats.isFile();
}

function getItemList(list, items, ignoreDpds, ignoreBasic) {
    items = items || [];

    if (Array.isArray(list)) {
        list.forEach(function (name) {
            if (name === 'basic' && ignoreBasic) return;
            getItemList(name, items, ignoreDpds, ignoreBasic);
        });
    } else if (!(list === 'basic' && ignoreBasic)) {
        var item = lib[list];
        if (item && items.indexOf(list) < 0) {
            if (!ignoreDpds && item.dpds) {
                getItemList(item.dpds, items, ignoreDpds, ignoreBasic);
            }
            if (item.libDpds) {
                getItemList(item.libDpds, items, ignoreDpds, ignoreBasic);
            }
            if (item.src) items.push(list);
        }
    }

    return items;
}

function getBuildSource(build) {
    var list = [];

    var sources = {
        less: [],
        js: [],
        resource: []
    };

    if (!Array.isArray(list)) list = [list];

    if (build.settingDpds) list = getItemList(build.settingDpds, list);
    list = getItemList(build.includes, list, build.ignoreDpds, build.ignoreBasic);

    list.forEach(function (item) {
        var libItem = lib[item];
        if (libItem && libItem.src) {
            typeSet.forEach(function (type) {
                if (libItem.src[type]) {
                    libItem.src[type].forEach(function (file) {
                        if (sources[type].indexOf(file) < 0) {
                            sources[type].push(file);
                        }
                    });
                }
            });
        }
    });

    return sources;
}

function getSourceConfig(src) {
    var idx = src.lastIndexOf('//');
    if (idx > 0) {
        return {
            base: src.substr(0, idx + 1),
            src: src.replace(/\/\//g, '/'),
            file: src.substr(idx + 2)
        };
    }
    idx = src.lastIndexOf('/');
    return {
        base: src.substr(0, idx + 1),
        src: src,
        file: src.substr(idx + 1)
    }
}

function getBuildPath(build, type) {
    var path = build.dest;
    if (build.subdirectories) {
        path += '/' + type + '/';
    }
    if (path.indexOf('.') !== 0) {
        path = './' + path;
    }
    return path.replace(/\/\//g, '/').replace(/\/\//g, '/');
}

function getBuildDestFilename(build, type, suffix) {
    var file = getBuildPath(build, type);
    file += '/' + build.filename + '.' + (suffix || type);
    return file.replace(/\/\//g, '/');
}

function gulpBuildColorsetJS(build, lessSrc, bannerContent) {
    var name = 'build:' + build.name;
    var destPath = getBuildPath(build, 'js');
    return gulp.src(lessSrc)
        .pipe(less())
        .pipe(rename({
            extname: '.js'
        }))
        .pipe(change(function (css, done) {
            css = css.replace(/\/\*\*/g, '').replace(/\*\*\//g, '');
            css = css.replace(/\.color-(\w+) \{\n  color: (#?\w+);\n\}/g, "        $1: '$2',");
            css = css.replace(',\n    };', '\n    };');
            css = css.replace('\n\n', '\n');
            done(null, css);
        }))
        .pipe(header(bannerContent))
        .pipe(gulp.dest(destPath))
        .on('end', function () {
            console.log('     js > '.yellow.bold + (destPath + build.filename + '.js').italic.underline);
        });
}

function buildBundle(name, callback, type) {
    name = name || 'all';
    var build = builds[name];
    var taskList = [],
        depTaskList = [];

    // clean files
    if (!type && name === 'dist') {
        del.sync('./dist/**/*');
    } else if (!type && name === 'doc') {
        del.sync([
            './docs/js/**/*',
            './docs/css/**/*',
            './docs/fonts/**/*'
        ]);
    }

    if (!build) {
        if (name === 'all') {
            console.log('           ========== BUILD ALL =========='.blue.bold);
            var buildList = Object.keys(builds);
            buildList.forEach(function (nm) {
                build = builds[nm];
                if (build && !build.bundles) {
                    var taskName = 'build:' + nm;
                    gulp.task(taskName, function (cb) {
                        buildBundle(nm, cb, type)
                    });
                    taskList.push(taskName);
                }
            });
            if (taskList.length) runSequence(taskList, function () {
                console.log(('        √  Build ' + 'ALL'.bold + ' success! ').green);
                callback && callback();
            });
            return;
        } else {
            var buildLib = lib[name];
            if (buildLib) {
                build = {
                    title: buildLib.name,
                    dest: 'dist/lib/' + name + '/',
                    filename: buildLib.filename || ((buildLib.source && buildLib.source !== 'Bootstrap') ? name : ('zui.' + name)),
                    includes: [name],
                    source: buildLib.source,
                    settingDpds: (buildLib.src && buildLib.src.less && buildLib.src.less.length) ? ['setting'] : null,
                    ignoreBasic: true,
                    ignoreDpds: buildLib.ignoreDpds !== undefined ? buildLib.ignoreDpds : true,
                    babel: buildLib.babel
                };
            } else {
                console.log(('           Cannot found the build config: ' + name).red);
                return false;
            }
        }
    } else if (build.bundles) {
        console.log(('           === BUILD BUNDLES ' + name.toUpperCase() + ' [' + build.bundles.join(', ') + '] ===').blue.bold);
        var bundlesTaskList = [];
        build.bundles.forEach(function (bundleName) {
            gulp.task('build:' + bundleName, function (cb) {
                buildBundle(bundleName, cb, type);
            });

            bundlesTaskList.push('build:' + bundleName);
        });

        gulp.task('build:' + name + ':bundles', function (cb) {
            runSequence(bundlesTaskList, function () {
                console.log(('         √ Build BUNDLES ' + name.toUpperCase() + ' [' + build.bundles.map(function (x) { return x.bold; }).join(', ') + '] success! ').green);
                cb();
            });
        });

        depTaskList.push('build:' + name + ':bundles');
    }

    if (build.preBuilds) {
        build.preBuilds.forEach(function (pBuildName) {
            var pBuild = builds[pBuildName];
            if (pBuild && pBuild.includes) {
                build.includes = pBuild.includes.concat(build.includes);
            }
        });
    }

    if (build.includes && build.includes.indexOf('colorset.js') > -1) {
        gulp.task('build:colorset.less2js', function (cb) {
            buildBundle('colorset.less2js', cb, 'less');
        });

        depTaskList.push('build:colorset.less2js');
    }

    console.log(('           --- build ' + name + ' ---').cyan.bold);

    var banner = formatBanner({ title: build.title || name });
    var source = getBuildSource(build),
        bannerContent = (build.source && build.source !== 'Bootstrap') ?
            '' : banner + (build.bootstrapStatement ? BOOTSTRAP_STATEMENT : '');

    if (source.js && source.js.length && (!type || type === 'js')) {
        console.log(('         + Ready to process ' + source.js.length + ' javascript files.').bold);
        source.js.forEach(function (f, idx) {
            if (f.indexOf('~/') === 0) {
                source.js[idx] = f = 'src/js/' + f.substr(2);
            }
            if (showFileDetail) console.log(('         | ' + f).italic);
        });

        //ar taskName = 'build:' + name + ':js';
        gulp.task('build:' + name + ':js', function () {
            var destPath = getBuildPath(build, 'js');
            var gulpPipe = gulp.src(source.js);
            if (babel) {
                gulpPipe = gulpPipe.pipe(babel({
                    presets: ['babel-preset-env']
                }));
            }
            return gulpPipe
                .pipe(concat(build.filename + '.js'))
                .pipe(header(bannerContent))
                .pipe(chmod(644))
                .pipe(gulp.dest(destPath))
                .on('end', function () {
                    console.log('      js > '.yellow.bold + (destPath + build.filename + '.js').italic.underline);
                })
                //.pipe(sourcemaps.init())
                .pipe(uglify({ preserveComments: 'some' }))
                .pipe(rename({
                    suffix: '.min'
                }))
                //.pipe(sourcemaps.write())
                .pipe(chmod(644))
                .pipe(gulp.dest(destPath))
                .on('end', function () {
                    console.log('      js > '.yellow.bold + (destPath + build.filename + '.min.js').italic.underline);
                });
        });
        taskList.push('build:' + name + ':js');
    }

    if (source.less && source.less.length && (!type || type === 'less')) {
        var lessFileContent = '// \n// ' + build.title + '\n// Build config: ' + name + '\n//\n// This file generated by ZUI builder automatically at ' + today.toString() + '.\n//\n\n';
        console.log(('         + Ready to process ' + source.less.length + ' less files.').bold);
        source.less.forEach(function (f, idx) {
            if (f.indexOf('~/') === 0) {
                source.less[idx] = f = 'src/less/' + f.substr(2);
            }

            if (isFileExist(f)) {
                lessFileContent += '@import "';
                lessFileContent += '../../' + f;
                lessFileContent += '";\n';
                if (showFileDetail) console.log(('         | ' + f).italic);
            } else {
                lessFileContent += '// @import "';
                lessFileContent += '../../' + f;
                lessFileContent += '" // FILE NOT FOUND;\n';
                if (showFileDetail) console.log(('         - ' + f + ' [NOT FOUND]').red.italic);
            }
        });

        gulp.task('build:' + name + ':less', function () {
            var buildSourceFilePath = './build/less/' + build.filename + '.less';
            var destPath = getBuildPath(build, 'css');

            mkdirp.sync('./build/less/');
            fs.writeFileSync(buildSourceFilePath, lessFileContent);

            if (name === 'colorset.less2js') {
                return gulpBuildColorsetJS(build, buildSourceFilePath, bannerContent);
            }

            return gulp.src(buildSourceFilePath)
                .pipe(less())
                .pipe(autoprefixer({
                    browsers: ["Android 2.3",
                        "Android >= 4",
                        "Chrome >= 20",
                        "Firefox >= 24",
                        "Explorer >= 8",
                        "iOS >= 6",
                        "Opera >= 12",
                        "Safari >= 6"],
                    cascade: true
                }))
                .pipe(csscomb())
                .pipe(header(bannerContent))
                .pipe(chmod(644))
                .pipe(gulp.dest(destPath))
                .on('end', function () {
                    console.log('     css > '.yellow.bold + (destPath + build.filename + '.css').italic.underline);
                })
                //.pipe(sourcemaps.init())
                .pipe(cssmin({
                    compatibility: 'ie8',
                    keepSpecialComments: '*',
                    sourceMap: true,
                    advanced: false
                }))
                .pipe(rename({
                    suffix: '.min'
                }))

                //.pipe(sourcemaps.write())
                .pipe(chmod(644))
                .pipe(gulp.dest(destPath))
                .on('end', function () {
                    console.log('     css > '.yellow.bold + (destPath + build.filename + '.min.css').italic.underline);
                });
        });
        taskList.push('build:' + name + ':less');
    }

    if (source.resource && source.resource.length && (!type || type === 'resource')) {
        console.log(('         + Ready to process ' + source.resource.length + ' resource files.').bold);
        var destPath = getBuildPath(build, '');
        source.resource.forEach(function (f, idx) {
            if (f.indexOf('~/') === 0) {
                source.resource[idx] = f = 'src//' + f.substr(2);
            }
            if (showFileDetail) console.log(('         | [' + idx + '] ' + f).italic);
            gulp.task('build:' + name + ':resource:' + idx, function () {
                var sourceConfig = getSourceConfig(f);
                return gulp.src(sourceConfig.src, {
                    base: sourceConfig.base
                })
                    .pipe(chmod(644))
                    .pipe(gulp.dest(destPath))
                    .on('end', function () {
                        console.log('resource > '.yellow.bold + (destPath + sourceConfig.file).italic.underline);
                    });
            });
            taskList.push('build:' + name + ':resource:' + idx);
        });
    }

    if (taskList.length || depTaskList.length) {
        var completeCallback = function () {
            console.log(('         √ Build ' + name.bold + ' success! ').green);
            callback && callback();
        };

        if (taskList.length) {
            if (depTaskList.length) {
                runSequence(depTaskList, taskList, completeCallback);
            } else {
                runSequence(taskList, completeCallback);
            }
        } else {
            runSequence(depTaskList, completeCallback);
        }

    } else {
        console.log(('           No source files for build: ' + name).red);
        callback && callback();
    }
}

gulp.task('build', function (callback) {
    var name = process.argv[3] || 'dist';
    if (name && name[0] === '-') name = name.substr(1);
    if (name === 'lib') name = 'seperate';
    var type = process.argv.length > 4 ? process.argv[4] : false;
    if (type && (type === '-js' || type === '-less' || type === '-source')) type = type.substr(1);
    else type = null;
    console.log('  BEGIN >> ' + (' Build ' + name.bold + ' ').inverse);
    buildBundle(name, function () {
        console.log('    END >> ' + (' Build ' + name.bold + ' completed :)').green.inverse);
    }, type);
});

function startWatchSrc(name, callback) {
    if (name === 'lib') name = 'seperate';
    var build = builds[name];
    var srcDir = build && build.srcDir || './src';
    console.log(`           Start watching ${srcDir.blue}`);
    gulp.watch([srcDir + "/less/**/*"], function (event) {
        buildBundle(name, function () {
            callback && callback(event, 'less');
            console.log('         √ '.green + (' WATCH ' + name.bold + ' COMPLETED. ').yellow.inverse);
        }, 'less');
    });

    gulp.watch([srcDir + "/js/**/*"], function (event) {
        if (event.path && (event.path.lastIndexOf('src/js/colorset.js') > -1) || event.path.lastIndexOf('src\\js\\colorset.js') > -1) return;
        buildBundle(name, function () {
            callback && callback(event, 'js');
            console.log('         √ '.green + (' WATCH ' + name.bold + ' COMPLETED. ').yellow.inverse);
        }, 'js');
    });

    gulp.watch([srcDir + "/fonts/**/*"], function (event) {
        buildBundle(name, function () {
            callback && callback(event, 'fonts');
            console.log('         √ '.green + (' WATCH ' + name.bold + ' COMPLETED. ').yellow.inverse);
        }, 'resource');
    });
}

gulp.task('watch', function (callback) {
    var name = process.argv[3] || 'dist';
    if (name && name[0] === '-') name = name.substr(1);
    startWatchSrc(name);
});

['dist', 'doc', 'theme', 'lib'].forEach(function (name) {
    var depsTasks = (name == 'dist' || name == 'doc') ? ['minJSON', 'minJSON-en'] : [];
    gulp.task(name, depsTasks, function (callback) {
        console.log('  BEGIN >> ' + (' Build ' + name.bold + ' ').inverse);
        buildBundle(name == 'lib' ? 'seperate' : name, function () {
            console.log('    END >> ' + (' Build ' + name.bold + ' completed. ').green.inverse);
            callback();
        });
    });

    gulp.task('watch:' + name, function () {
        startWatchSrc(name);
    });
});

gulp.task('minJSON', function(cb) {
    gulp.src(['./docs/index.json', './docs/icons.json', 'zui.json'])
        .pipe(jsonminify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./docs/')).on('end', cb);
});

gulp.task('minJSON-en', function(cb) {
    gulp.src(['./en/docs/index.json', './docs/icons.json', 'zui.json'])
        .pipe(jsonminify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./en/docs/')).on('end', cb);
});

gulp.task('prettify:js', function () {
    return gulp.src('./src/js/**/*')
        .pipe(prettify({
            logSuccess: true,
            config: './.jsbeautifyrc',
            mode: 'VERIFY_AND_WRITE'
        }))
        .pipe(gulp.dest('./src/js/'));
});

gulp.task('prettify', ['prettify:js']);

gulp.task('default', function () {
    buildBundle('all');
});

// Init custom gulp tasks
if (isFileExist("gulpfile.custom.js")) {
    require("./gulpfile.custom.js")(gulp, {
        chmod: chmod,
        less: less,
        cssmin: cssmin,
        csscomb: csscomb,
        autoprefixer: autoprefixer,
        concat: concat,
        header: header,
        uglify: uglify,
        rename: rename,
        change: change,
        sourcemaps: sourcemaps,
        prettify: prettify,
        buildBundle: buildBundle,
        zui: zui,
        pkg: pkg,
        del: del,
        mkdirp: mkdirp,
        runSequence: runSequence,
        startWatchSrc: startWatchSrc
    });
}
