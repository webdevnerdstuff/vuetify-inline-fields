/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import type {
	MaybeRef,
	Ref,
} from 'vue';
import type { SharedProps } from '@/plugin/types';


export interface BooleanIcons extends
	Required<Pick<SharedProps, 'iconFalseColor' | 'iconFalseTitle' | 'iconTrueColor' | 'iconTrueTitle'>>,
	Pick<SharedProps,
		'iconFalse' |
		'iconTrue'
	> { };


export interface DisplayValueProps {
	[key: string]: any;
	color: SharedProps['color'];
	displayAppendIcon: SharedProps['displayAppendIcon'];
	displayAppendIconColor: SharedProps['displayAppendIconColor'];
	displayAppendInnerIcon: SharedProps['displayAppendInnerIcon'];
	displayAppendInnerIconColor: SharedProps['displayAppendInnerIconColor'];
	displayPrependIcon: SharedProps['displayPrependIcon'];
	displayPrependIconColor: SharedProps['displayPrependIconColor'];
	displayPrependInnerIcon: SharedProps['displayPrependInnerIcon'];
	displayPrependInnerIconColor: SharedProps['displayPrependInnerIconColor'];
	displayValue: any;
	empty?: Ref<boolean> | boolean;
	error?: MaybeRef<boolean> | boolean | undefined;
	field: string;
	underlineColor?: SharedProps['underlineColor'];
	underlineStyle?: SharedProps['underlineStyle'];
	underlineWidth?: SharedProps['underlineWidth'];
	underlined?: SharedProps['underlined'];
	valueColor?: SharedProps['valueColor'];
}


export interface SaveFieldButtons extends
	Required<Pick<SharedProps,
		'cancelButtonColor' |
		'cancelButtonSize' |
		'cancelButtonVariant' |
		'cancelButtonTitle' |
		'cancelIconColor' |
		'error' |
		'fieldOnly' |
		'hideCancelIcon' |
		'hideSaveIcon'
	>>,
	Pick<SharedProps,
		'cancelIcon' |
		'loadingIcon' |
		'loadingIconColor' |
		'saveButtonColor' |
		'saveButtonSize' |
		'saveButtonTitle' |
		'saveButtonVariant' |
		'saveIconColor' |
		'saveButtonVariant' |
		'saveIcon'
	> { loading: boolean; };
