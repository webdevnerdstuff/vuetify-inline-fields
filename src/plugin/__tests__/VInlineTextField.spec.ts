import VInlineTextField from '../VInlineTextField.vue';
import { createVuetify } from 'vuetify';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { textFieldProps } from '@/plugin/utils/props';


const vuetify = createVuetify();

const componentProps = Object.assign(textFieldProps, {
	cardProps: {},
	required: false,
});

describe('VInlineTextField', () => {
	const wrapper = mount(VInlineTextField, {
		global: {
			plugins: [vuetify],
		},
	});

	it('testing default component props', () => {
		const returnedProps = wrapper.getComponent(VInlineTextField).props();

		expect(returnedProps).toEqual(componentProps);
	});
});
