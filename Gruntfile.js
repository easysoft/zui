module.exports = function(grunt)
{

    var banner      = '/*!\n' +
        ' * <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
        ' * GitHub: <%= pkg.repository.url %> \n' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;' +
        ' Licensed <%= pkg.license %>\n' +
        ' */\n\n',
        statement   = '/* Some code copy from Bootstrap v3.0.0 by @fat and @mdo. (Copyright 2013 Twitter, Inc. Licensed under http://www.apache.org/licenses/)*/\n\n',
        jqueryCheck = 'if (typeof jQuery === "undefined") { throw new Error("ZUI requires jQuery") }\n\n',
        srcPath     = 'src/',
        distPath    = 'dist/',
        buildPath   = 'build/',
        concatSrcPath = function(a) {return 'src/js/' + a};

    // project config
    grunt.initConfig(
    {
        pkg: grunt.file.readJSON('package.json'),

        clean:
        {
            dist: ['dist'],
            build: ['build']
        },

        copy:
        {
            fonts:
            {
                expand: true,
                cwd: srcPath,
                src: 'fonts/*',
                dest: distPath
            }
        },

        concat:
        {
            options:
            {
                banner: banner,
                stripBanners: false
            },
            js:
            {
                options:
                {
                    banner: banner + statement + jqueryCheck
                },
                src: grunt.file.readJSON(srcPath + 'js/import.json').map(concatSrcPath),
                dest: distPath + 'js/<%= pkg.name %>.js'
            },
            lite:
            {
                options:
                {
                    banner: banner + statement + jqueryCheck
                },
                src: grunt.file.readJSON(srcPath + 'js/import.lite.json').map(concatSrcPath),
                dest: distPath + 'js/<%= pkg.name %>.lite.js'
            },
            mindmap:
            {
                src: [srcPath + 'js/mindmap.js'],
                dest: distPath + 'js/<%= pkg.name %>-mindmap.js'
            },
            assets:
            {
                files:
                {
                    'assets/chartjs/chart.line.js': srcPath + 'js/chart.line.js',
                    'assets/chosen/js/chosen.icons.js': srcPath + 'js/chosen.icons.js',
                    'assets/chosen/js/chosen.all.js': ['assets/chosen/js/chosen.jquery.js', 'assets/chosen/js/chosen.icons.js']
                }
            },
            zentao:
            {
                options:
                {
                    banner: banner + statement + jqueryCheck
                },
                src: grunt.file.readJSON(srcPath + 'apps/zentao/js/import.json').map(concatSrcPath),
                dest: buildPath + 'zentao/js/<%= pkg.name %>.js'
            },
            chanzhi:
            {
                options:
                {
                    banner: banner + statement + jqueryCheck
                },
                src: grunt.file.readJSON(srcPath + 'apps/chanzhi/js/import.json').map(concatSrcPath),
                dest: buildPath + 'chanzhi/js/<%= pkg.name %>.js'
            },
            ranzhi:
            {
                options:
                {
                    banner: banner + statement + jqueryCheck
                },
                src: grunt.file.readJSON(srcPath + 'apps/ranzhi/js/import.json').map(concatSrcPath),
                dest: buildPath + 'ranzhi/js/<%= pkg.name %>.js'
            }
        },

        uglify:
        {
            options:
            {
                banner: banner
            },
            js:
            {
                options: {banner: banner + statement},
                src:  ['<%= concat.js.dest %>'],
                dest: distPath + 'js/<%= pkg.name %>.min.js'
            },
            lite:
            {
                options: {banner: banner + statement},
                src:  ['<%= concat.lite.dest %>'],
                dest: distPath + 'js/<%= pkg.name %>.lite.min.js'
            },
            mindmap:
            {
                src:  ['<%= concat.mindmap.dest %>'],
                dest: distPath + 'js/<%= pkg.name %>-mindmap.min.js'
            },
            assets:
            {
                files:
                {
                    'assets/chartjs/chart.line.min.js': 'assets/chartjs/chart.line.js',
                    'assets/chosen/js/chosen.jquery.min.js': 'assets/chosen/js/chosen.jquery.js',
                    'assets/chosen/js/chosen.icons.min.js': 'assets/chosen/js/chosen.icons.js',
                    'assets/chosen/js/chosen.all.min.js': 'assets/chosen/js/chosen.all.js',
                    'assets/datetimepicker/js/datetimepicker.min.js': 'assets/datetimepicker/js/datetimepicker.js'
                }
            },
            zentao:
            {
                options: {banner: banner + statement},
                src:  ['<%= concat.zentao.dest %>'],
                dest: buildPath + 'zentao/js/<%= pkg.name %>.min.js'
            },
            chanzhi:
            {
                options: {banner: banner + statement},
                src:  ['<%= concat.chanzhi.dest %>'],
                dest: buildPath + 'chanzhi/js/<%= pkg.name %>.min.js'
            },
            ranzhi:
            {
                options: {banner: banner + statement},
                src:  ['<%= concat.ranzhi.dest %>'],
                dest: buildPath + 'ranzhi/js/<%= pkg.name %>.min.js'
            }
        },

        less:
        {
            zui:
            {
                options:
                {
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapURL: '<%= pkg.name %>.css.map',
                    sourceMapFilename: distPath + 'css/<%= pkg.name %>.css.map'
                },
                files:
                {
                    'dist/css/<%= pkg.name %>.css': srcPath + 'less/zui.less'
                }
            },
            lite:
            {
                options:
                {
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapURL: '<%= pkg.name %>.lite.css.map',
                    sourceMapFilename: distPath + 'css/<%= pkg.name %>.lite.css.map'
                },
                files:
                {
                    'dist/css/<%= pkg.name %>.lite.css': srcPath + 'less/zui.lite.less'
                }
            },
            doc:
            {
                options:
                {
                    strictMath: true,
                    cleancss: true,
                    report: 'min'
                },
                files:
                {
                    'docs/css/<%= pkg.name %>.min.css': srcPath + 'less/zui.docs.less'
                }
            },
            theme:
            {
                options:
                {
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapURL: '<%= pkg.name %>-theme.css.map',
                    sourceMapFilename: distPath + 'css/<%= pkg.name %>-theme.css.map'
                },
                files:
                {
                    'dist/css/<%= pkg.name %>-theme.css': srcPath + 'less/theme.less'
                }
            },
            min:
            {
                options:
                {
                    cleancss: true,
                    report: 'min'
                },
                files:
                {
                    'dist/css/<%= pkg.name %>.min.css': distPath + 'css/<%= pkg.name %>.css',
                    'dist/css/<%= pkg.name %>.lite.min.css': distPath + 'css/<%= pkg.name %>.lite.css',
                    'dist/css/<%= pkg.name %>-theme.min.css': distPath + 'css/<%= pkg.name %>-theme.css',
                }
            },
            mindmap:
            {
                options:
                {
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapURL: '<%= pkg.name %>-mindmap.css.map',
                    sourceMapFilename: distPath + 'css/<%= pkg.name %>-mindmap.css.map'
                },
                files:
                {
                    'dist/css/<%= pkg.name %>-mindmap.css': srcPath + 'less/mindmap.less'
                }
            },
            'mindmap-min':
            {
                options:
                {
                    cleancss: true,
                    report: 'min'
                },
                files:
                {
                    'dist/css/<%= pkg.name %>-mindmap.min.css': distPath + 'css/<%= pkg.name %>-mindmap.css'
                }
            },
            assets:
            {
                options:
                {
                    strictMath: true,
                    sourceMap: false
                },
                files:
                {
                    'assets/datetimepicker/css/datetimepicker.css': srcPath + 'less/datetimepicker.less',
                    'assets/kindeditor/themes/default/default.css': srcPath + 'less/kindeditor-theme.default.less',
                    'assets/chosen/css/chosen.css': srcPath + 'less/chosen.less'
                }
            },
            'assets-min':
            {
                options:
                {
                    cleancss: true,
                    report: 'min'
                },
                files:
                {
                    'assets/datetimepicker/css/datetimepicker.min.css': 'assets/datetimepicker/css/datetimepicker.css',
                    'assets/chosen/css/chosen.min.css': 'assets/chosen/css/chosen.css'
                }
            },
            zentao:
            {
                options:
                {
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapURL: '<%= pkg.name %>.css.map',
                    sourceMapFilename: buildPath + 'zentao/css/<%= pkg.name %>.css.map'
                },
                files:
                {
                    'build/zentao/css/<%= pkg.name %>.css': srcPath + 'apps/zentao/less/zui.less',
                    'build/zentao/css/chosen.css': srcPath + 'apps/zentao/less/chosen.less',
                    'build/zentao/css/kindeditor.css': srcPath + 'apps/zentao/less/kindeditor.less',
                    'build/zentao/css/datetimepicker.css': srcPath + 'apps/zentao/less/datetimepicker.less',
                    'build/zentao/css/theme.red.css': srcPath + 'apps/zentao/less/theme.red.less',
                    'build/zentao/css/theme.green.css': srcPath + 'apps/zentao/less/theme.green.less',
                    'build/zentao/css/theme.lightblue.css': srcPath + 'apps/zentao/less/theme.lightblue.less',
                    'build/zentao/css/theme.blackberry.css': srcPath + 'apps/zentao/less/theme.blackberry.less'
                }
            },
            'zentao-min':
            {
                options:
                {
                    cleancss: true,
                    report: 'min'
                },
                files:
                {
                    'build/zentao/css/<%= pkg.name %>.min.css': 'build/zentao/css/<%= pkg.name %>.css',
                    'build/zentao/css/chosen.min.css': 'build/zentao/css/chosen.css',
                    'build/zentao/css/kindeditor.min.css': 'build/zentao/css/kindeditor.css',
                    'build/zentao/css/datetimepicker.min.css': 'build/zentao/css/datetimepicker.css',
                    'build/zentao/css/theme.red.min.css': 'build/zentao/css/theme.red.css',
                    'build/zentao/css/theme.green.min.css': 'build/zentao/css/theme.green.css',
                    'build/zentao/css/theme.lightblue.min.css': 'build/zentao/css/theme.lightblue.css',
                    'build/zentao/css/theme.blackberry.min.css': 'build/zentao/css/theme.blackberry.css'
                }
            },
            chanzhi:
            {
                options:
                {
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapURL: '<%= pkg.name %>.css.map',
                    sourceMapFilename: buildPath + 'chanzhi/css/<%= pkg.name %>.css.map'
                },
                files:
                {
                    'build/chanzhi/css/<%= pkg.name %>.css': srcPath + 'apps/chanzhi/less/zui.less'
                }
            },
            'chanzhi-min':
            {
                options:
                {
                    cleancss: true,
                    report: 'min'
                },
                files:
                {
                    'build/chanzhi/css/<%= pkg.name %>.min.css': 'build/chanzhi/css/<%= pkg.name %>.css'
                }
            },
            ranzhi:
            {
                options:
                {
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapURL: '<%= pkg.name %>.css.map',
                    sourceMapFilename: buildPath + 'ranzhi/css/<%= pkg.name %>.css.map'
                },
                files:
                {
                    'build/ranzhi/css/<%= pkg.name %>.css': srcPath + 'apps/ranzhi/less/zui.less',
                    'build/ranzhi/css/theme.oa.css': srcPath + 'apps/ranzhi/less/theme.oa.less',
                    'build/ranzhi/css/theme.cash.css': srcPath + 'apps/ranzhi/less/theme.cash.less',
                    'build/ranzhi/css/theme.team.css': srcPath + 'apps/ranzhi/less/theme.team.less'
                }
            },
            'ranzhi-min':
            {
                options:
                {
                    cleancss: true,
                    report: 'min'
                },
                files:
                {
                    'build/ranzhi/css/<%= pkg.name %>.min.css': 'build/ranzhi/css/<%= pkg.name %>.css',
                    'build/ranzhi/css/theme.oa.min.css': 'build/ranzhi/css/theme.oa.css',
                    'build/ranzhi/css/theme.cash.min.css': 'build/ranzhi/css/theme.cash.css',
                    'build/ranzhi/css/theme.team.min.css': 'build/ranzhi/css/theme.team.css'
                }
            },
        },

        csscomb:
        {
            options:
            {
                config: srcPath + 'less/.csscomb.json'
            },
            'sort-dist':
            {
                files:
                {
                    'dist/css/<%= pkg.name %>.css': [distPath + 'css/<%= pkg.name %>.css'],
                    'dist/css/<%= pkg.name %>.lite.css': [distPath + 'css/<%= pkg.name %>.lite.css'],
                    'dist/css/<%= pkg.name %>-theme.css': [distPath + 'css/<%= pkg.name %>-theme.css']
                }
            },
            'sort-mindmap':
            {
                files:
                {
                    'dist/css/<%= pkg.name %>-mindmap.css': [distPath + 'css/<%= pkg.name %>-mindmap.css']
                }
            },
            'sort-zentao':
            {
                files:
                {
                    'build/zentao/css/<%= pkg.name %>.css': 'build/zentao/css/<%= pkg.name %>.css',
                    'build/zentao/css/theme.red.css': 'build/zentao/css/theme.red.css',
                    'build/zentao/css/theme.green.css': 'build/zentao/css/theme.green.css',
                    'build/zentao/css/theme.lightblue.css': 'build/zentao/css/theme.lightblue.css',
                    'build/zentao/css/theme.blackberry.css': 'build/zentao/css/theme.blackberry.css'
                }
            },
            'sort-chanzhi':
            {
                files:
                {
                    'build/chanzhi/css/<%= pkg.name %>.css': 'build/chanzhi/css/<%= pkg.name %>.css'
                }
            },
            'sort-ranzhi':
            {
                files:
                {
                    'build/ranzhi/css/<%= pkg.name %>.css': 'build/ranzhi/css/<%= pkg.name %>.css',
                    'build/ranzhi/css/theme.oa.css': 'build/ranzhi/css/theme.oa.css',
                    'build/ranzhi/css/theme.cash.css': 'build/ranzhi/css/theme.cash.css',
                    'build/ranzhi/css/theme.team.css': 'build/ranzhi/css/theme.team.css'
                }
            }
        },

        usebanner:
        {
            dist:
            {
                options:
                {
                    position: 'top',
                    banner: banner + statement
                },
                files:
                {
                    src:
                    [
                        distPath + 'css/<%= pkg.name %>.css',
                        distPath + 'css/<%= pkg.name %>.min.css',
                        distPath + 'css/<%= pkg.name %>.lite.css',
                        distPath + 'css/<%= pkg.name %>.lite.min.css',
                        distPath + 'css/<%= pkg.name %>-theme.css',
                        distPath + 'css/<%= pkg.name %>-theme.min.css',
                        distPath + 'css/<%= pkg.name %>-mindmap.css',
                        distPath + 'css/<%= pkg.name %>-mindmap.min.css',
                    ]
                }
            },
            zentao:
            {
                options:
                {
                    position: 'top',
                    banner: banner + statement
                },
                files:
                {
                    src:
                    [
                        'build/zentao/css/<%= pkg.name %>.css',
                        'build/zentao/css/<%= pkg.name %>.min.css',
                        'build/zentao/css/theme.red.css',
                        'build/zentao/css/theme.red.min.css',
                        'build/zentao/css/theme.green.css',
                        'build/zentao/css/theme.green.min.css',
                        'build/zentao/css/theme.lightblue.css',
                        'build/zentao/css/theme.lightblue.min.css',
                        'build/zentao/css/theme.blackberry.css',
                        'build/zentao/css/theme.blackberry.min.css'
                    ]
                }
            },
            chanzhi:
            {
                options:
                {
                    position: 'top',
                    banner: banner + statement
                },
                files:
                {
                    src:
                    [
                        'build/chanzhi/css/<%= pkg.name %>.css',
                        'build/chanzhi/css/<%= pkg.name %>.min.css'
                    ]
                }
            },
            ranzhi:
            {
                options:
                {
                    position: 'top',
                    banner: banner + statement
                },
                files:
                {
                    src:
                    [
                        'build/ranzhi/css/<%= pkg.name %>.css',
                        'build/ranzhi/css/<%= pkg.name %>.min.css',
                        'build/ranzhi/css/theme.oa.css',
                        'build/ranzhi/css/theme.oa.min.css',
                        'build/ranzhi/css/theme.cash.css',
                        'build/ranzhi/css/theme.cash.min.css',
                        'build/ranzhi/css/theme.team.css',
                        'build/ranzhi/css/theme.team.min.css'
                    ]
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

    // Distribution task
    grunt.registerTask('dist-js', ['concat:js', 'uglify:js', 'concat:lite', 'uglify:lite']);
    grunt.registerTask('dist-css', ['less:zui', 'less:lite', 'less:theme', 'csscomb:sort-dist', 'less:min', 'usebanner:dist']);
    grunt.registerTask('dist-fonts', ['copy:fonts']);
    grunt.registerTask('dist', ['clean:dist', 'dist-js', 'dist-css', 'dist-fonts']);

    // Documents task
    grunt.registerTask('doc', ['less:doc']);

    // Mindmap task
    grunt.registerTask('mindmap', ['concat:mindmap', 'uglify:mindmap', 'less:mindmap', 'csscomb:sort-mindmap', 'less:mindmap-min']);

    // assets componets task
    grunt.registerTask('assets', ['less:assets', 'less:assets-min', 'concat:assets', 'uglify:assets']);

    // Build Zentao,Chanzhi,Ranzhi task
    grunt.registerTask('zentao', ['concat:zentao', 'uglify:zentao', 'less:zentao', 'csscomb:sort-zentao', 'less:zentao-min', 'usebanner:zentao']);
    grunt.registerTask('chanzhi', ['concat:chanzhi', 'uglify:chanzhi', 'less:chanzhi', 'csscomb:sort-chanzhi', 'less:chanzhi-min', 'usebanner:chanzhi']);
    grunt.registerTask('ranzhi', ['concat:ranzhi', 'uglify:ranzhi', 'less:ranzhi', 'csscomb:sort-ranzhi', 'less:ranzhi-min', 'usebanner:ranzhi']);
    grunt.registerTask('build', ['clean:build', 'ranzhi', 'chanzhi', 'zentao']);

    // The default task
    grunt.registerTask('default', ['dist', 'assets']);
}
