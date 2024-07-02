import { VCheckbox } from 'vuetify/components';
import { SharedProps } from '../../types';
import { default as VInlineCheckbox } from './VInlineCheckbox.vue';

export interface VInlineCheckboxProps extends Omit<SharedProps, 'autofocus' | 'truncateLength' | 'truncateSuffix'> {
    density?: VCheckbox['$props']['density'];
    falseIcon?: string | undefined;
    trueIcon?: string | undefined;
}
export type VInlineCheckbox = InstanceType<typeof VInlineCheckbox>;
export default VInlineCheckbox;
