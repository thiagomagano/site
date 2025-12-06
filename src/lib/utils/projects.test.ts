import { describe, it, expect } from 'vitest';
import { normalizeSimpleIcon, normalizeUploadImage } from './projects';

describe('normalize upload image', () => {
	it('should return correct filename', () => {
		const want = 'todo-app.png';
		const got = normalizeUploadImage('Todo App', 'screen-shot-file-name.png');

		expect(got).toBe(want);
	});

	it('shoudl normalize when all uppercase title name', () => {
		const want = 'another-todo-app.png';
		const got = normalizeUploadImage('ANOTHER TODO APP', 'logoTodoApp.png');

		expect(got).toBe(want);
	});

	it('should return null when title is empty', () => {
		const got = normalizeUploadImage('', 'logoTodoApp.png');

		expect(got).toBe(null);
	});

	it('should return null when filename is empty', () => {
		const got = normalizeUploadImage('Todo App', '');

		expect(got).toBe(null);
	});
});

describe('Normalize Simple Icons', () => {
	it('should return correct simple icon for js', () => {
		const want = 'javascript';
		const got = normalizeSimpleIcon('js');

		expect(want).toBe(got);
	});

	it('should return correct simple icon for javascript', () => {
		const want = 'javascript';
		const got = normalizeSimpleIcon('javascript');

		expect(want).toBe(got);
	});

	it('should return correct simple icon for node.js', () => {
		const want = 'nodedotjs';
		const got1 = normalizeSimpleIcon('node');
		const got2 = normalizeSimpleIcon('nodejs');

		expect(want).toBe(got1);
		expect(want).toBe(got2);
	});
});
