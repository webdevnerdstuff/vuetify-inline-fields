import { CSSProperties } from 'vue';

// -------------------------------------------------- Value Styles //
export const useInlineValueStyles = (
	underlineColor: string,
	underlineStyle: string,
	underlineWidth: string,
	color: string,
	error: boolean,
	underlined: boolean,
): CSSProperties => {
	let uColor = underlineColor;
	uColor = uColor || color;

	const styles = {
		'border-bottom-color': `rgb(var(--v-theme-${uColor}))`,
		'border-bottom-style': underlineStyle,
		'border-bottom-width': underlineWidth,
	};

	if (error) {
		styles['border-bottom-color'] = 'rgb(var(--v-theme-danger))';
	}

	if (!underlined) {
		styles['border-bottom'] = 'none';
	}

	return styles as CSSProperties;
};
