<template>
	<div class="v-inline-fields--display-wrapper">

		<!-- Prepend Icon -->
		<div
			v-if="displayPrependIcon || slots['display.prepend']"
			:class="prependAppendIconClasses('prepend')"
			:style="prependAppendIconStyles"
		>
			<slot
				v-if="slots['display.prepend']"
				v-bind="slotBindings"
				name="display.prepend"
			/>
			<v-icon
				v-else
				:color="displayPrependIconColor"
				:icon="displayPrependIcon"
				size="x-small"
			></v-icon>
		</div>
		<div
			class="d-inline-flex"
			:class="displayValueClass"
			:style="displayValueStyle"
			@click="toggleField"
		>
			<!-- Prepend Inner Icon -->
			<div
				v-if="displayPrependInnerIcon || slots['display.prependInner']"
				:class="prependAppendIconClasses('prepend', true)"
			>
				<slot
					v-if="slots['display.prependInner']"
					v-bind="slotBindings"
					name="display.prependInner"
				/>
				<v-icon
					v-else
					:color="displayPrependInnerIconColor"
					:icon="displayPrependInnerIcon"
					size="x-small"
				></v-icon>
			</div>

			{{ displayValue }}

			<!-- Append Inner Icon -->
			<div
				v-if="displayAppendInnerIcon || slots['display.appendInner']"
				:class="prependAppendIconClasses('append', true)"
			>
				<slot
					v-if="slots['display.appendInner']"
					v-bind="slotBindings"
					name="display.appendInner"
				/>
				<v-icon
					v-else
					:color="displayAppendInnerIconColor"
					:icon="displayAppendInnerIcon"
					size="x-small"
				></v-icon>
			</div>
		</div>

		<!-- Append Icon -->
		<div
			v-if="displayAppendIcon || slots['display.append']"
			:class="prependAppendIconClasses('append')"
			:style="prependAppendIconStyles"
		>
			<slot
				v-if="slots['display.append']"
				v-bind="slotBindings"
				name="display.append"
			/>
			<v-icon
				v-else
				:color="displayAppendIconColor"
				:icon="displayAppendIcon"
				size="x-small"
			></v-icon>
		</div>
	</div>
</template>


<script setup lang="ts">
import { DisplayValueProps } from '@/types';
import { useTheme } from 'vuetify';
import {
	useDisplayValueClass,
	usePrependAppendIconClasses,
} from '@/plugin/composables/classes';
import {
	useDisplayValueStyles,
	usePrependAppendIconStyles,
} from '@/plugin/composables/styles';


const emit = defineEmits(['toggleField']);
const props = defineProps<DisplayValueProps>();
const slots = useSlots();
const theme = useTheme();

const slotBindings = {
	displayValue: props.displayValue,
	empty: props.empty,
	error: props.error,
};

const displayValueClass = computed(() => useDisplayValueClass(
	props.field,
	props.valueColor,
	{
		empty: props.empty,
		error: props.error,
	}
));

const displayValueStyle = computed(() => useDisplayValueStyles({
	color: props.color,
	error: props.error,
	theme,
	underlineColor: props.underlineColor,
	underlineStyle: props.underlineStyle,
	underlineWidth: props.underlineWidth,
	underlined: props.underlined,
}));

const prependAppendIconStyles = computed(() => usePrependAppendIconStyles({
	underlineWidth: props.underlineWidth,
}));

const prependAppendIconClasses = (position: string, inner = false) => usePrependAppendIconClasses({
	inner,
	position,
});

function toggleField() {
	emit('toggleField');
}

</script>
