import { fileURLToPath } from 'node:url';
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			environment: 'jsdom',
			exclude: [
				...configDefaults.exclude,
				'./src/plugin/components/common/__tests__/common.test.ts',
				'./src/plugin/components/VInlineAutocomplete'
			],
			root: fileURLToPath(new URL('./', import.meta.url)),
			server: {
				deps: {
					inline: ['element-plus', 'vuetify-inline-fields', 'vuetify']
				}
			},
		}
	})
);
