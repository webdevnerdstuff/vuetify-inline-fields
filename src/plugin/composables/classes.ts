import { componentName } from '../utils/globals';

export const useInlineFieldValueClass = (valueColor: string, error: boolean, empty = false) => {
	return {
		[`${componentName}`]: true,
		[`${componentName}--display-value`]: true,
		[`${componentName}--display-value-empty`]: empty,
		[`text-${valueColor}`]: !error,
		'text-danger': error,
	};
};

