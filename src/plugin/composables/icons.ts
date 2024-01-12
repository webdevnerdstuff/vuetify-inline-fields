import { UseGetIcon } from '@/plugin/types';

const defaultIcons = {
	fa: {
		checkboxFalse: '$checkboxOff',
		checkboxTrue: 'far fa-square-check',
		clear: '$clear',
		false: '$close',
		loading: 'fa-circle-notch',
		save: 'fa-floppy-disk',
		true: '$complete',
	},
	mdi: {
		checkboxFalse: '$checkboxOff',
		checkboxTrue: 'mdi:mdi-checkbox-outline',
		clear: '$clear',
		false: '$close',
		loading: 'mdi-loading',
		save: 'mdi-content-save',
		true: '$complete',
	},
};

export const useGetIcon: UseGetIcon = (options) => {
	const { icon, iconOptions, name } = options;

	if (icon) {
		return icon;
	}

	const iconSet = defaultIcons[iconOptions?.defaultSet as string];

	if (!iconSet) {
		throw new Error(`[VInlineFields]: No default ${iconOptions?.defaultSet} icon set found.`);
	}

	const newIcon = iconSet[name];

	if (!newIcon) {
		throw new Error(`[VInlineFields]: No ${name} icon found.`);
	}

	return newIcon;
};
