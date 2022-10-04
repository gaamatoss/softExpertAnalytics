import React from 'react';
import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from 'vitest';
import { cleanup, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from 'src/App';
import AnimalServices from 'src/utils/AnimalServices';

describe('Integration tests', () => {
	let animalServicesSpy;

	beforeAll(() => {
		animalServicesSpy = vi.spyOn(AnimalServices, 'getAnimals').mockResolvedValue([{
			name: 'Dog',
			animal_type: 'Mammal',
			image_link: 'dog.png'
		}, {
			name: 'Cat',
			animal_type: 'Mammal',
			image_link: 'cat.png'
		}]);
	});

	afterAll(() => {
		animalServicesSpy.mockRestore();
	});

	afterEach(() => {
		cleanup();
	});

	it('should render a table with two animals', async () => {
		const component = render(<App />);

		await waitFor(() => expect(component.queryAllByTestId('row-data')).toHaveLength(2));
	});

	it('should filter the animals based on search term', async () => {
		const user = userEvent.setup();
		const component = render(<App />);

		await waitFor(() => expect(component.queryAllByTestId('row-data')).toHaveLength(2));

		await user.type(component.getByTestId('filter'), 'wp');
		await waitFor(() => expect(component.queryAllByTestId('row-data')).toHaveLength(0));

		await user.type(component.getByTestId('filter'), '{Backspace>2}');
		await waitFor(() => expect(component.queryAllByTestId('row-data')).toHaveLength(2));

		await user.type(component.getByTestId('filter'), 'Do');
		await waitFor(() => expect(component.queryAllByTestId('row-data')).toHaveLength(1));

		await user.type(component.getByTestId('filter'), '{Backspace>2}');
		await user.type(component.getByTestId('filter'), 'do');
		await waitFor(() => expect(component.queryAllByTestId('row-data')).toHaveLength(1));
	});

	it('should favorite an animal', async () => {
		const user = userEvent.setup();
		const component = render(<App />);

		await waitFor(() => expect(component.queryAllByTestId('card')).toHaveLength(0));
		await waitFor(() => expect(component.queryAllByTestId('row-data')).toHaveLength(2));

		const dogStar = component.queryAllByTestId('star')[0];

		await user.click(dogStar);
		await waitFor(() => expect(dogStar.textContent).toBe('★'));
		await waitFor(() => expect(component.queryAllByTestId('card')).toHaveLength(1));
		await waitFor(() => expect(component.queryAllByTestId('card')[0].querySelector('[data-testid="name"]').textContent).toBe('Name: Dog'));
		await waitFor(() => expect(component.queryAllByTestId('card')[0].querySelector('[data-testid="type"]').textContent).toBe('Type: Mammal'));

		await user.click(dogStar);
		await waitFor(() => expect(dogStar.textContent).toBe('☆'));
		await waitFor(() => expect(component.queryAllByTestId('card')).toHaveLength(0));
	});
});