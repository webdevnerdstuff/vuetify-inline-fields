import type VInlineCustomField from './VInlineCustomField.vue';
import type { VInlineTextFieldProps } from '@components/VInlineTextField/';


export interface VInlineCustomFieldProps extends VInlineTextFieldProps { }

export type VInlineCustomField = InstanceType<typeof VInlineCustomField>;

export default VInlineCustomField;
