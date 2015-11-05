/**
 * ZUI's Gruntfile
 * http://zui.sexy
 * Copyright 2014 cnezsoft.com
 * Licensed under MIT (https://github.com/easysoft/zui/blob/master/LICENSE)
 */
module.exports = function(grunt)
{
    var banner        = '/*!\n' +
        ' * <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
        ' * GitHub: <%= pkg.repository.url %> \n' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;' +
        ' Licensed <%= pkg.license %>\n' +
        ' */\n\n',
        statement     = '/* Some code copy from Bootstrap v3.0.0 by @fat and @mdo. (Copyright 2013 Twitter, Inc. Licensed under http://www.apache.org/licenses/)*/\n\n',
        pkg           = grunt.file.readJSON('package.json');

    var lib = pkg.lib,
        typeSet = ['less', 'js', 'resource'],
        builds = pkg.builds;

    var getItemList = function(list, items, ignoreDpds)
    {
        items = items || [];
        var thisFn = arguments.callee;

        if(Array.isArray(list))
        {
            list.forEach(function(name)
            {
                thisFn(name, items, ignoreDpds);
            });
        }
        else
        {
            var item = lib[list];
            if(item && items.indexOf(list) < 0)
            {
                if(!ignoreDpds && item.dpds)
                {
                    thisFn(item.dpds, items, ignoreDpds);
                }
                if(item.src) items.push(list);
            }
        }

        return items;
    };

    var getBuildSource = function(build)
    {
        var list = [];

        var sources = {less: [], js: [], resource: []};

        if(!Array.isArray(list)) list = [list];

        if(build.basicDpds) list = getItemList(build.basicDpds, list);
        list = getItemList(build.includes, list, build.ignoreDpds);

        list.forEach(function(item)
        {
            var libItem = lib[item];
            if(libItem && libItem.src)
            {
                typeSet.forEach(function(type)
                {
                    if(libItem.src[type])
                    {
                        libItem.src[type].forEach(function(file)
                        {
                            if(sources[type].indexOf(file) < 0)
                            {
                                sources[type].push(file);
                            }
                        });
                    }
                });
            }
        });

        return sources;
    };

    var flatternCopyOptions = function(src, dest)
    {
        var idx = src.lastIndexOf('//');
        if(idx > 0)
        {
            return {expand: true, cwd: src.substr(0, idx), src: src.substr(idx + 2), dest: dest};
        }
        idx = src.lastIndexOf('/');
        return {expand: true, cwd: src.substr(0, idx), src: src.substr(idx + 1), dest: dest};
    };

    var getBuildPath = function(build, type)
    {
        var path = build.dest;
        if(build.subdirectories)
        {
            path += '/' + type + '/';
        }
        return path.replace(/\/\//g, '/');
    };

    var getBuildDestFilename = function(build, type, suffix)
    {
        var file = getBuildPath(build, type);
        file += '/' + build.filename + '.' + (suffix || type);
        return file.replace(/\/\//g, '/');
    };

    var buildColorsetJS = function(build, name) {
        var source = getBuildSource(build);
        if(source.less) {
            var destPath = getBuildDestFilename(build, 'js');
            console.log(destPath);
            grunt.config('less.' + name,
            {
                src: source.less,
                dest: destPath
            });

            grunt.config('usebanner.' + name,
            {
                options: {banner: banner},
                files: {src: destPath}
            });

            grunt.registerTask('tidy:' + name, 'tidy colorset js code', function(){
                var css = grunt.file.read(destPath);
                css = css.replace(/\/\*\*/g, '').replace(/\*\*\//g, '');
                css = css.replace(/\.color-(\w+) \{\n  color: (#?\w+);\n\}/g, "        $1: '$2',");
                css = css.replace(',\n    };', '\n    };');
                css = css.replace('\n\n', '\n');
                grunt.file.write(destPath, css);
            });

            grunt.task.run(['less:' + name, 'tidy:' + name, 'usebanner:' + name]);
        }
    };

    // project config
    grunt.initConfig(
    {
        pkg: pkg,
        clean:
        {
          dist: 'dist'
        },
        jshint:
        {
            options: {expr: true},
            basic: ['Gruntfile.js']
        },
        autoprefixer:
        {
            options:
            {
                browsers: [
                    'Android 2.3',
                    'Android >= 4',
                    'Chrome >= 20',
                    'Firefox >= 24', // Firefox 24 is the latest ESR
                    'Explorer >= 8',
                    'iOS >= 6',
                    'Opera >= 12',
                    'Safari >= 6'
                ]
            }
        },
        csscomb:
        {
            options:
            {
                config: 'src/less/.csscomb.json'
            }
        },
        usebanner:
        {
            options:
            {
                position: 'top',
                banner: banner
            }
        },
        csslint:
        {
            options:
            {
                csslintrc: 'src/less/.csslintrc'
            }
        },
        cssmin:
        {
            options:
            {
                compatibility: 'ie8',
                keepSpecialComments: '*',
                noAdvanced: true
            }
        },
        watch:
        {
            dist:
            {
                files: ['src/**'],
                tasks: ['dist']
            },
            doc:
            {
                files: 'src/**',
                tasks: ['doc']
            },
            basic:
            {
                files: 'Gruntfile.js',
                tasks: ['jshint:basic']
            },
            docless:
            {
                files: 'src/less/doc.less',
                tasks: ['build:docless']
            }
        }
    });

    // These plugins provide necessary tasks.
    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

    grunt.registerTask('build','ZUI builder.', function(name, lint)
    {
        // grunt.task.run(['jshint:basic']);

        var build = builds[name];

        if(!build)
        {
            if(name === 'all')
            {
                grunt.log.ok('=== BUILD ALL ===');
                var bd;
                for(var nm in builds)
                {
                    bd = builds[nm];
                    if(!bd.bundles) grunt.task.run(['build:' + nm + ':' + lint]);
                }
                return;
            }
            else
            {
                var buildLib = lib[name];
                if(buildLib)
                {
                    build =
                    {
                      title: buildLib.name,
                      dest: 'dist/lib/' + name + '/',
                      filename: name,
                      includes: [name],
                      thirdpart: buildLib.buildLib
                    };
                }
                else
                {
                    grunt.log.error('Build config not found: ' + name + '.');
                    return false;
                }
            }
        }
        else if(build.bundles)
        {
            grunt.log.ok('=== BUILD BUNDLES ' + name.toUpperCase() + ' (' + build.title + ') ===');

            build.bundles.forEach(function(bundle)
            {
                grunt.task.run(['build:' + bundle + ':' + lint]);
            });
        }

        if(build.includes && build.includes.indexOf('colorset.js') > -1) {
            grunt.task.run(['build:colorset.less2js']);
        }

        name = name.replace(/\./g, '_');
        lint = lint === 'lint';
        grunt.log.subhead('=== BUILD ' + name.toUpperCase() + ' (' + build.title + ') ===');

        if(name.toLowerCase() === 'colorset_less2js') {
            buildColorsetJS(build, name);
            return;
        }

        var source = getBuildSource(build),
            sbanner = build.thirdpart ? '' : banner + (build.bootstrapStatement ? statement : '');

        if(source.js && source.js.length)
        {
            grunt.log.subhead('--- BUILD ' + source.js.length + ' JAVASCRIPT FILES ---');
            source.js.forEach(function(file)
            {
                grunt.log.writeln(' * ' + file);
            });

            grunt.config('jshint.' + name, source.js);

            grunt.config('concat.' + name,
            {
                options:
                {
                    banner: sbanner,
                    stripBanners: false
                },
                src: source.js,
                dest: getBuildDestFilename(build, 'js')
            });

            grunt.config('uglify.' + name,
            {
                options:
                {
                    banner: sbanner,
                    stripBanners: false
                },
                src: '<%= concat.' + name + '.dest %>',
                dest: getBuildDestFilename(build, 'js', 'min.js')
            });

            if(lint) grunt.task.run(['jshint:' + name]);
            grunt.task.run(['concat:' + name, 'uglify:' + name]);
        }

        if(source.less && source.less.length)
        {
            /* Write less file */
            var lessFileContent = '// \n// ' + build.title + '\n// ' + name + ' less build\n//\n// This file generated by ZUI builder automatically at ' + (new Date()).toString() + '.\n//\n\n';
            var lessFilePath = 'src/less/build/' + build.filename + '.less';
            var cssFilePath = getBuildDestFilename(build, 'css');
            var cssminFilePath = getBuildDestFilename(build, 'css', 'min.css');

            grunt.log.subhead('--- BUILD ' + source.less.length + ' LESS FILES ---');
            source.less.forEach(function(file)
            {
                grunt.log.writeln(' * ' + file);
                lessFileContent += '@import "';
                lessFileContent += (file.indexOf('src/less/') === 0) ? ('../' + file.substr(9)) : ('../../../' + file);
                lessFileContent += '";\n';
            });
            grunt.file.write(lessFilePath, lessFileContent);

            grunt.config('less.' + name,
            {
                options:
                {
                    banner: sbanner,
                    stripBanners: false
                },
                src: lessFilePath,
                dest: cssFilePath
            });

            grunt.config('autoprefixer.' + name,
            {
                options:
                {
                  map: true
                },
                src: cssFilePath
            });

            grunt.config('usebanner.' + name,
            {
                options: {banner: sbanner},
                files: {src: cssFilePath}
            });

            grunt.config('csscomb.' + name,
            {
                files:
                [
                    {src: [cssFilePath], dest: cssFilePath}
                ]
            });

            grunt.config('csslint.' + name, [cssFilePath]);

            grunt.config('cssmin.' + name,
            {
                src: cssFilePath,
                dest: cssminFilePath
            });

            grunt.task.run(['less:' + name, 'autoprefixer:' + name, 'usebanner:' + name, 'csscomb:' + name]);

            if(lint) grunt.task.run(['csslint:' + name]);

            grunt.task.run(['cssmin:' + name]);
        }

        if(source.resource && source.resource.length)
        {
            var resouceFiles = [];
            var destPath = getBuildPath(build, '');
            grunt.log.subhead('--- BUILD ' + source.resource.length + ' RESOURCE resouceFiles ---');
            source.resource.forEach(function(file)
            {
                resouceFiles.push(flatternCopyOptions(file, destPath));
                grunt.log.writeln(' * ' + file);
            });

            grunt.config('copy.' + name,
            {
                files: resouceFiles
            });

            grunt.task.run(['copy:' + name]);
        }
    });

    grunt.registerTask('pinyin', '', function(text){
        var mergeString = function(strs, s) {
            var str = '';
            s = s || '';
            strs.forEach(function(strs2){
                strs2.forEach(function(str3){
                    str += str3 + s;
                });
            });
            return str;
        };
        var pinyin = require("pinyin");
        var toPinYin = function(text) {
            var py1 = mergeString(pinyin(text, {style: pinyin.STYLE_NORMAL}));
            if(py1 === '' || py1 === text) return '';
            return py1 + ' ' + mergeString(pinyin(text, {style: pinyin.STYLE_FIRST_LETTER}));
        };
        
        if(text) {
            grunt.log.writeln(text + '  >>>');
            grunt.log.writeln(toPinYin(text));
        } else {
            var docIndex = grunt.file.readJSON('docs/2/index.json');
            for(var chapterName in docIndex.chapters) {
                var chapter = docIndex.chapters[chapterName];
                chapter.filter = toPinYin(chapter.name).toLowerCase();
                for(var sectionName in chapter.sections) {
                    var section = chapter.sections[sectionName];
                    section.filter = toPinYin(section.name).toLowerCase();
                }
            }
            grunt.file.write('index.json', JSON.stringify(docIndex));
        }
    });

    grunt.registerTask('dist', ['clean:dist', 'build:dist']);
    grunt.registerTask('doc', ['build:doc']);

    grunt.registerTask('w-dist', ['watch:basic', 'watch:dist']);
    grunt.registerTask('w-doc', ['watch:basic', 'watch:doc']);
};
