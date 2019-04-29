import { GET_CARDS, LIKE_CARD, UNLIKE_CARD, CARDS_LOADING } from '../actions/types';
import cardReducer from './cardReducer';

import { testData } from '../../Utils';

describe('Card Reducer', () => {

	it('returns default state', () => {
		const returnedState = cardReducer(undefined, {});
		expect(returnedState).toEqual({"cards": [], "loading": false});
	});

	it('returns GET_CARDS correctly', () => {
		const returnedState = cardReducer(undefined, {
			type: GET_CARDS,
			payload: testData
		});
		expect(returnedState).toEqual({ "cards": testData, "loading": false });
	});

	it('returns LIKE_CARD correctly', () => {
		const returnedState = cardReducer(undefined, {
			type: LIKE_CARD,
			payload: testData
		});
		expect(returnedState).toEqual({ "cards": testData, "cards": [], "loading": false });
	});

	it('returns UNLIKE_CARD correctly', () => {
		const returnedState = cardReducer(undefined, {
			type: UNLIKE_CARD,
			payload: testData
		});
		expect(returnedState).toEqual({ "cards": testData, "cards": [], "loading": false });
	});

	it('returns CARDS_LOADING correctly', () => {
		const returnedState = cardReducer(undefined, {
			type: CARDS_LOADING,
			payload: testData
		});
		expect(returnedState).toEqual({ "cards": [], "loading": true });
	});

});
