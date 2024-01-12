import { describe, it, expect, vi } from 'vitest';
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

	const checkColors = [
		'error',
		'red',
		'#f00',
		'rgb(255, 0, 0)',
		'rgba(255, 0, 0, 100)',
	];

	describe('useGetColor', () => {
		checkColors.forEach((color) => {
			it(`should return HSLA using color string "${color}"`, () => {
				const responseColor = useGetColor(color, theme);

				expect(responseColor).toBe(hslRed);
			});
		});

		// console.warn tests //
		const logSpy = vi.spyOn(console, 'warn').mockImplementation(() => undefined);

		it('should return HSLA default value if color not found', () => {
			const responseColor = useGetColor('foobar', theme);

			expect(responseColor).toMatchInlineSnapshot(`"hsl(0 0% 100% / 12%)"`);
		});

		it('should return RGB using theme color variable', () => {
			const responseColor = useGetColor('--v-theme-primary', theme);

			expect(responseColor).toMatchInlineSnapshot(`"rgb(var(--v-theme-primary))"`);
		});

		it('should console warn when color prop "foobar" doesn\'t exist in colors', () => {
			logSpy.mockReset();

			useGetColor('foobar', theme);

			expect(logSpy).toHaveBeenCalled();
			expect(logSpy).toHaveBeenCalledTimes(1);
		});

		it('should console warn when color prop "--v-foobar" doesn\'t exist in colors', () => {
			logSpy.mockReset();

			useGetColor('--v-foobar', theme);

			expect(logSpy).toHaveBeenCalled();
			expect(logSpy).toHaveBeenCalledTimes(1);
		});
	});
});
