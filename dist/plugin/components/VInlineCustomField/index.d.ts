import { VInlineTextFieldProps } from '../VInlineTextField';
import { default as VInlineCustomField } from './VInlineCustomField.vue';

export interface VInlineCustomFieldProps extends VInlineTextFieldProps {
}
export type VInlineCustomField = InstanceType<typeof VInlineCustomField>;
export default VInlineCustomField;
