import {
	UseDisplayContainerClass,
	UseDisplayInputControlClass,
	UseDisplaySelectionControlClass,
	UseDisplayValueClass,
	UseFieldContainerClass,
	UseInlineFieldsContainerClass,
} from '@/types';
import { componentName } from '../utils/globals';


// ------------------------------------------------ Main Container //
export const useInlineFieldsContainerClass: UseInlineFieldsContainerClass = (options) => {
	const { field = '', density = '', tableField = false } = options;

	return {
		[`${componentName}--container`]: true,
		[`${componentName}--container-inline-${field}`]: true,
		[`${componentName}--container-inline-${field}-${density}`]: true,
		[`${componentName}--container-inline-table-centered`]: tableField,
	};
};


// ------------------------------------------------ Display Value Container //
export const useDisplayContainerClass: UseDisplayContainerClass = (options) => {
	const { field = '', density = '' } = options;

	return {
		[`${componentName}`]: true,
		[`${componentName}--container-display-container`]: true,
		[`${field}`]: true,
		'v-input': true,
		[`v-input--density-${density}`]: true,
		'v-input--horizontal': false,
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
		'v-selection-control': true,
		[`v-selection-control--density-${density}`]: true,
	};
};

export const useDisplayValueClass: UseDisplayValueClass = (name, valueColor, options) => {
	const { disabled = false, error = false, empty = false } = options;

	return {
		[`${componentName}`]: true,
		[`${componentName}--disabled`]: unref(disabled),
		[`${componentName}--display-value-${name}`]: true,
		[`${componentName}--display-value`]: true,
		[`${componentName}--display-value-empty`]: unref(empty),
		[`text-${valueColor}`]: !unref(error),
		'text-danger': unref(error),
	};
};


// ------------------------------------------------ Field Container //
export const useFieldContainerClass: UseFieldContainerClass = (options): object => {
	const { name, active = false } = options;

	return {
		[`${componentName}`]: true,
		[`${componentName}--field-value-${name}`]: true,
		[`${componentName}--field-value`]: true,
		[`${componentName}--field-active`]: active,
	};
};

export const useSaveFieldsContainerClass = (): object => {
	return {
		[`${componentName}--save-fields-container`]: true,
		'align-center': true,
		'd-flex': true,
	};
};
