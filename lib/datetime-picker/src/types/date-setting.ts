import type {DateLike} from '@zui/helpers';

export type DateGetter = () => DateLike;

export type DateSetting = DateLike | DateGetter;
