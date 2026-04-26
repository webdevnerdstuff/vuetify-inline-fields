import { describe, it, expect } from 'vitest';
import { useBindingSettings } from '../bindings';


describe('Bindings Composable', () => {
	describe('useBindingSettings', () => {
		it('should return an object', () => {
			const result = useBindingSettings({});
			expect(result).toBeTypeOf('object');
		});

		it('should pass through non-excluded keys', () => {
			const result = useBindingSettings({ color: 'primary', density: 'compact' });
			expect(result).toMatchObject({ color: 'primary', density: 'compact' });
		});

		it('should strip all excluded keys', () => {
			const excluded = {
				cancelButtonColor: 'red',
				cancelButtonSize: 'small',
				cancelButtonTitle: 'Cancel',
				cancelButtonVariant: 'text',
				cancelIcon: 'mdi-close',
				cancelIconColor: 'grey',
				closeSiblings: true,
				displayAppendIcon: 'mdi-eye',
				displayAppendIconColor: 'blue',
				displayAppendIconSize: 'small',
				displayAppendInnerIcon: 'mdi-magnify',
				displayAppendInnerIconColor: 'blue',
				displayAppendInnerIconSize: 'small',
				displayPrependIcon: 'mdi-account',
				displayPrependIconColor: 'green',
				displayPrependIconSize: 'small',
				displayPrependInnerIcon: 'mdi-lock',
				displayPrependInnerIconColor: 'green',
				displayPrependInnerIconSize: 'small',
				emptyText: 'N/A',
				fieldOnly: false,
				hideSaveIcon: false,
				loadingIcon: 'mdi-loading',
				loadingIconColor: 'primary',
				loadingWait: true,
				saveButtonColor: 'primary',
				saveButtonSize: 'small',
				saveButtonTitle: 'Save',
				saveButtonVariant: 'elevated',
				saveIcon: 'mdi-check',
				saveIconColor: 'primary',
				tableField: false,
				truncateLength: 20,
				truncateSuffix: '...',
				underlineColor: 'primary',
				underlineStyle: 'solid',
				underlineWidth: '1px',
				underlined: true,
				valueColor: 'primary',
			};
			const result = useBindingSettings(excluded);
			expect(Object.keys(result)).toHaveLength(0);
		});

		it('should keep allowed keys when mixed with excluded ones', () => {
			const input = {
				color: 'primary',
				emptyText: 'N/A',
				valueColor: 'secondary',
				variant: 'outlined',
			};
			const result = useBindingSettings(input);
			expect(result).toMatchObject({ color: 'primary', variant: 'outlined' });
			expect(result).not.toHaveProperty('emptyText');
			expect(result).not.toHaveProperty('valueColor');
		});

		it('should return empty object for empty input', () => {
			const result = useBindingSettings({});
			expect(result).toEqual({});
		});
	});
});
