<template>
	<v-app id="home">
		<!-- ====================================================== App Bar -->
		<AppBar @updated-drawer="toggleDrawer" />

		<!-- ====================================================== Navigation Drawer -->
		<v-navigation-drawer
			v-model="drawer"
			:absolute="drawerOptions.absolute"
			:color="drawerOptions.color"
			:elevation="drawerOptions.elevation"
		>
			<MenuComponent :drawerOptions="drawerOptions" />
		</v-navigation-drawer>

		<!-- ====================================================== Main Container -->
		<v-main class="main-container pb-10">
			<v-responsive>
				<v-container class="px-10">
					<DocsComponent />
				</v-container>
			</v-responsive>
		</v-main>
	</v-app>
</template>

<script setup>
import { provide, ref } from 'vue';
import AppBar from './documentation/layout/AppBar.vue';
import MenuComponent from './documentation/MenuComponent.vue';
import DocsComponent from './documentation/DocsComponent.vue';
import { useCoreStore } from './stores/index';

const store = useCoreStore();

const drawer = ref(true);
const drawerOptions = ref({
	absolute: false,
	color: '',
	elevation: 10,
});
const links = store.links;

const menuItems = reactive([
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
		href: '#props',
		icon: 'mdi:mdi-cog',
		items: [
			{
				href: '#props',
				icon: 'mdi:mdi-checkbox-outline',
				key: 'shared-props',
				title: 'Props',
			},
			{
				href: '#props-shared',
				icon: 'mdi:mdi-checkbox-outline',
				key: 'shared-props',
				title: 'Shared Props',
			},
		],
		title: 'Props',
	},
	{
		href: '#components',
		icon: 'mdi:mdi-cog',
		items: [
			{
				icon: 'mdi:mdi-github',
				key: 'vuetify-github',
				link: links.vuetifyGithub,
				title: 'Github',
			},
			{
				key: 'vuetify',
				link: `${links.vuetify}en/components/all/`,
				title: 'Components',
			},
			{
				href: '#components-props',
				icon: 'mdi:mdi-checkbox-outline',
				key: 'shared-props',
				title: 'Props',
			},
			{
				href: '#components-shared-props',
				icon: 'mdi:mdi-checkbox-outline',
				key: 'shared-props',
				title: 'Shared Props',
			},
			{
				href: '#components-v-inline-checkbox',
				icon: 'mdi:mdi-checkbox-outline',
				key: 'v-checkbox',
				link: `${links.vuetify}en/api/v-checkbox/`,
				title: 'VCheckbox',
			},
			{
				href: '#components-v-inline-select',
				icon: 'mdi:mdi-format-list-bulleted',
				key: 'v-select',
				link: `${links.vuetify}en/api/v-select/`,
				title: 'VSelect',
			},
			{
				href: '#components-v-inline-switch',
				icon: 'mdi:mdi-toggle-switch-off-outline',
				key: 'v-switch',
				link: `${links.vuetify}en/api/v-switch/`,
				title: 'VSwitch',
			},
			{
				href: '#components-v-inline-textarea',
				icon: 'mdi:mdi-text-long',
				key: 'v-textarea',
				link: `${links.vuetify}en/api/v-textarea/`,
				title: 'VTextarea',
			},
			{
				href: '#components-v-inline-textfield',
				icon: 'mdi:mdi-minus',
				key: 'v-text-field',
				link: `${links.vuetify}en/api/v-text-field/`,
				title: 'VTextField',
			},
		],
		key: 'components',
		title: 'Components',
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
		href: '#sass-variables',
		icon: 'mdi:mdi-sass',
		title: 'SASS Variables',
	},
	{
		href: '#example',
		icon: 'mdi:mdi-code-json',
		title: 'Example',
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
]);

provide('drawerOptions', drawerOptions);
provide('links', store.links);
provide('menuItems', menuItems);

function toggleDrawer() {
	drawer.value = !drawer.value;
}
</script>

<style lang="scss">
html {
	scroll-behavior: smooth;
	scroll-padding-top: 70px;
}

.top-app-bar {
	z-index: 99 !important;

	.nav-drawer-btn {
		.nav-drawer-icon {
			height: 18px;
			width: 18px;
		}
	}
}

.v-heading {
	position: relative;

	> a {
		color: rgb(var(--v-theme-primary));
		display: inline-block;
		inset: 0;
		margin: 0 -0.7em;
		position: absolute;

		&:not(:hover):not(:focus) {
			opacity: 0;
		}
	}
}

.name-item:not(:hover):not(:focus) span {
	opacity: 0;
}

.v-divider {
	margin: 0;
}
</style>
