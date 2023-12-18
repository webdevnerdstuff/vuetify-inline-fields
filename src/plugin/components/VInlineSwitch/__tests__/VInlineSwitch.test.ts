import VInlineSwitch from '../VInlineSwitch.vue';
import { createVuetify } from 'vuetify';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { switchProps } from '../../../utils/props';


const vuetify = createVuetify();

const componentProps = Object.assign(switchProps, {
	cardProps: {},
	item: undefined,
	modelValue: undefined,
	required: false,
});

describe('VInlineSwitch', () => {
	const wrapper = mount(VInlineSwitch, {
		global: {
			plugins: [vuetify],
		},
	});

	it('testing default component props', () => {
		const returnedProps = wrapper.getComponent(VInlineSwitch).props();

		expect(returnedProps).toEqual(componentProps);
	});
});
