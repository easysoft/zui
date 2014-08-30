var lib = {
    jquery: {
        name: 'jQuery',
        ver: '1.10.2',
        src: {js: ['assets/jquery.js']},
        desc: 'ZUI的绝大部分JS组件都依赖于jQuery'
    },

    colorset: {
        name: '配色',
        src: {less: ['src/basic/colorset.less']}
        desc: 'ZUI的色彩配置',
        ver: '1.0.0'
    },
    variables: {
        name: '配置',
        src: {less: ['src/basic/variables.less']},
        ver: '1.0.0'
    },
    normalize: {
        name: '全局样式表',
        src: {less: ['src/basic/normalize.less']},
        ver: '1.0.0'
    },
    mixins: {
        name: '样式片段',
        desc: '用于存储可重复使用的Less样式',
        src: {less: ['src/basic/mixins.less']},
        ver: '1.0.0',
        dpds: ['variables']
    },
    basic: {
        name: '基础样式',
        desc: '包含配置、全局样式表及一些有用的样式片段',
        dpds: ['variables', 'normalize', 'mixins']
    },

    "utilities.common": {
        name: '常用辅助类',
        src: {less: ['src/basic/utilities.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "utilities.responsive": {
        name: '多设备响应辅助类',
        src: {less: ['src/basic/utilities.responsive.less']},
        desc: '支持多设备响应的辅助类'
        ver: '1.0.0',
        dpds: ['basic']
    },
    utilities: {
        name: '辅助类',
        desc: '包含支持多设备响应的辅助类'
        dpds: ['utilities.common', 'utilities.responsive']
    },
    scaffolding: {
        name: '脚手架',
        src: {less: ['src/basic/scaffolding.less']},
        ver: '1.0.0',
        dpds: ['mixins']
    },
    grid: {
        name: '栅格系统',
        src: {less: ['src/basic/grid.less']},
        desc: '使用栅格来帮助布局',
        ver: '1.0.0',
        dpds: ['basic']
    },
    "type.basic": {
        name: '基本排版',
        src: {less: ['src/controls/type.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "type.bg": {
        name: '文本背景',
        src: {less: ['src/controls/type.bg.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "type.hightlight": {
        name: '文本高亮',
        src: {less: ['src/controls/type.hightlight.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "type": {
        name: '排版',
        dpds: ['type.basic', 'type.bg', 'type.hightlight']
    },
    "headers": {
        name: '标题',
        src: {less: ['src/controls/headers.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "buttons.basic": {
        name: '基本按钮',
        src: {less: ['src/controls/buttons.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "buttons.group": {
        name: '按钮组',
        src: {less: ['src/controls/buttons.group.less']},
        ver: '1.0.0',
        dpds: ['buttons.basic']
    },
    "buttons.vertical": {
        name: '垂直按钮组',
        src: {less: ['src/controls/buttons.vertical.less']},
        ver: '1.0.0',
        dpds: ['buttons.basic']
    },
    "buttons": {
        name: '按钮',
        dpds: ['buttons.basic', 'buttons.group', 'buttons.vertical']
    },
    "progressbar": {
        name: '进度条',
        src: {less: ['src/controls/progress-bars.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "image": {
        name: '图片',
        src: {less: ['src/controls/image.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "divider": {
        name: '分隔',
        src: {less: ['src/controls/divider.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "labels.basic": {
        name: '基本标签',
        src: {less: ['src/controls/labels.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "labels.fix": {
        name: '标签适配样式',
        src: {less: ['src/controls/labels.fix.less']},
        ver: '1.0.0',
        dpds: ['labels.basic']
    },
    "labels": {
        name: '标签',
        dpds: ['labels.basic', 'labels.fix']
    },
    "breadcrumbs": {
        name: '面包屑导航',
        src: {less: ['src/controls/breadcrumbs.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "icons.core": {
        name: '图标核心样式',
        src: {less: ['src/controls/icons.core.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "icons.variables": {
        name: '图标名称配置',
        src: {less: ['src/controls/icons.core.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "icons.set": {
        name: '图标定义',
        src: {less: ['src/controls/icons.set.less']},
        ver: '1.0.0',
        dpds: ['icons.variables']
    },
    "icons.font": {
        name: '图标字体',
        src: {fonts: ['src/fonts/zenicon.eot', 'src/fonts/zenicon.svg', 'src/fonts/zenicon.ttf', 'src/fonts/zenicon.woff']},
        ver: '1.0.0'
    },
    "icons": {
        name: '图标',
        dpds: ['icons.font', 'icons.core', 'icons.set']
    },
    "close": {
        name: '关闭按钮',
        src: {less: ['src/controls/close.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "scrollbar": {
        name: '滚动条',
        src: {less: ['src/controls/scrollbar.less']},
        ver: '1.0.0'
    },
    "table.basic": {
        name: '基本表格',
        src: {less: ['src/components/table.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "table.colors": {
        name: '表格变色',
        src: {less: ['src/components/table.colors.less']},
        ver: '1.0.0',
        dpds: ['table.basic']
    },
    "table.responsive": {
        name: '多设备响应的表格',
        src: {less: ['src/components/table.responsive.less']},
        ver: '1.0.0',
        dpds: ['table.basic']
    },
    "table": {
        name: '表格',
        dpds: ['table.basic', 'table.colors', 'table.responsive']
    },
    "listgroup": {
        name: '列表组',
        src: {less: ['src/components/list-group.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "panels.basic": {
        name: '基本面板',
        src: {less: ['src/components/panels.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "panels.types": {
        name: '面板类型',
        src: {less: ['src/components/panels.types.less']},
        ver: '1.0.0',
        dpds: ['panels.basic']
    },
    "panels.group": {
        name: '面板组',
        src: {less: ['src/components/panels.group.less']},
        ver: '1.0.0',
        dpds: ['panels.basic']
    },
    "panels.fix": {
        name: '面板适配',
        src: {less: ['src/components/panels.fix.less']},
        ver: '1.0.0',
        dpds: ['panels.basic']
    },
    "panels": {
        name: '面板类型',
        dpds: ['panels.basic', 'panels.types', 'panels.group', 'panels.fix']
    },
    "alerts.basic": {
        name: '基本消息框',
        src: {less: ['src/components/alerts.less'], js: ['sr/js/alert.js']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "alerts.hover": {
        name: '消息框增强样式',
        src: {less: ['src/components/alerts.hover.less']},
        ver: '1.0.0',
        dpds: ['alerts.basic']
    },
    "alerts": {
        name: '消息框',
        dpds: ['alerts.basic', 'alerts.hover']
    },
    "inputgroups.basic":{
        name: '基本输入框组',
        src: {less: ['src/components/input-groups.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "inputgroups.size":{
        name: '输入框组大小',
        src: {less: ['src/components/input-groups.size.less']},
        ver: '1.0.0',
        dpds: ['inputgroups.basic']
    },
    "inputgroups": {
        name: '输入框组',
        dpds: ['input-groups.basic', 'input-groups.size']
    },
    "forms.basic": {
        name: '基本表单',
        src: {less: ['src/components/forms.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "forms.condensed": {
        name: '紧凑表单',
        src: {less: ['src/components/forms.condensed.less']},
        ver: '1.0.0',
        dpds: ['forms.basic']
    },
    "forms": {
        name: '表单',
        dpds: ['forms.basic', 'forms.condensed']
    },
    "code": {
        name: '代码',
        src: {less: ['src/components/code.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "pager.basic": {
        name: '基本分页',
        src: {less: ['src/components/pager.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "pager.size": {
        name: '分页尺寸',
        src: {less: ['src/components/pager.size.less']},
        ver: '1.0.0',
        dpds: ['pager.basic']
    },
    "pager.types": {
        name: '分页类型',
        src: {less: ['src/components/pager.types.less']},
        ver: '1.0.0',
        dpds: ['pager.basic']
    },
    "pager": {
        name: '表单',
        dpds: ['pager.basic', 'pager.size', 'pager.types']
    },
    "navs.basic": {
        name: '基本导航',
        src: {less: ['src/components/navs.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "navs.tabs": {
        name: '标签式导航',
        src: {less: ['src/components/navs.tabs.less']},
        ver: '1.0.0',
        dpds: ['navs.basic']
    },
    "navs": {
        name: '导航',
        dpds: ['navs.basic', 'navs.tabs']
    },
    "navbars.basic": {
        name: '基本导航条',
        src: {less: ['src/components/navbars.less']},
        ver: '1.0.0',
        dpds: ['basic']
    },
    "navbars.form": {
        name: '导航条表单',
        src: {less: ['src/components/navbars.forms.less']},
        ver: '1.0.0',
        dpds: ['navbars.basic']
    },
    "navbars.fixedleft": {
        name: '左侧导航条',
        src: {less: ['src/components/navbars.fixed-left.less']},
        ver: '1.0.0',
        dpds: ['navbars.basic']
    },
    "navbars": {
        name: '导航条',
        dpds: ['navbars.basic', 'navbars.form', 'navbars.fixedleft']
    },
    "animations": {
        name: '过度动画',
        src: {less: ['src/modules/animations.less'], js: ['src/js/transition.js']},
        version: '1.0.0',
        dpds: ['mixins'],
        require: ['jquery']
    },
    "modals": {
        name: '模态框',
        src: {less: ['src/modules/modals.less'], js: ['src/js/modal.js']},
        version: '1.0.0',
    }
    "colorset.test": {
        name: '配色测试',
        src: {less: ['src/basic/colorset.text.less']},
        desc: 'ZUI的色彩预览样式',
        ver: '1.0.0',
        dpds: ['colorset', 'mixins', 'doc']
    }
};
