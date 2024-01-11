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
	// cancelButtonColor: 'red',
	// cancelButtonSize: 'x-small',
	// cancelButtonTitle: 'xxxxxxxxxxx',
	// cancelButtonVariant: 'outlined',
	// cancelIcon: 'mdi:mdi-cog',
	// cancelIconColor: 'purple',
	// cardField: true,
	// cardOffsetX: 100,
	// cardOffsetY: 100,
	// cell: true,
	// cellUnderlineFullWidth: false,
	// closeSiblings: false,
	// color: 'orange',
	// displayAppendIcon: 'mdi:mdi-pencil',
	// displayAppendIconColor: 'yellow',
	// displayAppendIconSize: 'x-large',
	// displayAppendInnerIcon: 'mdi:mdi-pencil',
	// displayAppendInnerIconColor: 'blue',
	// displayAppendInnerIconSize: 'x-large',
	// displayPrependIcon: 'mdi:mdi-pencil',
	// displayPrependIconColor: 'red',
	// displayPrependIconSize: 'x-large',
	// displayPrependInnerIcon: 'mdi:mdi-pencil',
	// displayPrependInnerIconColor: 'green',
	// displayPrependInnerIconSize: 'x-large',
	// emptyText: 'foobar',
	// falseValue: 'mike',
	// fieldOnly: true,
	// hideCancelIcon: true,
	// hideDetails: true,
	// hideSaveIcon: true,
	// icons: false,
	// iconFalse: 'mdi:mdi-minus',
	// iconFalseColor: 'orange',
	// iconFalseTitle: 'nope',
	// iconTrue: 'mdi:mdi-plus',
	// iconTrueColor: 'yellow',
	// iconTrueTitle: 'yup',
	// loadingWait: false,
	// saveButtonColor: 'red',
	// saveIcon: 'mdi:mdi-cog',
	// tableField: false,
	// trueValue: 'bob',
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
