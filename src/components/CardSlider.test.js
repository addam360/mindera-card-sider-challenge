import React from 'react';
import { shallow } from 'enzyme';
import CardSlider from './CardSlider';
import checkPropTypes from 'check-prop-types';

/* Utility Functions and Data */
import { findByTestAttribute, checkProps, testStore, testData } from '../../Utils';

const setUp = (initialState) => {
	const store = testStore(initialState);
	const cardSliderComponent = shallow(<CardSlider pageSize={3} store={store}/>)
									.childAt(0)
									.dive();
	return cardSliderComponent;
};

describe('CardSlider Component', () => {

	let cardSliderComponent;
	beforeEach(() => {
		const initialState = testData;
		cardSliderComponent = setUp(initialState);
	});

	describe('Check PropTypes', () => {
		it('does not throw a warning', () => {
			const expectedProps = {
				pageSize: true
			};
			const propsError = checkProps(CardSlider, expectedProps);
			expect(propsError).toBeUndefined();
		})
	});

	it('renders without crashing', () => {
		const wrapper = findByTestAttribute(cardSliderComponent, 'CardSlider');
		expect(wrapper.length).toBe(1);
	});

	it('renders the correct number of cards', () => {
		const wrapper = findByTestAttribute(cardSliderComponent, 'Card');
		expect(wrapper.length).toBe(testData.card.cards.length);
	});

	it('renders the Arrow Buttons correctly', () => {
		let wrapper = findByTestAttribute(cardSliderComponent, 'PreviousCardsButton');
		expect(wrapper.length).toBe(1);
		wrapper = findByTestAttribute(cardSliderComponent, 'NextCardsButton');
		expect(wrapper.length).toBe(1);
	})

});
