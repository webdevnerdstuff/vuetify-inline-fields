import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { createVuetify } from 'vuetify';
import { useGetColor } from '../colors';
import defaultThemes from '../../../plugins/theme';


describe('Colors Composable', () => {
	const vuetify = createVuetify({
		theme: {
			defaultTheme: 'light',
			themes: {
				...defaultThemes,
			},
		},
	});

	const { theme } = vuetify;
	const hslRed = 'hsl(0 100% 50% / 100%)';

	describe('useGetColor', () => {
		describe('red equivalents all resolve to the same HSL', () => {
			const redColors = [
				'error',
				'red',
				'#f00',
				'#ff0000',
				'rgb(255, 0, 0)',
				'rgba(255, 0, 0, 100)',
				'Red',
			];

			redColors.forEach((color) => {
				it(`"${color}" → ${hslRed}`, () => {
					expect(useGetColor(color, theme)).toBe(hslRed);
				});
			});
		});

		it('should return a theme color variable as rgb(var(...))', () => {
			expect(useGetColor('--v-theme-primary', theme)).toBe('rgb(var(--v-theme-primary))');
		});

		it('should convert an HSL string input', () => {
			const result = useGetColor('hsl(0, 100%, 50%)', theme);
			expect(result).toContain('hsl(');
		});

		describe('pass-through colors (never converted)', () => {
			const passthroughs = ['transparent', 'none', 'inherit', 'currentColor', 'initial', 'unset'];

			passthroughs.forEach((color) => {
				it(`"${color}" is returned as-is`, () => {
					expect(useGetColor(color, theme)).toBe(color);
				});
			});
		});

		describe('console.warn on unknown color', () => {
			let logSpy: ReturnType<typeof vi.spyOn>;

			beforeEach(() => {
				logSpy = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
			});

			afterEach(() => {
				logSpy.mockRestore();
			});

			it('should return the HSL fallback when color is not found', () => {
				const result = useGetColor('foobar', theme);
				expect(result).toBe('hsl(0 0% 100% / 12%)');
			});

			it('should warn exactly once for an unknown color name', () => {
				useGetColor('foobar', theme);
				expect(logSpy).toHaveBeenCalledTimes(1);
			});

			it('should warn exactly once for an unknown --v- variable', () => {
				useGetColor('--v-foobar', theme);
				expect(logSpy).toHaveBeenCalledTimes(1);
			});
		});
	});
});
