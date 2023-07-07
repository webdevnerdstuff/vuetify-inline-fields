<template>
	<div class="v-inline-fields--display-wrapper">

		<!-- Prepend Icon -->
		<div
			v-if="displayPrependIcon"
			:class="prependAppendIconClasses('prepend')"
			:style="prependAppendIconStyles"
		>
			<v-icon
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
				v-if="displayPrependInnerIcon"
				:class="prependAppendIconClasses('prepend', true)"
			>
				<v-icon
					:color="displayPrependInnerIconColor"
					:icon="displayPrependInnerIcon"
					size="x-small"
				></v-icon>
			</div>

			{{ displayValue }}

			<!-- Append Inner Icon -->
			<div
				v-if="displayAppendInnerIcon"
				:class="prependAppendIconClasses('append', true)"
			>
				<v-icon
					:color="displayAppendInnerIconColor"
					:icon="displayAppendInnerIcon"
					size="x-small"
				></v-icon>
			</div>
		</div>

		<!-- Append Icon -->
		<div
			v-if="displayAppendIcon"
			:class="prependAppendIconClasses('append')"
			:style="prependAppendIconStyles"
		>
			<v-icon
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
const theme = useTheme();

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
