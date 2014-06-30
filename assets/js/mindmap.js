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
            {
                "start": 
                {
                    text: "开始",
                    type: "sub",
                    children:
                    {
                        "about":
                        {
                            text: "框架说明",
                        },
                        "files":
                        {
                            text: "文件目录结构",
                        },
                        "browsers":
                        {
                            text: "受支持的平台",
                        }
                    }
                },
                "basic": 
                {
                    text: "基础",
                    type: "sub",
                    caption: "了解基础内容",
                    children:
                    {
                        "global":
                        {
                            text: "全局样式表",
                        },
                        "ie":
                        {
                            text: "兼容IE浏览器",
                        },
                        "responsive":
                        {
                            text: "响应式设计",
                        },
                        "grids":
                        {
                            text: "栅格系统",
                        },
                        "type":
                        {
                            text: "文字排版",
                        },
                        "colorset":
                        {
                            text: "配色",
                        }
                    }
                },
                "controls": 
                {
                    text: "控件",
                    type: "sub",
                    caption: "一些常用的基本控件",
                    children:
                    {
                        "icons":
                        {
                            text: "图标",
                            children:
                            {
                                'iconhow':
                                {
                                    text: '如何使用图标'
                                },
                                'iconfont':
                                {
                                    text: '图标字体'
                                }
                            }
                        },
                        "buttons":
                        {
                            text: "按钮",
                        }
                        ,
                        "progress":
                        {
                            text: "进度条",
                        },
                        "labels":
                        {
                            text: "标签",
                        }
                    }
                },
                "components": 
                {
                    text: "组件",
                    type: "sub",
                    caption: "一些组合控件",
                    children:
                    {
                        "alerts":
                        {
                            text: "消息框",
                            children:
                            {
                                'alertstypes':
                                {
                                    text: '消息框类型'
                                },
                                'alertsicons':
                                {
                                    text: '在消息框中使用图标'
                                },
                                'alertsblocks':
                                {
                                    text: '块级消息框'
                                },
                                'alertslinks':
                                {
                                    text: '消息框中的链接'
                                }
                                ,
                                'alertsclose':
                                {
                                    text: '可关闭的消息框'
                                }
                            }
                        }
                    }
                }
                ,
                "javascript": 
                {
                    text: "Javascript插件",
                    type: "sub",
                    caption: "Javascript增强的插件",
                    children:
                    {
                        'javascriptmodal':
                        {
                            text: '模态框',
                            children:
                            {
                                'javascriptmodaliframe':
                                {
                                    text: '框架对话框'
                                }
                            }
                        },
                        'javascriptdropdown':
                        {
                            text: '下拉菜单'
                        }
                    }
                }
            }
        }
    });
});
