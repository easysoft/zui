module.exports = function(grunt)
{

    var banner = '/*!\n' +
        ' * ====================================================\n' +
        ' * <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
        ' * GitHub: <%= pkg.repository.url %> \n' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>;' +
        ' Licensed <%= pkg.license %>\n' +
        ' * ====================================================\n' +
        ' */\n\n',
        statement = '/* Some code copy from Bootstrap v3.0.0 by @fat and @mdo. (Copyright 2013 Twitter, Inc. Licensed under http://www.apache.org/licenses/)*/\n\n',
        jqueryCheck = 'if (typeof jQuery === "undefined") { throw new Error("Bootstrap requires jQuery") }\n\n',
        srcPath = 'src/',
        srcJsPath = 'src/js/',
        distJsPath = 'dist/js/',
        distPath = 'dist/';

    // 项目配置
    grunt.initConfig(
    {
        pkg: grunt.file.readJSON('package.json'),

        clean:
        {
            dist: ['dist']
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
                banner: banner + statement,
                stripBanners: false
            },
            js:
            {
                options:
                {
                    banner: banner + statement + jqueryCheck
                },
                src:
                [
                    srcJsPath + "hotkeys.js",
                    srcJsPath + "unities.js",
                    srcJsPath + "transition.js",
                    srcJsPath + "alert.js",
                    srcJsPath + "button.js",
                    srcJsPath + "carousel.js",
                    srcJsPath + "collapse.js",
                    srcJsPath + "dropdown.js",
                    srcJsPath + "modal.js",
                    srcJsPath + "modal.trigger.js",
                    srcJsPath + "tooltip.js",
                    srcJsPath + "popover.js",
                    srcJsPath + "pager.js",
                    srcJsPath + "tab.js",
                    srcJsPath + "image.ready.js",
                    srcJsPath + "lightbox.js",
                    srcJsPath + "draggable.js",
                    srcJsPath + "droppable.js",
                    srcJsPath + "dashboard.js",
                    srcJsPath + "menu.js",
                    srcJsPath + "table.data.js",
                    srcJsPath + "bootbox.js",
                    srcJsPath + "messager.js",
                    srcJsPath + "string.js",
                    srcJsPath + "date.js",
                    srcJsPath + "cookie.js",
                    srcJsPath + "resize.js",
                    srcJsPath + "boards.js",
                    srcJsPath + "img-cutter.js",
                    srcJsPath + "auto-trigger.js"
                ],
                dest: distJsPath + '<%= pkg.name %>.js'
            },
            mindmap:
            {
                options:
                {
                    banner: banner
                },
                src: [srcPath + 'js/mindmap.js'],
                dest: distJsPath + '<%= pkg.name %>-mindmap.js'
            }
        },

        uglify:
        {
            options:
            {
                banner: banner + statement
            },
            js:
            {
                src:  ['<%= concat.js.dest %>'],
                dest: distJsPath + '<%= pkg.name %>.min.js'
            },
            mindmap:
            {
                options: {banner: banner},
                src:  ['<%= concat.mindmap.dest %>'],
                dest: distJsPath + '<%= pkg.name %>-mindmap.min.js'
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
                    'dist/css/<%= pkg.name %>-theme.min.css': distPath + 'css/<%= pkg.name %>-theme.css',
                    'dist/css/<%= pkg.name %>-mindmap.min.css': distPath + 'css/<%= pkg.name %>-mindmap.css'
                }
            }
        },

        csscomb:
        {
            sort:
            {
                options:
                {
                    config: srcPath + 'less/.csscomb.json'
                },
                files:
                {
                    'dist/css/<%= pkg.name %>.css': [distPath + 'css/<%= pkg.name %>.css'],
                    'dist/css/<%= pkg.name %>-theme.css': [distPath + 'css/<%= pkg.name %>-theme.css']
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
                        distPath + 'css/<%= pkg.name %>-theme.css',
                        distPath + 'css/<%= pkg.name %>-theme.min.css',
                        distPath + 'css/<%= pkg.name %>-mindmap.css',
                        distPath + 'css/<%= pkg.name %>-mindmap.min.css',
                    ]
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

    // JS distribution task
    grunt.registerTask('dist-js', ['concat', 'uglify']);
    grunt.registerTask('dist-css', ['less', 'csscomb', 'usebanner']);
    grunt.registerTask('dist-fonts', ['copy:fonts']);

    // The default task
    grunt.registerTask('default', ['clean', 'dist-js', 'dist-css', 'dist-fonts']);
}
