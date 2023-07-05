import { CSSProperties } from 'vue';
import { UseDisplayValueStyles } from '@/types';
import { useGetColor } from './colors';


export const useInlineFieldsContainerStyle = (options) => {
	const { alignItems } = options;

	const styles = {
		'align-items': alignItems,
	};

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
