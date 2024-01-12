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
	primary: colors.primary,
	secondary: colors.secondary,
	success: colors.success,
	accent: colors.accent,
	info: colors.info,
	warning: colors.warning,
	danger: colors.danger,
	error: colors.error,
});

function emitUpdate() {
	emit('update', selectedColor.value);
}
</script>
