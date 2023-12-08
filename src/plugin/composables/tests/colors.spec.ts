import { describe, it, expect } from 'vitest';
import { createVuetify } from 'vuetify';
import defaultThemes from '@/plugins/theme';
import { useGetColor } from '@/plugin/composables/colors';


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
	});
});
