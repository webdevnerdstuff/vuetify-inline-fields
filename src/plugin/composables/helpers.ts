import {
	UseConvertToUnit,
	UseGetFieldCoordinates,
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


export const useGetFieldCoordinates: UseGetFieldCoordinates = (options) => {
	const { cardOffsetX, cardOffsetY, field } = options;

	if (!field) {
		return {
			bottom: 0,
			height: 0,
			left: 0,
			right: 0,
			top: 0,
			width: 0,
			x: 0,
			y: 0,
		};
	}

	const { x, y } = field.getBoundingClientRect();
	const { width, height } = field.getBoundingClientRect();
	const { left, top } = field.getBoundingClientRect();
	const { right, bottom } = field.getBoundingClientRect();

	return {
		bottom: useConvertToUnit({ str: bottom + Number(cardOffsetY) }) as string,
		height,
		left: useConvertToUnit({ str: left + Number(cardOffsetX) }) as string,
		right: useConvertToUnit({ str: right + Number(cardOffsetX) }) as string,
		top: useConvertToUnit({ str: top + Number(cardOffsetY) }) as string,
		width: useConvertToUnit({ str: width }) as string,
		x,
		y,
	};
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
