<template>
	<v-col
		id="components-v-inline-custom-field"
		class="mb-5"
		cols="12"
	>
		<h2
			class="mb-0"
			:class="classes.h2"
		>
			<a
				:class="classes.headerA"
				href="#components-v-inline-custom-field"
			>#</a>
			VInlineCustomField
		</h2>
		With the <code class="ic">VInlineCustomField</code> component, you can add your own fields by using the <code
			class="ic"
		>default</code> slot. This slot has all of the settings and the <code class="ic">originalValue</code> bound to it.
	</v-col>

	<v-col cols="12">
		<v-card>
			<v-card-title>Component using the <code class="ic">v-slider</code> field</v-card-title>
			<v-card-text>
				<v-row>
					<v-col
						class="d-flex align-top"
						cols="2"
					>
						<VInlineCustomField
							v-model="range"
							:loading="loading"
							:loading-wait="false"
						>
							<template #default="">
								<v-slider
									v-model="range"
									show-ticks
									step="10"
								></v-slider>
							</template>
						</VInlineCustomField>
					</v-col>

					<v-col cols="2">
						<div>
							<v-slider
								v-model="range"
								show-ticks
								step="10"
							></v-slider>
						</div>
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>
	</v-col>

	<v-col
		id="inline-custom-field-props"
		cols="12"
	>
		<h3 :class="classes.h3">
			<a
				:class="classes.headerA"
				href="#inline-custom-field-props"
			>#</a>
			Props
		</h3>
	</v-col>

	<v-col cols="12">
		Most of the <a href="#props-shared">shared props</a> can be used with this component. The <a
			href="#props-save-and-loading-icon"
		>Save &amp; Loading Icon</a> props will most likely be the most useful if you need them.
	</v-col>

	<v-col cols="12">
		<CodeBlock
			class="mb-6"
			:code="exampleCode"
			:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
			label="Basic Example"
			lang="html"
			:prismjs="codeBlockSettings.plugin === 'prismjs'"
			:theme="codeBlockSettings.theme"
		></CodeBlock>
	</v-col>
</template>

<script setup>
import { computed, inject, ref } from 'vue';


const props = defineProps({
	codeBlockOptions: {
		required: true,
		type: Object,
	},
});

const codeBlockSettings = computed(() => props.codeBlockOptions);
const classes = inject('classes');

const loading = ref(false);
const range = ref(50);

const exampleCode = `<template>
  <VInlineCustomField
    v-model="range"
    :loading="loading"
  >
    <template #default="settings">
      <v-slider
        v-model="range"
        show-ticks
        step="10"
      >
      </v-slider>
    <\/template>
  <\/VInlineCustomField>
<\/template>

<script setup>
import { ref } from 'vue';

const range = ref(50);
const loading = ref(false);
<\/script>`;
</script>

<style lang="scss" scoped>
</style>
