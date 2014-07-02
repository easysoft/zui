$(function()
{
    var mindmap = $('#mindmap');
    var ajustMmSize = function()
    {
        var win = $(window);
        mindmap.css({'width': win.width(), 'height': win.height()});
    };

    $(window).resize(ajustMmSize);
    ajustMmSize();

    mindmap.mindmap(
    {
        beforeNodeActive: function(e)
        {

        },
        vSpace: 8,
        data: 
        {
            text: "灵光闪现",
            type: "root",
            theme: "default",
            caption: "非常美观非常易用的web脑图。",
            id: "mindmap",

            children:
            [
                {
                    text: "特色",
                    type: "sub",
                    readonly: true,
                    children:
                    [
                        {
                            id: 'beautiful',
                            text: "美观简洁 令人舒心",
                            caption: '无需担心排版'
                        },
                        {
                            id: 'easy',
                            text: "非常易用 快速展现你的想法"
                        },
                        {
                            id: 'lite',
                            text: "轻量 小巧 使用HTML5"
                        },
                        {
                            id: 'extension',
                            text: '易于扩展 节点即div'
                        }
                    ]
                },
                {
                    id: 'mouse',
                    text: "鼠标操作",
                    type: "sub",
                    caption: "通告鼠标来操作",
                    children:
                    [
                        {
                            text: "选择",
                            children:
                            [
                                {text: '单击节点来选中'},
                                {text: '单击画布来取消选择'}
                            ]
                        },
                        {
                            text: "开始编辑",
                            children:
                            [
                                {text: '单击一个选中的节点'},
                                {text: '双击一个未选中的节点'}
                            ]
                        },
                        {
                            text: "排序",
                            children:
                            [
                                {text: '单击节点并拖动到新的位置'}
                            ]
                        },
                        {
                            text: "更改父节点",
                            children:
                            [
                                {text: '单击并拖动到另一个节点上'}
                            ]
                        },
                        {
                            text: "删除",
                            children:
                            [
                                {accent: 'danger', text: '单击并拖动到另一个节点上 (未完成)'}
                            ]
                        },
                        {
                            text: "移动画布",
                            children:
                            [
                                {text: '单击空白位置拖动来移动画布'}
                            ]
                        }
                    ]
                },
                {
                    text: "快捷键操作",
                    type: "sub",
                    caption: "使用键盘来操作",
                    children:
                    [
                        {
                            text: "选择及导航",
                            children:
                            [
                                {text: '向上选择一个相邻节点 <span class="label"><i class="icon-arrow-up"></i></span>'},
                                {text: '向下选择一个相邻节点 <span class="label"><i class="icon-arrow-down"></i></span>'},
                                {text: '向左选择一个相邻节点 <span class="label"><i class="icon-arrow-left"></i></span>'},
                                {text: '向右选择一个相邻节点 <span class="label"><i class="icon-arrow-right"></i></span>'}
                            ]
                        },
                        {
                            text: '删除节点 <span class="label">Delete</span> / <span class="label">Backspace</span>'
                        },
                        {
                            text: '新增节点',
                            children:
                            [
                                {text: '增加子节点 <span class="label">Tab</span> / <span class="label">Insert</span>'},
                                {text: '增加兄弟节点 <span class="label">Enter</span>'},
                            ]
                        },
                        {
                            text: '编辑 <span class="label">A-Z</span> / <span class="label">0-9</span>'
                        },
                        {
                            text: '画布居中 <span class="label">Space</span>'
                        }
                    ]
                },
                {
                    text: "启动参数",
                    type: "sub",
                    caption: "初始化脑图的参数",
                    children:
                    [
                        // {
                        //     text: "<code>hotkeyEnable</code> 启用或禁用快捷键"
                        //     // ,
                        //     // children:
                        //     // [
                        //     //     {text: '<code>true</code> 启用（默认）'},
                        //     //     {text: '<code>false</code> 禁用'}
                        //     // ]
                        // },
                        // {
                        //     text: "<code>hotkeys</code> 快捷键配置表"
                        // },
                        // {
                        //     text: "<code>lang</code> 选择界面语言"
                        // },
                        // {
                        //     text: "<code>langs</code> 更改或增加新的备选语言"
                        // },
                        // {
                        //     text: "<code>nodeTeamplate</code> 节点DOM模版"
                        // },
                        // {
                        //     text: "<code>hSpace</code> 节点布局水平空间大小"
                        // },
                        // {
                        //     text: "<code>vSpace</code> 节点布局垂直空间大小"
                        // },
                        // {
                        //     text: "<code>removingNodeTip</code> 删除一个节点前确认提示语"
                        // },
                        // {
                        //     text: "<code>lineCurvature</code> 节点连接线弯曲程度"
                        // },
                        // {
                        //     text: "<code>subLineWidth</code> 二级节点连接线宽度"
                        // },
                        // {
                        //     text: "<code>lineOpacity</code> 连接线透明度"
                        // },
                        // {
                        //     text: "<code>lineSaturation</code> 连接线颜色饱和度"
                        // },
                        // {
                        //     text: "<code>lineLightness</code> 连接线颜色亮度"
                        // },
                        // {
                        //     text: "<code>nodeLineWidth</code> 一般节点连接线宽度"
                        // },
                        // {
                        //     text: '<code>canvasSize</code> 画布最大尺寸'
                        // }
                    ]
                },
                {
                    text: "事件接口",
                    type: "sub",
                    children:
                    [
                        // {
                        //     text: "<code>afterLoad</code> 节点数据加载完毕后触发"
                        // },
                        // {
                        //     text: "<code>afterShow</code> 绘制完毕后触发"
                        // },
                        // {
                        //     text: "<code>onChange</code> 脑图数据发生更改后触发"
                        // },
                        // {
                        //     text: "<code>onNodeClick</code> 用户点击一个节点时触发"
                        // },
                        // {
                        //     text: "<code>onNodeActive</code> 当节点被选中时"
                        // },
                        // {
                        //     text: "<code>onNodeFocus</code> 当节点进入编辑状态时"
                        // },
                        // {
                        //     text: "<code>beforeDrag</code> 拖拽事件发生前"
                        // },
                        // {
                        //     text: "<code>beforeSort</code> 节点排序发生前"
                        // },
                        // {
                        //     text: "<code>afterSort</code> 节点排序之后"
                        // },
                        // {
                        //     text: "<code>beforeMove</code> 节点移动之前"
                        // },
                        // {
                        //     text: "<code>afterMove</code> 节点移动之后"
                        // },
                        // {
                        //     text: "<code>onTextChanged</code> 节点文本发生更改时"
                        // },
                        // {
                        //     text: "<code>beforeNodeActive</code> 节点被选中之前"
                        // },
                        // {
                        //     text: "<code>beforeNodeFocus</code> 节点获取焦点进入编辑状态之前"
                        // },
                        // {
                        //     text: "<code>beforeAdd</code> 添加一个新的节点之前"
                        // },
                        // {
                        //     text: "<code>afterAdd</code> 添加一个节点之后"
                        // },
                        // {
                        //     text: "<code>beforeDelete</code> 删除节点之前"
                        // },
                        // {
                        //     text: "<code>afterDelete</code> 删除节点之后"
                        // }
                    ]
                },
                {
                    text: '其他特性',
                    type: 'sub',
                    children:
                    [
                        {
                            text: '空的节点',
                            children:
                            [
                                {
                                    text: '',
                                    children:
                                    [
                                        {text: ''},
                                        {text: ''}
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    });
});
