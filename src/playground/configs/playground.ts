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
	cancelButtonColor: 'yellow', // ! Fail
	// cancelButtonSize: 'x-small', // ? CONFIRMED
	// cancelButtonTitle: 'xxxxxxxxxxx', // ? CONFIRMED
	// cancelButtonVariant: 'outlined', // ? CONFIRMED
	// cancelIcon: 'mdi:mdi-cog', // ? CONFIRMED
	// cancelIconColor: 'purple', // ? CONFIRMED
	// cardField: true, // ? CONFIRMED
	// cardOffsetX: 100, // ? CONFIRMED
	// cardOffsetY: 100, // ? CONFIRMED
	// cell: true, // ? CONFIRMED
	// cellUnderlineFullWidth: false, // ? CONFIRMED
	// closeSiblings: false, // ? CONFIRMED
	// color: 'orange', // * CONFIRMED
	// disabled: false, // & not allowed
	// emptyText: 'foobar', // ? CONFIRMED
	// fieldOnly: true, // ? CONFIRMED
	// hideCancelIcon: true, // ? CONFIRMED
	// hideDetails: true,
	// hideSaveIcon: true, // ? CONFIRMED
	// loadingWait: false,  // ? CONFIRMED
	// tableField: false,
	// underlineColor: 'red',  // ? CONFIRMED
	// underlineStyle: 'dashed',  // ? CONFIRMED
	// underlineWidth: '10px',  // ? CONFIRMED
	// underlined: false,  // ? CONFIRMED
	// valueColor: 'pink',  // ? CONFIRMED
}));
app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('FaIcon', FontAwesomeIcon);

registerPlugins(app);

app.mount('#app');
