import {
	UseConvertToUnit,
	UseTruthyModelValue,
} from '@/types';


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


export const useTruthyModelValue: UseTruthyModelValue = (options) => {
	const { modelValue, trueValue } = options;

	const value = unref(modelValue);

	if (value?.toLowerCase?.() === 'true') {
		return true;
	}

	if (value === '1') {
		return true;
	}

	if (value == '1') {
		return true;
	}

	if (value === true) {
		return true;
	}

	if (value == trueValue) {
		return true;
	}

	if (value === trueValue) {
		return true;
	}

	return false;
};
