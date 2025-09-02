import type {FormSchema} from '../src/types';

export const schema = {
    type: 'object',
    title: 'FormBuilder 特性展示',
    properties: {
        staticText: {
            title: '静态纯文本',
            type: 'string',
            widget: 'text',
            hint: '{{`当前进度：${formData.specials.progressCircleChanger}%`}}',
            hidden: '{{formData.specials.progressCircleChanger % 20 === 0}}',
            defaultValue: '这是静态纯文本内容',
            dependencies: ['specials.progressCircleChanger'],
        },
        inputboxes: {
            title: '输入框',
            type: 'object',
            description: '用于手动输入文本和值',
            properties: {
                textbox: {
                    title: '文本框',
                    type: 'string',
                    required: true,
                    hint: '这个输入框字段被标记为必填',
                    defaultValue: '这是文本框的默认值',
                    widget: 'input',
                    props: {
                        placeholder: '请输入文本',
                    },
                },
                numberBox: {
                    title: '数字框',
                    type: 'number',
                    widget: 'input',
                    hint: '这是表单项的底部提示',
                    defaultValue: 100,
                    description: '这是表单项的描述',
                    tooltip: '这是表单项的悬浮提示',
                    extra: {html: '类型为 <code>integer</code> 或 <code>number</code>，默认会以 <code>input[type="number"]</code> 渲染。'},
                },
                textarea: {
                    title: '多行文本框',
                    type: 'string',
                    widget: 'textarea',
                    placeholder: '请输入多行文本',
                    extra: {html: '这是表单项底部的额外内容，支持 <strong>HTML</strong> 语法。'},
                },
            },
        },
        checkboxes: {
            title: '选择和开关',
            type: 'object',
            properties: {
                checkbox: {
                    title: '开关',
                    type: 'boolean',
                    defaultValue: true,
                    props: {
                        label: '这是布尔类型的表单项',
                    },
                },
                switch: {
                    title: '开关',
                    type: 'boolean',
                    widget: 'switch',
                    props: {
                        label: '点击切换开关',
                    },
                },
                checkboxList: {
                    title: '多选框列表',
                    type: 'array',
                    widget: 'checkboxList',
                    props: {
                        items: [
                            {text: '选项1', value: 'option1'},
                            {text: '选项2', value: 'option2'},
                            {text: '选项3', value: 'option3'},
                        ],
                    },
                },
                switchList: {
                    title: '开关列表',
                    type: 'string',
                    widget: 'switchList',
                    props: {
                        items: [
                            {text: '选项1', value: 'option1'},
                            {text: '选项2', value: 'option2'},
                            {text: '选项3', value: 'option3'},
                        ],
                    },
                },
                radioList: {
                    title: '单选框列表',
                    type: 'string',
                    widget: 'radioList',
                    props: {
                        items: [
                            {text: '选项1', value: 'option1'},
                            {text: '选项2', value: 'option2'},
                            {text: '选项3', value: 'option3'},
                        ],
                    },
                },
            },
        },
        selects: {
            title: '选择器',
            type: 'object',
            properties: {
                select: {
                    title: '单选框',
                    type: 'string',
                    widget: 'select',
                    props: {
                        items: [
                            {text: '选项1', value: 'option1'},
                            {text: '选项2', value: 'option2'},
                            {text: '选项3', value: 'option3'},
                        ],
                    },
                },
                multiSelect: {
                    title: '多选',
                    type: 'array',
                    widget: 'multiSelect',
                    props: {
                        items: [
                            {text: '选项1', value: 'option1'},
                            {text: '选项2', value: 'option2'},
                            {text: '选项3', value: 'option3'},
                        ],
                    },
                },
                picker: {
                    title: '单选下拉选择器',
                    type: 'string',
                    widget: 'picker',
                    props: {
                        items: [
                            {text: '选项1', value: 'option1'},
                            {text: '选项2', value: 'option2'},
                            {text: '选项3', value: 'option3'},
                        ],
                    },
                },
                multiPicker: {
                    title: '多选下拉选择器（远程）',
                    type: 'array',
                    widget: 'multiPicker',
                    props: {
                        items: '/lib/picker/dev/nested-items.json',
                    },
                    extra: {html: '这个下拉选择器会自动从 <a href="/lib/picker/dev/nested-items.json" target="_blank">/lib/picker/dev/nested-items.json</a> 中加载选项列表数据。'},
                },
                morePickers: {
                    title: '更多选择器',
                    type: 'object',
                    properties: {
                        datePicker: {
                            title: '日期选择器',
                            type: 'string',
                            widget: 'datePicker',
                            props: {
                                format: 'yyyy-MM-dd',
                            },
                        },
                        datetimePicker: {
                            title: '日期时间选择器',
                            type: 'string',
                            widget: 'datetimePicker',
                        },
                        colorPicker: {
                            title: '颜色选择器',
                            type: 'string',
                            widget: 'colorPicker',
                        },
                    },
                },
            },
        },
        objects: {
            title: '对象',
            type: 'object',
            properties: {
                map: {
                    title: '映射',
                    type: 'map',
                    widget: 'map',
                    extra: {html: '通过设置 widget 为 <code>map</code> 来使用映射编辑器。'},
                },
                stringList: {
                    title: '字符串列表',
                    type: 'array',
                    widget: 'stringList',
                    extra: {html: '通过设置 widget 为 <code>stringList</code> 来使用字符串列表编辑器。'},
                },
            },
        },
        arrays: {
            title: '数组',
            type: 'object',
            properties: {
                simpleArray: {
                    title: '简单数组',
                    type: 'array',
                    items: {
                        type: 'string',
                    },
                },
            },
        },
        specials: {
            title: '特殊组件',
            description: 'ZUI 中的所有 JSX 组件和原生组件都可以通过 <code>widgets</code> 选项注册后使用。',
            type: 'object',
            properties: {
                progressCircle: {
                    title: '进度环',
                    type: 'number',
                    widget: 'progressCircle',
                    defaultValue: 50,
                    props: {
                        size: 100,
                    },
                },
                progressCircleChanger: {
                    title: '进度环控制器',
                    type: 'number',
                    defaultValue: 50,
                    widget: 'input',
                    props: {
                        min: 0,
                        max: 100,
                        step: 1,
                    },
                    extra: {html: '此处为了展示进度环的值的改变会触发表单项 <code>specials.progressCircle</code> 值的改变，使<strong>进度环</strong>显示新的值。'},
                },
            },
        },
    },
} as unknown as FormSchema;

export const defaultData = {
    age: 18,
    checked: true,
    arrays: {
        simpleArray: ['item1', 'item2', 'item3'],
    },
    objects: {
        map: {
            key1: 'value1',
            key2: 'value2',
        },
    },
    specials: {
        burn: [15, 12, 12, 10, 8, 5, 4, 3, 1, 0, 0, 0],
    },
};
