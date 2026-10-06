import type {DefaultTheme} from 'vitepress';

const groupDescriptions: Record<string, string> = {
    基础控件: '从常用控件开始，组织页面内容与操作。',
    表单与输入: '收集用户输入，组织字段、选择项和文件。',
    导航与菜单: '组织功能入口，引导用户浏览页面与内容。',
    数据展示: '通过列表、表格、日历和看板展示数据。',
    布局与交互: '划分页面区域，按需折叠、移动或调整大小。',
    反馈与浮层: '反馈操作结果，并在需要时展示补充内容。',
    其他组件: '浏览扩展组件的用法与示例。',
};

const descriptions: Record<string, string> = {
    button: '触发表单提交、菜单操作等动作。',
    'btn-group': '将多个相关按钮组合展示。',
    'copy-btn': '复制指定内容到剪贴板并提示结果。',
    label: '为内容添加分类或状态标记。',
    avatar: '用图片、图标或文字标识用户及对象。',
    'avatar-group': '堆叠展示参与协作的多个成员头像。',
    'time-span': '显示格式化日期或相对当前时间的描述。',
    typography: '为标题、列表、代码和文章提供排版样式。',
    icons: '通过字体图标类名展示界面图标。',
    'css-icons': '用纯 CSS 绘制无需字体或图片的图标。',
    form: '组织表单字段、控件分组和操作按钮。',
    'form-control': '统一输入框、选择框和多行文本框的外观。',
    'input-control': '在输入框前后附加文字或图标。',
    'input-group': '组合输入框、附加文字与操作按钮。',
    checkbox: '让用户从直接展示的选项中单选或多选。',
    'checkbox/switch': '用开关外观表达开启和关闭状态。',
    pick: '管理弹出区域和选择值，构建自定义选择界面。',
    picker: '让用户从选项列表中选择所需内容。',
    'form-builder': '根据 Schema 生成字段、联动和表单验证。',
    'form-helper': '统一读取和修改表单控件的值。',
    'datetime-picker/date': '选择日期，并按需限制可选日期范围。',
    'datetime-picker/datetime': '在下拉面板中同时选择日期和时间。',
    'datetime-picker/time': '选择时间，并设置默认值和显示格式。',
    'search-box': '输入关键词、提交搜索并清除内容。',
    'color-picker': '通过下拉选择器选择颜色。',
    'file-selector': '通过按钮、方框或网格界面选择文件。',
    upload: '在表单中上传、重命名和删除文件。',
    'upload-imgs': '在表单中选择并上传图片。',
    breadcrumb: '显示当前页面所在的层级路径。',
    contextmenu: '响应鼠标右键或在指定位置显示菜单。',
    dropdown: '将操作列表收纳到下拉菜单中。',
    menu: '展示操作列表，组织菜单条目。',
    'menu/js': '根据数据生成带分组、图标和嵌套项的菜单。',
    nav: '组织页面或功能入口的导航链接。',
    'nav/js': '根据数据生成导航、激活状态和下拉条目。',
    'responsive-nav': '将导航中放不下的条目收纳到更多菜单。',
    tabs: '通过标签导航切换对应的内容区域。',
    toolbar: '将同一场景的操作按钮组织成工具栏。',
    'toolbar/js': '根据数据组合按钮、下拉菜单和分隔线。',
    tree: '用可展开的层级菜单展示组织、目录和导航。',
    calendar: '以月视图展示分组日程和日历事件。',
    cards: '将标题、说明、操作和内容组织成独立卡片。',
    'common-list': '根据条目数据渲染一组元素。',
    dtable: '以交互式表格展示二维数据。',
    'dtable/plugins': '扩展表格的单元格展示、选择、排序和编辑。',
    'file-list': '展示附件名称、大小、缩略图和操作。',
    kanban: '用泳道、状态列和可拖动卡片展示工作事项。',
    list: '展示带图标、说明、操作和复选框的数据条目。',
    pager: '展示页码、翻页按钮和分页信息。',
    'pager/js': '根据总记录数、每页条数和当前页生成分页。',
    table: '使用 HTML 表格展示二维数据。',
    virtualize: '仅渲染可见范围附近的条目，展示长列表。',
    collapsible: '按需展开或收起详情内容。',
    dashboard: '用灵活排列的区块组织信息展示页面。',
    'dnd/draggable': '管理元素的拖放过程、拖拽源和放置目标。',
    'dnd/moveable': '让元素跟随鼠标移动，并可限制移动区域。',
    'dnd/resizable': '通过边缘和四角的手柄调整元素尺寸。',
    panel: '用标题、内容和底部区域组织界面内容。',
    scrollbar: '调整滚动条外观及鼠标悬停时的显示方式。',
    sidebar: '为左右侧栏提供折叠和拖拽调宽。',
    'split/split': '通过可拖动分隔条调整水平或垂直分栏。',
    alert: '突出显示需要用户注意的提示内容。',
    messager: '通过浮动消息反馈操作结果或提示信息。',
    modal: '在保留当前页面的同时展示内容和操作。',
    'modal/trigger': '按需创建包含本地或远程内容的对话框。',
    popover: '在目标元素旁显示补充内容。',
    progress: '用条形区域展示任务完成进度。',
    'progress-circle': '用环形图形展示完成进度。',
    tooltip: '在鼠标悬停时展示简短补充说明。',
};

export function renderComponentOverview(sidebar: DefaultTheme.SidebarItem[]): string {
    const groups = sidebar.flatMap((group) => {
        const introduction = groupDescriptions[group.text || ''];
        if (!introduction) {
            return [];
        }
        const items = (group.items || []).filter(item => item.text && item.link && item.link !== '/lib/components/index.md');
        if (!items.length) {
            return [];
        }
        const links = items.map((item) => {
            const doc = item.link!.match(/^\/lib\/[^/]+\/(.+)\/([^/]+)\.md$/);
            const key = doc ? `${doc[1]}${doc[2] === 'index' ? '' : `/${doc[2]}`}` : '';
            const description = descriptions[key] || '查看用法与示例。';
            return `- [${item.text}](${item.link}) <span class="component-overview-description">${description}</span>`;
        });
        return [`<div class="component-overview-group">\n\n## ${group.text}\n\n${introduction}\n\n${links.join('\n')}\n\n</div>`];
    });
    return `<div class="component-overview">\n\n${groups.join('\n\n')}\n\n</div>`;
}
