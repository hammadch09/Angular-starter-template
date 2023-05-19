import { Icon } from '@app/models/common/icon';

export type Value = number | string | boolean;

export interface ControlItem {
    value: string;
    label: string;
    icon?: Icon;
}
