import { describe, it, expect } from 'vitest';
import {
	useConvertToUnit,
	useGetFieldCoordinates,
	useTruthyModelValue,
} from '@/plugin/composables/helpers';

describe('Helpers Composable', () => {
	describe('useConvertToUnit', () => {
		it('should return string with a default px unit', () => {
			const unit = useConvertToUnit({ str: '10' });
			expect(unit).toBe('10px');
		});

		it('should return number with a default px unit', () => {
			const unit = useConvertToUnit({ str: 10 });
			expect(unit).toBe('10px');
		});

		it('should return string with a supplied unit', () => {
			const unit = useConvertToUnit({ str: '10', unit: 'em' });
			expect(unit).toBe('10em');
		});

		it('should return number with a supplied unit', () => {
			const unit = useConvertToUnit({ str: 10, unit: 'em' });
			expect(unit).toBe('10em');
		});
	});

	describe('useGetFieldCoordinates', () => {
		const div = document.createElement('div');
		const testInput = { cardOffsetX: 10, cardOffsetY: 10, field: div };
		let coordinates = useGetFieldCoordinates(testInput);

		it('should return field coordinates as an object', () => {
			expect(coordinates).toBeTypeOf('object');
		});

		it('should return field coordinates as an object equal to coordinates object', () => {
			expect(coordinates).toEqual({
				bottom: '10px',
				height: 0,
				left: '10px',
				right: '10px',
				top: '12px',
				width: '0',
				x: 0,
				y: 0
			});
		});

		it('should return field (as null) coordinates as an object equal to', () => {
			coordinates = useGetFieldCoordinates({ cardOffsetX: 10, cardOffsetY: 10, field: null });

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
	});

	describe('useTruthyModelValue', () => {
		it('should return modelValue = "1" as true', () => {
			const value = useTruthyModelValue({ modelValue: '1' });
			expect(value).toBeTruthy();
		});

		it('should return modelValue = 1 as true', () => {
			const value = useTruthyModelValue({ modelValue: 1 });
			expect(value).toBeTruthy();
		});

		it('should return modelValue = true as true', () => {
			const value = useTruthyModelValue({ modelValue: true });
			expect(value).toBeTruthy();
		});

		it('should return modelValue = "true" as true', () => {
			const value = useTruthyModelValue({ modelValue: 'true' });
			expect(value).toBeTruthy();
		});

		it('should return modelValue = trueValue as true using numbers', () => {
			const value = useTruthyModelValue({ modelValue: 10, trueValue: 10 });
			expect(value).toBeTruthy();
		});

		it('should return modelValue = trueValue as true using number/string', () => {
			const value = useTruthyModelValue({ modelValue: 10, trueValue: '10' });
			expect(value).toBeTruthy();
		});

		it('should return modelValue != trueValue as false using numbers', () => {
			const value = useTruthyModelValue({ modelValue: 10, trueValue: 20 });
			expect(value).toBeFalsy();
		});

		it('should return modelValue != trueValue as false using number/string', () => {
			const value = useTruthyModelValue({ modelValue: 10, trueValue: '20' });

			expect(value).toBeFalsy();
		});
	});

});
