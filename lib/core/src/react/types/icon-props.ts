import type {ClassNameLike} from '../../helpers/classes';
import type {IconType} from './icon-type';

export type IconProps = {
    icon?: IconType;
    className?: ClassNameLike;
    [key: string]: unknown;
};
