import React from 'react';
import { shallow } from 'enzyme';
import CardLikeButton from './CardLikeButton';
import checkPropTypes from 'check-prop-types';

/* Utility Functions and Data */
import { findByTestAttribute, checkProps, testStore, testData } from '../../Utils';

/* Static Assets */
import likedHeart from '../liked-heart.png';
import unlikedHeart from '../unliked-heart.png';

const setUp = (props, initialState) => {
	const store = testStore(initialState);
	const cardLikeButtonComponent = shallow(<CardLikeButton {...props} store={store}/>)
									.childAt(0)
									.dive();
	return cardLikeButtonComponent;
};

describe('Card Like Button (Child) Component', () => {

	let cardLikeButtonComponent;
	beforeEach(() => {
		const props = {
			'id': 1,
			'is_liked': true
		}
		const initialState = testData;
		cardLikeButtonComponent = setUp(props, initialState);
	});

	describe('Check PropTypes', () => {
		it('does not throw a warning', () => {
			const expectedProps = {
				'id': 1,
				'is_liked': true
			};
			const propsError = checkProps(CardLikeButton, expectedProps);
			expect(propsError).toBeUndefined();
		})
	});

	it('renders without crashing', () => {
		const wrapper = findByTestAttribute(cardLikeButtonComponent, 'CardLikeButton');
		expect(wrapper.length).toBe(1);
	});

});
