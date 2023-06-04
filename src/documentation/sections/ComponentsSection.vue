<template>
	<v-row>
		<v-col
			id="components-props"
			class="mb-5"
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

		<CheckboxComponent />
		<SelectComponent />
		<SwitchComponent />
		<TextareaComponent />
		<TextFieldComponent />
	</v-row>
</template>

<script setup>
import { inject } from 'vue';
import { useCoreStore } from '@/stores/index';

import {
	CheckboxComponent,
	SelectComponent,
	SwitchComponent,
	TextareaComponent,
	TextFieldComponent,
} from '@/documentation/components/index';

const classes = inject('classes');
const store = useCoreStore();
</script>

<style lang="scss" scoped>
:deep(code) {
	background-color: rgba(255, 255, 255, 0.1) !important;
	border-radius: 3px;
	font-size: 85%;
	font-weight: normal;
	padding: 0.2em 0.4em;
}

:deep(.v-theme--light) {
	code {
		background-color: rgba(0, 0, 0, 0.1) !important;
	}
}

:deep(.v-input__details) {
	max-height: 10px;
	min-height: 10px;
}

.switch-label {
	:deep(.v-label) {
		opacity: 1 !important;

		.boolean-color {
			font-weight: 500;
		}
	}
}
</style>
