import { GET_CARDS, LIKE_CARD, UNLIKE_CARD, CARDS_LOADING } from '../actions/types';

const initialState = {
	cards: [],
	loading: false,
};

export default (state = initialState, action) => {
	switch(action.type) {
		case GET_CARDS:
			return {
				...state,
				cards: action.payload,
				loading: false	
			};
		case LIKE_CARD:
			return {
				...state,
				cards: state.cards.map(
					card => card.id === action.payload 
					? { ...card, is_liked: true }
					: card
				)
			};
		case UNLIKE_CARD:
			return {
				...state,
				cards: state.cards.map(
					card => card.id === action.payload 
					? { ...card, is_liked: false }
					: card
				)
			};
		case CARDS_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
}
