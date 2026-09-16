// eslint.config.js
import eslint from '@eslint/js';
import wdnsConfig from '@wdns/eslint-config-wdns';
import tseslint from 'typescript-eslint';
import AutoImportJson from './.eslintrc-auto-import.json' with { type: 'json' };
import { defineConfig, includeIgnoreFile } from 'eslint/config';
import { fileURLToPath, URL } from 'node:url';

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));


export default defineConfig(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...wdnsConfig,
	includeIgnoreFile(gitignorePath),
	{
		// your overrides
		rules: {
			// TypeScript allows a type and a value to share a name (e.g. component index.ts files)
			'no-redeclare': 0,
		},
	},
	{
		ignores: [
			'**/*.js',
			'**/*.d.ts',
			'eslint.config.mjs',
			'public/**',
			'src/playground/configs/templates/PlaygroundPage.vue',
			'vite.build.config.mts',
			'vite.config.mts',
			'vitest.config.mts',
		],
	},
	{
		name: 'app/files-to-lint',
		files: ['./src/**/*.{ts,mts,tsx,vue}'],
		languageOptions: {
			...AutoImportJson,
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				parser: tseslint.parser,
				extraFileExtensions: ['.vue'],
				sourceType: 'module',
			},
		},
		plugins: {
			'typescript-eslint': tseslint.plugin,
		},
	},
	{
		// Components destructure `toRefs(settings)` (merged attrs, props and global options),
		// which intentionally reuses prop names.
		name: 'app/plugin-components-settings-refs',
		files: ['src/plugin/components/**/*.vue'],
		rules: {
			'vue/no-dupe-keys': 0,
		},
	},
	{
		// Documentation and playground files are plain JS and are not part of the tsconfig.
		name: 'app/docs-and-playground',
		files: ['src/**/*.{ts,vue}'],
		ignores: ['src/plugin/**'],
		languageOptions: {
			parserOptions: {
				projectService: false,
			},
		},
		rules: {
			'vue/block-lang': 0,
		},
	},
);
