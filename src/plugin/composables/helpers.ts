import { UseConvertToUnit } from '@/types';


/**
* Converts a string to a number with a unit.
*/
export const useConvertToUnit: UseConvertToUnit = (options) => {
	const { str, unit = 'px' } = options;

	if (str == null || str === '') {
		return undefined;
	}

	if (!+str) {
		return String(str);
	}

	return `${Number(str)}${unit}`;
};
