import type { VSwitch } from 'vuetify/components';
import type { SharedProps } from '@/plugin/types';
import type VInlineSwitch from './VInlineSwitch.vue';


export interface VInlineSwitchProps extends Omit<SharedProps,
	'autofocus' | 'truncateLength' | 'truncateSuffix'
> {
	density?: VSwitch['density'];
	falseIcon?: VSwitch['falseIcon'];
	falseValue?: VSwitch['falseValue'];
	trueValue?: VSwitch['trueValue'];
}


export type VInlineSwitch = InstanceType<typeof VInlineSwitch>;

export default VInlineSwitch;
