import { ThemeInstance } from 'vuetify';
import {
	HEXColor,
	HSLColor,
	RGBColor,
} from '@/types';


/**
 * Checks
 */
function checkDoNotConvert(color: string) {
	return color === 'transparent' || color === 'none' || color === 'inherit' || color === 'currentColor' || color === 'initial' || color === 'unset';
}

function checkIfThemeVarColor(color: string) {
	return color.includes('--v-theme');
}

function checkIfThemeColor(color: string, theme: ThemeInstance) {
	const themeColors = theme.global.current.value.colors;

	return Object.entries(themeColors).find(([key]) => {
		return key === color;
	});
}


/**
 * Converts value to percentage value
 */
function percentageConvert(value: number | string | void): number {
	if (!value) {
		return 100;
	}

	if (value.toString().includes('.')) {
		const converted = Number(value) * 100;
		return converted >= 100 ? 100 : converted;
	}

	return Number(value) >= 100 ? 100 : Number(value);
}


/**
 * Converts the color to HSL values
 */
function convertToHSL(color: string): string {
	let newColor: HEXColor | RGBColor | HSLColor = checkColorNames(color);
	let h = 0;
	let s = 0;
	let l = 0;
	let a = 100 as string | number;
	let r = 0;
	let g = 0;
	let b = 0;

	// Convert hex color to RGB if necessary
	if (newColor.substring(0, 1) === '#') {
		newColor = <RGBColor>hexToRGB(newColor);
	}
	// Convert RGB to array values if necessary
	else if (newColor.includes('rgb')) {
		newColor = <RGBColor>[...newColor.matchAll(/[\d+.\d+]+/g)].map(Number);
	}
	// If HSL is passed in, extract values
	else if (newColor.includes('hsl')) {
		newColor = <HSLColor>[...newColor.matchAll(/[\d+.\d+]+/g)].map(String);

		h = newColor[0];
		s = newColor[1];
		l = newColor[2];
		a = percentageConvert(newColor[3]);

		// Return HSL values
		return `${h} ${s}% ${l}% / ${a}%`;
	}

	// Extract RGB values
	[r, g, b, a] = <RGBColor>newColor;

	// Convert RGB to HSL
	r /= 255;
	g /= 255;
	b /= 255;
	a = percentageConvert(a);

	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);

	// Color doesn't exist, return --v-theme-surface //
	if (max === null || !min === null || isNaN(max) || isNaN(min)) {
		const defaultColor = '0 0% 100% / 12%';

		console.warn(`[VuetifyInlineFields: The "color" prop value using "${newColor}" doesn't exist. Using the value "hsl(${defaultColor})" in it's place.`);
		return defaultColor;
	}

	h = (max + min) / 2;
	s = (max + min) / 2;
	l = (max + min) / 2;

	if (max == min) {
		h = s = 0; // achromatic
	}
	else {
		const d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r: h = (g - b) / d + (g < b ? 6 : 0); break;
			case g: h = (b - r) / d + 2; break;
			case b: h = (r - g) / d + 4; break;
			default: break;
		}
		h /= 6;
	}

	h = Math.round(h * 360);
	s = Math.round(s * 100);
	l = Math.round(l * 100);

	// Return HSL values
	return `${h} ${s}% ${l}% / ${a}%`;;
}


/**
	 * Checks if the color is a color name and converts it to a hex value
	 */
