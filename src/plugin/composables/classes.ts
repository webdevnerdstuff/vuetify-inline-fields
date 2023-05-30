import { UseDisplayContainerClass } from '@/types';
import { componentName } from '../utils/globals';

export const useDisplayContainerClass: UseDisplayContainerClass = (name, valueColor, options) => {
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

export const useFieldContainerClass = (name: string, active = false): object => {
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
