import { App, Plugin } from 'vue';
import VInlineFields from './plugin';
import './plugin/styles/main.scss';

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

export const VInlineAutocomplete = VInlineFields.VInlineAutocomplete;
export const VInlineCheckbox = VInlineFields.VInlineCheckbox;
export const VInlineCustomField = VInlineFields.VInlineCustomField;
export const VInlineSelect = VInlineFields.VInlineSelect;
export const VInlineSwitch = VInlineFields.VInlineSwitch;
export const VInlineTextField = VInlineFields.VInlineTextField;
export const VInlineTextarea = VInlineFields.VInlineTextarea;

export default { VInlineFields } as unknown as Plugin;

