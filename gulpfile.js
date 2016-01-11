var extend = require('extend'),
    runSequence = require('run-sequence'),
    fs = require('fs'),
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
    lessPluginCleanCSS = require('less-plugin-clean-css'),
    mkdirp = require('mkdirp'),
    del = require('del'),
    format = require('string-format').extend(String.prototype),
    colors = require('colors'),
    gulp = require('gulp'),
    zui = require('./zui.json'),
    pkg = require('./package.json'),
    showFileDetail = true;

// Disable the 'possible EventEmitter memory leak detected' warning.
gulp.setMaxListeners(0);

// try load zui.custom.json and merge into zui.
try {
    var zuicustom = require('./zui.custom.json');
    if(zuicustom) extend(true, zui, zuicustom);
} catch(e) {}

var today = moment();
var typeSet = ['less', 'js', 'resource'],
    lib = zui.lib,
    builds = zui.builds,
    banner = ('/*!\n' +
        ' * {title} - v{version} - {date}\n' +
        ' * {homepage}\n' +
        ' * GitHub: {repo} \n' +
        ' * Copyright (c) {year} {author}; Licensed {license}\n' +
        ' */\n\n').format({
        title: pkg.title || pkg.name,
        version: pkg.version,
        date: today.format('YYYY-MM-DD'),
        homepage: pkg.homepage,
        repo: pkg.repository.url,
        year: today.format('YYYY'),
        author: pkg.author,
        license: pkg.license
    }),
    statement = '/* Some code copy from Bootstrap v3.0.0 by @fat and @mdo. (Copyright 2013 Twitter, Inc. Licensed under http://www.apache.org/licenses/)*/\n\n';

function tryStatSync(path) {
    try {
        return fs.statSync(path);
    } catch(e) {
        return false;
    }
}

function isFileExist(path) {
    var stats = tryStatSync(path);
    return stats && stats.isFile();
}

