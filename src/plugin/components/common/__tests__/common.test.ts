import BooleanIcons from '../BooleanIcons.vue';
import DisplayedValue from '../DisplayedValue.vue';
import SaveFieldButtons from '../SaveFieldButtons.vue';

import { createVuetify } from 'vuetify';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { selectProps } from '../../../utils/props';


const vuetify = createVuetify();

const componentProps = Object.assign(selectProps, {
	cardProps: {},
	items: [],
	required: false,
});

describe('Common Components', () => {
	describe('BooleanIcons', () => {
		const wrapper = mount(BooleanIcons, {
			global: {
				plugins: [vuetify],
			},
		});

		it('BooleanIcons Props', () => {
			const returnedProps = wrapper.getComponent(BooleanIcons).props();

			expect(returnedProps).toEqual(componentProps);
		});
	});

	describe('DisplayedValue', () => {
		const wrapper = mount(DisplayedValue, {
			global: {
				plugins: [vuetify],
			},
		});

		it('DisplayedValue Props', () => {
			const returnedProps = wrapper.getComponent(DisplayedValue).props();

			expect(returnedProps).toEqual(componentProps);
		});
	});

	describe('SaveFieldButtons', () => {
		const wrapper = mount(SaveFieldButtons, {
			global: {
				plugins: [vuetify],
			},
		});

		it('SaveFieldButtons Props', () => {
			const returnedProps = wrapper.getComponent(SaveFieldButtons).props();

			expect(returnedProps).toEqual(componentProps);
		});
	});
});
