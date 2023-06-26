import {
	UseCancelButtonClass,
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
	const { field = '', density = '', disabled = false, iconSet = 'mdi', loading = false, loadingWait, tableField = false } = options;

	return {
		[`${componentName}`]: true,
		[`${componentName}--container`]: true,
		[`${componentName}--container-disabled`]: unref(disabled),
		[`${componentName}--container-table`]: tableField,
		[`${componentName}--container-icon-set-${iconSet}`]: true,
		[`${componentName}--container-loading`]: loading && loadingWait,
		[`${componentName}--container-${field}`]: true,
		[`${componentName}--container-${field}-${density}`]: true,
		[`vi-${field}`]: true,
		[`vi-${field}-${density}`]: true,
	};
};


// ------------------------------------------------ Display Value Container //
export const useDisplayContainerClass: UseDisplayContainerClass = (options) => {
	const { field = '', density = '' } = options;

	return {
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
		// 'v-selection-control': true,
		[`v-selection-control--density-${density}`]: true,
	};
};

export const useDisplayValueClass: UseDisplayValueClass = (name, valueColor, options) => {
	const { error = false, empty = false } = options;

	return {
		[`${componentName}`]: true,
		[`${componentName}--display-value-${name}`]: true,
		[`${componentName}--display-value`]: true,
		[`${componentName}--display-wrapper-value-empty`]: unref(empty),
		[`text-${valueColor}`]: !unref(error),
		'text-danger': unref(error),
	};
};


// ------------------------------------------------ Field Container //
export const useFieldContainerClass: UseFieldContainerClass = (options): object => {
	const { name, active = false } = options;

	return {
		[`${componentName}`]: true,
		[`${componentName}--field`]: true,
		[`${componentName}--field-${name}`]: true,
		[`${componentName}--field-active`]: active,
	};
};


// ------------------------------------------------ Save Field Buttons //
export const useSaveFieldsContainerClass = (): object => {
	return {
		[`${componentName}--save-fields-container`]: true,
		'align-center': true,
		'd-flex': true,
	};
};

export const useCancelButtonClass: UseCancelButtonClass = (options): object => {
	const { cancelButtonVariant } = options;

	return {
		'me-1': cancelButtonVariant === 'elevated',
		'ms-1': true,
	};
};
