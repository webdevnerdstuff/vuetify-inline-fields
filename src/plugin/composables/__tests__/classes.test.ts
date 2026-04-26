import { describe, it, expect } from 'vitest';
import { ref } from 'vue';
import {
	useCancelButtonClass,
	useCardContainerClass,
	useDisplayContainerClass,
	useDisplayInputControlClasses,
	useDisplaySelectionControlClasses,
	useDisplayValueClass,
	useFieldContainerClass,
	useInlineFieldsContainerClass,
	usePrependAppendIconClasses,
	useSaveFieldsContainerClass,
} from '../classes';


const cn = 'v-inline-fields';

describe('Classes Composable', () => {
	describe('useInlineFieldsContainerClass', () => {
		it('should include base classes', () => {
			const result = useInlineFieldsContainerClass({});
			expect(result).toMatchObject({
				[cn]: true,
				[`${cn}--container`]: true,
			});
		});

		it('should add cell class when cell is true and showField is false', () => {
			const result = useInlineFieldsContainerClass({ cell: true });
			expect(result).toMatchObject({ [`${cn}--container-cell`]: true });
		});

		it('should add disabled class when disabled is true', () => {
			const result = useInlineFieldsContainerClass({ disabled: true });
			expect(result).toMatchObject({ [`${cn}--container-disabled`]: true });
		});

		it('should accept a ref for disabled', () => {
			const result = useInlineFieldsContainerClass({ disabled: ref(true) });
			expect(result).toMatchObject({ [`${cn}--container-disabled`]: true });
		});

		it('should add loading class when loading and loadingWait are true', () => {
			const result = useInlineFieldsContainerClass({ loading: true, loadingWait: true });
			expect(result).toMatchObject({ [`${cn}--container-loading`]: true });
		});

		it('should not add loading class when loadingWait is false', () => {
			const result = useInlineFieldsContainerClass({ loading: true, loadingWait: false });
			expect(result[`${cn}--container-loading`]).toBe(false);
		});

		it('should add tableField class when tableField is true', () => {
			const result = useInlineFieldsContainerClass({ tableField: true });
			expect(result).toMatchObject({ [`${cn}--container-table`]: true });
		});

		it('should add field-specific classes when field, density, and variant are provided', () => {
			const result = useInlineFieldsContainerClass({ density: 'compact', field: 'v-text-field', variant: 'outlined' });
			expect(result[`${cn}--container-v-text-field`]).toBe(true);
			expect(result[`${cn}--container-v-text-field-compact`]).toBe(true);
			expect(result[`${cn}--container-v-text-field-outlined`]).toBeTruthy();
			expect(result[`${cn}--container-v-text-field-compact-outlined`]).toBeTruthy();
			expect(result[`${cn}--container-v-text-field-outlined-compact`]).toBeTruthy();
		});

		it('should use mdi as default icon set', () => {
			const result = useInlineFieldsContainerClass({});
			expect(result).toMatchObject({ [`${cn}--container-icon-set-mdi`]: true });
		});
	});


	describe('useDisplayContainerClass', () => {
		it('should include base classes', () => {
			const result = useDisplayContainerClass({});
			expect(result).toMatchObject({
				[`${cn}--display-container`]: true,
				[`${cn}--display-wrapper-value`]: true,
				'v-input': true,
				'v-input--horizontal': true,
			});
		});

		it('should add cell class when cell is true', () => {
			const result = useDisplayContainerClass({ cell: true });
			expect(result).toMatchObject({ [`${cn}--display-container-cell`]: true });
		});

		it('should add underline full-width class when cell and cellUnderlineFullWidth are true', () => {
			const result = useDisplayContainerClass({ cell: true, cellUnderlineFullWidth: true });
			expect(result).toMatchObject({ [`${cn}--display-container-cell-underline-full-width`]: true });
		});

		it('should not add underline full-width class when cellUnderlineFullWidth is false', () => {
			const result = useDisplayContainerClass({ cell: true, cellUnderlineFullWidth: false });
			expect(result[`${cn}--display-container-cell-underline-full-width`]).toBe(false);
		});

		it('should include density class', () => {
			const result = useDisplayContainerClass({ density: 'compact' });
			expect(result).toMatchObject({ 'v-input--density-compact': true });
		});
	});


	describe('useDisplayInputControlClasses', () => {
		it('should include base classes', () => {
			const result = useDisplayInputControlClasses({});
			expect(result).toMatchObject({
				'v-input': true,
				'v-input--dirty': true,
				'v-input--horizontal': true,
				'v-text-field': true,
			});
		});

		it('should include density class', () => {
			const result = useDisplayInputControlClasses({ density: 'comfortable' });
			expect(result).toMatchObject({ 'v-input--density-comfortable': true });
		});

		it('should include variant class', () => {
			const result = useDisplayInputControlClasses({ variant: 'outlined' });
			expect(result).toMatchObject({ 'v-text-field--plain-outlined': true });
		});
	});


	describe('useDisplaySelectionControlClasses', () => {
		it('should include base class', () => {
			const result = useDisplaySelectionControlClasses({});
			expect(result).toMatchObject({ [`${cn}--selection-control`]: true });
		});

		it('should include density class', () => {
			const result = useDisplaySelectionControlClasses({ density: 'compact' });
			expect(result).toMatchObject({ 'v-selection-control--density-compact': true });
		});
	});


	describe('useDisplayValueClass', () => {
		it('should include base and name classes', () => {
			const result = useDisplayValueClass('text-field', 'primary', {});
			expect(result).toMatchObject({
				[cn]: true,
				[`${cn}--display-value-text-field`]: true,
				[`${cn}--display-value`]: true,
			});
		});

		it('should apply valueColor class when no error', () => {
			const result = useDisplayValueClass('text-field', 'primary', { error: false });
			expect(result).toMatchObject({ 'text-danger': false, 'text-primary': true });
		});

		it('should apply danger class when error is true', () => {
			const result = useDisplayValueClass('text-field', 'primary', { error: true });
			expect(result).toMatchObject({ 'text-danger': true, 'text-primary': false });
		});

		it('should accept a ref for error', () => {
			const result = useDisplayValueClass('text-field', 'primary', { error: ref(true) });
			expect(result).toMatchObject({ 'text-danger': true });
		});

		it('should add empty class when empty is true', () => {
			const result = useDisplayValueClass('text-field', 'primary', { empty: true });
			expect(result).toMatchObject({ [`${cn}--display-value-empty`]: true });
		});
	});


	describe('usePrependAppendIconClasses', () => {
		it('should add outer prepend classes when inner is false and position is prepend', () => {
			const result = usePrependAppendIconClasses({ inner: false, position: 'prepend' });
			expect(result).toMatchObject({
				[`${cn}--display-icon`]: true,
				[`${cn}--display-prepend-icon`]: true,
				'me-1': true,
				'ms-1': false,
			});
		});

		it('should add outer append classes when inner is false and position is append', () => {
			const result = usePrependAppendIconClasses({ inner: false, position: 'append' });
			expect(result).toMatchObject({
				[`${cn}--display-icon`]: true,
				[`${cn}--display-append-icon`]: true,
				'me-1': false,
				'ms-1': true,
			});
		});

		it('should add inner class when inner is true', () => {
			const result = usePrependAppendIconClasses({ inner: true, position: 'prepend' });
			expect(result).toMatchObject({
				[`${cn}--display-icon`]: false,
				[`${cn}--display-prepend-inner-icon`]: true,
			});
		});
	});


	describe('useFieldContainerClass', () => {
		it('should include base classes', () => {
			const result = useFieldContainerClass({ name: 'text-field' });
			expect(result).toMatchObject({
				[cn]: true,
				[`${cn}--field`]: true,
				[`${cn}--field-text-field`]: true,
			});
		});

		it('should add active class when active is true', () => {
			const result = useFieldContainerClass({ active: true, name: 'text-field' });
			expect(result).toMatchObject({ [`${cn}--field-active`]: true });
		});

		it('should not add active class when active is false', () => {
			const result = useFieldContainerClass({ active: false, name: 'text-field' });
			expect(result[`${cn}--field-active`]).toBe(false);
		});
	});


	describe('useSaveFieldsContainerClass', () => {
		it('should return the save fields container class', () => {
			const result = useSaveFieldsContainerClass();
			expect(result).toMatchObject({ [`${cn}--save-fields-container`]: true });
		});
	});


	describe('useCancelButtonClass', () => {
		it('should add me-1 when variant is elevated', () => {
			const result = useCancelButtonClass({ cancelButtonVariant: 'elevated' });
			expect(result).toMatchObject({ 'me-1': true, 'ms-1': true });
		});

		it('should not add me-1 when variant is not elevated', () => {
			const result = useCancelButtonClass({ cancelButtonVariant: 'text' });
			expect(result).toMatchObject({ 'me-1': false, 'ms-1': true });
		});

		it('should always include ms-1', () => {
			const result = useCancelButtonClass({});
			expect(result).toMatchObject({ 'ms-1': true });
		});
	});


	describe('useCardContainerClass', () => {
		it('should include base and name classes', () => {
			const result = useCardContainerClass({ name: 'custom-field', showField: false });
			expect(result).toMatchObject({
				[`${cn}--card-container`]: true,
				[`${cn}--card-container-custom-field`]: true,
			});
		});

		it('should hide when showField is false', () => {
			const result = useCardContainerClass({ name: 'custom-field', showField: false });
			expect(result).toMatchObject({ 'd-none': true });
		});

		it('should not hide when showField is true', () => {
			const result = useCardContainerClass({ name: 'custom-field', showField: true });
			expect(result).toMatchObject({ 'd-none': false });
		});
	});
});
