import { describe, it, expect } from 'vitest';
import { useGetIcon } from '../icons';


describe('Icon Composable', () => {
	describe('useGetIcon', () => {
		describe('returns the supplied icon value when icon prop is provided', () => {
			it('mdi icon set', () => {
				expect(useGetIcon({ icon: 'mdi:mdi-cog', iconOptions: { defaultSet: 'mdi' }, name: 'loading' })).toBe('mdi:mdi-cog');
			});

			it('fa icon set', () => {
				expect(useGetIcon({ icon: 'fa-cog', iconOptions: { defaultSet: 'fa' }, name: 'loading' })).toBe('fa-cog');
			});
		});

		describe('mdi icon set defaults', () => {
			const iconOptions = { defaultSet: 'mdi' };

			it('loading', () => {
				expect(useGetIcon({ icon: undefined, iconOptions, name: 'loading' })).toBe('mdi-loading');
			});

			it('save', () => {
				expect(useGetIcon({ icon: undefined, iconOptions, name: 'save' })).toBe('mdi-content-save');
			});

			it('checkboxTrue', () => {
				expect(useGetIcon({ icon: undefined, iconOptions, name: 'checkboxTrue' })).toBe('mdi:mdi-checkbox-outline');
			});

			it('checkboxFalse', () => {
				expect(useGetIcon({ icon: undefined, iconOptions, name: 'checkboxFalse' })).toBe('$checkboxOff');
			});

			it('clear', () => {
				expect(useGetIcon({ icon: undefined, iconOptions, name: 'clear' })).toBe('$clear');
			});

			it('true', () => {
				expect(useGetIcon({ icon: undefined, iconOptions, name: 'true' })).toBe('$complete');
			});

			it('false', () => {
				expect(useGetIcon({ icon: undefined, iconOptions, name: 'false' })).toBe('$close');
			});
		});

		describe('fa icon set defaults', () => {
			const iconOptions = { defaultSet: 'fa' };

			it('loading', () => {
				expect(useGetIcon({ icon: undefined, iconOptions, name: 'loading' })).toBe('fa-circle-notch');
			});

			it('save', () => {
				expect(useGetIcon({ icon: undefined, iconOptions, name: 'save' })).toBe('fa-floppy-disk');
			});

			it('checkboxTrue', () => {
				expect(useGetIcon({ icon: undefined, iconOptions, name: 'checkboxTrue' })).toBe('far fa-square-check');
			});
		});

		describe('throws errors', () => {
			it('throws when iconOptions has no defaultSet', () => {
				expect(() => useGetIcon({ icon: undefined, iconOptions: {}, name: 'loading' }))
					.toThrowError('[VInlineFields]: No default undefined icon set found.');
			});

			it('throws when iconOptions is undefined', () => {
				expect(() => useGetIcon({ icon: undefined, iconOptions: undefined, name: 'loading' }))
					.toThrowError('[VInlineFields]: No default undefined icon set found.');
			});

			it('throws when name is not found in the icon set', () => {
				expect(() => useGetIcon({ icon: undefined, iconOptions: { defaultSet: 'mdi' }, name: 'foobar' }))
					.toThrowError('[VInlineFields]: No foobar icon found.');
			});
		});
	});
});
