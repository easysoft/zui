import '@zui/nav/css';
import {Tabs} from '@zui/tabs';
import {action} from 'storybook/actions';
import {createZuiRender} from '../../.storybook/zui';

import type {Meta, StoryObj} from '@storybook/html-vite';

type TabsArgs = {
    active: 'overview' | 'activity' | 'settings';
    overviewText: string;
    appearance: 'nav-tabs' | 'nav-pills';
};

const onChangeTab = action('onChangeTab');

function makeTabsRender(fade = false) {
    return createZuiRender(Tabs, {
        host(args: TabsArgs, api) {
            const id = `storybook-tabs-${crypto.randomUUID()}`;
            const root = document.createElement('div');
            root.className = 'tabs';
            root.dataset.storyTabs = '';
            const target = document.createElement('ul');
            target.className = `nav flex-wrap ${args.appearance}`;
            target.setAttribute('role', 'tablist');
            target.setAttribute('aria-label', '项目标签页');
            const content = document.createElement('div');
            content.className = 'tab-content';
            const entries = [
                {name: 'overview', text: args.overviewText, content: '查看项目的当前进展。'},
                {name: 'activity', text: '动态', content: '查看项目最近的更新。'},
                {name: 'settings', text: '设置', content: '管理项目的基本设置。'},
            ] as const;
            const links: HTMLAnchorElement[] = [];
            const panes: HTMLDivElement[] = [];
            for (const entry of entries) {
                const selected = entry.name === args.active;
                const item = document.createElement('li');
                item.className = 'nav-item max-w-full';
                item.setAttribute('role', 'presentation');
                const link = document.createElement('a');
                link.id = `${id}-${entry.name}-tab`;
                link.href = `#${id}-${entry.name}-pane`;
                link.dataset.toggle = 'tab';
                link.dataset.name = entry.name;
                link.className = 'max-w-full';
                link.classList.toggle('active', selected);
                link.title = entry.text;
                const text = document.createElement('span');
                text.className = 'text-ellipsis';
                text.textContent = entry.text;
                link.append(text);
                link.setAttribute('role', 'tab');
                link.setAttribute('aria-controls', `${id}-${entry.name}-pane`);
                link.setAttribute('aria-selected', String(selected));
                const pane = document.createElement('div');
                pane.id = `${id}-${entry.name}-pane`;
                pane.className = `tab-pane p-4${fade ? ' fade duration-300' : ''}${selected ? ' active in' : ''}`;
                pane.setAttribute('role', 'tabpanel');
                pane.setAttribute('aria-labelledby', link.id);
                pane.setAttribute('aria-hidden', String(!selected));
                pane.tabIndex = 0;
                pane.textContent = entry.content;
                item.append(link);
                target.append(item);
                content.append(pane);
                links.push(link);
                panes.push(pane);
            }
            root.append(target, content);
            const preventEarlyToggle = (event: MouseEvent) => {
                event.preventDefault();
                event.stopPropagation();
            };
            target.addEventListener('click', preventEarlyToggle);
            api.onCleanup(() => target.removeEventListener('click', preventEarlyToggle));
            const select = (tabs: Tabs, active: TabsArgs['active']) => {
                const index = entries.findIndex(entry => entry.name === active);
                if (index < 0 || links[index].classList.contains('active')) {
                    return false;
                }
                tabs.active(links[index]);
                links.forEach((item, itemIndex) => {
                    item.setAttribute('aria-selected', String(itemIndex === index));
                    panes[itemIndex].setAttribute('aria-hidden', String(itemIndex !== index));
                });
                return true;
            };
            return {root, target, entries, links, select, preventEarlyToggle};
        },
        options: () => ({}),
        update(tabs, _options, args, host) {
            host.target.className = `nav flex-wrap ${args.appearance}`;
            host.links[0].firstElementChild!.textContent = args.overviewText;
            host.links[0].title = args.overviewText;
            host.select(tabs, args.active);
        },
        ready(tabs, _args, host, api) {
            const changeTab = api.guard((event: MouseEvent) => {
                const link = (event.target as Element).closest<HTMLAnchorElement>('a[data-toggle="tab"]');
                const index = link ? host.links.indexOf(link) : -1;
                if (index < 0) {
                    return;
                }
                event.preventDefault();
                event.stopPropagation();
                const active = host.entries[index].name;
                if (host.select(tabs, active)) {
                    onChangeTab({active}, event);
                    api.updateArgs({active});
                }
            });
            host.target.addEventListener('click', changeTab);
            host.target.removeEventListener('click', host.preventEarlyToggle);
            api.onCleanup(() => host.target.removeEventListener('click', changeTab));
        },
    });
}

const meta = {
    title: '组件/Tabs 标签页',
    args: {active: 'overview', overviewText: '概览', appearance: 'nav-tabs'},
    argTypes: {
        active: {control: 'select', options: ['overview', 'activity', 'settings'], name: '当前标签'},
        overviewText: {control: 'text', name: '首个标签文本'},
        appearance: {control: 'select', options: ['nav-tabs', 'nav-pills'], name: '导航外观'},
    },
    render: makeTabsRender(),
} satisfies Meta<TabsArgs>;

export default meta;
type Story = StoryObj<TabsArgs>;

export const Controlled: Story = {
    name: '受控标签页',
};

export const LongLabel: Story = {
    name: '长标签与窄屏',
    args: {overviewText: '当前项目的完整进展、交付安排与所有成员的协作概览，包含跨团队依赖和待确认事项'},
};

export const Fade: Story = {
    name: '淡入切换',
    render: makeTabsRender(true),
};
