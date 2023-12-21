import{j as e,D as p,o as E,c as r,I as a,w as n,k as s,a as i,R as l}from"./chunks/framework.d05VLEKR.js";const d=s("h1",{id:"下拉选择器",tabindex:"-1"},[i("下拉选择器 "),s("a",{class:"header-anchor",href:"#下拉选择器","aria-label":'Permalink to "下拉选择器"'},"​")],-1),g=s("p",null,"用于方便用户从多个选项列表中进行选择。",-1),y=s("h2",{id:"单选",tabindex:"-1"},[i("单选 "),s("a",{class:"header-anchor",href:"#单选","aria-label":'Permalink to "单选"'},"​")],-1),F=s("div",{id:"singlePickerExample"},null,-1),o=l("",2),u=s("div",{id:"multiPickerExample"},null,-1),c=l("",2),C=s("div",{class:"input-group"},[s("span",{class:"input-group-addon"},"选择一种水果"),s("div",{class:"input-group-control","data-zui":"picker","data-items":'[{"text": "Apple", "value": "apple"}, {"text": "Banana", "value": "banana"}]'}),s("button",{type:"button",class:"btn btn-default",tabindex:"-1"},"刷新")],-1),B=l("",2),m=s("h2",{id:"列表项定义",tabindex:"-1"},[i("列表项定义 "),s("a",{class:"header-anchor",href:"#列表项定义","aria-label":'Permalink to "列表项定义"'},"​")],-1),_=s("p",null,`/** 关键字，用于搜索。 */
keys?: string;`,-1),v=s("p",null,`/** 文本。 */
text?: string;`,-1),b=s("p",null,`/** 是否禁用。 */
disabled?: boolean;`,-1),f=s("p",null,`/** 类名。 */
className?: string | object | string;`,-1),x=s("p",null,`/** 图标。 */
icon?: string;`,-1),P=s("p",null,`/** 尾部图标。 */
trailingIcon?: string;`,-1),A=s("p",null,`/** 提示文本。 */
hint?: string;`,-1),q=s("p",null,`/** HTML 属性。 */
attrs?: object;`,-1),D=s("p",null,`/** 样式。 */
style?: object;`,-1),N=JSON.parse('{"title":"下拉选择器","description":"","frontmatter":{},"headers":[],"relativePath":"lib/components/picker/index.md","filePath":"lib/components/picker/index.md","lastUpdated":null}'),S={name:"lib/components/picker/index.md"},I=Object.assign(S,{setup(T){return e(()=>{onZUIReady(()=>{const t=[{text:"Apple",value:"apple",keys:"fruit food"},{text:"Banana",value:"banana",keys:"fruit food"},{text:"Orange",value:"orange",keys:"fruit food"},{text:"Strawberries",value:"strawberries",keys:"fruit food"},{text:"Cat",value:"cat",keys:"animals pet"},{text:"Dog",value:"dog",keys:"animals pet"},{text:"Fish",value:"fish",keys:"animals food"},{text:"Pig",value:"pig",keys:"animals food"},{text:"梨子",value:"pear",keys:"fruit food"},{text:"Anna",value:"anna",keys:"human animals"},{text:"Ben",value:"ben",keys:"human animals"},{text:"Cake",value:"cake",keys:"food"}];new zui.Picker("#singlePickerExample",{items:t,defaultValue:"banana",name:"picker",placeholder:"请选择你的最爱",searchHint:"搜索选项"}),new zui.Picker("#multiPickerExample",{multiple:!0,items:t,defaultValue:"banana,orange",name:"picker",placeholder:"请选择你的最爱",menuCheckbox:!0})})}),(t,V)=>{const h=p("Example"),k=p("Props");return E(),r("div",null,[d,g,y,a(h,null,{default:n(()=>[F]),_:1}),o,a(h,null,{default:n(()=>[u]),_:1}),c,a(h,null,{default:n(()=>[C]),_:1}),B,a(k,null,{default:n(()=>[i(`/** 组件根元素的 ID。 */
id?: string;
/** 类名。 */
className?: ClassNameLike;
/** 样式。 */
style?: JSX.CSSProperties;
/** 组件根元素的标签名。 */
tagName?: string;
/** 附加到组件根元素上的属性。 */
attrs?: object;
/** 点击类型，toggle 表示点击按钮时切换显示隐藏，open 表示点击按钮时只打开。 */
clickType?: 'toggle' | 'open';
/** 渲染完成后的回调函数。 */
afterRender?: (info: {firstRender: boolean}) => void;
/** 销毁前的回调函数。 */
beforeDestroy?: () => void;
/** 作为表单项的名称。 */
name?: string;
/** 默认值。 */
defaultValue?: string | string[];
/** 值变更回调函数。 */
onChange?: (value: string | string[]) => void;
/** 是否禁用。 */
disabled?: boolean;
/** 是否允许选择多个值，如果指定为数字，则限制多选的数目，默认 false。 */
multiple?: boolean | number;
/** 是否必选（不允许空值，不可以被清除）。 */
required?: boolean;
/** 选择框上的占位文本。 */
placeholder?: string;
/** 多个值的分隔字符串，默认为 ','。 */
valueSplitter?: string;
/** 列表项或列表项获取方法。 */
items: object[] | (() => (Promise | object[]));
/** 附加的菜单选项。 */
menu?: MenuOptions;
/** 是否启用快捷键。 */
hotkey?: boolean;
/** 是否启用搜索。 */
search?: boolean | number;
/** 搜索延迟时间，单位：毫秒。 */
searchDelay?: number;
/** 搜索提示文本。 */
searchHint?: string;
/** 当取消选择值时的回调函数。 */
onDeselect?: (value: string, item: PickerItemProps) => false | void;
/** 当选择值时的回调函数。 */
onSelect?: (value: string, item: PickerItemProps) => false | void;
/** 当清空值时的回调函数。 */
onClear?: () => void;
/** 下拉面板容器元素。 */
popContainer?: string | HTMLElement;
/** 菜单宽度，如果设置为 \`'100%'\` 则与选择框宽度一致，默认 \`'100%'\`。 */
popWidth: number | 'auto' | '100%';
/** 菜单高度，默认 \`'auto'\`。 */
popHeight: number | 'auto';
/** 菜单最大高度，默认 \`300\`。 */
popMaxHeight?: number;
/** 菜单最小高度，默认 \`32\`。 */
popMinHeight?: number;
/** 菜单最大宽度，当宽度设置为 \`'auto'\` 时生效。 */
popMaxWidth?: number;
/** 菜单最小宽度，当宽度设置为 \`'auto'\` 时生效，默认 50。 */
popMinWidth?: number;
/** 菜单方向，默认 \`'auto'\`。 */
popPlacement?: PickerMenuDirection;
/** 菜单类名。 */
popClass?: ClassNameLike;
/** 菜单样式。 */
popStyle?: JSX.CSSProperties;
/** 菜单显示时的回调函数。 */
onPopShow?: () => void;
/** 菜单显示后的回调函数。 */
onPopShown?: () => void;
/** 菜单隐藏时的回调函数。 */
onPopHide?: () => void;
/** 菜单隐藏后的回调函数。 */
onPopHidden?: () => void;
`)]),_:1}),m,a(k,null,{default:n(()=>[i(`/** 值。 */
value: string;
`),_,i(`
`),v,i(`
`),b,i(`
`),f,i(`
`),x,i(`
`),P,i(`
`),A,i(`
`),q,i(`
`),D,i(`
`)]),_:1})])}}});export{N as __pageData,I as default};
