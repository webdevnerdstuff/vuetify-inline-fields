import type { VAutocomplete } from 'vuetify/components';
import type { SharedProps } from '../../types';
import type VInlineAutocomplete from './VInlineAutocomplete.vue';
export interface VInlineAutocompleteProps extends Omit<SharedProps, 'falseValue' | 'iconFalse' | 'iconFalseColor' | 'iconFalseTitle' | 'iconTrue' | 'iconTrueColor' | 'iconTrueTitle' | 'icons' | 'trueValue' | 'truncateLength' | 'truncateSuffix'> {
    autoSelectFirst?: VAutocomplete['$props']['autoSelectFirst'];
    clearIcon?: string | undefined;
    clearable?: VAutocomplete['$props']['clearable'];
    density?: VAutocomplete['$props']['density'];
    hideSelected?: VAutocomplete['$props']['hideSelected'];
    itemTitle?: VAutocomplete['$props']['itemTitle'];
    itemValue?: VAutocomplete['$props']['itemValue'];
    items?: VAutocomplete['$props']['items'];
    menu?: VAutocomplete['$props']['menu'];
    menuIcon?: VAutocomplete['$props']['menuIcon'];
    rules?: VAutocomplete['$props']['rules'];
    variant?: VAutocomplete['$props']['variant'];
}
export type VInlineAutocomplete = InstanceType<typeof VInlineAutocomplete>;
export default VInlineAutocomplete;
