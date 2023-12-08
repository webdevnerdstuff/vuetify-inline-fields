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

		for (const key in VInlineFields) {
			app.component(key, VInlineFields[key]);
		}
	};

	return { install };
}

export default VInlineFields;
export * from '@components/index';
