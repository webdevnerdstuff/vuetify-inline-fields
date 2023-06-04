<template>
	<v-icon
		v-if="modelValue"
		class="v-inline-fields--boolean-icons fa-fw"
		:color="iconTrueColor"
		:icon="iconTrue"
		size="x-small"
		:title="iconTrueTitle"
	></v-icon>
	<v-icon
		v-else
		class="v-inline-fields--boolean-icons fa-fw"
		:color="iconFalseColor"
		:icon="iconFalse"
		size="x-small"
		:title="iconFalseTitle"
	></v-icon>
</template>


<script setup lang="ts">
import {
	BooleanIcons
} from '@/types';

import { VIcon } from 'vuetify/components';

withDefaults(defineProps<BooleanIcons>(), {});

const modelValue = defineModel();
</script>

<style lang="scss">
</style>
