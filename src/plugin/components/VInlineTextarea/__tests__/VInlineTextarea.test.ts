import VInlineTextarea from '../VInlineTextarea.vue';
import { createVuetify } from 'vuetify';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { textareaProps } from '../../../utils/props';


const vuetify = createVuetify();

const componentProps = Object.assign(textareaProps, {
	cardProps: {},
});

describe('VInlineTextarea', () => {
	const wrapper = mount(VInlineTextarea, {
		global: {
			plugins: [vuetify],
		},
	});

	it('testing default component props', () => {
		const returnedProps = wrapper.getComponent(VInlineTextarea).props();

		expect(returnedProps).toEqual(componentProps);
	});
});
