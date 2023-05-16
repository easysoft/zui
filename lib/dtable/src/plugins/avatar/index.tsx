import {JSX} from 'preact';
import {definePlugin} from '../../helpers/shared-plugins';
import {Avatar} from '@zui/avatar/src/component';
import './style.css';
import type {AvatarOptions} from '@zui/avatar/src/types';
import type {DTablePlugin, RowInfo, ColInfo, DTableWithPlugin, CustomRenderResultList} from '../../types';
import {classes} from '@zui/browser-helpers/src/classes';

export type DTableAvatarTypes = {
    col: Partial<{
        avatarClass?: string,
        avatarKey?: string,
        avatarCodeKey?: string,
        avatarProps?: AvatarOptions,
        avatarBtnProps?: JSX.HTMLAttributes<HTMLButtonElement> | ((col: ColInfo, row: RowInfo) => JSX.HTMLAttributes<HTMLButtonElement>),
        avatarNameKey?: string;
    }>,
};

export type DTableAvatar = DTableWithPlugin<DTableAvatarTypes>;

export function renderAvatarCell(result: CustomRenderResultList, {row, col}: {row: RowInfo, col: ColInfo}) {
    const {data: rowData} = row;
    const text = rowData ? (rowData[col.name] as string) : undefined;
    if (!text?.length) {
        return result;
    }
    const {avatarClass = 'rounded-full', avatarKey = `${col.name}Avatar`, avatarProps, avatarCodeKey, avatarNameKey = `${col.name}Name`} = col.setting as DTableAvatarTypes['col'];
    const name = (rowData ? (rowData[avatarNameKey] as string) : text) || result[0];
    const props = {
        size: 'xs',
        className: classes(avatarClass, avatarProps?.className, 'flex-none'),
        src: rowData ? (rowData[avatarKey] as string) : undefined,
        text: name,
        code: avatarCodeKey ? (rowData ? (rowData[avatarCodeKey] as string) : undefined) : text,
        ...avatarProps,
    } as AvatarOptions;

    result[0] = <Avatar {...props} />;
    if (col.type === 'avatarBtn') {
        const {avatarBtnProps} = col.setting as DTableAvatarTypes['col'];
        const btnProps = typeof avatarBtnProps === 'function' ? avatarBtnProps(col, row) : avatarBtnProps;
        result[0] = (
            <button type="button" className="btn btn-avatar" {...btnProps}>
                <Avatar {...props} />
                <div>{name}</div>
            </button>
        );
    }
    return result;
}

const avatarPlugin: DTablePlugin<DTableAvatarTypes> = {
    name: 'avatar',
    colTypes: {
        avatar: {
            onRenderCell: renderAvatarCell,
        },
        avatarBtn: {
            onRenderCell: renderAvatarCell,
        },
    },
};

export const avatar = definePlugin(avatarPlugin, {buildIn: true});
