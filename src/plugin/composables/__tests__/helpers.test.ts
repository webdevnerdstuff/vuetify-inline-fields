import { describe, it, expect } from 'vitest';
import { ref } from 'vue';
import {
	useConvertToUnit,
	useGetFieldCoordinates,
	useTruthyModelValue,
} from '../helpers';

describe('Helpers Composable', () => {
	describe('useConvertToUnit', () => {
		it('should append px by default for a numeric string', () => {
			expect(useConvertToUnit({ str: '10' })).toBe('10px');
		});

		it('should append px by default for a number', () => {
			expect(useConvertToUnit({ str: 10 })).toBe('10px');
		});

		it('should append a supplied unit for a string', () => {
			expect(useConvertToUnit({ str: '10', unit: 'em' })).toBe('10em');
		});

		it('should append a supplied unit for a number', () => {
			expect(useConvertToUnit({ str: 10, unit: 'em' })).toBe('10em');
		});

		it('should return undefined for null', () => {
			expect(useConvertToUnit({ str: null as unknown as string })).toBeUndefined();
		});

		it('should return undefined for an empty string', () => {
			expect(useConvertToUnit({ str: '' })).toBeUndefined();
		});

		it('should return the string as-is for a non-numeric value', () => {
			expect(useConvertToUnit({ str: 'auto' })).toBe('auto');
		});

		it('should return the string as-is for a percentage', () => {
			expect(useConvertToUnit({ str: '50%' })).toBe('50%');
		});
	});

	describe('useGetFieldCoordinates', () => {
		it('should return zeroed coordinates when field is null', () => {
			const coordinates = useGetFieldCoordinates({ cardOffsetX: 10, cardOffsetY: 10, field: null });

			expect(coordinates).toEqual({
				bottom: 0,
				height: 0,
				left: 0,
				right: 0,
				top: 0,
				width: 0,
				x: 0,
				y: 0,
			});
		});

		it('should return coordinate strings using offsets when field is an element', () => {
			const div = document.createElement('div');
			const coordinates = useGetFieldCoordinates({ cardOffsetX: 10, cardOffsetY: 10, field: div });

			expect(coordinates).toMatchInlineSnapshot(`
				{
				  "bottom": "10px",
				  "height": 0,
				  "left": "10px",
				  "right": "10px",
				  "top": "12px",
				  "width": "0",
				  "x": 0,
				  "y": 0,
				}
			`);
		});

		it('should apply zero offsets correctly', () => {
			const div = document.createElement('div');
			const coordinates = useGetFieldCoordinates({ cardOffsetX: 0, cardOffsetY: 0, field: div });

			// useConvertToUnit({ str: 0 }) returns '0' (no unit) because !+0 is truthy
			expect(coordinates.left).toBe('0');
			expect(coordinates.top).toBe('2px');
		});
	});

	describe('useTruthyModelValue', () => {
		it('should return truthy for "1"', () => {
			expect(useTruthyModelValue({ modelValue: '1' })).toBeTruthy();
		});

		it('should return truthy for 1', () => {
			expect(useTruthyModelValue({ modelValue: 1 })).toBeTruthy();
		});

		it('should return falsy for 0', () => {
			expect(useTruthyModelValue({ modelValue: 0 })).toBeFalsy();
		});

		it('should return truthy for true', () => {
			expect(useTruthyModelValue({ modelValue: true })).toBeTruthy();
		});

		it('should return truthy for "true"', () => {
			expect(useTruthyModelValue({ modelValue: 'true' })).toBeTruthy();
		});

		it('should return truthy when modelValue matches trueValue (numbers)', () => {
			expect(useTruthyModelValue({ modelValue: 10, trueValue: 10 })).toBeTruthy();
		});

		it('should return truthy when modelValue matches trueValue (number vs string)', () => {
			expect(useTruthyModelValue({ modelValue: 10, trueValue: '10' })).toBeTruthy();
		});

		it('should return falsy when modelValue does not match trueValue (numbers)', () => {
			expect(useTruthyModelValue({ modelValue: 10, trueValue: 20 })).toBeFalsy();
		});

		it('should return falsy when modelValue does not match trueValue (number vs string)', () => {
			expect(useTruthyModelValue({ modelValue: 10, trueValue: '20' })).toBeFalsy();
		});

		it('should return false for boolean false', () => {
			expect(useTruthyModelValue({ modelValue: false })).toBe(false);
		});

		it('should return truthy for null (null == undefined coercion when no trueValue)', () => {
			expect(useTruthyModelValue({ modelValue: null })).toBeTruthy();
		});

		it('should accept a Vue ref as modelValue', () => {
			expect(useTruthyModelValue({ modelValue: ref(true) })).toBeTruthy();
			expect(useTruthyModelValue({ modelValue: ref(false) })).toBeFalsy();
		});
	});
});
