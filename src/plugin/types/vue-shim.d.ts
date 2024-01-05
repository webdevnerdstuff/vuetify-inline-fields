/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.vue' {
	import { defineComponent } from 'vue';
	const component: ReturnType<typeof defineComponent>;
	export default component;
}
