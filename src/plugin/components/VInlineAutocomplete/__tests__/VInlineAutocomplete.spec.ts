import VInlineAutocomplete from '../VInlineAutocomplete.vue';
import { createVuetify } from 'vuetify';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { selectProps } from '../../../utils/props';


const vuetify = createVuetify();

const componentProps = Object.assign(selectProps, {
  cardProps: {},
  items: [],
  // isRequired: false,
});

describe('VInlineSelect', () => {
  const wrapper = mount(VInlineAutocomplete, {
    global: {
      plugins: [vuetify],
    },
  });

  it('testing default component props', () => {
    const returnedProps = wrapper.getComponent(VInlineAutocomplete).props();

    expect(returnedProps).toEqual(componentProps);
  });
});
