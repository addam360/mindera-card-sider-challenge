import React from 'react';
import App from './App';

/* Enzyme */
import { shallow } from 'enzyme';

it('renders without crashing', () => {
	shallow(<App />);
});
