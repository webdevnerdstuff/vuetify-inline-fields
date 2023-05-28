import {
	FieldValue,
	TimeOpened,
	UseSaveValue,
	UseToggleField,
} from '@/types';
import axios from 'axios';


// Internal Functions //
function buildResponseItem(item: object, name: string, value: FieldValue) {
	const returnItem = { ...item };
	returnItem[name] = value;

	return returnItem;
}

function setInlineFieldOpen(id: number, timeOpened: TimeOpened): object {
	const inlineElementOpen = { id, timeOpened };
	return inlineElementOpen;
}


// Composables //
// const useCloseField = (originalValue) => {

// 	useToggleField(itemId, showField, attrs, props, timeOpened, closeSiblings, fieldOnly);

// 	return originalValue;
// };

const useSaveValue: UseSaveValue = async (settings, emit, name, value) => {
	const allSettings = settings;
	const submitData = buildResponseItem(allSettings.item as object, name, value);

	if (allSettings.doNotSave) {
		emit('update', value);
		return {
			error: false,
			value,
		};
	}

	if (allSettings.apiRoute === '') {
		throw new Error('If the "doNotSave" prop is false, the "apiRoute" prop is required.');
	}

	const response = await axios({
		data: submitData,
		method: settings.method as string,
		url: allSettings.apiRoute as string,
	})
		.then((response) => {
			emit('update', response);
			allSettings.originalValue = value;

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

const useToggleField: UseToggleField = (itemId, showField, attrs, props, timeOpened, closeSiblings, fieldOnly) => {
	let opened = timeOpened;

	if (closeSiblings && !fieldOnly) {
		opened = new Date();
		setInlineFieldOpen(itemId, timeOpened);
	}

	return {
		settings: { ...attrs, ...props },
		showField: !showField,
		timeOpened: opened,
	};
};


export {
	// useCloseField,
	useSaveValue,
	useToggleField,
};
