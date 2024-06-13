import React from 'react';
import '@testing-library/jest-dom';
import App from '../src/App';
import renderer from 'react-test-renderer';

test('matches snapshot', () => {
	const tree = renderer.create(<App />).toJSON();
	expect(tree).toMatchSnapshot();
});