function getItemList(list, items, ignoreDpds) {
    items = items || [];

    if(Array.isArray(list)) {
        list.forEach(function(name) {
            getItemList(name, items, ignoreDpds);
        });
    } else {
        var item = lib[list];
        if(item && items.indexOf(list) < 0) {
            if(!ignoreDpds && item.dpds) {
                getItemList(item.dpds, items, ignoreDpds);
            }
            if(item.src) items.push(list);
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

    if(!Array.isArray(list)) list = [list];

    if(build.basicDpds) list = getItemList(build.basicDpds, list);
    list = getItemList(build.includes, list, build.ignoreDpds);

    list.forEach(function(item) {
        var libItem = lib[item];
        if(libItem && libItem.src) {
            typeSet.forEach(function(type) {
                if(libItem.src[type]) {
                    libItem.src[type].forEach(function(file) {
                        if(sources[type].indexOf(file) < 0) {
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
    if(idx > 0) {
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
    if(build.subdirectories) {
        path += '/' + type + '/';
    }
    if(path.indexOf('.') !== 0) {
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
        .pipe(change(function(css, done) {
            css = css.replace(/\/\*\*/g, '').replace(/\*\*\//g, '');
            css = css.replace(/\.color-(\w+) \{\n  color: (#?\w+);\n\}/g, "        $1: '$2',");
            css = css.replace(',\n    };', '\n    };');
            css = css.replace('\n\n', '\n');
            done(null, css);
        }))
        .pipe(header(bannerContent))
        .pipe(gulp.dest(destPath))
        .on('end', function() {
            console.log('     js > '.yellow.bold + (destPath + build.filename + '.js').italic.underline);
        });
}

function buildBundle(name, callback, type) {
    name = name || 'all';
    var build = builds[name];
    var taskList = [],
        depTaskList = [];

    // clean files
    if(!type && name === 'dist') {
        del.sync('./dist/**/*');
    } else if(!type && name === 'doc') {
        del.sync([
            './docs/js/**/*',
            './docs/css/**/*',
            './docs/fonts/**/*'
        ]);
    }

    if(!build) {
        if(name === 'all') {
            console.log('           ========== BUILD ALL =========='.blue.bold);
            var buildList = Object.keys(builds);
            buildList.forEach(function(nm) {
                build = builds[nm];
                if(build && !build.bundles) {
                    var taskName = 'build:' + nm;
                    gulp.task(taskName, function(cb) {
                        buildBundle(nm, cb, type)
                    });
                    taskList.push(taskName);
                }
            });
            if(taskList.length) runSequence(taskList, function() {
                console.log(('        √  Build ' + 'ALL'.bold + ' success! ').green);
                callback && callback();
            });
            return;
        } else {
            var buildLib = lib[name];
            if(buildLib) {
                build = {
                    title: buildLib.name,
                    dest: 'dist/lib/' + name + '/',
                    filename: name,
                    includes: [name],
                    thirdpart: buildLib.thirdpart
                };
            } else {
                console.log(('           Cannot found the build config: ' + name).red);
                return false;
            }
        }
    } else if(build.bundles) {
        console.log(('           === BUILD BUNDLES ' + name.toUpperCase() + ' [' + build.bundles.join(', ') + '] ===').blue.bold);
        var bundlesTaskList = [];
        build.bundles.forEach(function(bundleName) {
            var bundleBuild = builds[bundleName];
            if(bundleBuild) {
                gulp.task('build:' + bundleName, function(cb) {
                    buildBundle(bundleName, cb, type);
                });

                bundlesTaskList.push('build:' + bundleName);
            }
        });

        gulp.task('build:' + name + ':bundles', function(cb) {
            runSequence(bundlesTaskList, function() {
                console.log(('         √ Build BUNDLES ' + name.toUpperCase() + ' [' + build.bundles.join(', ') + '] success! ').green);
                cb();
            });
        });

        depTaskList.push('build:' + name + ':bundles');
    }

    if(build.includes && build.includes.indexOf('colorset.js') > -1) {
        gulp.task('build:colorset.less2js', function(cb) {
            buildBundle('colorset.less2js', cb, 'less');
        });

        depTaskList.push('build:colorset.less2js');
    }

    console.log(('           --- build ' + name + ' ---').cyan.bold);

    var source = getBuildSource(build),
        bannerContent = build.thirdpart ?
        '' : banner + (build.bootstrapStatement ? statement : '');

    if(source.js && source.js.length && (!type || type === 'js')) {
        console.log(('         + Ready to process ' + source.js.length + ' javascript files.').bold);
        source.js.forEach(function(f, idx) {
            if(f.indexOf('~/') === 0) {
                source.js[idx] = f = 'src/js/' + f.substr(2);
            }
            if(showFileDetail) console.log(('         | ' + f).italic);
        });

        //ar taskName = 'build:' + name + ':js';
        gulp.task('build:' + name + ':js', function() {
            var destPath = getBuildPath(build, 'js');
            return gulp.src(source.js)
                .pipe(concat(build.filename + '.js'))
                .pipe(header(bannerContent))
                .pipe(gulp.dest(destPath))
                .on('end', function() {
                    console.log('      js > '.yellow.bold + (destPath + build.filename + '.js').italic.underline);
                })
                //.pipe(sourcemaps.init())
                .pipe(uglify())
                .pipe(rename({
                    suffix: '.min'
                }))
                .pipe(header(bannerContent))
                //.pipe(sourcemaps.write())
                .pipe(gulp.dest(destPath))
                .on('end', function() {
                    console.log('      js > '.yellow.bold + (destPath + build.filename + '.min.js').italic.underline);
                });
        });
        taskList.push('build:' + name + ':js');
    }

    if(source.less && source.less.length && (!type || type === 'less')) {
        var lessFileContent = '// \n// ' + build.title + '\n// Build config: ' + name + '\n//\n// This file generated by ZUI builder automatically at ' + today.toString() + '.\n//\n\n';
        console.log(('         + Ready to process ' + source.less.length + ' less files.').bold);
        source.less.forEach(function(f, idx) {
            if(f.indexOf('~/') === 0) {
                source.less[idx] = f = 'src/less/' + f.substr(2);
            }

            if(isFileExist(f)) {
                lessFileContent += '@import "';
                lessFileContent += '../../' + f;
                lessFileContent += '";\n';
                if(showFileDetail) console.log(('         | ' + f).italic);
            } else {
                lessFileContent += '// @import "';
                lessFileContent += '../../' + f;
                lessFileContent += '" // FILE NOT FOUND;\n';
                if(showFileDetail) console.log(('         - ' + f + ' [NOT FOUND]').red.italic);
            }
        });

        gulp.task('build:' + name + ':less', function() {
            var buildSourceFilePath = './build/less/' + build.filename + '.less';
            var destPath = getBuildPath(build, 'css');

            mkdirp.sync('./build/less/');
            fs.writeFileSync(buildSourceFilePath, lessFileContent);

            if(name === 'colorset.less2js') {
                return gulpBuildColorsetJS(build, buildSourceFilePath, bannerContent);
            }

            return gulp.src(buildSourceFilePath)
                .pipe(less())
                .pipe(autoprefixer({
                    browsers: ['> 1%'],
                    cascade: true
                }))
                .pipe(csscomb())
                .pipe(header(bannerContent))
                .pipe(gulp.dest(destPath))
                .on('end', function() {
                    console.log('     css > '.yellow.bold + (destPath + build.filename + '.css').italic.underline);
                })
                //.pipe(sourcemaps.init())
                .pipe(cssmin())
                .pipe(rename({
                    suffix: '.min'
                }))
                .pipe(header(bannerContent))
                //.pipe(sourcemaps.write())
                .pipe(gulp.dest(destPath))
                .on('end', function() {
                    console.log('     css > '.yellow.bold + (destPath + build.filename + '.min.css').italic.underline);
                });
        });
        taskList.push('build:' + name + ':less');
    }

    if(source.resource && source.resource.length && (!type || type === 'resource')) {
        console.log(('         + Ready to process ' + source.resource.length + ' resource files.').bold);
        var destPath = getBuildPath(build, '');
        source.resource.forEach(function(f, idx) {
            if(f.indexOf('~/') === 0) {
                source.resource[idx] = f = 'src//' + f.substr(2);
            }
            if(showFileDetail) console.log(('         | [' + idx + '] ' + f).italic);
            gulp.task('build:' + name + ':resource:' + idx, function() {
                var sourceConfig = getSourceConfig(f);
                return gulp.src(sourceConfig.src, {
                        base: sourceConfig.base
                    })
                    .pipe(gulp.dest(destPath))
                    .on('end', function() {
                        console.log('resource > '.yellow.bold + (destPath + sourceConfig.file).italic.underline);
                    });
            });
            taskList.push('build:' + name + ':resource:' + idx);
        });
    }

    if(taskList.length || depTaskList.length) {
        var completeCallback = function() {
            console.log(('         √ Build ' + name.bold + ' success! ').green);
            callback && callback();
        };

        if(taskList.length) {
            if(depTaskList.length) {
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

gulp.task('build', function(callback) {
    var name = process.argv[3] || 'dist';
    if(name && name[0] === '-') name = name.substr(1);
    var type = process.argv.length > 4 ? process.argv[4] : false;
    if(type && type[0] === '-') type = type.substr(1);
    console.log('  BEGIN >> ' + (' Build ' + name.bold + ' ').inverse);
    buildBundle(name, function() {
        console.log('    END >> ' + (' Build ' + name.bold + ' completed. ').green.inverse);
    }, type);
});

['dist', 'doc'].forEach(function(name) {
    gulp.task(name, function(callback) {
        console.log('  BEGIN >> ' + (' Build ' + name.bold + ' ').inverse);
        buildBundle(name, callback);
    });

    gulp.task('watch:' + name, function() {
        gulp.watch(["./src/less/**/*"], function(event) {
            buildBundle(name, function() {
                console.log('         √ '.green + (' WATCH ' + name.bold + ' COMPLETED. ').yellow.inverse);
            }, 'less');
        });

        gulp.watch(["./src/js/**/*"], function(event) {
            if(event.path && event.path.lastIndexOf('src/js/colorset.js') > -1) return;
            buildBundle(name, function() {
                console.log('         √ '.green + (' WATCH ' + name.bold + ' COMPLETED. ').yellow.inverse);
            }, 'js');
        });

        gulp.watch(["./src/fonts/**/*"], function(event) {
            buildBundle(name, function() {
                console.log('         √ '.green + (' WATCH ' + name.bold + ' COMPLETED. ').yellow.inverse);
            }, 'resource');
        });
    });
});

gulp.task('prettify:js', function() {
    return gulp.src('./src/js/**/*')
        .pipe(prettify({
            logSuccess: true,
            config: './.jsbeautifyrc',
            mode: 'VERIFY_AND_WRITE'
        }))
        .pipe(gulp.dest('./src/js/'));
});

gulp.task('prettify', ['prettify:js']);

gulp.task('default', function() {
    buildBundle('all');
});

