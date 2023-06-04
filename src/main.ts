import '@/Libraries/fontawesome';
import App from './App.vue';
import CodeBlock from 'vue3-code-block';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { registerPlugins } from './plugins';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
	VInlineCheckbox,
	VInlineSelect,
	VInlineSwitch,
	VInlineTextField,
	VInlineTextarea,
} from './index';


const app = createApp(App);
app.use(CodeBlock);
app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('FaIcon', FontAwesomeIcon);

app.component('VInlineCheckbox', VInlineCheckbox);
app.component('VInlineSelect', VInlineSelect);
app.component('VInlineSwitch', VInlineSwitch);
app.component('VInlineTextField', VInlineTextField);
app.component('VInlineTextarea', VInlineTextarea);

registerPlugins(app);

app.mount('#app');
