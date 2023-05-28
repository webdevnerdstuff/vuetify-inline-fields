<template>
	<v-icon
		v-if="modelValue"
		class="fa-fw"
		:color="iconTrueColor"
		:icon="iconTrue"
		:title="iconTrueTitle"
	></v-icon>
	<v-icon
		v-else
		class="fa-fw"
		:color="iconFalseColor"
		:icon="iconFalse"
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
