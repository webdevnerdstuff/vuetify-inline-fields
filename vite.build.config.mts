import { defineConfig } from 'vite';
import * as path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import commonjs from '@rollup/plugin-commonjs';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';
import pkg from './package.json';
import terser from '@rollup/plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import vue from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const scopedPackageName = pkg.name;
const packageName = scopedPackageName.split('/')[1];


const banner = `/**
 * @name ${scopedPackageName}
 * @version ${pkg.version}
 * @description ${pkg.description}
 * @author ${pkg.author}
 * @copyright Copyright ${new Date().getFullYear()}, WebDevNerdStuff
 * @homepage ${pkg.homepage}
 * @repository ${pkg.repository}
 * @license ${pkg.license} License
 */
`;

export default defineConfig({
	publicDir: false,
	build: {
		lib: {
			entry: './src/plugin/index.ts',
			name: packageName,
			formats: ['es', 'cjs'],
			fileName: format => `${packageName}.${format}.js`,
		},
		rollupOptions: {
			input: {
				main: path.resolve(__dirname, './src/plugin/index.ts')
			},
			external: [
				...Object.keys(pkg.dependencies || {}),
			],
			output: {
				banner,
			},
		},
	},
	plugins: [
		commonjs(),
		AutoImport({
			dts: false,
			imports: [
				'vue',
				{
					vue: ['CSSProperties'],
				}
			],
			vueTemplate: true,
		}),
		vue({
			script: {
				defineModel: true,
			},
			template: { transformAssetUrls },
		}),
		dts({
			insertTypesEntry: true,
		}),
		typescript({
			check: true,
			include: ['./src/plugin/**/*.vue'],
		}),
		vuetify({
			autoImport: true,
			styles: 'none',
		}),
		cssInjectedByJsPlugin({ topExecutionPriority: false }),
		viteStaticCopy({
			targets: [
				{
					src: 'src/plugin/styles/*',
					dest: 'scss',
				},
			]
		}),
		terser({
			compress: {
				drop_console: ['log'],
			},
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/plugin/components'),
			'@composables': path.resolve(__dirname, './src/plugin/composables'),
			'@plugin': path.resolve(__dirname, './src/plugin'),
			'@root': path.resolve(__dirname, './'),
			'@types': path.resolve(__dirname, './src/plugin/types'),
			'@utils': path.resolve(__dirname, './src/plugin/utils'),
		},
		extensions: [
			'.js',
			'.json',
			'.jsx',
			'.mjs',
			'.ts',
			'.tsx',
			'.vue',
		],
	},
});
