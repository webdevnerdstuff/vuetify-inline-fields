<template>
	<v-row>
		<v-col
			id="usage"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#usage"
				>#</a>
				Usage
			</h2>

			<v-row>
				<v-col cols="12">
					<CodeBlock
						:code="usageAll"
						:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
						label="Load all components"
						lang="javascript"
						:prismjs="codeBlockSettings.plugin === 'prismjs'"
						:theme="codeBlockSettings.theme"
					>
					</CodeBlock>
				</v-col>

				<v-col cols="12">
					<CodeBlock
						:code="usageIndividual"
						:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
						label="Load individual components"
						lang="javascript"
						:prismjs="codeBlockSettings.plugin === 'prismjs'"
						:theme="codeBlockSettings.theme"
					>
					</CodeBlock>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script setup>
import { computed, inject } from 'vue';


const props = defineProps({
	codeBlockOptions: {
		required: true,
		type: Object,
	},
});

const codeBlockSettings = computed(() => props.codeBlockOptions);
const classes = inject('classes');

const usageAll = `import { createApp } from 'vue';
import App from './App.vue';
import * as VInlineFields from '@wdns/vuetify-inline-fields';

const app = createApp(App);

for (const prop in VInlineFields) {
  app.component(prop, VInlineFields[prop]);
}

app.mount('#app');`;

const usageIndividual = `import { createApp } from 'vue';
import App from './App.vue';
import {
  VInlineCheckbox,
  VInlineSelect,
  VInlineSwitch,
  VInlineTextField,
  VInlineTextarea,
} from '@wdns/vuetify-inline-fields';

const app = createApp(App);

app.component('VInlineCheckbox', VInlineCheckbox);
app.component('VInlineSelect', VInlineSelect);
app.component('VInlineSwitch', VInlineSwitch);
app.component('VInlineTextField', VInlineTextField);
app.component('VInlineTextarea', VInlineTextarea);

app.mount('#app');`;
</script>
