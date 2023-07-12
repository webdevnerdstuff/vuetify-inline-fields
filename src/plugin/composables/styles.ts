import { CSSProperties } from 'vue';
import {
	UseDisplayValueStyles,
	UseCardContainerStyle,
	UsePrependAppendIconStyles,
} from '@/types';
import { useGetColor } from './colors';
import { useGetFieldCoordinates } from './helpers';


export const useInlineFieldsContainerStyle = () => {
	const styles = {};

	return styles as CSSProperties;
};

// -------------------------------------------------- Value Styles //
export const useDisplayValueStyles: UseDisplayValueStyles = (options) => {
	const { underlineStyle, underlineWidth, color, error, theme, underlined } = options;
	let { underlineColor } = options;
	underlineColor = underlineColor || color;

	const convertedUnderlineColor = useGetColor(underlineColor as string, theme);

	const styles = {
		'border-bottom-color': convertedUnderlineColor,
		'border-bottom-style': underlineStyle,
		'border-bottom-width': underlineWidth,
	};

	if (unref(error)) {
		styles['border-bottom-color'] = 'rgb(var(--v-theme-danger))';
	}

	if (!underlined) {
		styles['border-bottom'] = 'none';
	}

	return styles as CSSProperties;
};


export const usePrependAppendIconStyles: UsePrependAppendIconStyles = (options) => {
	const { underlineWidth } = options;

	const width = !underlineWidth ? '0px' : underlineWidth;

	const styles = {
		borderBottom: `${width} solid transparent`,
	};

	return styles as CSSProperties;
};


// -------------------------------------------------- Floating Cards //
export const useCardContainerStyle: UseCardContainerStyle = (options) => {
	const { cardMinWidth, cardWidth, field } = options;
	const coords = useGetFieldCoordinates({ field });

	const width = cardWidth || coords.width;
	const minWidth = cardMinWidth || coords.width;

	const styles = {
		height: 'fit-content',
		left: coords.left,
		minWidth,
		position: 'absolute',
		top: coords.top,
		width,
		zIndex: 10,
	};
	return styles as CSSProperties;
};
