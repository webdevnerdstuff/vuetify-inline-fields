<template>
	<v-row>
		<v-col
			id="slots"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#slots"
				>#</a>
				Slots
			</h2>

			For component specific slots, please refer to the <a
				:href="store.links.vuetify"
				target="_blank"
			>Vuetify</a> documentation.
		</v-col>

		<v-col cols="12">
			<v-card>
				<v-table
					class="slots-table"
					hide-default-footer
				>
					<thead>
						<tr>
							<th width="20%">Name</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<!-- display.append slot -->
						<tr
							id="slots-display-append"
							:class="rowClass"
						>
							<td>
								<span class="name-item text-mono ml-n2">
									<span class="text-primary">#</span>
									<a
										class="text-primary"
										:class="classes.appLink"
										href="#slots-display-append"
									>display.append</a>
								</span>
							</td>
							<td>
								Slot that is appended to the displayed value
							</td>
						</tr>
						<tr>
							<td colspan="2">
								<CodeBlock
									:code="displaySlotsCode"
									:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
									lang="typescript"
									:prismjs="codeBlockSettings.plugin === 'prismjs'"
									:theme="codeBlockSettings.theme"
								/>
							</td>
						</tr>

						<!-- display.appendInner slot -->
						<tr
							id="slots-display-append-inner"
							:class="rowClass"
						>
							<td>
								<span class="name-item text-mono ml-n2">
									<span class="text-primary">#</span>
									<a
										class="text-primary"
										:class="classes.appLink"
										href="#slots-display-append-inner"
									>display.appendInner</a>
								</span>
							</td>
							<td>
								Slot that is appended inside the displayed value
							</td>
						</tr>
						<tr>
							<td colspan="2">
								<CodeBlock
									:code="displaySlotsCode"
									:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
									lang="typescript"
									:prismjs="codeBlockSettings.plugin === 'prismjs'"
									:theme="codeBlockSettings.theme"
								/>
							</td>
						</tr>

						<!-- display.prepend slot -->
						<tr
							id="slots-display-prepend"
							:class="rowClass"
						>
							<td>
								<span class="name-item text-mono ml-n2">
									<span class="text-primary">#</span>
									<a
										class="text-primary"
										:class="classes.appLink"
										href="#slots-display-prepend"
									>display.prepend</a>
								</span>
							</td>
							<td>
								Slot that is prepended to the displayed value
							</td>
						</tr>
						<tr>
							<td colspan="2">
								<CodeBlock
									:code="displaySlotsCode"
									:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
									lang="typescript"
									:prismjs="codeBlockSettings.plugin === 'prismjs'"
									:theme="codeBlockSettings.theme"
								/>
							</td>
						</tr>

						<!-- display.prependInner slot -->
						<tr
							id="slots-display-prepend-inner"
							:class="rowClass"
						>
							<td>
								<span class="name-item text-mono ml-n2">
									<span class="text-primary">#</span>
									<a
										class="text-primary"
										:class="classes.appLink"
										href="#slots-display-prepend-inner"
									>display.prependInner</a>
								</span>
							</td>
							<td>
								Slot that is prepended inside the displayed value
							</td>
						</tr>
						<tr>
							<td colspan="2">
								<CodeBlock
									:code="displaySlotsCode"
									:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
									lang="typescript"
									:prismjs="codeBlockSettings.plugin === 'prismjs'"
									:theme="codeBlockSettings.theme"
								/>
							</td>
						</tr>

					</tbody>
				</v-table>
			</v-card>
		</v-col>
	</v-row>
</template>

<script setup>
import { inject } from 'vue';
import { useCoreStore } from '@/stores/index';

const props = defineProps({
	codeBlockOptions: {
		required: true,
		type: Object,
	},
});

const codeBlockSettings = computed(() => props.codeBlockOptions);
const store = useCoreStore();
const classes = inject('classes');
const theme = useTheme();
const isDark = ref(true);


watch(() => theme.global.current.value.dark, (val) => {
	isDark.value = val;
});

const rowClass = computed(() => {
	return isDark.value ? 'bg-grey-darken-3' : 'bg-grey-lighten-3';
});

const displaySlotsCode = `{
  displayValue: any,
  empty: boolean,
  error: boolean | undefined,
}`;


</script>

<style lang="scss">
.slots-table {
	td {
		line-height: 2rem !important;

		> div {
			padding: 0.5rem 0 !important;
		}
	}
}
</style>
