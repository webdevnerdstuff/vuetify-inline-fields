import VInlineSelect from '../VInlineSelect.vue';
import { createVuetify } from 'vuetify';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { selectProps } from '../../../utils/props';


const vuetify = createVuetify();

const componentProps = Object.assign(selectProps, {
	cardProps: {},
	items: [],
});

describe('VInlineSelect', () => {
	const wrapper = mount(VInlineSelect, {
		global: {
			plugins: [vuetify],
		},
	});

	it('testing default component props', () => {
		const returnedProps = wrapper.getComponent(VInlineSelect).props();

		expect(returnedProps).toEqual(componentProps);
	});
});
