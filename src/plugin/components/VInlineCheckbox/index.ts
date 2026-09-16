import type VInlineCheckbox from './VInlineCheckbox.vue';
import type { SharedProps } from '@/plugin/types';
import type { VCheckbox } from 'vuetify/components';


export interface VInlineCheckboxProps extends Omit<SharedProps,
	'autofocus' | 'truncateLength' | 'truncateSuffix'
> {
	density?: VCheckbox['density'];
	falseIcon?: string | undefined;
	trueIcon?: string | undefined;
	falseValue?: VCheckbox['falseValue'];
	trueValue?: VCheckbox['trueValue'];
}


export type VInlineCheckbox = InstanceType<typeof VInlineCheckbox>;

export default VInlineCheckbox;
