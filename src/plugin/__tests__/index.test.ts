import { describe, it, expect } from 'vitest';
import { createVInlineFields } from '../';


describe('Plugin Index', () => {
	describe('install', () => {
		it('should return install function', () => {
			const VInlineFields = createVInlineFields();

			expect('install' in VInlineFields).toBe(true);
		});
	});
});
