import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import checkPropTypes from 'check-prop-types';

/* Utility Functions and Data */
import { findByTestAttribute, checkProps } from '../../Utils';

const setUp = (props) => {
	const cardComponent = shallow(<Card {...props} />);
	return cardComponent;
};

describe('Card (Child) Component', () => {

	let cardComponent;
	beforeEach(() => {
		const props = {
			id: 1,
			title: 'Test Card',
			subtitle: 'For Testing Purposes',
			text: 'This is just a test.',
			image_url: 'http://test.com/pic',
			href: 'http://test.com/link',
			is_liked: true
		}
		cardComponent = setUp(props);
	});

	describe('Check PropTypes', () => {
		it('does not throw a warning', () => {
			const expectedProps = {
				id: 1,
				title: 'Test Card',
				subtitle: 'For Testing Purposes',
				text: 'This is just a test.',
				image_url: 'http://test.com/pic',
				href: 'http://test.com/link',
				is_liked: true
			};
			const propsError = checkProps(Card, expectedProps);
			expect(propsError).toBeUndefined();
		})
	});

	it('renders without crashing', () => {
		const wrapper = findByTestAttribute(cardComponent, 'Card');
		expect(wrapper.length).toBe(1);
	});

	it('contains all expected elements', () => {
		let wrapper = findByTestAttribute(cardComponent, 'CardHref');
		expect(wrapper.length).toBe(1);
		wrapper = findByTestAttribute(cardComponent, 'CardImg');
		expect(wrapper.length).toBe(1);
		wrapper = findByTestAttribute(cardComponent, 'CardIcon');
		expect(wrapper.length).toBe(1);
		wrapper = findByTestAttribute(cardComponent, 'CardTitle');
		expect(wrapper.length).toBe(1);
		wrapper = findByTestAttribute(cardComponent, 'CardSubtitle');
		expect(wrapper.length).toBe(1);
		wrapper = findByTestAttribute(cardComponent, 'CardText');
		expect(wrapper.length).toBe(1);
		wrapper = findByTestAttribute(cardComponent, 'CardLikeButton');
		expect(wrapper.length).toBe(1);
	});

});
