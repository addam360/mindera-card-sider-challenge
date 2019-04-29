import { GET_CARDS, LIKE_CARD, UNLIKE_CARD, CARDS_LOADING } from './types';

/* HTTP Client */
import axios from 'axios';

export const getCards = (pageStart, pageEnd) => dispatch => {
	dispatch(setCardsLoading);
	/* GET Cards from 'DB' */
	axios
	.get(`/cards?_start=${pageStart}&_end=${pageEnd}`)
	.then(res => dispatch({
		type: GET_CARDS,
		payload: res.data,
	}))
	.catch(err => {
		console.log(err);
	})
};

export const likeCard = (id) => dispatch => {
	/* PATCH Card 'is_liked' by id */
	axios
	.patch(`/cards/${id}`, {'is_liked': true} )
	.then(res => dispatch({
		type: LIKE_CARD,
		payload: id
	}))
	.catch(err => {
		console.log(err);
	})
};

export const unlikeCard = (id) => dispatch => {
	/* PATCH Card 'is_liked' by id */
	axios
	.patch(`/cards/${id}`, {'is_liked': false} )
	.then(res => dispatch({
		type: UNLIKE_CARD,
		payload: id
	}))
	.catch(err => {
		console.log(err);
	})
};

export const setCardsLoading = () => {
	return {
		type: CARDS_LOADING
	}
}
