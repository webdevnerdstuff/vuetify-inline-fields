<template>
	<v-row>
		<v-col
			id="components-props"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#props"
				>#</a>
				Components
			</h2>

			<div>
				Most of the Vuetify props for each component work as intended. Any specified props below may have different
				default values. Please refer to the <a
					:href="store.links.vuetify"
					target="_blank"
				>Vuetify</a> documentation for each components specific props.
			</div>
		</v-col>

		<CheckboxComponent :codeBlockOptions="codeBlockOptions" />
		<SelectComponent :codeBlockOptions="codeBlockOptions" />
		<SwitchComponent :codeBlockOptions="codeBlockOptions" />
		<TextareaComponent :codeBlockOptions="codeBlockOptions" />
		<TextFieldComponent :codeBlockOptions="codeBlockOptions" />
		<CustomComponent :codeBlockOptions="codeBlockOptions" />
	</v-row>
</template>

<script setup>
import { inject } from 'vue';
import { useCoreStore } from '@/stores/index';

import {
	CheckboxComponent,
	CustomComponent,
	SelectComponent,
	SwitchComponent,
	TextareaComponent,
	TextFieldComponent,
} from '@/documentation/components/index';


defineProps({
	codeBlockOptions: {
		required: true,
		type: Object,
	},
});

const classes = inject('classes');
const store = useCoreStore();
</script>

<style lang="scss" scoped>
.switch-label {
	:deep(.v-label) {
		opacity: 1 !important;

		.boolean-color {
			font-weight: 500;
		}
	}
}
</style>
