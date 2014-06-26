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
            name: "项目名称",
            type: "root",
            expand: true,
            theme: "default",
            caption: "说明",
            data: {},
            id: "42",

            children:
            {
                "1": 
                {
                    name: "工作",
                    type: "sub",
                    expand: true,
                    caption: "说明",
                    data: "自定义数据",
                    id: "1",
                    children: null
                },
                "2": 
                {
                    name: "学习",
                    type: "sub",
                    expand: true,
                    caption: "说明",
                    data: "自定义数据",
                    id: "2",
                    children:
                    {
                        "343":
                        {
                            name: "读书",
                            type: "node",
                            expand: true,
                            id: "343"
                        },
                        "344":
                        {
                            name: "试验",
                            type: "node",
                            expand: true,
                            id: "344"
                        }
                    }
                },
                "3": 
                {
                    name: "其他",
                    type: "sub",
                    expand: true,
                    caption: "说明",
                    data: "自定义数据",
                    id: "3"
                }
            }
        }
    });
});
