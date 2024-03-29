<template>
	<v-app id="home">
		<!-- ====================================================== App Bar -->
		<AppBar
			@changed-theme="updateCodeBlockTheme"
			@updated-drawer="toggleDrawer"
		/>

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
		<v-main class="pb-10">
			<v-container class="px-7">
				<DocsPage :codeBlockOptions="codeBlockSettings" />
			</v-container>
		</v-main>
	</v-app>
</template>

<script setup>
import { provide, ref } from 'vue';
import { useDisplay } from 'vuetify';
import AppBar from './documentation/layout/AppBar.vue';
import MenuComponent from './documentation/components/MenuComponent.vue';
import DocsPage from './documentation/DocsPage.vue';
import { useCoreStore } from './stores/index';
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript.js';


const { smAndUp } = useDisplay();

const isSmAndUp = computed(() => smAndUp.value);
const store = useCoreStore();
const drawer = ref(isSmAndUp.value);
const drawerOptions = ref({
	absolute: false,
	color: '',
	elevation: 10,
});


const codeBlockPlugin = 'prismjs';
const codeBlockLightTheme = 'tomorrow';
const codeBlockDarkTheme = 'tomorrow';

const codeBlockSettings = ref({
	plugin: codeBlockPlugin,
	theme: codeBlockDarkTheme,
});

function updateCodeBlockTheme(val) {
	codeBlockSettings.value.theme = codeBlockLightTheme;

	if (val === 'dark') {
		codeBlockSettings.value.theme = codeBlockDarkTheme;
	}
}

provide('drawerOptions', drawerOptions);
provide('links', store.links);

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

		&:not(:hover, :focus) {
			opacity: 0;
		}
	}
}

.name-item:not(:hover, :focus) span {
	opacity: 0;
}

.v-divider {
	margin: 0;
}
</style>
