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
            "path": "/Users/hao/Projects/zui3/lib/base",
            "workspace": true,
            "sourceType": "build-in",
            "name": "base",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/base/package.json",
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
            "path": "/Users/hao/Projects/zui3/lib/typography",
            "workspace": true,
            "sourceType": "build-in",
            "name": "typography",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/typography/package.json",
            "order": 1000000054010000000
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
            "path": "/Users/hao/Projects/zui3/lib/alert",
            "workspace": true,
            "sourceType": "build-in",
            "name": "alert",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/alert/package.json",
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
            "path": "/Users/hao/Projects/zui3/lib/breadcrumb",
            "workspace": true,
            "sourceType": "build-in",
            "name": "breadcrumb",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/breadcrumb/package.json",
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
            "path": "/Users/hao/Projects/zui3/lib/button",
            "workspace": true,
            "sourceType": "build-in",
            "name": "button",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/button/package.json",
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
            "path": "/Users/hao/Projects/zui3/lib/checkbox",
            "workspace": true,
            "sourceType": "build-in",
            "name": "checkbox",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/checkbox/package.json",
            "order": 2000000009010000000
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
            "path": "/Users/hao/Projects/zui3/lib/common-list",
            "workspace": true,
            "sourceType": "build-in",
            "name": "common-list",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/common-list/package.json",
            "order": 2000000011010000000
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
            "path": "/Users/hao/Projects/zui3/lib/form",
            "workspace": true,
            "sourceType": "build-in",
            "name": "form",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/form/package.json",
            "order": 2000000023010000000
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
            "path": "/Users/hao/Projects/zui3/lib/form-control",
            "workspace": true,
            "sourceType": "build-in",
            "name": "form-control",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/form-control/package.json",
            "order": 2000000024010000000
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
            "path": "/Users/hao/Projects/zui3/lib/icons",
            "workspace": true,
            "sourceType": "build-in",
            "name": "icons",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/icons/package.json",
            "order": 2000000026010000000
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
            "path": "/Users/hao/Projects/zui3/lib/input-control",
            "workspace": true,
            "sourceType": "build-in",
            "name": "input-control",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/input-control/package.json",
            "order": 2000000027010000000
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
            "path": "/Users/hao/Projects/zui3/lib/label",
            "workspace": true,
            "sourceType": "build-in",
            "name": "label",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/label/package.json",
            "order": 2000000030010000000
        }
    },
    {
        "name": "@zui/list",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
        "files": [
            "./src/**/*"
        ],
        "exports": {
            ".": "./src/main.ts"
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
            "path": "/Users/hao/Projects/zui3/lib/list",
            "workspace": true,
            "sourceType": "build-in",
            "name": "list",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/list/package.json",
            "order": 2000000031010000000
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
            "@zui/helpers": "workspace:^0.0.1",
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
            "path": "/Users/hao/Projects/zui3/lib/menu",
            "workspace": true,
            "sourceType": "build-in",
            "name": "menu",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/menu/package.json",
            "order": 2000000032010000000
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
            "path": "/Users/hao/Projects/zui3/lib/messager",
            "workspace": true,
            "sourceType": "build-in",
            "name": "messager",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/messager/package.json",
            "order": 2000000033010000000
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
            "path": "/Users/hao/Projects/zui3/lib/progress",
            "workspace": true,
            "sourceType": "build-in",
            "name": "progress",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/progress/package.json",
            "order": 2000000041010000000
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
            "path": "/Users/hao/Projects/zui3/lib/progress-circle",
            "workspace": true,
            "sourceType": "build-in",
            "name": "progress-circle",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/progress-circle/package.json",
            "order": 2000000042010000000
        }
    },
    {
        "name": "@zui/scrollbar",
        "version": "0.0.1",
        "main": "src/main.ts",
        "browser": "src/main.ts",
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
            "path": "/Users/hao/Projects/zui3/lib/scrollbar",
            "workspace": true,
            "sourceType": "build-in",
            "name": "scrollbar",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/scrollbar/package.json",
            "order": 2000000043010000000
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
            "path": "/Users/hao/Projects/zui3/lib/core",
            "workspace": true,
            "sourceType": "build-in",
            "name": "core",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/core/package.json",
            "order": 3000000013010000000
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
            "path": "/Users/hao/Projects/zui3/lib/dnd",
            "workspace": true,
            "sourceType": "build-in",
            "name": "dnd",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/dnd/package.json",
            "order": 3000000018010000000
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
            "path": "/Users/hao/Projects/zui3/lib/event-bus",
            "workspace": true,
            "sourceType": "build-in",
            "name": "event-bus",
            "notReady": false,
            "wip": true,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/event-bus/package.json",
            "order": 3000000021010000000
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
            "path": "/Users/hao/Projects/zui3/lib/sortable",
            "workspace": true,
            "sourceType": "build-in",
            "name": "sortable",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/sortable/package.json",
            "order": 3000000046010000000
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
            "path": "/Users/hao/Projects/zui3/lib/split",
            "workspace": true,
            "sourceType": "build-in",
            "name": "split",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/split/package.json",
            "order": 3000000047010000000
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
            "path": "/Users/hao/Projects/zui3/lib/store",
            "workspace": true,
            "sourceType": "build-in",
            "name": "store",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/store/package.json",
            "order": 3000000048010000000
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
            "path": "/Users/hao/Projects/zui3/lib/avatar",
            "workspace": true,
            "sourceType": "build-in",
            "name": "avatar",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/avatar/package.json",
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
            "path": "/Users/hao/Projects/zui3/lib/avatar-group",
            "workspace": true,
            "sourceType": "build-in",
            "name": "avatar-group",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/avatar-group/package.json",
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
            "path": "/Users/hao/Projects/zui3/lib/btn-group",
            "workspace": true,
            "sourceType": "build-in",
            "name": "btn-group",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/btn-group/package.json",
            "order": 4000000005010000000
        }
    },
    {
        "name": "@zui/calendar",
        "version": "0.0.1",
        "description": "ZUI Calendar",
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
            "@zui/helpers": "workspace:^0.0.1"
        },
        "files": [
            "./src/**/*"
        ],
        "devDependencies": {
            "zui-dev": "workspace:^0.0.1"
        },
        "zui": {
            "type": "component",
            "displayName": "日历",
            "contributes": {
                "css": [
                    "class",
                    "var"
                ],
                "js": [
                    "component"
                ]
            },
            "path": "/Users/hao/Projects/zui3/lib/calendar",
            "workspace": true,
            "sourceType": "build-in",
            "name": "calendar",
            "notReady": true,
            "wip": true,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/calendar/package.json",
            "order": 4000000007010000000
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
            "path": "/Users/hao/Projects/zui3/lib/color-picker",
            "workspace": true,
            "sourceType": "build-in",
            "name": "color-picker",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/color-picker/package.json",
            "order": 4000000010010000000
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
            "path": "/Users/hao/Projects/zui3/lib/datetime-picker",
            "workspace": true,
            "sourceType": "build-in",
            "name": "datetime-picker",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/datetime-picker/package.json",
            "order": 4000000016010000000
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
            "path": "/Users/hao/Projects/zui3/lib/file-selector",
            "workspace": true,
            "sourceType": "build-in",
            "name": "file-selector",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/file-selector/package.json",
            "order": 4000000022010000000
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
            "path": "/Users/hao/Projects/zui3/lib/input-group",
            "workspace": true,
            "sourceType": "build-in",
            "name": "input-group",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/input-group/package.json",
            "order": 4000000028010000000
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
            "path": "/Users/hao/Projects/zui3/lib/modal",
            "workspace": true,
            "sourceType": "build-in",
            "name": "modal",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/modal/package.json",
            "order": 4000000034010000000
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
            "path": "/Users/hao/Projects/zui3/lib/nav",
            "workspace": true,
            "sourceType": "build-in",
            "name": "nav",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/nav/package.json",
            "order": 4000000035010000000
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
            "path": "/Users/hao/Projects/zui3/lib/pager",
            "workspace": true,
            "sourceType": "build-in",
            "name": "pager",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/pager/package.json",
            "order": 4000000036010000000
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
            "path": "/Users/hao/Projects/zui3/lib/panel",
            "workspace": true,
            "sourceType": "build-in",
            "name": "panel",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/panel/package.json",
            "order": 4000000037010000000
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
            "path": "/Users/hao/Projects/zui3/lib/pick",
            "workspace": true,
            "sourceType": "build-in",
            "name": "pick",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/pick/package.json",
            "order": 4000000038010000000
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
            "path": "/Users/hao/Projects/zui3/lib/picker",
            "workspace": true,
            "sourceType": "build-in",
            "name": "picker",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/picker/package.json",
            "order": 4000000039010000000
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
            "path": "/Users/hao/Projects/zui3/lib/popover",
            "workspace": true,
            "sourceType": "build-in",
            "name": "popover",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/popover/package.json",
            "order": 4000000040010000000
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
            "path": "/Users/hao/Projects/zui3/lib/search-box",
            "workspace": true,
            "sourceType": "build-in",
            "name": "search-box",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/search-box/package.json",
            "order": 4000000044010000000
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
            "path": "/Users/hao/Projects/zui3/lib/sidebar",
            "workspace": true,
            "sourceType": "build-in",
            "name": "sidebar",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/sidebar/package.json",
            "order": 4000000045010000000
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
            "path": "/Users/hao/Projects/zui3/lib/table",
            "workspace": true,
            "sourceType": "build-in",
            "name": "table",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/table/package.json",
            "order": 4000000049010000000
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
            "path": "/Users/hao/Projects/zui3/lib/toolbar",
            "workspace": true,
            "sourceType": "build-in",
            "name": "toolbar",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/toolbar/package.json",
            "order": 4000000051010000000
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
            "path": "/Users/hao/Projects/zui3/lib/tooltip",
            "workspace": true,
            "sourceType": "build-in",
            "name": "tooltip",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/tooltip/package.json",
            "order": 4000000052010000000
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
            "path": "/Users/hao/Projects/zui3/lib/tree",
            "workspace": true,
            "sourceType": "build-in",
            "name": "tree",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/tree/package.json",
            "order": 4000000053010000000
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
            "path": "/Users/hao/Projects/zui3/lib/upload",
            "workspace": true,
            "sourceType": "build-in",
            "name": "upload",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/upload/package.json",
            "order": 4000000055010000000
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
            "path": "/Users/hao/Projects/zui3/lib/upload-imgs",
            "workspace": true,
            "sourceType": "build-in",
            "name": "upload-imgs",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/upload-imgs/package.json",
            "order": 4000000056010000000
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
            "path": "/Users/hao/Projects/zui3/lib/virtual-grid",
            "workspace": true,
            "sourceType": "build-in",
            "name": "virtual-grid",
            "notReady": true,
            "wip": true,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/virtual-grid/package.json",
            "order": 4000000058010000000
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
            "path": "/Users/hao/Projects/zui3/lib/virtualize",
            "workspace": true,
            "sourceType": "build-in",
            "name": "virtualize",
            "notReady": false,
            "wip": true,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/virtualize/package.json",
            "order": 4000000059010000000
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
            "path": "/Users/hao/Projects/zui3/lib/cards",
            "workspace": true,
            "sourceType": "build-in",
            "name": "cards",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/cards/package.json",
            "order": 5000000008010000000
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
            "path": "/Users/hao/Projects/zui3/lib/contextmenu",
            "workspace": true,
            "sourceType": "build-in",
            "name": "contextmenu",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/contextmenu/package.json",
            "order": 5000000012010000000
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
            "path": "/Users/hao/Projects/zui3/lib/dashboard",
            "workspace": true,
            "sourceType": "build-in",
            "name": "dashboard",
            "notReady": false,
            "publicPath": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/dashboard/package.json",
            "order": 5000000015010001000
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
            "path": "/Users/hao/Projects/zui3/lib/dropdown",
            "workspace": true,
            "sourceType": "build-in",
            "name": "dropdown",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/dropdown/package.json",
            "order": 5000000019010001000
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
            "path": "/Users/hao/Projects/zui3/lib/dtable",
            "workspace": true,
            "sourceType": "build-in",
            "name": "dtable",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/dtable/package.json",
            "order": 5000000020010000000
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
            "path": "/Users/hao/Projects/zui3/lib/kanban",
            "workspace": true,
            "sourceType": "build-in",
            "name": "kanban",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/kanban/package.json",
            "order": 5000000029010000000
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
            "path": "/Users/hao/Projects/zui3/lib/tabs",
            "workspace": true,
            "sourceType": "build-in",
            "name": "tabs",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/tabs/package.json",
            "order": 5000000050010000000
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
            "path": "/Users/hao/Projects/zui3/lib/css-icons",
            "workspace": true,
            "sourceType": "build-in",
            "name": "css-icons",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/css-icons/package.json",
            "order": 6000000014010000000
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
            "path": "/Users/hao/Projects/zui3/lib/utilities",
            "workspace": true,
            "sourceType": "build-in",
            "name": "utilities",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/utilities/package.json",
            "order": 6000000057010000000
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
            "path": "/Users/hao/Projects/zui3/lib/helpers",
            "workspace": true,
            "sourceType": "build-in",
            "name": "helpers",
            "notReady": false,
            "packageJsonPath": "/Users/hao/Projects/zui3/lib/helpers/package.json",
            "order": 7000000025010000000
        }
    }
];