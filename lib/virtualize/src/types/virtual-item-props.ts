import type {CustomContentType, HElementProps} from '@zui/core';

export interface VirtualItemProps extends HElementProps {
    key?: string;
    content?: CustomContentType;
}
