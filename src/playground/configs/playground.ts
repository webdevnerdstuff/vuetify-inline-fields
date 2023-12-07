import '@/libraries/fontawesome';
import PlaygroundApp from './PlaygroundApp.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { registerPlugins } from '../../plugins';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { makeServer } from '../../server';
import { createVInlineFields } from '../../plugin/index';


makeServer({ environment: 'playground' });

const app = createApp(PlaygroundApp);
app.use(createVInlineFields({
	// cancelButtonColor: 'yellow',
	// cancelButtonSize: 'x-small',
	// cancelButtonTitle: 'xxxxxxxxxxx',
	// cancelButtonVariant: 'outlined',
	// cancelIcon: 'mdi:mdi-cog',
	// cancelIconColor: 'purple',
	// cardField: true,
	// cardOffsetX: 100,
	// cardOffsetY: 100,
	// cell: true,
	// cellUnderlineFullWidth: true,
	// closeSiblings: false,
	// color: 'orange',
	// disabled: false,
	// emptyText: 'xxxxxxxxxxxx',
	// fieldOnly: true,
	// hideCancelIcon: true,
	// hideDetails: true,
	// hideSaveIcon: true,
	// hideSaveIcon: true,
	// loadingWait: true,
	// tableField: false,
	// underlineColor: 'red',
	// underlineStyle: 'dashed',
	// underlineWidth: '10px',
	// underlined: false,
	// valueColor: 'pink',
}));
app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('FaIcon', FontAwesomeIcon);

registerPlugins(app);

app.mount('#app');
