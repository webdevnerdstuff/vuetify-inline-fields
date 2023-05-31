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
