import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App';

test('renders the counter', () => {
	render(<App />);
	const headingElement = screen.getByText(/Counter/i);
	expect(headingElement).toBeInTheDocument();
});

test('increments the counter', () => {
	render(<App />);
	const incrementButton = screen.getByText(/Increment/i);
	const countElement = screen.getByTestId('count');

	fireEvent.click(incrementButton);
	expect(countElement).toHaveTextContent('1');
});

test('decrements the counter', () => {
	render(<App />);
	const decrementButton = screen.getByText(/Decrement/i);
	const countElement = screen.getByTestId('count');

	fireEvent.click(decrementButton);
	expect(countElement).toHaveTextContent('-1');
});
