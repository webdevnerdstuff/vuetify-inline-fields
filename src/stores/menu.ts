import { defineStore } from 'pinia';
import { useCoreStore } from './index';


export const useMenuStore = defineStore('menu', () => {
	const coreStore = useCoreStore();
	const links = coreStore.links;

	const componentItems = [
		{
			href: '#components-v-inline-autocomplete',
			icon: 'mdi:mdi-format-list-bulleted',
			key: 'v-inline-autocomplete',
			link: `${links.vuetify}en/api/v-autocomplete/`,
			title: 'VInlineAutocomplete',
			topTitle: 'VAutocomplete',
		},
		{
			href: '#components-v-inline-checkbox',
			icon: 'mdi:mdi-checkbox-outline',
			key: 'v-inline-checkbox',
			link: `${links.vuetify}en/api/v-checkbox/`,
			title: 'VInlineCheckbox',
			topTitle: 'VCheckbox',
		},
		{
			href: '#components-v-inline-select',
			icon: 'mdi:mdi-format-list-bulleted',
			key: 'v-inline-select',
			link: `${links.vuetify}en/api/v-select/`,
			title: 'VInlineSelect',
			topTitle: 'VSelect',
		},
		{
			href: '#components-v-inline-switch',
			icon: 'mdi:mdi-toggle-switch-off-outline',
			key: 'v-inline-switch',
			link: `${links.vuetify}en/api/v-switch/`,
			title: 'VInlineSwitch',
			topTitle: 'VSwitch',
		},
		{
			href: '#components-v-inline-textarea',
			icon: 'mdi:mdi-text-long',
			key: 'v-inline-textarea',
			link: `${links.vuetify}en/api/v-textarea/`,
			title: 'VInlineTextarea',
			topTitle: 'VTextarea',
		},
		{
			href: '#components-v-inline-text-field',
			icon: 'mdi:mdi-minus',
			key: 'v-inline-text-field',
			link: `${links.vuetify}en/api/v-text-field/`,
			title: 'VInlineTextField',
			topTitle: 'VTextField',
		},
	];

	const vuetifyLinks = [
		{
			icon: 'mdi:mdi-github',
			key: 'vuetify-github',
			link: links.vuetifyGithub,
			title: 'Github',
		},
		{
			key: 'vuetify',
			link: `${links.vuetify}en/components/all/`,
			title: 'Vuetify Components',
		},
	];

	const menuItems = [
		{
			href: '#home',
			icon: 'mdi:mdi-home',
			title: 'Home',
		},
		{
			href: '#installation',
			icon: 'mdi:mdi-plus-thick',
			title: 'Installation',
		},
		{
			href: '#description',
			icon: 'mdi:mdi-information-outline',
			title: 'Description',
		},
		{
			href: '#usage',
			icon: 'mdi:mdi-power-plug-outline',
			title: 'Usage',
		},
		{
			href: '#example',
			icon: 'mdi:mdi-code-json',
			title: 'Example',
		},
		{
			href: '#components',
			icon: '$vuetify',
			items: [
				...componentItems,
				{
					href: '#components-v-inline-custom-field',
					icon: 'mdi:mdi-mushroom',
					key: 'v-inline-custom-field',
					title: 'VInlineCustomField',
					topTitle: 'VInlineCustomField',
				}
			],
			key: 'components',
			title: 'Components',
		},
		{
			href: '#props',
			icon: 'mdi:mdi-cog',
			items: [
				{
					href: '#props',
					icon: 'mdi:mdi-cog',
					key: 'shared-props',
					title: 'Props',
				},
				{
					href: '#props-shared',
					icon: 'mdi:mdi-share-all',
					key: 'shared-props',
					title: 'Shared',
				},
				{
					href: '#props-save-and-loading-icon',
					icon: 'mdi:mdi-content-save',
					key: 'props-save-and-loading-icon',
					title: 'Save &amp; Loading',
				},
				{
					href: '#props-prepend-append-icons',
					icon: 'mdi:mdi-arrow-left-right',
					key: 'props-prepend-append-icons',
					title: 'Prepend &amp; Append Icons',
				},
				{
					href: '#props-true-false-icon',
					icon: 'mdi:mdi-content-save',
					key: 'props-true-false-icon',
					title: 'True/False Icons',
				},
			],
			title: 'Props',
		},
		{
			href: '#events',
			icon: 'mdi:mdi-calendar-star',
			title: 'Events',
		},
		{
			href: '#slots',
			icon: 'mdi:mdi-slot-machine',
			title: 'Slots',
		},
		{
			href: '#playground',
			icon: 'mdi:mdi-seesaw',
			title: 'Playground',
		},
		{
			href: '#dependencies',
			icon: 'mdi:mdi-asterisk-circle-outline',
			title: 'Dependencies',
		},
		{
			href: '#license',
			icon: 'mdi:mdi-card-account-details-outline',
			title: 'License',
		},
		{
			href: '#legal',
			icon: 'mdi:mdi-scale-balance',
			title: 'Legal',
		},
	];

	return {
		componentItems,
		menuItems,
		vuetifyLinks,
	};
});
