import type { VInlineTextFieldProps } from '@components/VInlineTextField/';
import type VInlineCustomField from './VInlineCustomField.vue';


export interface VInlineCustomFieldProps extends VInlineTextFieldProps { }

export type VInlineCustomField = InstanceType<typeof VInlineCustomField>;

export default VInlineCustomField;
