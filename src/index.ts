import { App, Plugin } from 'vue';
import VInlineFields from './plugin';

const install = (app: App) => {
	for (const prop in VInlineFields) {
		const component = VInlineFields[prop];
		app.component(component.name, component);
	}
};

for (const prop in VInlineFields) {
	const component = VInlineFields[prop];
	component.install = install;
}

export const InlineCheckbox = VInlineFields.InlineCheckbox;
export const InlineSelect = VInlineFields.InlineSelect;
export const InlineSwitch = VInlineFields.InlineSwitch;
export const InlineTextField = VInlineFields.InlineTextField;
export const InlineTextarea = VInlineFields.InlineTextarea;

export default { VInlineFields } as unknown as Plugin;

