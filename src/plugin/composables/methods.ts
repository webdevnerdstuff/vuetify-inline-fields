import {
	FieldValue,
	UseCheckForErrors,
	UseSaveValue,
	UseToggleField,
	UseTruncateText
} from '@/types';
import axios from 'axios';


// ------------------------------------------------ Internal Functions //
function buildResponseItem(item: object, name: string, value: FieldValue) {
	const returnItem = { ...item };
	returnItem[name] = value;

	return returnItem;
}


// ------------------------------------------------ Composables //
const useCheckForErrors: UseCheckForErrors = (options) => {
	const { required, rules } = options;
	let { value } = options;
	value = unref(value);

	const results: string[] = [];
	let hasErrors = false;

	if (required && !value) {
		results.push('Field is required.');

		return {
			errors: true,
			results,
		};
	}

	if (rules) {
		for (const rule of rules) {
			const handler = typeof rule === 'function' ? rule : () => rule;
			const result = handler(value);

			if (result === true) continue;
			if (typeof result !== 'string') {
				console.warn(`${result} is not a valid value. Rule functions must return boolean true or a string.`);

				continue;
			}

			results.push(result);
		}

		hasErrors = results.length > 0;
	}

	return {
		errors: hasErrors,
		results,
	};
};

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

const useTruncateText: UseTruncateText = (options) => {
	const { length = 0 } = options;
	let { suffix, text } = options;
	text = text.toString();
	suffix = suffix || '...';

	if (text.length > length) {
		return `${text.substring(0, length)}${suffix}`;
	}

	return text;
};


export {
	useCheckForErrors,
	useSaveValue,
	useToggleField,
	useTruncateText,
};