function checkColorNames(color: string): HEXColor {
	const colors = {
		AliceBlue: '#F0F8FF',
		AntiqueWhite: '#FAEBD7',
		Aqua: '#00FFFF',
		Aquamarine: '#7FFFD4',
		Azure: '#F0FFFF',
		Beige: '#F5F5DC',
		Bisque: '#FFE4C4',
		Black: '#000000',
		BlanchedAlmond: '#FFEBCD',
		Blue: '#0000FF',
		BlueViolet: '#8A2BE2',
		Brown: '#A52A2A',
		BurlyWood: '#DEB887',
		CadetBlue: '#5F9EA0',
		Chartreuse: '#7FFF00',
		Chocolate: '#D2691E',
		Coral: '#FF7F50',
		CornflowerBlue: '#6495ED',
		Cornsilk: '#FFF8DC',
		Crimson: '#DC143C',
		Cyan: '#00FFFF',
		DarkBlue: '#00008B',
		DarkCyan: '#008B8B',
		DarkGoldenRod: '#B8860B',
		DarkGray: '#A9A9A9',
		DarkGreen: '#006400',
		DarkGrey: '#A9A9A9',
		DarkKhaki: '#BDB76B',
		DarkMagenta: '#8B008B',
		DarkOliveGreen: '#556B2F',
		DarkOrange: '#FF8C00',
		DarkOrchid: '#9932CC',
		DarkRed: '#8B0000',
		DarkSalmon: '#E9967A',
		DarkSeaGreen: '#8FBC8F',
		DarkSlateBlue: '#483D8B',
		DarkSlateGray: '#2F4F4F',
		DarkSlateGrey: '#2F4F4F',
		DarkTurquoise: '#00CED1',
		DarkViolet: '#9400D3',
		DeepPink: '#FF1493',
		DeepSkyBlue: '#00BFFF',
		DimGray: '#696969',
		DimGrey: '#696969',
		DodgerBlue: '#1E90FF',
		FireBrick: '#B22222',
		FloralWhite: '#FFFAF0',
		ForestGreen: '#228B22',
		Fuchsia: '#FF00FF',
		Gainsboro: '#DCDCDC',
		GhostWhite: '#F8F8FF',
		Gold: '#FFD700',
		GoldenRod: '#DAA520',
		Gray: '#808080',
		Green: '#008000',
		GreenYellow: '#ADFF2F',
		Grey: '#808080',
		HoneyDew: '#F0FFF0',
		HotPink: '#FF69B4',
		IndianRed: '#CD5C5C',
		Indigo: '#4B0082',
		Ivory: '#FFFFF0',
		Khaki: '#F0E68C',
		Lavender: '#E6E6FA',
		LavenderBlush: '#FFF0F5',
		LawnGreen: '#7CFC00',
		LemonChiffon: '#FFFACD',
		LightBlue: '#ADD8E6',
		LightCoral: '#F08080',
		LightCyan: '#E0FFFF',
		LightGoldenRodYellow: '#FAFAD2',
		LightGray: '#D3D3D3',
		LightGreen: '#90EE90',
		LightGrey: '#D3D3D3',
		LightPink: '#FFB6C1',
		LightSalmon: '#FFA07A',
		LightSeaGreen: '#20B2AA',
		LightSkyBlue: '#87CEFA',
		LightSlateGray: '#778899',
		LightSlateGrey: '#778899',
		LightSteelBlue: '#B0C4DE',
		LightYellow: '#FFFFE0',
		Lime: '#00FF00',
		LimeGreen: '#32CD32',
		Linen: '#FAF0E6',
		Magenta: '#FF00FF',
		Maroon: '#800000',
		MediumAquaMarine: '#66CDAA',
		MediumBlue: '#0000CD',
		MediumOrchid: '#BA55D3',
		MediumPurple: '#9370DB',
		MediumSeaGreen: '#3CB371',
		MediumSlateBlue: '#7B68EE',
		MediumSpringGreen: '#00FA9A',
		MediumTurquoise: '#48D1CC',
		MediumVioletRed: '#C71585',
		MidnightBlue: '#191970',
		MintCream: '#F5FFFA',
		MistyRose: '#FFE4E1',
		Moccasin: '#FFE4B5',
		NavajoWhite: '#FFDEAD',
		Navy: '#000080',
		OldLace: '#FDF5E6',
		Olive: '#808000',
		OliveDrab: '#6B8E23',
		Orange: '#FFA500',
		OrangeRed: '#FF4500',
		Orchid: '#DA70D6',
		PaleGoldenRod: '#EEE8AA',
		PaleGreen: '#98FB98',
		PaleTurquoise: '#AFEEEE',
		PaleVioletRed: '#DB7093',
		PapayaWhip: '#FFEFD5',
		PeachPuff: '#FFDAB9',
		Peru: '#CD853F',
		Pink: '#FFC0CB',
		Plum: '#DDA0DD',
		PowderBlue: '#B0E0E6',
		Purple: '#800080',
		RebeccaPurple: '#663399',
		Red: '#FF0000',
		RosyBrown: '#BC8F8F',
		RoyalBlue: '#4169E1',
		SaddleBrown: '#8B4513',
		Salmon: '#FA8072',
		SandyBrown: '#F4A460',
		SeaGreen: '#2E8B57',
		SeaShell: '#FFF5EE',
		Sienna: '#A0522D',
		Silver: '#C0C0C0',
		SkyBlue: '#87CEEB',
		SlateBlue: '#6A5ACD',
		SlateGray: '#708090',
		SlateGrey: '#708090',
		Snow: '#FFFAFA',
		SpringGreen: '#00FF7F',
		SteelBlue: '#4682B4',
		Tan: '#D2B48C',
		Teal: '#008080',
		Thistle: '#D8BFD8',
		Tomato: '#FF6347',
		Turquoise: '#40E0D0',
		Violet: '#EE82EE',
		Wheat: '#F5DEB3',
		White: '#FFFFFF',
		WhiteSmoke: '#F5F5F5',
		Yellow: '#FFFF00',
		YellowGreen: '#9ACD32',
	};
	let response = color;

	Object.entries(colors).forEach(([key, value]) => {
		if (color.toLowerCase() == key.toLowerCase()) {
			response = value;
			return;
		}
	});

	return response;
}


/**
	 * Converts the HEX color to RGB
	 */
function hexToRGB(hex: string): RGBColor {
	let newHex = hex.replace('#', '');

	// Convert 3-digit hex colors to 6-digit hex colors
	if (newHex.length === 3) {
		newHex = newHex.split('').map(char => char + char).join('');
	}

	// Extract the red, green, and blue values from the hex string
	const r = parseInt(newHex.substring(0, 2), 16);
	const g = parseInt(newHex.substring(2, 4), 16);
	const b = parseInt(newHex.substring(4, 6), 16);
	const a = 100;

	// Return an array of the RGB values
	return [r, g, b, a];
}


/**
	 * Converts single color
	 */
export const useGetColor = (color: string, theme: ThemeInstance): string => {
	if (checkDoNotConvert(color)) {
		return color;
	}

	if (checkIfThemeVarColor(color)) {
		return `rgb(var(${color}))`;
	}

	const isThemeColor = checkIfThemeColor(color, theme);

	if (isThemeColor) {
		return `hsl(${convertToHSL(isThemeColor[1])})`;
	}

	return `hsl(${convertToHSL(color)})`;
};
