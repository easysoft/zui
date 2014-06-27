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
            name: "ZUI",
            type: "root",
            theme: "default",
            caption: "一个开源免费的前端框架，用于快速构建禅道系列跨屏应用。",
            id: "0",

            children:
            {
                "start": 
                {
                    name: "开始",
                    type: "sub",
                    children:
                    {
                        "about":
                        {
                            name: "框架说明",
                        },
                        "files":
                        {
                            name: "文件目录结构",
                        },
                        "browsers":
                        {
                            name: "受支持的平台",
                        }
                    }
                },
                "basic": 
                {
                    name: "基础",
                    type: "sub",
                    caption: "了解基础内容",
                    children:
                    {
                        "global":
                        {
                            name: "全局样式表",
                        },
                        "ie":
                        {
                            name: "兼容IE浏览器",
                        },
                        "responsive":
                        {
                            name: "响应式设计",
                        },
                        "grids":
                        {
                            name: "栅格系统",
                        },
                        "type":
                        {
                            name: "文字排版",
                        },
                        "colorset":
                        {
                            name: "配色",
                        }
                    }
                },
                "controls": 
                {
                    name: "控件",
                    type: "sub",
                    caption: "一些常用的基本控件",
                    children:
                    {
                        "icons":
                        {
                            name: "图标",
                        },
                        "buttons":
                        {
                            name: "按钮",
                        }
                        ,
                        "progress":
                        {
                            name: "进度条",
                        },
                        "labels":
                        {
                            name: "标签",
                        }
                    }
                },
                "components": 
                {
                    name: "组件",
                    type: "sub",
                    caption: "一些组合控件",
                    children:
                    {
                        "alerts":
                        {
                            name: "消息框",
                        }
                    }
                }
                ,
                "javascript": 
                {
                    name: "Javascript插件",
                    type: "sub",
                    caption: "Javascript增强的插件",
                    children:
                    {
                    }
                }
            }
        }
    });
});
