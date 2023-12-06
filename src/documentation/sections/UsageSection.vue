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
						:code="usageGlobalPlugin"
						:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
						lang="javascript"
						:prismjs="codeBlockSettings.plugin === 'prismjs'"
						:theme="codeBlockSettings.theme"
					>
						<template #label>
							Global Plugin Registration
							<br>
							<i>Global options have a higher precedence and will override local props</i>
						</template>
					</CodeBlock>
				</v-col>
			</v-row>

			<v-row>
				<v-col cols="12">
					<CodeBlock
						:code="usageAll"
						:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
						label="Global Component Registration"
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
						label="Global Individual Component Registration"
						lang="javascript"
						:prismjs="codeBlockSettings.plugin === 'prismjs'"
						:theme="codeBlockSettings.theme"
					>
					</CodeBlock>
				</v-col>

				<v-col cols="12">
					<CodeBlock
						:code="usageLocal"
						:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
						label="Local Registration"
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

const usageGlobalPlugin = `import { createApp } from 'vue';
import App from './App.vue';
import { createVInlineFields } from '@wdns/vuetify-inline-fields';

const VInlineFields = createVInlineFields({
  // See Shared Props section for available options
});

const app = createApp(App);

app.plugin(VInlineFields);

app.mount('#app');`;

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

const usageLocal = `import {
  VInlineCheckbox,
  VInlineSelect,
  VInlineSwitch,
  VInlineTextField,
  VInlineTextarea,
} from '@wdns/vuetify-inline-fields';
`;
</script>
