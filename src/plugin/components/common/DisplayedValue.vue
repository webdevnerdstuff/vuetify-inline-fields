<template>
	<div
		class="v-inline-fields--display-wrapper"
		@click="toggleField"
	>

		<!-- Prepend Icon -->
		<div
			v-if="settings.displayPrependIcon != null || slots['display.prepend']"
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
				:color="settings.displayPrependIconColor"
				:icon="settings.displayPrependIcon"
				:size="settings.displayPrependIconSize"
			></v-icon>
		</div>
		<div
			class="d-inline-flex"
			:class="displayValueClass"
			:style="displayValueStyle"
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
					:color="settings.displayPrependInnerIconColor"
					:icon="settings.displayPrependInnerIcon"
					:size="settings.displayPrependInnerIconSize"
				></v-icon>
			</div>

			{{ displayValue }}

			<!-- Append Inner Icon -->
			<div
				v-if="settings.displayAppendInnerIcon != null || slots['display.appendInner']"
				:class="prependAppendIconClasses('append', true)"
			>
				<slot
					v-if="slots['display.appendInner']"
					v-bind="slotBindings"
					name="display.appendInner"
				/>
				<v-icon
					v-else
					:color="settings.displayAppendInnerIconColor"
					:icon="settings.displayAppendInnerIcon"
					:size="settings.displayAppendInnerIconSize"
				></v-icon>
			</div>
		</div>

		<!-- Append Icon -->
		<div
			v-if="settings.displayAppendIcon != null || slots['display.append']"
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
				:color="settings.displayAppendIconColor"
				:icon="settings.displayAppendIcon"
				:size="settings.displayAppendIconSize"
			></v-icon>
		</div>
	</div>
</template>


<script setup lang="ts">
import { DisplayValueProps } from './';
import { useTheme } from 'vuetify';
import {
	useDisplayValueClass,
	usePrependAppendIconClasses,
} from '@composables/classes';
import {
	useDisplayValueStyles,
	usePrependAppendIconStyles,
} from '@composables/styles';


const attrs = useAttrs();
const emit = defineEmits(['toggleField']);
const props = defineProps<DisplayValueProps>();
const slots = useSlots();
const theme = useTheme();

const settings = reactive({ ...attrs, ...props });

watchEffect(() => {
	Object.assign(settings, { ...attrs, ...props });
});

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
