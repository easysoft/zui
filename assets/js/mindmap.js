$(function()
{
    var mindmap = $('#mindmap');
    var ajustMmSize = function()
    {
        var win = $(window);
        mindmap.css({'width': win.width(), 'height': win.height()});
    }

    $(window).resize(ajustMmSize);
    ajustMmSize();

    mindmap.mindmap(
    {
        data: 
        {
            text: "ZUI",
            type: "root",
            theme: "default",
            caption: "一个开源免费的前端框架，用于快速构建禅道系列跨屏应用。",
            id: "zui",

            children:
            [
                {
                    id: 'start',
                    text: "开始",
                    type: "sub",
                    readonly: true,
                    children:
                    [
                        {
                            id: 'about',
                            text: "框架说明",
                            sort: 1
                        },
                        {
                            id: 'files',
                            text: "文件目录结构",
                            sort: 3
                        },
                        {
                            id: 'browsers',
                            text: "受支持的平台",
                            sort: 2
                        }
                    ]
                },
                {
                    id: 'basic',
                    text: "基础",
                    type: "sub",
                    caption: "了解基础内容",
                    children:
                    [
                        {
                            id: 'globalcss',
                            text: "全局样式表",
                        },
                        {
                            id: 'ie',
                            text: "兼容IE浏览器",
                        },
                        {
                            id: 'responsive',
                            text: "响应式设计",
                        },
                        {
                            id: 'grid',
                            text: "栅格系统",
                        },
                        {
                            id: 'types',
                            text: "文字排版",
                        },
                        {
                            id: 'colorset',
                            text: "配色",
                        }
                    ]
                },
                {
                    id: 'controls',
                    text: "控件",
                    type: "sub",
                    caption: "一些常用的基本控件",
                    children:
                    [
                        {
                            id: 'icons',
                            text: "图标",
                            children:
                            [
                                {
                                    id: 'howtouseicons',
                                    text: '如何使用图标'
                                },
                                {
                                    id: 'iconfont',
                                    text: '图标字体'
                                }
                            ]
                        },
                        {
                            id: 'button',
                            text: "按钮",
                        },
                        {
                            id: 'progressbar',
                            text: "进度条",
                        },
                        {
                            id: 'labels',
                            text: "标签",
                        }
                    ]
                },
                {
                    id: 'components',
                    text: "组件",
                    type: "sub",
                    caption: "一些组合控件",
                    children:
                    [
                        {
                            id: 'alerts',
                            text: "消息框",
                            children:
                            [
                                {
                                    id: 'alertstypes',
                                    text: '消息框类型'
                                },
                                {
                                    id: 'alertsicons',
                                    text: '在消息框中使用图标'
                                },
                                {
                                    id: 'alertsblocks',
                                    text: '块级消息框'
                                },
                                {
                                    id: 'alertslinks',
                                    text: '消息框中的链接'
                                },
                                {
                                    id: 'alertsclose',
                                    text: '可关闭的消息框'
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'javascript',
                    text: "Javascript插件",
                    type: "sub",
                    caption: "Javascript增强的插件",
                    children:
                    [
                        {
                            id: 'javascriptmodal',
                            text: '模态框',
                            sort: 2,
                            children:
                            [
                                {
                                    id: 'javascriptmodaliframe',
                                    text: '框架对话框'
                                }
                            ]
                        },
                        {
                            id: 'javascriptdropdown',
                            text: '下拉菜单',
                            sort: 1
                        }
                    ]
                }
            ]
        }
    });
});
