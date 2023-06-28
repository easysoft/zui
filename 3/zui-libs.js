export default [
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
            "path": "/home/runner/work/zui/zui/lib/base",
            "workspace": true,
            "sourceType": "build-in",
            "name": "base",
            "order": 1010000000,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/base/package.json"
        }
    },
    {
        "name": "@zui/action-menu",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browserslist": "",
        "files": [
            "./src/**/*"
        ],
        "exports": {
            ".": "./src/main.ts",
            "./react": "./src/main-react.ts"
        },
        "devDependencies": {
            "@zui/avatar": "workspace:^0.0.1",
            "@zui/base": "workspace:*",
            "@zui/icons": "workspace:^0.0.1",
            "zui-dev": "workspace:^0.0.1"
        },
        "dependencies": {
            "@zui/css-icons": "workspace:^0.0.1",
            "@zui/core": "workspace:^0.0.1"
        },
        "zui": {
            "type": "control",
            "displayName": "操作菜单",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/action-menu",
            "workspace": true,
            "sourceType": "build-in",
            "name": "action-menu",
            "order": 2010000001,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/action-menu/package.json"
        }
    },
    {
        "name": "@zui/alert",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "files": [
            "./src/**/*"
        ],
        "dependencies": {
            "@zui/core": "workspace:*",
            "@zui/toolbar": "workspace:*",
            "@zui/button": "workspace:*",
            "@zui/css-icons": "workspace:*"
        },
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
            "path": "/home/runner/work/zui/zui/lib/alert",
            "workspace": true,
            "sourceType": "build-in",
            "name": "alert",
            "order": 2010000002,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/alert/package.json"
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
            "path": "/home/runner/work/zui/zui/lib/breadcrumb",
            "workspace": true,
            "sourceType": "build-in",
            "name": "breadcrumb",
            "order": 2010000003,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/breadcrumb/package.json"
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
        "exports": {
            ".": "./src/main.ts",
            "./css": "./src/main-css.ts",
            "./react": "./src/main-react.ts"
        },
        "devDependencies": {
            "@zui/avatar": "workspace:^0.0.1",
            "@zui/base": "workspace:*",
            "@zui/icons": "workspace:^0.0.1",
            "@zui/utilities": "workspace:*",
            "zui-dev": "workspace:^0.0.1"
        },
        "dependencies": {
            "@zui/core": "workspace:^0.0.1",
            "@zui/css-icons": "workspace:^0.0.1"
        },
        "zui": {
            "type": "control",
            "displayName": "按钮",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/button",
            "workspace": true,
            "sourceType": "build-in",
            "name": "button",
            "order": 2010000004,
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
            "@zui/utilities": "workspace:*"
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
            "path": "/home/runner/work/zui/zui/lib/checkbox",
            "workspace": true,
            "sourceType": "build-in",
            "name": "checkbox",
            "order": 2010000005,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/checkbox/package.json"
        }
    },
    {
        "name": "@zui/form",
        "version": "0.0.1",
        "main": "src/main.ts",
        "dependencies": {
            "@zui/input-group": "workspace:*",
            "@zui/checkbox": "workspace:*",
            "@zui/form-control": "workspace:*"
        },
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/button": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "control",
            "displayName": "表单",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/form",
            "workspace": true,
            "sourceType": "build-in",
            "name": "form",
            "order": 2010000006,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/form/package.json"
        }
    },
    {
        "name": "@zui/form-control",
        "version": "0.0.1",
        "main": "src/main.ts",
        "dependencies": {},
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "control",
            "displayName": "表单控件",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/form-control",
            "workspace": true,
            "sourceType": "build-in",
            "name": "form-control",
            "order": 2010000007,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/form-control/package.json"
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
            "zui-dev": "workspace:*",
            "@zui/base": "workspace:*",
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
            "path": "/home/runner/work/zui/zui/lib/icons",
            "workspace": true,
            "sourceType": "build-in",
            "name": "icons",
            "order": 2010000008,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/icons/package.json"
        }
    },
    {
        "name": "@zui/input-control",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:control"
        ],
        "dependencies": {
            "@zui/form-control": "workspace:0.0.1"
        },
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/icons": "workspace:0.0.1",
            "@zui/utilities": "workspace:*"
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
            "path": "/home/runner/work/zui/zui/lib/input-control",
            "workspace": true,
            "sourceType": "build-in",
            "name": "input-control",
            "order": 2010000009,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/input-control/package.json"
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
            "path": "/home/runner/work/zui/zui/lib/label",
            "workspace": true,
            "sourceType": "build-in",
            "name": "label",
            "order": 2010000010,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/label/package.json"
        }
    },
    {
        "name": "@zui/menu",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:control"
        ],
        "files": [
            "./src/**/*"
        ],
        "exports": {
            ".": "./src/main.ts",
            "./css": "./src/main-css.ts",
            "./react": "./src/main-react.ts"
        },
        "devDependencies": {
            "@zui/avatar": "workspace:^0.0.1",
            "@zui/base": "workspace:*",
            "@zui/icons": "workspace:^0.0.1",
            "zui-dev": "workspace:^0.0.1"
        },
        "dependencies": {
            "@zui/core": "workspace:^0.0.1",
            "@zui/css-icons": "workspace:^0.0.1",
            "@zui/action-menu": "workspace:^0.0.1"
        },
        "zui": {
            "type": "control",
            "displayName": "菜单",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/menu",
            "workspace": true,
            "sourceType": "build-in",
            "name": "menu",
            "order": 2010000011,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/menu/package.json"
        }
    },
    {
        "name": "@zui/messager",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:control"
        ],
        "files": [
            "./src/**/*"
        ],
        "exports": {
            ".": "./src/main.ts"
        },
        "dependencies": {
            "@zui/css-icons": "workspace:^0.0.1",
            "@zui/alert": "workspace:^0.0.1",
            "@zui/core": "workspace:^0.0.1"
        },
        "devDependencies": {
            "zui-dev": "workspace:*",
            "@zui/base": "workspace:*",
            "@zui/icons": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "control",
            "displayName": "漂浮消息",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/messager",
            "workspace": true,
            "sourceType": "build-in",
            "name": "messager",
            "order": 2010000012,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/messager/package.json"
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
            "path": "/home/runner/work/zui/zui/lib/progress",
            "workspace": true,
            "sourceType": "build-in",
            "name": "progress",
            "order": 2010000013,
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
        "exports": {
            ".": "./src/main.ts"
        },
        "dependencies": {
            "@zui/core": "workspace:*"
        },
        "zui": {
            "type": "control",
            "displayName": "环形进度条",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/progress-circle",
            "workspace": true,
            "sourceType": "build-in",
            "name": "progress-circle",
            "wip": true,
            "order": 2010000014,
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
        "exports": {
            ".": "./src/main.ts",
            "./css": "./src/main-css.ts",
            "./react": "./src/main-react.ts"
        },
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "dependencies": {
            "@zui/core": "workspace:^0.0.1"
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
            "path": "/home/runner/work/zui/zui/lib/scrollbar",
            "workspace": true,
            "sourceType": "build-in",
            "name": "scrollbar",
            "order": 2010000015,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/scrollbar/package.json"
        }
    },
    {
        "name": "@zui/switch",
        "version": "0.0.1",
        "description": "ZUI switch",
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
        "exports": {
            ".": "./src/main.ts",
            "./css": "./src/main-css.ts"
        },
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*",
            "zui-dev": "workspace:^0.0.1"
        },
        "dependencies": {
            "@zui/core": "workspace:^0.0.1",
            "@zui/css-icons": "workspace:^0.0.1"
        },
        "zui": {
            "type": "control",
            "displayName": "开关",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/switch",
            "workspace": true,
            "sourceType": "build-in",
            "name": "switch",
            "order": 2010000016,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/switch/package.json"
        }
    },
    {
        "name": "@zui/core",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "files": [
            "./src/**/*"
        ],
        "zui": {
            "type": "js-helpers",
            "displayName": "JS 核心模块",
            "contributes": {
                "js": [
                    "method",
                    "class"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/core",
            "workspace": true,
            "sourceType": "build-in",
            "name": "core",
            "order": 3010000017,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/core/package.json"
        }
    },
    {
        "name": "@zui/event-bus",
        "version": "0.0.1",
        "description": "ZUI event bus for browser",
        "type": "module",
        "main": "src/main.ts",
        "module": "src/main.ts",
        "files": [
            "./src/**/*"
        ],
        "zui": {
            "type": "js-helpers",
            "displayName": "Event Bus",
            "contributes": {
                "js": [
                    "class"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/event-bus",
            "workspace": true,
            "sourceType": "build-in",
            "name": "event-bus",
            "order": 3010000018,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/event-bus/package.json"
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
        "main": "src/main.ts",
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
            "path": "/home/runner/work/zui/zui/lib/store",
            "workspace": true,
            "sourceType": "build-in",
            "name": "store",
            "order": 3010000019,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/store/package.json"
        }
    },
    {
        "name": "@zui/avatar",
        "version": "0.0.1",
        "description": "ZUI avatar",
        "main": "src/main.ts",
        "browserslist": "",
        "dependencies": {
            "@zui/core": "workspace:*",
            "@zui/helpers": "workspace:*"
        },
        "devDependencies": {
            "zui-dev": "workspace:*",
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "exports": {
            ".": "./src/main.ts"
        },
        "zui": {
            "type": "component",
            "displayName": "头像",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/avatar",
            "workspace": true,
            "sourceType": "build-in",
            "name": "avatar",
            "order": 4010000020,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/avatar/package.json"
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
            "path": "/home/runner/work/zui/zui/lib/avatar-group",
            "workspace": true,
            "sourceType": "build-in",
            "name": "avatar-group",
            "order": 4010000021,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/avatar-group/package.json"
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
        "files": [
            "./src/**/*"
        ],
        "exports": {
            ".": "./src/main.ts",
            "./react": "./src/main-react.ts"
        },
        "dependencies": {
            "@zui/button": "workspace:^0.0.1"
        },
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/icons": "workspace:*",
            "@zui/dropdown": "workspace:^0.0.1",
            "@zui/utilities": "workspace:*",
            "@zui/core": "workspace:^0.0.1"
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
            "path": "/home/runner/work/zui/zui/lib/btn-group",
            "workspace": true,
            "sourceType": "build-in",
            "name": "btn-group",
            "order": 4010000022,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/btn-group/package.json"
        }
    },
    {
        "name": "@zui/color-picker",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:control"
        ],
        "files": [
            "./src/**/*"
        ],
        "dependencies": {
            "@zui/base": "workspace:*",
            "@zui/button": "workspace:*",
            "@zui/core": "workspace:^0.0.1",
            "@zui/css-icons": "workspace:^0.0.1",
            "@zui/pick": "workspace:*"
        },
        "devDependencies": {
            "zui-dev": "workspace:*",
            "@zui/button": "workspace:0.0.1",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "component",
            "displayName": "颜色选择器",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/color-picker",
            "workspace": true,
            "sourceType": "build-in",
            "name": "color-picker",
            "order": 4010000023,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/color-picker/package.json"
        }
    },
    {
        "name": "@zui/datepicker",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:component"
        ],
        "files": [
            "./src/**/*"
        ],
        "exports": {
            ".": "./src/main.ts"
        },
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/form": "workspace:0.0.1",
            "@zui/input-control": "workspace:0.0.1",
            "@zui/utilities": "workspace:*",
            "zui-dev": "workspace:*"
        },
        "dependencies": {
            "@floating-ui/core": "^1.1.0",
            "@floating-ui/dom": "^1.1.0",
            "@zui/core": "workspace:*",
            "@zui/css-icons": "workspace:^0.0.1",
            "@zui/icons": "workspace:^0.0.1"
        },
        "zui": {
            "type": "component",
            "displayName": "日期选择",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/datepicker",
            "workspace": true,
            "sourceType": "build-in",
            "name": "datepicker",
            "wip": true,
            "order": 4010000024,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/datepicker/package.json"
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
            "@zui/form-control": "workspace:*"
        },
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/button": "workspace:^0.0.1",
            "@zui/icons": "workspace:^0.0.1",
            "@zui/dropdown": "workspace:^0.0.1",
            "@zui/checkbox": "workspace:^0.0.1",
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
            "path": "/home/runner/work/zui/zui/lib/input-group",
            "workspace": true,
            "sourceType": "build-in",
            "name": "input-group",
            "order": 4010000025,
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
        "files": [
            "./src/**/*"
        ],
        "exports": {
            ".": "./src/main.ts"
        },
        "dependencies": {
            "@zui/button": "workspace:^0.0.1",
            "@zui/core": "workspace:^0.0.1",
            "@zui/css-icons": "workspace:^0.0.1",
            "@zui/base": "workspace:*",
            "@zui/toolbar": "workspace:*"
        },
        "devDependencies": {
            "zui-dev": "workspace:*",
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
            "path": "/home/runner/work/zui/zui/lib/modal",
            "workspace": true,
            "sourceType": "build-in",
            "name": "modal",
            "order": 4010000026,
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
            "@zui/avatar": "workspace:^0.0.1",
            "@zui/base": "workspace:*",
            "@zui/icons": "workspace:^0.0.1",
            "@zui/button": "workspace:^0.0.1",
            "@zui/btn-group": "workspace:^0.0.1",
            "@zui/dropdown": "workspace:^0.0.1",
            "zui-dev": "workspace:^0.0.1"
        },
        "dependencies": {
            "@zui/core": "workspace:^0.0.1",
            "@zui/css-icons": "workspace:^0.0.1",
            "@zui/action-menu": "workspace:^0.0.1"
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
            "path": "/home/runner/work/zui/zui/lib/nav",
            "workspace": true,
            "sourceType": "build-in",
            "name": "nav",
            "order": 4010000027,
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
            "@zui/button": "workspace:^0.0.1",
            "@zui/btn-group": "workspace:^0.0.1",
            "@zui/action-menu": "workspace:^0.0.1",
            "@zui/toolbar": "workspace:^0.0.1",
            "@zui/helpers": "workspace:^0.0.1",
            "@zui/core": "workspace:^0.0.1"
        },
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*",
            "@zui/form": "workspace:0.0.1",
            "@zui/dropdown": "workspace:0.0.1",
            "@zui/icons": "workspace:0.0.1",
            "zui-dev": "workspace:^0.0.1"
        },
        "files": [
            "./src/**/*"
        ],
        "exports": {
            ".": "./src/main.ts",
            "./css": "./src/main-css.ts",
            "./react": "./src/main-react.ts"
        },
        "zui": {
            "type": "component",
            "displayName": "分页",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/pager",
            "workspace": true,
            "sourceType": "build-in",
            "name": "pager",
            "order": 4010000028,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/pager/package.json"
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
            "path": "/home/runner/work/zui/zui/lib/panel",
            "workspace": true,
            "sourceType": "build-in",
            "name": "panel",
            "order": 4010000029,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/panel/package.json"
        }
    },
    {
        "name": "@zui/pick",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:control"
        ],
        "files": [
            "./src/**/*"
        ],
        "dependencies": {
            "@zui/action-menu": "workspace:*",
            "@zui/base": "workspace:*",
            "@zui/button": "workspace:*",
            "@zui/core": "workspace:^0.0.1",
            "@zui/css-icons": "workspace:^0.0.1",
            "@zui/checkbox": "workspace:*",
            "@zui/form-control": "workspace:*",
            "@zui/menu": "workspace:*"
        },
        "devDependencies": {
            "zui-dev": "workspace:*",
            "@zui/button": "workspace:0.0.1",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "component",
            "displayName": "选择器",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/pick",
            "workspace": true,
            "sourceType": "build-in",
            "name": "pick",
            "order": 4010000030,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/pick/package.json"
        }
    },
    {
        "name": "@zui/picker",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:control"
        ],
        "files": [
            "./src/**/*"
        ],
        "dependencies": {
            "@zui/action-menu": "workspace:*",
            "@zui/base": "workspace:*",
            "@zui/button": "workspace:*",
            "@zui/core": "workspace:^0.0.1",
            "@zui/css-icons": "workspace:^0.0.1",
            "@zui/checkbox": "workspace:*",
            "@zui/form-control": "workspace:*",
            "@zui/menu": "workspace:*",
            "@zui/pick": "workspace:*"
        },
        "devDependencies": {
            "zui-dev": "workspace:*",
            "@zui/button": "workspace:0.0.1",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "component",
            "displayName": "下拉选择器",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/picker",
            "workspace": true,
            "sourceType": "build-in",
            "name": "picker",
            "order": 4010000031,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/picker/package.json"
        }
    },
    {
        "name": "@zui/popovers",
        "version": "0.0.1",
        "description": "ZUI Toolbar",
        "keywords": [
            "css",
            "components"
        ],
        "main": "src/main.ts",
        "devDependencies": {
            "zui-dev": "workspace:^0.0.1"
        },
        "dependencies": {
            "@zui/core": "workspace:^0.0.1"
        },
        "files": [
            "./src/**/*"
        ],
        "exports": {
            ".": "./src/main.ts"
        },
        "zui": {
            "type": "component",
            "displayName": "下拉面板",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/popovers",
            "workspace": true,
            "sourceType": "build-in",
            "name": "popovers",
            "order": 4010000032,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/popovers/package.json"
        }
    },
    {
        "name": "@zui/search-box",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:control"
        ],
        "files": [
            "./src/**/*"
        ],
        "dependencies": {
            "@zui/base": "workspace:*",
            "@zui/button": "workspace:*",
            "@zui/core": "workspace:^0.0.1",
            "@zui/css-icons": "workspace:^0.0.1",
            "@zui/input-control": "workspace:*"
        },
        "devDependencies": {
            "zui-dev": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "component",
            "displayName": "搜索框",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/search-box",
            "workspace": true,
            "sourceType": "build-in",
            "name": "search-box",
            "order": 4010000033,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/search-box/package.json"
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
            "path": "/home/runner/work/zui/zui/lib/table",
            "workspace": true,
            "sourceType": "build-in",
            "name": "table",
            "order": 4010000034,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/table/package.json"
        }
    },
    {
        "name": "@zui/timepicker",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:component"
        ],
        "files": [
            "./src/**/*"
        ],
        "exports": {
            ".": "./src/main.ts"
        },
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/form": "workspace:0.0.1",
            "@zui/icons": "workspace:^0.0.1",
            "@zui/input-control": "workspace:0.0.1",
            "@zui/utilities": "workspace:*",
            "zui-dev": "workspace:*"
        },
        "dependencies": {
            "@floating-ui/core": "^1.1.0",
            "@floating-ui/dom": "^1.1.0",
            "@zui/core": "workspace:*",
            "@zui/css-icons": "workspace:^0.0.1"
        },
        "zui": {
            "type": "component",
            "displayName": "时间选择器",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/timepicker",
            "workspace": true,
            "sourceType": "build-in",
            "name": "timepicker",
            "wip": true,
            "order": 4010000035,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/timepicker/package.json"
        }
    },
    {
        "name": "@zui/toolbar",
        "version": "0.0.1",
        "description": "ZUI Toolbar",
        "keywords": [
            "css",
            "components"
        ],
        "main": "src/main.ts",
        "devDependencies": {
            "@zui/avatar": "workspace:^0.0.1",
            "@zui/base": "workspace:*",
            "@zui/icons": "workspace:^0.0.1",
            "zui-dev": "workspace:^0.0.1"
        },
        "dependencies": {
            "@zui/button": "workspace:^0.0.1",
            "@zui/btn-group": "workspace:^0.0.1",
            "@zui/dropdown": "workspace:^0.0.1",
            "@zui/core": "workspace:^0.0.1",
            "@zui/css-icons": "workspace:^0.0.1",
            "@zui/action-menu": "workspace:^0.0.1"
        },
        "files": [
            "./src/**/*"
        ],
        "exports": {
            ".": "./src/main.ts",
            "./react": "./src/main-react.ts"
        },
        "zui": {
            "type": "component",
            "displayName": "工具栏",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/toolbar",
            "workspace": true,
            "sourceType": "build-in",
            "name": "toolbar",
            "order": 4010000036,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/toolbar/package.json"
        }
    },
    {
        "name": "@zui/tooltip",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:component"
        ],
        "files": [
            "./src/**/*"
        ],
        "exports": {
            ".": "./src/main.ts"
        },
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/utilities": "workspace:*",
            "zui-dev": "workspace:*"
        },
        "dependencies": {
            "@floating-ui/core": "^1.1.0",
            "@floating-ui/dom": "^1.1.0",
            "@zui/core": "workspace:*",
            "@zui/button": "workspace:0.0.1",
            "@zui/css-icons": "workspace:^0.0.1"
        },
        "zui": {
            "type": "component",
            "displayName": "提示消息",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/tooltip",
            "workspace": true,
            "sourceType": "build-in",
            "name": "tooltip",
            "order": 4010000037,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/tooltip/package.json"
        }
    },
    {
        "name": "@zui/tree",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:control"
        ],
        "files": [
            "./src/**/*"
        ],
        "dependencies": {
            "@zui/action-menu": "workspace:*",
            "@zui/base": "workspace:*",
            "@zui/button": "workspace:*",
            "@zui/core": "workspace:^0.0.1",
            "@zui/css-icons": "workspace:^0.0.1",
            "@zui/checkbox": "workspace:*",
            "@zui/toolbar": "workspace:*",
            "@zui/menu": "workspace:*"
        },
        "devDependencies": {
            "zui-dev": "workspace:*",
            "@zui/button": "workspace:0.0.1",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "component",
            "displayName": "树形菜单",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/tree",
            "workspace": true,
            "sourceType": "build-in",
            "name": "tree",
            "order": 4010000038,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/tree/package.json"
        }
    },
    {
        "name": "@zui/upload",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "keywords": [
            "css",
            "zui:control"
        ],
        "dependencies": {
            "@zui/button": "workspace:^0.0.1",
            "@zui/icons": "workspace:0.0.1",
            "@zui/helpers": "workspace:^0.0.1",
            "@zui/input-group": "workspace:^0.0.1",
            "@zui/core": "workspace:^0.0.1"
        },
        "devDependencies": {
            "zui-dev": "workspace:^0.0.1"
        },
        "zui": {
            "type": "component",
            "displayName": "上传文件",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/upload",
            "workspace": true,
            "sourceType": "build-in",
            "name": "upload",
            "order": 4010000039,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/upload/package.json"
        }
    },
    {
        "name": "@zui/virtual-grid",
        "version": "0.0.1",
        "main": "src/main.ts",
        "files": [
            "./src/**/*"
        ],
        "dependencies": {
            "@zui/core": "workspace:^0.0.1",
            "@zui/css-icons": "workspace:^0.0.1",
            "@zui/base": "workspace:*"
        },
        "devDependencies": {
            "zui-dev": "workspace:*",
            "@zui/button": "workspace:0.0.1",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "component",
            "displayName": "虚拟渲染网格",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/virtual-grid",
            "workspace": true,
            "sourceType": "build-in",
            "name": "virtual-grid",
            "wip": true,
            "order": 4010000040,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/virtual-grid/package.json"
        }
    },
    {
        "name": "@zui/contextmenu",
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
            "@zui/icons": "workspace:^0.0.1",
            "@zui/utilities": "workspace:*",
            "zui-dev": "workspace:^0.0.1"
        },
        "dependencies": {
            "@zui/core": "workspace:*",
            "@zui/menu": "workspace:*"
        },
        "zui": {
            "type": "js-ui",
            "displayName": "上下文菜单",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ],
                "js": [
                    "component"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/contextmenu",
            "workspace": true,
            "sourceType": "build-in",
            "name": "contextmenu",
            "order": 5010000041,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/contextmenu/package.json"
        }
    },
    {
        "name": "@zui/dashboard",
        "version": "0.0.1",
        "description": "ZUI dashboard",
        "keywords": [
            "js",
            "cs",
            "zui:component"
        ],
        "main": "src/main.ts",
        "module": "src/main.ts",
        "dependencies": {
            "@zui/core": "workspace:^0.0.1",
            "@zui/helpers": "workspace:^0.0.1",
            "@zui/store": "workspace:^0.0.1",
            "@zui/contextmenu": "workspace:^0.0.1",
            "@zui/css-icons": "workspace:^0.0.1",
            "@zui/toolbar": "workspace:^0.0.1"
        },
        "exports": {
            ".": "./src/main.ts"
        },
        "files": [
            "./src/**/*"
        ],
        "devDependencies": {
            "zui-dev": "workspace:^0.0.1"
        },
        "zui": {
            "type": "js-ui",
            "displayName": "仪表盘",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ],
                "js": [
                    "component"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/dashboard",
            "workspace": true,
            "sourceType": "build-in",
            "name": "dashboard",
            "order": 5010000042,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/dashboard/package.json"
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
        "files": [
            "./src/**/*"
        ],
        "exports": {
            ".": "./src/main.ts"
        },
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/icons": "workspace:*",
            "@zui/utilities": "workspace:*",
            "zui-dev": "workspace:*"
        },
        "dependencies": {
            "@zui/core": "workspace:*",
            "@zui/button": "workspace:0.0.1",
            "@zui/contextmenu": "workspace:*",
            "@zui/css-icons": "workspace:^0.0.1",
            "@zui/menu": "workspace:*"
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
            "path": "/home/runner/work/zui/zui/lib/dropdown",
            "workspace": true,
            "sourceType": "build-in",
            "name": "dropdown",
            "order": 5010000043,
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
            "@zui/core": "workspace:^0.0.1",
            "@zui/helpers": "workspace:^0.0.1",
            "@zui/scrollbar": "workspace:^0.0.1",
            "@zui/store": "workspace:^0.0.1",
            "@zui/contextmenu": "workspace:^0.0.1",
            "@zui/menu": "workspace:^0.0.1",
            "@zui/css-icons": "workspace:^0.0.1",
            "@zui/toolbar": "workspace:^0.0.1",
            "@zui/pager": "workspace:^0.0.1"
        },
        "exports": {
            ".": "./src/main.ts",
            "./react": "./src/main-react.ts",
            "./plugins/": "./src/plugins/"
        },
        "files": [
            "./src/**/*"
        ],
        "devDependencies": {
            "@zui/avatar": "workspace:^0.0.1",
            "@zui/label": "workspace:^0.0.1",
            "@zui/icons": "workspace:^0.0.1",
            "zui-dev": "workspace:^0.0.1"
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
            "path": "/home/runner/work/zui/zui/lib/dtable",
            "workspace": true,
            "sourceType": "build-in",
            "name": "dtable",
            "order": 5010000044,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/dtable/package.json"
        }
    },
    {
        "name": "@zui/tabs",
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
            "path": "/home/runner/work/zui/zui/lib/tabs",
            "workspace": true,
            "sourceType": "build-in",
            "name": "tabs",
            "order": 5010000045,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/tabs/package.json"
        }
    },
    {
        "name": "@zui/css-icons",
        "version": "0.0.1",
        "description": "ZUI css icons",
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
            "displayName": "CSS 图标",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/css-icons",
            "workspace": true,
            "sourceType": "build-in",
            "name": "css-icons",
            "order": 6010000046,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/css-icons/package.json"
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
            "@zui/base": "workspace:*",
            "@zui/core": "workspace:^0.0.1"
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
            "path": "/home/runner/work/zui/zui/lib/utilities",
            "workspace": true,
            "sourceType": "build-in",
            "name": "utilities",
            "order": 6010000047,
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
            "path": "/home/runner/work/zui/zui/lib/helpers",
            "workspace": true,
            "sourceType": "build-in",
            "name": "helpers",
            "order": 7010000048,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/helpers/package.json"
        }
    }
];