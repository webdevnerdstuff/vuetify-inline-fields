import { describe, it, expect } from 'vitest';
import { ref } from 'vue';
import { createVuetify } from 'vuetify';
import defaultThemes from '../../../plugins/theme';
import {
	useCardContainerStyle,
	useDisplayValueStyles,
	useInlineFieldsContainerStyle,
	usePrependAppendIconStyles,
} from '../styles';


describe('Styles Composable', () => {
	const vuetify = createVuetify({
		theme: {
			defaultTheme: 'light',
			themes: { ...defaultThemes },
		},
	});

	const { theme } = vuetify;


	describe('useInlineFieldsContainerStyle', () => {
		it('should return an empty style object', () => {
			const result = useInlineFieldsContainerStyle();
			expect(result).toEqual({});
		});
	});


	describe('useDisplayValueStyles', () => {
		const base = {
			color: 'primary',
			error: false,
			theme,
			underlineColor: undefined,
			underlineStyle: 'solid',
			underlineWidth: '1px',
			underlined: true,
		};

		it('should return border-bottom styles when underlined is true', () => {
			const result = useDisplayValueStyles(base);
			expect(result).toHaveProperty('border-bottom-style', 'solid');
			expect(result).toHaveProperty('border-bottom-width', '1px');
		});

		it('should set border-bottom to none when underlined is false', () => {
			const result = useDisplayValueStyles({ ...base, underlined: false });
			expect(result).toHaveProperty('border-bottom', 'none');
		});

		it('should override border-bottom-color with danger theme var when error is true', () => {
			const result = useDisplayValueStyles({ ...base, error: true });
			expect(result).toHaveProperty('border-bottom-color', 'rgb(var(--v-theme-danger))');
		});

		it('should accept a ref for error', () => {
			const result = useDisplayValueStyles({ ...base, error: ref(true) });
			expect(result).toHaveProperty('border-bottom-color', 'rgb(var(--v-theme-danger))');
		});

		it('should use underlineColor when provided', () => {
			const result = useDisplayValueStyles({ ...base, underlineColor: 'red' });
			expect(result['border-bottom-color']).toBe('hsl(0 100% 50% / 100%)');
		});

		it('should fall back to color when underlineColor is undefined', () => {
			const withColor = useDisplayValueStyles({ ...base, color: 'red', underlineColor: undefined });
			const withUnderline = useDisplayValueStyles({ ...base, color: 'red', underlineColor: 'red' });
			expect(withColor['border-bottom-color']).toBe(withUnderline['border-bottom-color']);
		});
	});


	describe('usePrependAppendIconStyles', () => {
		it('should return transparent border with provided underlineWidth', () => {
			const result = usePrependAppendIconStyles({ underlineWidth: '2px' });
			expect(result).toHaveProperty('borderBottom', '2px solid transparent');
		});

		it('should default to 0px when underlineWidth is undefined', () => {
			const result = usePrependAppendIconStyles({ underlineWidth: undefined });
			expect(result).toHaveProperty('borderBottom', '0px solid transparent');
		});
	});


	describe('useCardContainerStyle', () => {
		const div = document.createElement('div');

		it('should return left, top, width, and zIndex', () => {
			const result = useCardContainerStyle({
				cardMinWidth: undefined,
				cardOffsetX: 0,
				cardOffsetY: 0,
				cardWidth: undefined,
				field: div,
			});
			expect(result).toHaveProperty('zIndex', 10);
			expect(result).toHaveProperty('left');
			expect(result).toHaveProperty('top');
			expect(result).toHaveProperty('width');
		});

		it('should use cardWidth when provided', () => {
			const result = useCardContainerStyle({
				cardMinWidth: undefined,
				cardOffsetX: 0,
				cardOffsetY: 0,
				cardWidth: '300px',
				field: div,
			});
			expect(result).toHaveProperty('width', '300px');
		});

		it('should use fit-content for checkbox when no width provided', () => {
			const result = useCardContainerStyle({
				cardMinWidth: undefined,
				cardOffsetX: 0,
				cardOffsetY: 0,
				cardWidth: undefined,
				field: div,
				name: 'checkbox',
			});
			expect(result).toHaveProperty('width', 'fit-content');
		});

		it('should handle null field gracefully', () => {
			const result = useCardContainerStyle({
				cardMinWidth: undefined,
				cardOffsetX: 0,
				cardOffsetY: 0,
				cardWidth: undefined,
				field: null,
			});
			expect(result).toHaveProperty('zIndex', 10);
		});
	});
});
