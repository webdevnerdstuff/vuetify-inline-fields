import VInlineCheckbox from '../VInlineCheckbox.vue';
import { checkboxProps } from '@/plugin/utils/props';
import { createVuetify } from 'vuetify';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';


const vuetify = createVuetify();

const componentProps = Object.assign(checkboxProps, {
	cardProps: {},
	item: undefined,
	modelValue: undefined,
	required: false,
});

describe('VInlineCheckbox', () => {
	const wrapper = mount(VInlineCheckbox, {
		global: {
			plugins: [vuetify],
		},
	});

	it('testing default component props', () => {
		const returnedProps = wrapper.getComponent(VInlineCheckbox).props();

		expect(returnedProps).toEqual(componentProps);
	});
});
