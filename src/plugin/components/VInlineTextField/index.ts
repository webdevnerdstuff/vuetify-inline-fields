import type { VTextField } from 'vuetify/components';
import type { SharedProps } from '@/plugin/types';
import type VInlineTextField from './VInlineTextField.vue';


export interface VInlineTextFieldProps extends Omit<SharedProps,
	'falseValue' | 'iconFalse' | 'iconFalseColor' | 'iconFalseTitle' | 'iconTrue' | 'iconTrueColor' | 'iconTrueTitle' | 'icons' | 'trueValue'
> {
	clearIcon?: VTextField['$props']['clearIcon'];
	density?: VTextField['$props']['density'];
	rules?: VTextField['$props']['rules'];
	variant?: VTextField['$props']['variant'];
}


export type VInlineTextField = InstanceType<typeof VInlineTextField>;

export default VInlineTextField;
