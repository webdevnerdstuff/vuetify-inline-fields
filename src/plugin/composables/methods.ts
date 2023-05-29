import {
	FieldValue,
	UseSaveValue,
	UseToggleField,
} from '@/types';
import axios from 'axios';


// ------------------------------------------------ Internal Functions //
function buildResponseItem(item: object, name: string, value: FieldValue) {
	const returnItem = { ...item };
	returnItem[name] = value;

	return returnItem;
}


// ------------------------------------------------ Composables //
const useSaveValue: UseSaveValue = async (options) => {
	const { settings, emit, name, value } = options;
	const submitData = buildResponseItem(settings.item as object, name, value);

	if (settings.doNotSave) {
		emit('update', value);
		return {
			error: false,
			value,
		};
	}

	if (settings.apiRoute === '') {
		throw new Error('If the "doNotSave" prop is false, the "apiRoute" prop is required.');
	}

	const response = await axios({
		data: submitData,
		method: settings.method as string,
		url: settings.apiRoute as string,
	})
		.then((response) => {
			emit('update', response);
			settings.originalValue = value;

			return {
				error: false,
				showField: false,
			};
		})
		.catch((error) => {
			console.error('error', error);

			emit('error', error);

			return {
				error: true,
				showField: false,
			};
		});

	return response;
};

const useToggleField: UseToggleField = (options) => {
	const { attrs, closeSiblings, fieldOnly, props, showField, timeOpened } = options;
	let opened = timeOpened;

	if (closeSiblings && !fieldOnly) {
		opened = new Date();
	}

	return {
		settings: { ...attrs, ...props },
		showField: !unref(showField),
		timeOpened: opened,
	};
};


export {
	useSaveValue,
	useToggleField,
};
