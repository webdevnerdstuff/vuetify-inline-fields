import VInlineCustomField from '../VInlineCustomField.vue';
import { createVuetify } from 'vuetify';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { textFieldProps } from '../../../utils/props';


const vuetify = createVuetify();

const componentProps = Object.assign(textFieldProps, {
	cardProps: {},
});

describe('VInlineTextField', () => {
	const wrapper = mount(VInlineCustomField, {
		global: {
			plugins: [vuetify],
		},
	});

	it('testing default component props', () => {
		const returnedProps = wrapper.getComponent(VInlineCustomField).props();

		expect(returnedProps).toEqual(componentProps);
	});
});
