import { UseGetIcon } from '../../types';

const defaultIcons = {
	fa: {
		clear: 'fa-circle-xmark',
		false: 'fa-xmark',
		loading: 'fa-circle-notch',
		save: 'fa-floppy-disk',
		true: 'fa-check',
	},
	mdi: {
		clear: 'mdi-close-circle-outline',
		false: 'mdi-close',
		loading: 'mdi-loading',
		save: 'mdi-content-save',
		true: 'mdi-check',
	},
};

export const useGetIcon: UseGetIcon = (options) => {
	const { icon, iconOptions, name } = options;

	if (icon) {
		return icon;
	}

	const iconSet = defaultIcons[iconOptions?.defaultSet as string];

	if (!iconSet) {
		throw new Error(`VInlineFields: No VInlineFields default ${iconOptions?.defaultSet} icon set found for ${name}. Please set the icon prop.`);
	}

	const newIcon = iconSet[name];

	if (!newIcon) {
		throw new Error(`VInlineFields: No ${name} icon found. Please set the icon prop, or set the default icon set to 'mdi' or 'fa'`);
	}

	return newIcon;
};
