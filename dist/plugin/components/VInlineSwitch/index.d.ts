import { VSwitch } from 'vuetify/components';
import { SharedProps } from '../../types';
import { default as VInlineSwitch } from './VInlineSwitch.vue';

export interface VInlineSwitchProps extends Omit<SharedProps, 'autofocus' | 'truncateLength' | 'truncateSuffix'> {
    density?: VSwitch['$props']['density'];
    falseIcon?: VSwitch['$props']['falseIcon'];
}
export type VInlineSwitch = InstanceType<typeof VInlineSwitch>;
export default VInlineSwitch;
