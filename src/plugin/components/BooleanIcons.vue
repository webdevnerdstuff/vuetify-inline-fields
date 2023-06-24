<template>
	<v-icon
		v-if="modelValue"
		class="v-inline-fields--boolean-icons fa-fw"
		:color="iconTrueColor"
		:icon="theTrueIcon"
		size="x-small"
		:title="iconTrueTitle"
	></v-icon>
	<v-icon
		v-else
		class="v-inline-fields--boolean-icons fa-fw"
		:color="iconFalseColor"
		:icon="theFalseIcon"
		size="x-small"
		:title="iconFalseTitle"
	></v-icon>
</template>


<script setup lang="ts">
import { BooleanIcons } from '@/types';
import { useGetIcon } from '../composables/icons';
import type { IconOptions } from 'vuetify';

import { VIcon } from 'vuetify/components';

const props = withDefaults(defineProps<BooleanIcons>(), {});
const iconOptions = inject<IconOptions>(Symbol.for('vuetify:icons'));

const modelValue = defineModel();

const theFalseIcon = computed(() => {
	return useGetIcon({
		icon: props.iconFalse,
		iconOptions,
		name: 'false',
	});
});

const theTrueIcon = computed(() => {
	return useGetIcon({
		icon: props.iconTrue,
		iconOptions,
		name: 'true',
	});
});
</script>

<style lang="scss">
</style>
