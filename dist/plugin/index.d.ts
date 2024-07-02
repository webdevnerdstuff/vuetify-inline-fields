import { App } from 'vue';
import { SharedProps } from './types';

import * as VInlineFields from '@components/index';
export declare const globalOptions: unique symbol;
export declare function createVInlineFields(options?: Omit<SharedProps, 'disabled' | 'label' | 'loading' | 'name'>): {
    install: (app: App) => void;
};
export default VInlineFields;
export * from './components/index';
