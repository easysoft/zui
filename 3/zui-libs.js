export default [
    {
        "name": "@zui/ajax-form",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "files": [
            "./src/**/*"
        ],
        "keywords": [
            "js",
            "zui:component"
        ],
        "dependencies": {
            "@zui/browser-helpers": "workspace:^0.0.1"
        },
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*",
            "@zui/form": "workspace:0.0.1",
            "@zui/button": "workspace:0.0.1"
        },
        "zui": {
            "type": "js-ui",
            "displayName": "ajaxForm",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ],
                "js": [
                    "component"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/ajax-form",
            "workspace": true,
            "sourceType": "build-in",
            "name": "ajax-form",
            "order": null,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/ajax-form/package.json"
        }
    },
    {
        "name": "@zui/alert",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/icons": "workspace:^0.0.1",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "control",
            "displayName": "消息框",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/alert",
            "workspace": true,
            "sourceType": "build-in",
            "name": "alert",
            "order": 200000001,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/alert/package.json"
        }
    },
    {
        "name": "@zui/avatar",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "dependencies": {},
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "control",
            "displayName": "头像",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/avatar",
            "workspace": true,
            "sourceType": "build-in",
            "name": "avatar",
            "order": 200000002,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/avatar/package.json"
        }
    },
    {
        "name": "@zui/icons",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:control"
        ],
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/browser-helpers": "workspace:^0.0.1",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "control",
            "displayName": "图标",
            "contributes": {
                "css": [
                    "class",
                    "var",
                    "fonts"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/icons",
            "workspace": true,
            "sourceType": "build-in",
            "name": "icons",
            "order": 200000015,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/icons/package.json"
        }
    },
    {
        "name": "@zui/input",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:control"
        ],
        "dependencies": {},
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*",
            "@zui/form": "workspace:0.0.1",
            "@zui/icons": "workspace:0.0.1"
        },
        "zui": {
            "type": "control",
            "displayName": "输入框",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/input",
            "workspace": true,
            "sourceType": "build-in",
            "name": "input",
            "order": 200000016,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/input/package.json"
        }
    },
    {
        "name": "@zui/avatar-group",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:control"
        ],
        "dependencies": {
            "@zui/avatar": "workspace:0.0.1"
        },
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "component",
            "displayName": "头像组",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/avatar-group",
            "workspace": true,
            "sourceType": "build-in",
            "name": "avatar-group",
            "order": 400000003,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/avatar-group/package.json"
        }
    },
    {
        "name": "@zui/avatar-js",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "files": [
            "./src/**/*"
        ],
        "keywords": [
            "js",
            "zui:component"
        ],
        "dependencies": {
            "preact": "^10.10.0",
            "@zui/avatar": "workspace:*",
            "@zui/browser-helpers": "workspace:^0.0.1"
        },
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "components",
            "displayName": "头像生成器",
            "contributes": {
                "js": [
                    "component"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/avatar-js",
            "workspace": true,
            "sourceType": "build-in",
            "name": "avatar-js",
            "order": null,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/avatar-js/package.json"
        }
    },
    {
        "name": "@zui/base",
        "version": "0.0.1",
        "description": "ZUI basic settings",
        "keywords": [
            "css",
            "zui:css-base"
        ],
        "main": "src/main.ts",
        "files": [
            "./src/**/*"
        ],
        "zui": {
            "type": "css-base",
            "displayName": "CSS 基础",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/base",
            "workspace": true,
            "sourceType": "build-in",
            "name": "base",
            "order": 100000005,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/base/package.json"
        }
    },
    {
        "name": "@zui/breadcrumb",
        "version": "0.0.1",
        "description": "ZUI breadcrumb",
        "keywords": [
            "css",
            "components"
        ],
        "main": "src/main.ts",
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "files": [],
        "zui": {
            "type": "control",
            "displayName": "面包屑",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/breadcrumb",
            "workspace": true,
            "sourceType": "build-in",
            "name": "breadcrumb",
            "order": 200000006,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/breadcrumb/package.json"
        }
    },
    {
        "name": "@zui/label",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:control"
        ],
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/button": "workspace:^0.0.1",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "control",
            "displayName": "标签",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/label",
            "workspace": true,
            "sourceType": "build-in",
            "name": "label",
            "order": 200000018,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/label/package.json"
        }
    },
    {
        "name": "@zui/browser-helpers",
        "version": "0.0.1",
        "description": "ZUI helpers",
        "type": "module",
        "main": "src/main.ts",
        "module": "src/main.ts",
        "browser": "src/main-browser.ts",
        "files": [
            "./src/**/*"
        ],
        "zui": {
            "type": "js-helpers",
            "displayName": "浏览器辅助方法",
            "contributes": {
                "js": [
                    "method"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/browser-helpers",
            "workspace": true,
            "sourceType": "build-in",
            "name": "browser-helpers",
            "moduleName": "browser",
            "order": 300000007,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/browser-helpers/package.json"
        }
    },
    {
        "name": "@zui/btn-group",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:control"
        ],
        "dependencies": {
            "@zui/button": "workspace:^0.0.1"
        },
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/dropdown": "workspace:^0.0.1",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "component",
            "displayName": "按钮组",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/btn-group",
            "workspace": true,
            "sourceType": "build-in",
            "name": "btn-group",
            "order": 400000008,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/btn-group/package.json"
        }
    },
    {
        "name": "@zui/button",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:control"
        ],
        "files": [
            "./src/**/*"
        ],
        "dependencies": {},
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "按钮",
            "displayName": "按钮",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/button",
            "workspace": true,
            "sourceType": "build-in",
            "name": "button",
            "order": null,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/button/package.json"
        }
    },
    {
        "name": "@zui/checkbox",
        "version": "0.0.1",
        "description": "ZUI checkbox",
        "keywords": [
            "css",
            "components"
        ],
        "main": "src/main.ts",
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*",
            "@zui/form": "workspace:*"
        },
        "files": [],
        "zui": {
            "type": "control",
            "displayName": "复选框和单选框",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/checkbox",
            "workspace": true,
            "sourceType": "build-in",
            "name": "checkbox",
            "order": 200000010,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/checkbox/package.json"
        }
    },
    {
        "name": "@zui/dropdown",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:control"
        ],
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/button": "workspace:0.0.1",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "js-ui",
            "displayName": "下拉菜单",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ],
                "js": [
                    "component"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/dropdown",
            "workspace": true,
            "sourceType": "build-in",
            "name": "dropdown",
            "order": null,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/dropdown/package.json"
        }
    },
    {
        "name": "@zui/dtable",
        "version": "0.0.1",
        "description": "ZUI datatable",
        "keywords": [
            "js",
            "cs",
            "zui:component"
        ],
        "main": "src/main.ts",
        "module": "src/main.ts",
        "browser": "src/main.ts",
        "dependencies": {
            "@zui/browser-helpers": "workspace:^0.0.1",
            "@zui/helpers": "workspace:^0.0.1",
            "@zui/scrollbar": "workspace:^0.0.1",
            "nanoid": "^4.0.0",
            "preact": "^10.10.0"
        },
        "exports": {
            ".": "./src/main.ts",
            "./react": "./src/main-react.ts",
            "./plugins/": "./src/plugins/",
            "./jquery": "./src/main-jquery.ts"
        },
        "files": [
            "./src/**/*"
        ],
        "devDependencies": {
            "@faker-js/faker": "^7.4.0",
            "@zui/label": "workspace:^0.0.1",
            "@zui/avatar": "workspace:^0.0.1",
            "jquery": "^3.6.0",
            "@types/jquery": "^3.5.14"
        },
        "zui": {
            "type": "js-ui",
            "displayName": "数据表格",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ],
                "js": [
                    "component"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/dtable",
            "workspace": true,
            "sourceType": "build-in",
            "name": "dtable",
            "order": null,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/dtable/package.json"
        }
    },
    {
        "name": "@zui/progress",
        "version": "0.0.1",
        "description": "ZUI progress",
        "keywords": [
            "css",
            "zui:css-progress"
        ],
        "module": "src/main.ts",
        "files": [
            "./src/**/*"
        ],
        "zui": {
            "type": "control",
            "displayName": "进度条",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/progress",
            "workspace": true,
            "sourceType": "build-in",
            "name": "progress",
            "order": 200000024,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/progress/package.json"
        }
    },
    {
        "name": "@zui/progress-circle",
        "version": "0.0.1",
        "description": "ZUI progress-circle",
        "keywords": [
            "js",
            "zui:js-progress-circle"
        ],
        "module": "src/main.ts",
        "files": [
            "./src/**/*"
        ],
        "zui": {
            "type": "control",
            "displayName": "环形进度条",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/progress-circle",
            "workspace": true,
            "sourceType": "build-in",
            "name": "progress-circle",
            "order": 200000025,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/progress-circle/package.json"
        }
    },
    {
        "name": "@zui/scrollbar",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "js",
            "zui:component"
        ],
        "files": [
            "./src/**/*"
        ],
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "dependencies": {
            "preact": "^10.10.0",
            "@zui/browser-helpers": "workspace:^0.0.1"
        },
        "zui": {
            "type": "control",
            "displayName": "滚动条",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ],
                "js": [
                    "component"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/scrollbar",
            "workspace": true,
            "sourceType": "build-in",
            "name": "scrollbar",
            "order": 200000026,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/scrollbar/package.json"
        }
    },
    {
        "name": "@zui/store",
        "version": "0.0.1",
        "description": "ZUI localstorage helper",
        "keywords": [
            "js",
            "zui:js-lib"
        ],
        "browser": "src/main.ts",
        "dependencies": {
            "nanoid": "^4.0.0"
        },
        "files": [
            "./src/**/*"
        ],
        "zui": {
            "type": "js-helpers",
            "displayName": "本地存储",
            "contributes": {
                "js": [
                    "module"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/store",
            "workspace": true,
            "sourceType": "build-in",
            "name": "store",
            "order": 300000027,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/store/package.json"
        }
    },
    {
        "name": "@zui/form",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css"
        ],
        "dependencies": {
            "@zui/checkbox": "workspace:^0.0.1"
        },
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "component",
            "displayName": "表单",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/form",
            "workspace": true,
            "sourceType": "build-in",
            "name": "form",
            "order": 400000013,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/form/package.json"
        }
    },
    {
        "name": "@zui/input-group",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:control"
        ],
        "dependencies": {
            "@zui/form": "workspace:^0.0.1"
        },
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/button": "workspace:^0.0.1",
            "@zui/dropdown": "workspace:^0.0.1",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "component",
            "displayName": "输入组",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/input-group",
            "workspace": true,
            "sourceType": "build-in",
            "name": "input-group",
            "order": 400000017,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/input-group/package.json"
        }
    },
    {
        "name": "@zui/modal",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:control"
        ],
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/button": "workspace:0.0.1",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "component",
            "displayName": "模态框",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ],
                "js": [
                    "component"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/modal",
            "workspace": true,
            "sourceType": "build-in",
            "name": "modal",
            "order": 400000019,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/modal/package.json"
        }
    },
    {
        "name": "@zui/nav",
        "version": "0.0.1",
        "description": "ZUI nav",
        "keywords": [
            "css",
            "components"
        ],
        "main": "src/main.ts",
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "files": [
            "./src/**/*"
        ],
        "zui": {
            "type": "component",
            "displayName": "导航",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/nav",
            "workspace": true,
            "sourceType": "build-in",
            "name": "nav",
            "order": 400000020,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/nav/package.json"
        }
    },
    {
        "name": "@zui/pager",
        "version": "0.0.1",
        "description": "ZUI pager",
        "keywords": [
            "css",
            "components"
        ],
        "main": "src/main.ts",
        "dependencies": {
            "@zui/btn-group": "workspace:^0.0.1"
        },
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*",
            "@zui/form": "workspace:0.0.1",
            "@zui/dropdown": "workspace:0.0.1",
            "@zui/icons": "workspace:0.0.1"
        },
        "files": [
            "./src/**/*"
        ],
        "zui": {
            "type": "component",
            "displayName": "分页",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/pager",
            "workspace": true,
            "sourceType": "build-in",
            "name": "pager",
            "order": 400000022,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/pager/package.json"
        }
    },
    {
        "name": "@zui/table",
        "version": "0.0.1",
        "description": "ZUI table",
        "keywords": [
            "css",
            "js",
            "components"
        ],
        "main": "src/main.ts",
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "files": [
            "./src/**/*"
        ],
        "zui": {
            "type": "component",
            "displayName": "表格",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/table",
            "workspace": true,
            "sourceType": "build-in",
            "name": "table",
            "order": 400000028,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/table/package.json"
        }
    },
    {
        "name": "@zui/utilities",
        "version": "0.0.1",
        "description": "ZUI css utilities",
        "keywords": [
            "css",
            "zui:css-utilities"
        ],
        "main": "src/main.ts",
        "devDependencies": {
            "@zui/base": "workspace:*"
        },
        "files": [
            "./src/**/*"
        ],
        "zui": {
            "type": "css-utilities",
            "displayName": "CSS 工具类",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/utilities",
            "workspace": true,
            "sourceType": "build-in",
            "name": "utilities",
            "order": 500000029,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/utilities/package.json"
        }
    },
    {
        "name": "@zui/helpers",
        "version": "0.0.1",
        "description": "ZUI helpers",
        "keywords": [
            "js",
            "zui:js-helpers"
        ],
        "main": "src/main.ts",
        "module": "src/main.ts",
        "browser": "src/main-browser.ts",
        "files": [
            "./src/**/*"
        ],
        "zui": {
            "type": "js-lib",
            "displayName": "JS 辅助方法",
            "contributes": {
                "js": [
                    "class",
                    "var",
                    "method"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/helpers",
            "workspace": true,
            "sourceType": "build-in",
            "name": "helpers",
            "order": 600000014,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/helpers/package.json"
        }
    },
    {
        "name": "@zui/nav-tabs",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:control"
        ],
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/nav": "workspace:^0.0.1",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "js-ui",
            "displayName": "标签页",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ],
                "js": [
                    "component"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/nav-tabs",
            "workspace": true,
            "sourceType": "build-in",
            "name": "nav-tabs",
            "order": null,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/nav-tabs/package.json"
        }
    },
    {
        "name": "@zui/panel",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:control"
        ],
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/table": "workspace:^0.0.1",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "component",
            "displayName": "面板",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "docs": {
                "sidebar": "lib",
                "section": "components"
            },
            "path": "/home/runner/work/zui/zui/lib/panel",
            "workspace": true,
            "sourceType": "build-in",
            "name": "panel",
            "order": 400000023,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/panel/package.json"
        }
    }
];