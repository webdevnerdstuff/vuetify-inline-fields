import { describe, it, expect, vi } from 'vitest';
import { ref } from 'vue';
import {
	useCheckForErrors,
	useToggleField,
	useTruncateText,
} from '../methods';


describe('Methods Composable', () => {
	describe('useCheckForErrors', () => {
		it('should return no errors when required is false and no rules', () => {
			const result = useCheckForErrors({ required: false, value: '' });
			expect(result.errors).toBe(false);
			expect(result.results).toEqual([]);
		});

		it('should return error when required is true and value is empty', () => {
			const result = useCheckForErrors({ required: true, value: '' });
			expect(result.errors).toBe(true);
			expect(result.results).toContain('Field is required.');
		});

		it('should return error when required is true and value is null', () => {
			const result = useCheckForErrors({ required: true, value: null });
			expect(result.errors).toBe(true);
		});

		it('should return no error when required is true and value is present', () => {
			const result = useCheckForErrors({ required: true, value: 'hello' });
			expect(result.errors).toBe(false);
			expect(result.results).toEqual([]);
		});

		it('should return no errors when rules all pass', () => {
			const rules = [
				(v: unknown) => !!v || 'Required',
				(v: unknown) => String(v).length >= 3 || 'Min 3 chars',
			];
			const result = useCheckForErrors({ rules, value: 'hello' });
			expect(result.errors).toBe(false);
			expect(result.results).toEqual([]);
		});

		it('should return error message from a failing rule', () => {
			const rules = [(v: unknown) => !!v || 'Field is required.'];
			const result = useCheckForErrors({ rules, value: '' });
			expect(result.errors).toBe(true);
			expect(result.results).toContain('Field is required.');
		});

		it('should collect multiple rule failure messages', () => {
			const rules = [
				() => 'First error',
				() => 'Second error',
			];
			const result = useCheckForErrors({ rules, value: 'x' });
			expect(result.errors).toBe(true);
			expect(result.results).toEqual(['First error', 'Second error']);
		});

		it('should warn and skip non-string, non-true rule results', () => {
			const logSpy = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
			const rules = [() => 42 as unknown as string];
			const result = useCheckForErrors({ rules, value: 'x' });
			expect(result.errors).toBe(false);
			expect(logSpy).toHaveBeenCalledTimes(1);
			logSpy.mockRestore();
		});

		it('should accept a ref as value', () => {
			const value = ref('');
			const result = useCheckForErrors({ required: true, value });
			expect(result.errors).toBe(true);
		});

		it('should handle non-function rules (static boolean true)', () => {
			const rules = [true as unknown as () => string | boolean];
			const result = useCheckForErrors({ rules, value: 'x' });
			expect(result.errors).toBe(false);
		});
	});


	describe('useToggleField', () => {
		const baseOptions = {
			attrs: { color: 'primary' },
			props: { density: 'compact' },
			timeOpened: null,
		};

		it('should toggle showField from false to true', () => {
			const result = useToggleField({
				...baseOptions,
				closeSiblings: false,
				fieldOnly: false,
				showField: ref(false),
			});
			expect(result.showField).toBe(true);
		});

		it('should toggle showField from true to false', () => {
			const result = useToggleField({
				...baseOptions,
				closeSiblings: false,
				fieldOnly: false,
				showField: ref(true),
			});
			expect(result.showField).toBe(false);
		});

		it('should merge attrs and props into settings', () => {
			const result = useToggleField({
				...baseOptions,
				closeSiblings: false,
				fieldOnly: false,
				showField: ref(false),
			});
			expect(result.settings).toMatchObject({ color: 'primary', density: 'compact' });
		});

		it('should set timeOpened to a Date when closeSiblings is true and fieldOnly is false', () => {
			const result = useToggleField({
				...baseOptions,
				closeSiblings: true,
				fieldOnly: false,
				showField: ref(false),
			});
			expect(result.timeOpened).toBeInstanceOf(Date);
		});

		it('should not change timeOpened when fieldOnly is true', () => {
			const result = useToggleField({
				...baseOptions,
				closeSiblings: true,
				fieldOnly: true,
				showField: ref(false),
			});
			expect(result.timeOpened).toBeNull();
		});

		it('should not change timeOpened when closeSiblings is false', () => {
			const result = useToggleField({
				...baseOptions,
				closeSiblings: false,
				fieldOnly: false,
				showField: ref(false),
			});
			expect(result.timeOpened).toBeNull();
		});
	});


	describe('useTruncateText', () => {
		it('should truncate text exceeding the length with default suffix', () => {
			const result = useTruncateText({ length: 5, suffix: undefined, text: 'Hello World' });
			expect(result).toBe('Hello...');
		});

		it('should use a custom suffix when provided', () => {
			const result = useTruncateText({ length: 5, suffix: '—', text: 'Hello World' });
			expect(result).toBe('Hello—');
		});

		it('should return the original text when within the length', () => {
			const result = useTruncateText({ length: 20, suffix: undefined, text: 'Hello' });
			expect(result).toBe('Hello');
		});

		it('should return text unchanged when exactly at length', () => {
			const result = useTruncateText({ length: 5, suffix: undefined, text: 'Hello' });
			expect(result).toBe('Hello');
		});

		it('should coerce non-string text via toString', () => {
			const result = useTruncateText({ length: 3, suffix: undefined, text: 12345 as unknown as string });
			expect(result).toBe('123...');
		});
	});
});
