export default {
    mounted() {
        this._docsDisposed = false;
        const releaseColumns = [
            {name: 'todo', title: '待规划'},
            {name: 'doing', title: '进行中'},
            {name: 'review', title: '待验收'},
            {name: 'done', title: '已完成'},
        ];
        const releaseOptions = {
            heading: {title: '客户门户 · 九月发布'},
            selectable: true,
            colWidth: 'auto',
            minColWidth: 180,
            data: {
                cols: releaseColumns,
                lanes: [{name: 'release', title: '发布准备'}],
                items: [
                    {id: 'release-notes', lane: 'release', col: 'todo', title: '整理版本更新说明', subtitle: '林悦 · 汇总本次交付内容'},
                    {id: 'help-guide', lane: 'release', col: 'doing', title: '补充自助查询使用指南', subtitle: '何雨 · 增加常见问题截图'},
                    {id: 'permission-check', lane: 'release', col: 'review', title: '验收客户数据访问权限', subtitle: '王宁 · 覆盖管理员与普通成员'},
                    {id: 'release-build', lane: 'release', col: 'review', title: '验证发布包与升级流程', subtitle: '李航 · 在预发布环境演练'},
                    {id: 'requirements', lane: 'release', col: 'done', title: '确认首期交付范围', subtitle: '林悦 · 已通过需求评审'},
                    {id: 'portal-design', lane: 'release', col: 'done', title: '完成门户首页设计', subtitle: '周敏 · 含窄屏布局'},
                ],
                links: [
                    {from: 'requirements', to: 'release-notes', text: '交付范围', shape: 'fold'},
                    {from: 'permission-check', to: 'release-build', text: '验收通过后发布', shape: 'curve'},
                ],
            },
            onDrop() {
                // 允许本地流转；正式应用可在此保存 changes。
            },
        };
        const teamOptions = {
            heading: {title: '移动端工单 · 团队协作'},
            selectable: true,
            colWidth: 'auto',
            minColWidth: 180,
            data: {
                cols: releaseColumns,
                lanes: [
                    {name: 'client', title: '客户端'},
                    {name: 'service', title: '服务端'},
                ],
                items: [
                    {id: 'offline-draft', lane: 'client', col: 'todo', title: '支持离线保存工单草稿', subtitle: '周敏 · 确认断网提示与恢复入口'},
                    {id: 'photo-upload', lane: 'client', col: 'doing', title: '支持拍照上传现场照片', subtitle: '陈晨 · 压缩图片后再上传'},
                    {id: 'mobile-layout', lane: 'client', col: 'review', title: '检查工单详情页的小屏布局', subtitle: '王宁 · 覆盖长标题和多张附件'},
                    {id: 'client-login', lane: 'client', col: 'done', title: '接入统一登录', subtitle: '陈晨 · 已验证会话过期提示'},
                    {id: 'draft-api', lane: 'service', col: 'todo', title: '设计草稿同步接口', subtitle: '李航 · 明确冲突处理规则'},
                    {id: 'upload-api', lane: 'service', col: 'doing', title: '增加附件类型与大小校验', subtitle: '李航 · 返回可读的错误信息'},
                    {id: 'audit-log', lane: 'service', col: 'review', title: '验收工单操作审计日志', subtitle: '王宁 · 核对操作者与时间'},
                    {id: 'ticket-search', lane: 'service', col: 'done', title: '支持按编号查询工单', subtitle: '李航 · 已通过接口测试'},
                ],
                links: [
                    {from: 'upload-api', to: 'photo-upload', text: '接口联调', shape: 'straight'},
                    {from: 'draft-api', to: 'offline-draft', text: '同步协议', lineStyle: 'dashed'},
                ],
            },
            onDrop() {
                // 各泳道独立展示进展，拖动后由组件应用本地变更。
            },
        };
        const deliveryOptions = {
            heading: {title: '团队知识库 · 需求与任务'},
            colWidth: 'auto',
            minColWidth: 150,
            data: {
                cols: [
                    {title: '待规划', name: 'todo'},
                    {title: '进行中', name: 'doing'},
                    {title: '已指派', name: 'assigned', parentName: 'doing'},
                    {title: '实现中', name: 'wip', parentName: 'doing'},
                    {title: '已完成', name: 'done'},
                ],
                lanes: [{title: '需求', name: 'story'}, {title: '任务', name: 'task'}],
                items: [
                    {id: 'knowledge-export', lane: 'story', col: 'todo', title: '支持导出知识库文章'},
                    {id: 'knowledge-search', lane: 'story', col: 'assigned', title: '按标题与正文搜索文章'},
                    {id: 'knowledge-permission', lane: 'story', col: 'wip', title: '按团队控制文章访问权限'},
                    {id: 'knowledge-category', lane: 'story', col: 'done', title: '按业务主题分类文章'},
                    {id: 'search-index', lane: 'task', col: 'assigned', title: '建立文章全文索引'},
                    {id: 'permission-api', lane: 'task', col: 'wip', title: '实现团队权限校验'},
                    {id: 'permission-tests', lane: 'task', col: 'wip', title: '补充跨团队访问测试'},
                    {id: 'category-editor', lane: 'task', col: 'done', title: '完成分类编辑表单'},
                    {id: 'category-move', lane: 'task', col: 'done', title: '支持调整分类顺序'},
                ],
            },
            onDrop() {
                // “进行中”通过子列区分已指派与实现中的任务。
            },
        };
        onZUIReady(() => {
            if (this._docsDisposed) return;
            this._kanbanDemo = new window.zui.KanbanList('#kanbanList', {
                items: [releaseOptions, teamOptions, deliveryOptions],
                height: 'calc(100vh - 160px)',
            });
        });
    },
    beforeUnmount() {
        this._docsDisposed = true;
        this._kanbanDemo?.destroy();
    },
};
