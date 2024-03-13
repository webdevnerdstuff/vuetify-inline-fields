import { defineAsyncComponent } from 'vue';
import { App } from 'vue';
import './styles/main.scss';
import type { SharedProps } from './types';
import * as VInlineFields from '@components/index';


export const globalOptions = Symbol();

export function createVInlineFields(options: Omit<SharedProps,
	'disabled' | 'label' | 'loading' | 'name'
> = {}) {
	const install = (app: App) => {
		app.provide(globalOptions, options);

		app.component('VInlineAutocomplete', defineAsyncComponent(
			() => import('./components/VInlineAutocomplete/VInlineAutocomplete.vue'))
		);

		app.component('VInlineCheckbox', defineAsyncComponent(
			() => import('./components/VInlineCheckbox/VInlineCheckbox.vue'))
		);

		app.component('VInlineCustomField', defineAsyncComponent(
			() => import('./components/VInlineCustomField/VInlineCustomField.vue'))
		);

		app.component('VInlineSelect', defineAsyncComponent(
			() => import('./components/VInlineSelect/VInlineSelect.vue'))
		);

		app.component('VInlineSwitch', defineAsyncComponent(
			() => import('./components/VInlineSwitch/VInlineSwitch.vue'))
		);

		app.component('VInlineTextarea', defineAsyncComponent(
			() => import('./components/VInlineTextarea/VInlineTextarea.vue'))
		);

		app.component('VInlineTextField', defineAsyncComponent(
			() => import('./components/VInlineTextField/VInlineTextField.vue'))
		);
	};

	return { install };
}

export default VInlineFields;
export * from '@components/index';
