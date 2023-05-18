<template>
	<v-app-bar
		class="top-app-bar"
		color="primary"
		density="compact"
		fixed
	>
		<v-app-bar-nav-icon
			v-if="!isPlayground"
			class="nav-drawer-btn me-2 ms-3"
			:height="iconSize.height"
			:width="iconSize.width"
			@click.stop="toggleDrawer"
		>
			<!-- @click.stop="toggleDrawer" -->
			<v-icon>mdi-menu</v-icon>
		</v-app-bar-nav-icon>
		<v-app-bar-nav-icon
			v-else
			class="nav-drawer-btn me-2 ms-3"
			:height="iconSize.height"
			:href="`/${store.storageName}/`"
			:width="iconSize.width"
		>
			<v-icon>mdi-home</v-icon>
		</v-app-bar-nav-icon>

		<div class="site-title">Vuetify Inline Fields</div>

		<v-spacer></v-spacer>

		<v-btn
			v-if="isPlayground"
			class="me-2"
			:href="`${links.vuetify}en/api/v-text-field/`"
			target="_blank"
			title="Vuetify v-text-field API"
			variant="outlined"
		>
			<v-icon class="me-1">mdi-vuetify</v-icon> VTextField
		</v-btn>

		<v-btn
			v-if="isPlayground"
			class="me-2"
			:height="iconSize.height"
			:href="`${links.vuetify}en/components/all/`"
			icon
			target="_blank"
			:width="iconSize.width"
		>
			<v-icon>mdi-vuetify</v-icon>
		</v-btn>

		<v-btn
			class="me-2"
			:height="iconSize.height"
			:href="links.github"
			icon
			target="_blank"
			:width="iconSize.width"
		>
			<v-icon>mdi-github</v-icon>
		</v-btn>

		<v-btn
			class="me-2"
			:height="iconSize.height"
			:href="links.npm"
			icon
			target="_blank"
			:width="iconSize.width"
		>
			<v-icon>mdi-npm</v-icon>
		</v-btn>

		<v-btn
			class="me-3"
			:height="iconSize.height"
			icon
			:width="iconSize.width"
			@click="setTheme"
		>
			<v-icon v-if="themeName === 'dark'">mdi-weather-night</v-icon>
			<v-icon v-else>mdi-weather-sunny</v-icon>
		</v-btn>
	</v-app-bar>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useCoreStore } from '@/stores/index';
import { useTheme } from 'vuetify';

const emit = defineEmits(['changedTheme', 'updatedDrawer']);

defineProps({
	isPlayground: {
		default: false,
		type: Boolean,
	},
});

const store = useCoreStore();
const theme = useTheme();

const links = store.links;
const themeName = ref('dark');
const drawer = ref(true);

const iconSize = ref({
	height: 32,
	width: 32,
});

onMounted(() => {
	getTheme();
});

function getTheme() {
	themeName.value = store.getTheme();
	if (!themeName.value) {
		setTheme();
		return false;
	}

	theme.global.name.value = themeName.value;
	emit('changedTheme', themeName.value);
}

function setTheme() {
	themeName.value = store.setTheme(themeName.value);
	theme.global.name.value = themeName.value;
}

function toggleDrawer() {
	emit('updatedDrawer', drawer.value);
}
</script>

<style lang="scss">
</style>
