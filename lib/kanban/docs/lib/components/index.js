const columns = [
    {name: 'todo', title: '待处理'},
    {name: 'doing', title: '进行中'},
    {name: 'done', title: '已完成'},
];
const lanes = [{name: 'web', title: '前端'}, {name: 'api', title: '服务端'}];
const actions = {
    todo: {text: '开始处理', col: 'doing'},
    doing: {text: '标记完成', col: 'done'},
    done: {text: '重新打开', col: 'todo'},
};

function createData() {
    return {
        cols: columns,
        lanes,
        items: [
            {id: 'preview', lane: 'web', col: 'todo', title: '补充附件预览入口', subtitle: '陈晨 · 支持图片与 PDF'},
            {id: 'notification', lane: 'web', col: 'doing', title: '完善消息通知面板', subtitle: '周敏 · 区分已读与未读'},
            {id: 'navigation', lane: 'web', col: 'done', title: '适配手机端导航', subtitle: '何雨 · 覆盖窄屏布局'},
            {id: 'validation', lane: 'api', col: 'todo', title: '增加附件类型校验', subtitle: '李航 · 返回明确错误信息'},
            {id: 'push', lane: 'api', col: 'doing', title: '联调消息推送接口', subtitle: '赵阳 · 验证断线重连'},
            {id: 'permission', lane: 'api', col: 'done', title: '补齐权限检查', subtitle: '王宁 · 隔离项目数据'},
        ],
    };
}

export default {
    data() {
        return {
            demoTaskTitle: '',
            demoReady: false,
            demoSummary: '',
            demoStatus: '可拖动卡片，或使用卡片下方的按钮。',
            demoVersion: 0,
        };
    },
    computed: {
        demoOptions() {
            const page = this;
            return {
                $replace: false,
                colWidth: 'auto',
                minColWidth: 164,
                minLaneHeight: 164,
                dragTypes: ['item'],
                data: createData(),
                getItem: ({item}) => ({
                    ...item,
                    titleClass: 'min-w-0 break-words',
                    footActions: [{
                        text: actions[item.col].text,
                        className: 'ghost',
                        attrs: {'aria-label': `${actions[item.col].text}：${item.title}`},
                        onClick: () => this.advanceDemoTask(item.id),
                    }],
                }),
                onDrop(_changes, info) {
                    const lane = lanes.find(item => item.name === info.drop.lane);
                    const col = columns.find(item => item.name === info.drop.col);
                    page.demoStatus = `已将「${info.drag.item.title}」移至「${lane.title} / ${col.title}」。`;
                    // 返回非 false 值，让组件应用本次拖放变更。
                },
                afterRender() {
                    const items = [...this.data.map.values()];
                    page.demoSummary = columns.map(col => `${col.title} ${items.filter(item => item.col === col.name).length}`).join(' · ');
                    page.demoReady = true;
                },
                beforeDestroy() {
                    page.demoReady = false;
                    page._kanbanDemo = null;
                },
            };
        },
    },
    methods: {
        prepareDemo() {
            this._nextTaskId = 0;
            this.demoTaskTitle = '';
            this.demoSummary = '';
            this.demoReady = false;
            this.demoStatus = this._demoResetting ? '已恢复初始的 6 项任务。' : '可拖动卡片，或使用卡片下方的按钮。';
            this._demoResetting = false;
        },
        readyDemo(instance) {
            this._kanbanDemo = instance;
        },
        async addDemoTask() {
            const title = this.demoTaskTitle.trim();
            const kanban = this._kanbanDemo?.$;
            if (!title || !kanban) return;
            const index = ++this._nextTaskId;
            await kanban.addItem({
                id: `demo-task-${index}`,
                lane: 'web',
                col: 'todo',
                order: 100 + index,
                title,
                subtitle: '未指派 · 新增任务',
            });
            if (kanban !== this._kanbanDemo?.$) return;
            this.demoTaskTitle = '';
            this.demoStatus = `已新增「${title}」，位于「前端 / 待处理」。`;
        },
        async advanceDemoTask(id) {
            const kanban = this._kanbanDemo?.$;
            const item = kanban?.getItem(id);
            if (!item) return;
            const {col} = actions[item.col];
            await kanban.updateItem({id, col});
            if (kanban !== this._kanbanDemo?.$) return;
            this.demoStatus = `已将「${item.title}」移至「${columns.find(item => item.name === col).title}」。`;
            this._kanbanDemo.element.querySelector(`.kanban-item[z-key="${window.CSS.escape(id)}"] button`)?.focus();
        },
        resetDemo() {
            if (!this._kanbanDemo) return;
            this._demoResetting = true;
            this.demoVersion++;
        },
    },
};
