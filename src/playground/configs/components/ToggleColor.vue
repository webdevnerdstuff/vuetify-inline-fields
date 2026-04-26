<template>
	<v-btn-toggle
		v-model="selectedColor"
		density="compact"
		divided
	>
		<v-btn
			v-for="(themeColor, themeName) in themeColors"
			:key="themeName"
			:color="themeColor"
			size="small"
			:value="themeName"
			@click="emitUpdate"
		>{{ themeName }}</v-btn>
	</v-btn-toggle>
</template>

<script setup lang="ts">
/* eslint-disable vue/sort-keys */
import {
	ref,
	unref,
} from 'vue';
import { useTheme } from 'vuetify';


const emit = defineEmits(['update']);
const theme = useTheme();

const selectedColor = ref('primary');
const { colors } = unref(theme.current);

const themeColors = ref({
	primary: String(colors.primary),
	secondary: String(colors.secondary),
	success: String(colors.success),
	accent: String(colors.accent),
	info: String(colors.info),
	warning: String(colors.warning),
	danger: String(colors.danger),
	error: String(colors.error),
});

function emitUpdate() {
	emit('update', selectedColor.value);
}
</script>
