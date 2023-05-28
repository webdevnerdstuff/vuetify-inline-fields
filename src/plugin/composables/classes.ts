import { componentName } from '../utils/globals';

export const useDisplayContainerClass = (name: string, valueColor: string, disabled = false, error = false, empty = false,) => {
	return {
		[`${componentName}`]: true,
		[`${componentName}--disabled`]: disabled,
		[`${componentName}--display-value-${name}`]: true,
		[`${componentName}--display-value`]: true,
		[`${componentName}--display-value-empty`]: empty,
		[`text-${valueColor}`]: !error,
		'text-danger': error,
	};
};

export const useFieldContainerClass = (name: string, active = false) => {
	return {
		[`${componentName}`]: true,
		[`${componentName}--field-value-${name}`]: true,
		[`${componentName}--field-value`]: true,
		[`${componentName}--field-active`]: active,
	};
};

export const useSaveFieldsContainerClass = () => {
	return {
		[`${componentName}--save-fields-container`]: true,
		'align-center': true,
		'd-flex': true,
	};
};
