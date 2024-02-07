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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/base/package.json",
            "order": 1000000003010000000
        }
    },
    {
        "name": "@zui/typography",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "browserslist": "",
        "files": [
            "./src/**/*"
        ],
        "dependencies": {},
        "devDependencies": {
            "@zui/base": "workspace:*",
            "@zui/icons": "workspace:^0.0.1",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "css-base",
            "displayName": "排版",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/typography",
            "workspace": true,
            "sourceType": "build-in",
            "name": "typography",
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/typography/package.json",
            "order": 1000000052010000000
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/alert/package.json",
            "order": 2000000000010000000
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/breadcrumb/package.json",
            "order": 2000000004010000000
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/button/package.json",
            "order": 2000000006010000000
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
        "dependencies": {
            "@zui/base": "workspace:*",
            "@zui/core": "workspace:^0.0.1"
        },
        "files": [],
        "zui": {
            "type": "control",
            "displayName": "选择和开关",
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/checkbox/package.json",
            "order": 2000000008010000000
        }
    },
    {
        "name": "@zui/common-list",
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
            "@zui/base": "workspace:*",
            "zui-dev": "workspace:^0.0.1"
        },
        "dependencies": {
            "@zui/core": "workspace:^0.0.1"
        },
        "zui": {
            "type": "control",
            "displayName": "通用列表",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/common-list",
            "workspace": true,
            "sourceType": "build-in",
            "name": "common-list",
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/common-list/package.json",
            "order": 2000000010010000000
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/form/package.json",
            "order": 2000000021010000000
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/form-control/package.json",
            "order": 2000000022010000000
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/icons/package.json",
            "order": 2000000024010000000
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/input-control/package.json",
            "order": 2000000025010000000
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/label/package.json",
            "order": 2000000028010000000
        }
    },
    {
        "name": "@zui/list",
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
            "@zui/base": "workspace:*",
            "@zui/icons": "workspace:^0.0.1",
            "zui-dev": "workspace:^0.0.1"
        },
        "dependencies": {
            "@zui/avatar": "workspace:^0.0.1",
            "@zui/button": "workspace:^0.0.1",
            "@zui/toolbar": "workspace:^0.0.1",
            "@zui/css-icons": "workspace:^0.0.1",
            "@zui/checkbox": "workspace:^0.0.1",
            "@zui/common-list": "workspace:^0.0.1",
            "@zui/store": "workspace:^0.0.1",
            "@zui/core": "workspace:^0.0.1"
        },
        "zui": {
            "type": "control",
            "displayName": "列表",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/list",
            "workspace": true,
            "sourceType": "build-in",
            "name": "list",
            "notReady": true,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/list/package.json",
            "order": 2000000029010000000
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
            "@zui/search-box": "workspace:^0.0.1",
            "@zui/css-icons": "workspace:^0.0.1",
            "@zui/common-list": "workspace:^0.0.1",
            "@zui/list": "workspace:^0.0.1"
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/menu/package.json",
            "order": 2000000030010000000
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/messager/package.json",
            "order": 2000000031010000000
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
        "dependencies": {
            "@zui/core": "workspace:*"
        },
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/progress/package.json",
            "order": 2000000039010000000
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
            "zui-dev": "workspace:*",
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/progress-circle/package.json",
            "order": 2000000040010000000
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/scrollbar/package.json",
            "order": 2000000041010000000
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/core/package.json",
            "order": 3000000012010000000
        }
    },
    {
        "name": "@zui/dnd",
        "version": "0.0.1",
        "description": "ZUI draggable and dropable plugins",
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
            "displayName": "拖放",
            "contributes": {
                "js": [
                    "module"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/dnd",
            "workspace": true,
            "sourceType": "build-in",
            "name": "dnd",
            "notReady": true,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/dnd/package.json",
            "order": 3000000016010000000
        },
        "dependencies": {
            "@zui/core": "workspace:^0.0.1"
        },
        "devDependencies": {
            "zui-dev": "workspace:^0.0.1"
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
            "notReady": false,
            "wip": true,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/event-bus/package.json",
            "order": 3000000019010000000
        }
    },
    {
        "name": "@zui/sortable",
        "version": "0.0.1",
        "description": "Sortable JS plugin from https://github.com/SortableJS/Sortable",
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
            "displayName": "Sortable JS",
            "contributes": {
                "js": [
                    "module"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/sortable",
            "workspace": true,
            "sourceType": "build-in",
            "name": "sortable",
            "notReady": true,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/sortable/package.json",
            "order": 3000000044010000000
        },
        "dependencies": {
            "@zui/core": "workspace:^0.0.1",
            "@zui/common-list": "workspace:^0.0.1",
            "@zui/list": "workspace:^0.0.1",
            "@zui/menu": "workspace:^0.0.1",
            "@zui/tree": "workspace:^0.0.1"
        },
        "devDependencies": {
            "sortablejs": "^1.15.0",
            "zui-dev": "workspace:^0.0.1",
            "@types/sortablejs": "^1.15.1"
        }
    },
    {
        "name": "@zui/split",
        "version": "0.0.1",
        "description": "split.js plugin from https://split.js.org/",
        "browser": "src/main.ts",
        "main": "src/main.ts",
        "files": [
            "./src/**/*"
        ],
        "zui": {
            "type": "js-helpers",
            "displayName": "Split.js",
            "contributes": {
                "js": [
                    "module"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/split",
            "workspace": true,
            "sourceType": "build-in",
            "name": "split",
            "notReady": true,
            "wip": true,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/split/package.json",
            "order": 3000000045010000000
        },
        "dependencies": {
            "@zui/core": "workspace:^0.0.1",
            "@zui/css-icons": "workspace:^0.0.1",
            "split.js": "^1.6.5"
        },
        "devDependencies": {
            "@types/sortablejs": "^1.15.1",
            "sortablejs": "^1.15.0",
            "zui-dev": "workspace:^0.0.1"
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/store/package.json",
            "order": 3000000046010000000
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/avatar/package.json",
            "order": 4000000001010000000
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/avatar-group/package.json",
            "order": 4000000002010000000
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
            "@zui/core": "workspace:^0.0.1",
            "@zui/button": "workspace:^0.0.1",
            "@zui/common-list": "workspace:^0.0.1"
        },
        "devDependencies": {
            "zui-dev": "workspace:*",
            "@zui/base": "workspace:*",
            "@zui/icons": "workspace:*",
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
            "path": "/home/runner/work/zui/zui/lib/btn-group",
            "workspace": true,
            "sourceType": "build-in",
            "name": "btn-group",
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/btn-group/package.json",
            "order": 4000000005010000000
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/color-picker/package.json",
            "order": 4000000009010000000
        }
    },
    {
        "name": "@zui/datetime-picker",
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
            "@zui/menu": "workspace:*",
            "@zui/nav": "workspace:*",
            "@zui/toolbar": "workspace:*",
            "@zui/base": "workspace:*",
            "@zui/button": "workspace:*",
            "@zui/core": "workspace:^0.0.1",
            "@zui/css-icons": "workspace:^0.0.1",
            "@zui/checkbox": "workspace:*",
            "@zui/form-control": "workspace:*",
            "@zui/input-control": "workspace:*",
            "@zui/helpers": "workspace:*",
            "@zui/pick": "workspace:*"
        },
        "devDependencies": {
            "zui-dev": "workspace:*",
            "@zui/button": "workspace:0.0.1",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "component",
            "displayName": "日期时间选择器",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/datetime-picker",
            "workspace": true,
            "sourceType": "build-in",
            "name": "datetime-picker",
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/datetime-picker/package.json",
            "order": 4000000015010000000
        }
    },
    {
        "name": "@zui/file-selector",
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
            "@zui/button": "workspace:^0.0.1",
            "@zui/icons": "workspace:0.0.1",
            "@zui/helpers": "workspace:^0.0.1",
            "@zui/modal": "workspace:^0.0.1",
            "@zui/core": "workspace:^0.0.1",
            "@zui/avatar": "workspace:^0.0.1",
            "@zui/form-control": "workspace:^0.0.1",
            "@zui/list": "workspace:^0.0.1"
        },
        "devDependencies": {
            "zui-dev": "workspace:*"
        },
        "zui": {
            "type": "component",
            "displayName": "文件选择器",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/file-selector",
            "workspace": true,
            "sourceType": "build-in",
            "name": "file-selector",
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/file-selector/package.json",
            "order": 4000000020010000000
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/input-group/package.json",
            "order": 4000000026010000000
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/modal/package.json",
            "order": 4000000032010000000
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
            "@zui/common-list": "workspace:^0.0.1",
            "@zui/list": "workspace:^0.0.1"
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/nav/package.json",
            "order": 4000000033010000000
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
            "@zui/list": "workspace:^0.0.1",
            "@zui/toolbar": "workspace:^0.0.1",
            "@zui/helpers": "workspace:^0.0.1",
            "@zui/common-list": "workspace:^0.0.1",
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/pager/package.json",
            "order": 4000000034010000000
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/panel/package.json",
            "order": 4000000035010000000
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/pick/package.json",
            "order": 4000000036010000000
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
            "@zui/base": "workspace:*",
            "@zui/button": "workspace:*",
            "@zui/core": "workspace:^0.0.1",
            "@zui/css-icons": "workspace:^0.0.1",
            "@zui/checkbox": "workspace:*",
            "@zui/form-control": "workspace:*",
            "@zui/menu": "workspace:*",
            "@zui/tree": "workspace:*",
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/picker/package.json",
            "order": 4000000037010000000
        }
    },
    {
        "name": "@zui/popover",
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
            "@zui/core": "workspace:^0.0.1",
            "@zui/css-icons": "workspace:^0.0.1"
        },
        "files": [
            "./src/**/*"
        ],
        "exports": {
            ".": "./src/main.ts"
        },
        "zui": {
            "type": "component",
            "displayName": "弹出面板",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/popover",
            "workspace": true,
            "sourceType": "build-in",
            "name": "popover",
            "notReady": true,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/popover/package.json",
            "order": 4000000038010000000
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/search-box/package.json",
            "order": 4000000042010000000
        }
    },
    {
        "name": "@zui/sidebar",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browserslist": "",
        "files": [
            "./src/**/*"
        ],
        "dependencies": {
            "@zui/base": "workspace:*",
            "@zui/core": "workspace:*",
            "@zui/store": "workspace:*",
            "@zui/split": "workspace:*",
            "@zui/dnd": "workspace:*"
        },
        "devDependencies": {
            "zui-dev": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "component",
            "displayName": "侧边栏",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/sidebar",
            "workspace": true,
            "sourceType": "build-in",
            "name": "sidebar",
            "notReady": true,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/sidebar/package.json",
            "order": 4000000043010000000
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/table/package.json",
            "order": 4000000047010000000
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
            "@zui/common-list": "workspace:^0.0.1",
            "@zui/btn-group": "workspace:^0.0.1",
            "@zui/core": "workspace:^0.0.1"
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/toolbar/package.json",
            "order": 4000000049010000000
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
            "@zui/core": "workspace:*",
            "@zui/button": "workspace:0.0.1",
            "@zui/css-icons": "workspace:^0.0.1",
            "@zui/popover": "workspace:*"
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/tooltip/package.json",
            "order": 4000000050010000000
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
            "@zui/base": "workspace:*",
            "@zui/button": "workspace:*",
            "@zui/core": "workspace:^0.0.1",
            "@zui/css-icons": "workspace:^0.0.1",
            "@zui/checkbox": "workspace:*",
            "@zui/list": "workspace:*",
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
            "notReady": true,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/tree/package.json",
            "order": 4000000051010000000
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
            "@zui/core": "workspace:^0.0.1",
            "@zui/tooltip": "workspace:^0.0.1"
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
            "notReady": true,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/upload/package.json",
            "order": 4000000053010000000
        }
    },
    {
        "name": "@zui/upload-imgs",
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
            "@zui/core": "workspace:^0.0.1",
            "@zui/upload": "workspace:^0.0.1",
            "@zui/tooltip": "workspace:^0.0.1"
        },
        "devDependencies": {
            "zui-dev": "workspace:^0.0.1"
        },
        "zui": {
            "type": "component",
            "displayName": "上传图片",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/upload-imgs",
            "workspace": true,
            "sourceType": "build-in",
            "name": "upload-imgs",
            "notReady": true,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/upload-imgs/package.json",
            "order": 4000000054010000000
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
            "notReady": true,
            "wip": true,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/virtual-grid/package.json",
            "order": 4000000056010000000
        }
    },
    {
        "name": "@zui/virtualize",
        "version": "0.0.1",
        "main": "src/main.ts",
        "files": [
            "./src/**/*"
        ],
        "dependencies": {
            "@zui/core": "workspace:^0.0.1"
        },
        "devDependencies": {
            "zui-dev": "workspace:*",
            "@zui/utilities": "workspace:*"
        },
        "zui": {
            "type": "component",
            "displayName": "虚拟渲染",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/virtualize",
            "workspace": true,
            "sourceType": "build-in",
            "name": "virtualize",
            "notReady": false,
            "wip": true,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/virtualize/package.json",
            "order": 4000000057010000000
        }
    },
    {
        "name": "@zui/cards",
        "version": "0.0.1",
        "description": "ZUI Cards",
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
            "@zui/common-list": "workspace:^0.0.1",
            "@zui/list": "workspace:^0.0.1",
            "@zui/menu": "workspace:^0.0.1",
            "@zui/css-icons": "workspace:^0.0.1",
            "@zui/toolbar": "workspace:^0.0.1"
        },
        "files": [
            "./src/**/*"
        ],
        "devDependencies": {
            "zui-dev": "workspace:^0.0.1"
        },
        "zui": {
            "type": "js-ui",
            "displayName": "卡片",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ],
                "js": [
                    "component"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/cards",
            "workspace": true,
            "sourceType": "build-in",
            "name": "cards",
            "notReady": true,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/cards/package.json",
            "order": 5000000007010001000
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
            "@zui/dropdown": "workspace:*",
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
            "notReady": true,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/contextmenu/package.json",
            "order": 5000000011010001000
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
            "@zui/dnd": "workspace:^0.0.1",
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
            "notReady": true,
            "publicPath": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/dashboard/package.json",
            "order": 5000000014010000000
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
            "@zui/button": "workspace:*",
            "@zui/popover": "workspace:*",
            "@zui/css-icons": "workspace:*",
            "@zui/list": "workspace:*",
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/dropdown/package.json",
            "order": 5000000017010000000
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
            "@zui/checkbox": "workspace:^0.0.1",
            "@zui/contextmenu": "workspace:^0.0.1",
            "@zui/menu": "workspace:^0.0.1",
            "@zui/css-icons": "workspace:^0.0.1",
            "@zui/toolbar": "workspace:^0.0.1",
            "@zui/progress": "workspace:^0.0.1",
            "@zui/progress-circle": "workspace:^0.0.1",
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/dtable/package.json",
            "order": 5000000018010000000
        }
    },
    {
        "name": "@zui/kanban",
        "version": "0.0.1",
        "description": "ZUI Kanban",
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
            "@zui/menu": "workspace:^0.0.1",
            "@zui/css-icons": "workspace:^0.0.1",
            "@zui/cards": "workspace:^0.0.1",
            "@zui/list": "workspace:^0.0.1",
            "@zui/toolbar": "workspace:^0.0.1",
            "@zui/dnd": "workspace:^0.0.1"
        },
        "files": [
            "./src/**/*"
        ],
        "devDependencies": {
            "zui-dev": "workspace:^0.0.1",
            "@zui/icons": "workspace:^0.0.1"
        },
        "zui": {
            "type": "js-ui",
            "displayName": "看板",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ],
                "js": [
                    "component"
                ]
            },
            "path": "/home/runner/work/zui/zui/lib/kanban",
            "workspace": true,
            "sourceType": "build-in",
            "name": "kanban",
            "notReady": true,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/kanban/package.json",
            "order": 5000000027010001000
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
            "@zui/core": "workspace:*",
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/tabs/package.json",
            "order": 5000000048010000000
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/css-icons/package.json",
            "order": 6000000013010000000
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/utilities/package.json",
            "order": 6000000055010001000
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
            "notReady": false,
            "packageJsonPath": "/home/runner/work/zui/zui/lib/helpers/package.json",
            "order": 7000000023010001000
        }
    }
];