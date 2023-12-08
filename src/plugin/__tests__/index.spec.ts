// Utilities
import { describe, it, expect } from 'vitest';
// import { mount } from '@vue/test-utils';
import { createVInlineFields } from '@/plugin';

describe('framework', () => {
	describe('install', () => {
		it('should return install function', () => {
			const vInlineFields = createVInlineFields();

			expect('install' in vInlineFields).toBe(true);
		});
	});
});
