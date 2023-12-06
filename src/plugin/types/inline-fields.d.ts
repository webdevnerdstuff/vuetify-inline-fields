import {
	VInlineCheckbox,
	VInlineCustomField,
	VInlineSelect,
	VInlineSwitch,
	VInlineTextField,
	VInlineTextarea,
} from '../plugin';

export * from '../index';

declare module "v-inline-fields" {
	interface GlobalComponents {
		VInlineCheckbox: typeof VInlineCheckbox;
		VInlineCustomField: typeof VInlineCustomField;
		VInlineSelect: typeof VInlineSelect;
		VInlineSwitch: typeof VInlineSwitch;
		VInlineTextField: typeof VInlineTextField;
		VInlineTextarea: typeof VInlineTextarea;
	}
}
