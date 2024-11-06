import { VTextarea } from 'vuetify/components';
import { SharedProps } from '../../types';
import { default as VInlineTextarea } from './VInlineTextarea.vue';
export interface VInlineTextareaProps extends Omit<SharedProps, 'falseValue' | 'iconFalse' | 'iconFalseColor' | 'iconFalseTitle' | 'iconTrue' | 'iconTrueColor' | 'iconTrueTitle' | 'icons' | 'trueValue'> {
    autoGrow?: VTextarea['$props']['autoGrow'];
    clearIcon?: VTextarea['$props']['clearIcon'];
    density?: VTextarea['$props']['density'];
    rows?: VTextarea['$props']['rows'];
    rules?: VTextarea['$props']['rules'];
    variant?: VTextarea['$props']['variant'];
}
export type VInlineTextarea = InstanceType<typeof VInlineTextarea>;
export default VInlineTextarea;
