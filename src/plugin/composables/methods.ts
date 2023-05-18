import axios from 'axios';

function setInlineFieldOpen(id = null, timeOpened = null) {
	const inlineElementOpen = { id, timeOpened };
	return inlineElementOpen;
}

function buildResponseItem(item, name: string, value) {
	const returnItem = { ...item };
	returnItem[name] = value;

	return returnItem;
}

const useToggleField = (itemId, showField, attrs, props, timeOpened, closeSiblings, fieldOnly) => {
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


async function useSaveValue(settings, emits, name, value) {
	const allSettings = settings;
	const submitData = buildResponseItem(allSettings.item, name, value);

	if (allSettings.doNotSave) {
		return;
	}

	if (allSettings.apiRoute === '') {
		throw new Error('If the "doNotSave" prop is false, the "apiRoute" prop is required.');
	}

	const response = await axios({
		data: submitData,
		method: settings.method,
		url: allSettings.apiRoute,
	})
		.then((response) => {
			emits('update', response);
			allSettings.originalValue = value;

			return { showField: false };
		})
		.catch((error) => {
			console.error('error', error);

			emits('error', error);
			return { error: true };
		});

	return response;
}


export {
	useSaveValue,
	useToggleField,
};
