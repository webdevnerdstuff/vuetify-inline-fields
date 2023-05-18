



// -------------------------------------------------- TFootSlot //
export const useInlineValueStyles = (underlineColor, color, error, underlined) => {
	let uColor = underlineColor;
	uColor = uColor || color;

	const styles = {
		'border-bottom-color': `rgb(var(--v-theme-${uColor}))`,
	};

	if (error) {
		styles['border-bottom-color'] = 'rgb(var(--v-theme-danger))';
	}

	if (!underlined) {
		styles['border-bottom'] = 'none';
	}

	return styles;
};
