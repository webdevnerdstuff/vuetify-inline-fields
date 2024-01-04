import type { VSelect } from 'vuetify/components';
import type { SharedProps } from '../../../plugin/types';
import type VInlineSelect from './VInlineSelect.vue';
export interface VInlineSelectProps extends Omit<SharedProps, 'falseValue' | 'iconFalse' | 'iconFalseColor' | 'iconFalseTitle' | 'iconTrue' | 'iconTrueColor' | 'iconTrueTitle' | 'icons' | 'trueValue' | 'truncateLength' | 'truncateSuffix'> {
    clearIcon?: string | undefined;
    clearable?: VSelect['$props']['clearable'];
    density?: VSelect['$props']['density'];
    hideSelected?: VSelect['$props']['hideSelected'];
    itemTitle?: VSelect['$props']['itemTitle'];
    itemValue?: VSelect['$props']['itemValue'];
    items?: VSelect['$props']['items'];
    menu?: VSelect['$props']['menu'];
    rules?: VSelect['$props']['rules'];
    variant?: VSelect['$props']['variant'];
}
export type VInlineSelect = InstanceType<typeof VInlineSelect>;
export default VInlineSelect;
