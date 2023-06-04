import { CSSProperties } from 'vue';
import { UseDisplayValueStyles } from '@/types';

// -------------------------------------------------- Value Styles //
export const useDisplayValueStyles: UseDisplayValueStyles = (options) => {
	const { underlineStyle, underlineWidth, color, error, underlined } = options;
	let { underlineColor } = options;
	underlineColor = underlineColor || color;

	const styles = {
		'border-bottom-color': `rgb(var(--v-theme-${underlineColor}))`,
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
