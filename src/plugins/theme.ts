import colors from 'vuetify/lib/util/colors.mjs';

export const dark = {
	colors: {
		accent: '#d00274',
		danger: colors.red.base,
		error: colors.red.base,
		info: colors.teal.base,
		primary: colors.blue.darken2,
		secondary: colors.purple.base,
		success: colors.green.base,
		warning: colors.orange.darken3,
	},
	dark: true,
};

export const light = {
	colors: {
		accent: '#905',
		danger: colors.red.base,
		error: colors.red.base,
		info: colors.teal.darken1,
		primary: colors.blue.base,
		secondary: colors.purple.lighten1,
		success: colors.green.base,
		warning: colors.orange.base,
	},
	dark: false,
};


export default {
	dark,
	light,
};
