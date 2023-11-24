import {
	UseCancelButtonClass,
	UseCardContainerClass,
	UseDisplayContainerClass,
	UseDisplayInputControlClass,
	UseDisplaySelectionControlClass,
	UseDisplayValueClass,
	UseFieldContainerClass,
	UseInlineFieldsContainerClass,
	UsePrependAppendIconClasses,
} from '@/types';
import { componentName } from '../utils/globals';


// -------------------------------------------------- Main Container //
export const useInlineFieldsContainerClass: UseInlineFieldsContainerClass = (options) => {
	const { cell = false, field = '', density = '', disabled = false, iconSet = 'mdi', loading = false, loadingWait, tableField = false, variant } = options;

	const hasDensityAndVariant = density && variant;

	return {
		[`${componentName}`]: true,
		[`${componentName}--container`]: true,
		[`${componentName}--container-cell`]: cell,
		[`${componentName}--container-disabled`]: unref(disabled),
		[`${componentName}--container-table`]: tableField,
		[`${componentName}--container-icon-set-${iconSet}`]: true,
		[`${componentName}--container-loading`]: loading && loadingWait,
		// Field //
		[`${componentName}--container-${field}`]: true,
		[`${componentName}--container-${field}-${density}`]: true,
		[`${componentName}--container-${field}-${density}-${variant}`]: hasDensityAndVariant,
		[`${componentName}--container-${field}-${variant}`]: variant,
		[`${componentName}--container-${field}-${variant}-${density}`]: hasDensityAndVariant,

		// Density //
		[`${componentName}--container-${density}`]: density,
		[`${componentName}--container-${density}-${field}`]: density,
		[`${componentName}--container-${density}-${variant}`]: hasDensityAndVariant,

		// Variant //
		[`${componentName}--container-${variant}`]: variant,
		[`${componentName}--container-${variant}-${density}`]: hasDensityAndVariant,
		[`${componentName}--container-${variant}-${field}`]: variant,
	};
};


// -------------------------------------------------- Display Value Container //
export const useDisplayContainerClass: UseDisplayContainerClass = (options) => {
	const { cell = false, cellUnderlineFullWidth = true, field = '', density = '' } = options;

	return {
		[`${componentName}--display-container-cell`]: cell,
		[`${componentName}--display-container-cell-underline-full-width`]: cell && cellUnderlineFullWidth,
		[`${componentName}--display-container`]: true,
		[`${componentName}--display-wrapper-value`]: true,
		[`${field}`]: true,
		'v-input': true,
		[`v-input--density-${density}`]: true,
		'v-input--horizontal': true,
	};
};

export const useDisplayInputControlClasses: UseDisplayInputControlClass = (options) => {
	const { density = '', variant = '' } = options;

	return {
		'v-input': true,
		'v-input--dirty': true,
		'v-input--horizontal': true,
		'v-text-field': true,
		[`v-input--density-${density}`]: true,
		[`v-text-field--plain-${variant}`]: true,
	};
};

export const useDisplaySelectionControlClasses: UseDisplaySelectionControlClass = (options) => {
	const { density = '' } = options;

	return {
		[`${componentName}--selection-control`]: true,
		[`v-selection-control--density-${density}`]: true,
	};
};

export const useDisplayValueClass: UseDisplayValueClass = (name, valueColor, options) => {
	const { error = false, empty = false } = options;

	return {
		[`${componentName}`]: true,
		[`${componentName}--display-value-${name}`]: true,
		[`${componentName}--display-value`]: true,
		[`${componentName}--display-value-empty`]: unref(empty),
		[`text-${valueColor}`]: !unref(error),
		'text-danger': unref(error),
	};
};

// ------------------------ Prepend/Append Icons //
export const usePrependAppendIconClasses: UsePrependAppendIconClasses = (options) => {
	const { inner = false, position } = options;

	return {
		[`${componentName}--display-icon`]: !inner,
		[`${componentName}--display-${position}-icon`]: !inner,
		[`${componentName}--display-${position}-inner-icon`]: inner,
		'me-1': position === 'prepend',
		'ms-1': position === 'append',
	};
};


// -------------------------------------------------- Field Container //
export const useFieldContainerClass: UseFieldContainerClass = (options) => {
	const { name, active = false } = options;

	return {
		[`${componentName}`]: true,
		[`${componentName}--field`]: true,
		[`${componentName}--field-${name}`]: true,
		[`${componentName}--field-active`]: active,
	};
};


// -------------------------------------------------- Save Field Buttons //
export const useSaveFieldsContainerClass = (): object => {
	return {
		[`${componentName}--save-fields-container`]: true,
	};
};

export const useCancelButtonClass: UseCancelButtonClass = (options) => {
	const { cancelButtonVariant } = options;

	return {
		'me-1': cancelButtonVariant === 'elevated',
		'ms-1': true,
	};
};


// -------------------------------------------------- Card Field //
export const useCardContainerClass: UseCardContainerClass = (options) => {
	const { name, showField } = options;

	return {
		[`${componentName}--card-container`]: true,
		[`${componentName}--card-container-${name}`]: true,
		'd-none': !showField,
	};
};
