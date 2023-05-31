import { defineStore } from 'pinia';
import packageJson from '@root/package.json';

const packageName = packageJson.name;


// Links //
const repoBaseUrl = `https://github.com/webdevnerdstuff/${packageName}`;
const links = {
	changeLog: `${repoBaseUrl}/blob/main/CHANGELOG.md`,
	github: repoBaseUrl,
	githubProfile: 'https://github.com/webdevnerdstuff',
	license: `${repoBaseUrl}/blob/main/LICENSE.md`,
	npm: `https://www.npmjs.com/package/${packageName}`,
	vue: 'https://vuejs.org/',
	vueUse: 'https://vueuse.org/',
	vuetify: 'https://vuetifyjs.com/',
	vuetifyGithub: 'https://github.com/vuetifyjs/vuetify',
};

interface State {
	links: object;
	package: object;
	pluginVersion: string | number;
	storageName: string;
}

export const useCoreStore = defineStore('core', {
	actions: {
		setLocalStorage(val: string): string {
			const oldValue = localStorage.getItem(this.storageName);
			const newValue = val ?? oldValue;

			localStorage.setItem(this.storageName, newValue);
			return newValue;
		},
		setTheme(val: string): string {
			const themeName = val === 'dark' ? 'light' : 'dark';
			const currentTheme = localStorage.getItem(`${this.storageName}-theme`);
			const newTheme = themeName ?? currentTheme;

			localStorage.setItem(`${this.storageName}-theme`, newTheme);
			return newTheme;
		},
	},
	getters: {
		getLocalStorage: (state: State) => (): unknown => {
			const value = localStorage.getItem(state.storageName);
			return value;
		},
		getTheme: (state: State) => (): unknown => {
			const value = localStorage.getItem(`${state.storageName}-theme`);
			return value;
		},
	},
	state: (): State => {
		return {
			links,
			package: packageJson,
			pluginVersion: packageJson.version,
			storageName: 'vuetify-inline-fields',
		};
	},
});
