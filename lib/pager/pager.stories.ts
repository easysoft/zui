import '@zui/button/css';
import '@zui/icons';
import '@zui/dropdown';
import '@zui/toolbar';
import '@zui/pager/css';
import {Pager} from '@zui/pager/vanilla';
import {Pager as PagerView} from '@zui/pager/react';
import {ZuiPagerElement} from '@zui/pager/web-component';
import {action} from 'storybook/actions';
import {useArgs, useEffect} from 'storybook/preview-api';
import {createPreactRender, createZuiRender} from '../../.storybook/zui';

import type {Meta, StoryObj} from '@storybook/html-vite';
import type {PagerInfo, PagerOptions} from '@zui/pager';
import type {PagerChangeDetail} from '@zui/pager/web-component';

type PagerArgs = Pick<PagerInfo, 'page' | 'recTotal' | 'recPerPage'>;

const onChangePageInfo = action('onChangePageInfo');
const onChange = action('zui-change');

function createItems(sizeMenu = false) {
    return [
        {type: 'info', text: '共 {recTotal} 条 · 第 {page}/{pageTotal} 页'},
        {type: 'link', page: 'prev', text: '上一页'},
        {type: 'nav', count: 5},
        {type: 'link', page: 'next', text: '下一页'},
        ...(sizeMenu ? [{type: 'size-menu', text: '每页 {recPerPage} 条', items: [10, 20, 50]}] : []),
    ];
}

function renderPager(sizeMenu = false) {
    return createPreactRender(PagerView, {
        props: (args: PagerArgs, api): PagerOptions => ({
            ...PagerView.format({...args, pageTotal: 0}),
            useState: false,
            items: createItems(sizeMenu),
            attrs: {role: 'navigation', 'aria-label': '分页'},
            onChangePageInfo: api.guard((info: PagerInfo, event: Event) => {
                onChangePageInfo(info, event);
                api.updateArgs({page: info.page, recPerPage: info.recPerPage});
            }),
        }),
    });
}

const meta = {
    title: '组件/Pager 分页',
    args: {page: 1, recTotal: 101, recPerPage: 10},
    argTypes: {
        page: {control: {type: 'number', min: 1, step: 1}, name: '当前页'},
        recTotal: {control: {type: 'number', min: 0, step: 1}, name: '总记录数'},
        recPerPage: {control: {type: 'number', min: 1, step: 1}, name: '每页条数'},
    },
    render: renderPager(),
} satisfies Meta<PagerArgs>;

export default meta;
type Story = StoryObj<PagerArgs>;

export const Controlled: Story = {
    name: '受控分页',
};

export const PageSizeMenu: Story = {
    name: '每页条数菜单',
    render: renderPager(true),
};

export const Native: Story = {
    name: '原生 Component',
    render: createZuiRender(Pager<PagerOptions>, {
        update: (instance, options) => instance.render(options),
        options: (args: PagerArgs, api): Partial<PagerOptions> => ({
            ...args,
            useState: false,
            items: createItems(),
            attrs: {role: 'navigation', 'aria-label': '分页'},
            onChangePageInfo: api.guard((info: PagerInfo, event: Event) => {
                onChangePageInfo(info, event);
                api.updateArgs({page: info.page, recPerPage: info.recPerPage});
            }),
        }),
    }),
};

export const WebComponent: Story = {
    name: 'Web Component',
    render(args) {
        const [, updateArgs] = useArgs<PagerArgs>();
        const pager = new ZuiPagerElement();
        pager.setAttribute('aria-label', '分页');
        pager.setOptions({...args, items: createItems()});
        const change = (event: Event) => {
            const detail = (event as CustomEvent<PagerChangeDetail>).detail;
            onChange(detail);
            updateArgs({page: detail.page, recPerPage: detail.recPerPage});
        };
        pager.addEventListener('zui-change', change);
        useEffect(() => () => pager.removeEventListener('zui-change', change), [pager]);
        return pager;
    },
};
