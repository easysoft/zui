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
                      includes: [name]
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

        lint = lint === 'lint';
        grunt.log.subhead('=== BUILD ' + name.toUpperCase() + ' (' + build.title + ') ===');

        var source = getBuildSource(build),
            sbanner =  banner + (build.bootstrapStatement ? statement : '');

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

    grunt.registerTask('dist', ['clean:dist', 'build:dist']);
    grunt.registerTask('doc', ['build:doc']);

    grunt.registerTask('w-dist', ['watch:basic', 'watch:dist']);
    grunt.registerTask('w-doc', ['watch:basic', 'watch:doc']);
};
