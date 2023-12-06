import { App } from 'vue';
import './styles/main.scss';
import VInlineCheckbox from './VInlineCheckbox.vue';
import VInlineCustomField from './VInlineCustomField.vue';
import VInlineSelect from './VInlineSelect.vue';
import VInlineSwitch from './VInlineSwitch.vue';
import VInlineTextField from './VInlineTextField.vue';
import VInlineTextarea from './VInlineTextarea.vue';
import type { SharedProps } from './types';


export const globalOptions = Symbol();

export function createVInlineFields(options: SharedProps = {}) {
	return (app: App) => {
		app.provide(globalOptions, options);
		app.component('VInlineCheckbox', VInlineCheckbox);
		app.component('VInlineCustomField', VInlineCustomField);
		app.component('VInlineSelect', VInlineSelect);
		app.component('VInlineSwitch', VInlineSwitch);
		app.component('VInlineTextField', VInlineTextField);
		app.component('VInlineTextarea', VInlineTextarea);
	};
}

export default {
	VInlineCheckbox,
	VInlineCustomField,
	VInlineSelect,
	VInlineSwitch,
	VInlineTextField,
	VInlineTextarea,
};

export {
	VInlineCheckbox,
	VInlineCustomField,
	VInlineSelect,
	VInlineSwitch,
	VInlineTextField,
	VInlineTextarea,
};
