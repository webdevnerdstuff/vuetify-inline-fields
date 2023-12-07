import {
	VInlineCheckbox,
	VInlineCustomField,
	VInlineSelect,
	VInlineSwitch,
	VInlineTextField,
	VInlineTextarea,
} from '../';

export * from '../index';

declare module "vue" {
	interface GlobalComponents {
		VInlineCheckbox: typeof VInlineCheckbox;
		VInlineCustomField: typeof VInlineCustomField;
		VInlineSelect: typeof VInlineSelect;
		VInlineSwitch: typeof VInlineSwitch;
		VInlineTextField: typeof VInlineTextField;
		VInlineTextarea: typeof VInlineTextarea;
	}
}
