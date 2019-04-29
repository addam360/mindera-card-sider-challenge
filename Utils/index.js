import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../src/reducers';
import { middleware } from '../src/store';
import checkPropTypes from 'check-prop-types';

export const findByTestAttribute = (component, attribute) => {
	const wrapper = component.find(`[data-test='${attribute}']`);
	return wrapper;
}

export const checkProps = (component, expectedProps) => {
	const propsError = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
	return propsError;
}

export const testStore = (initialState) => {
	const store = createStore(
		rootReducer, 
		initialState, 
		compose(applyMiddleware(...middleware))
	);
	return store;
};

export const testData = { "card" : {
	"cards": [
		{
	      "id": 1,
	      "title": "We are Humans",
	      "subtitle": "And we love humans",
	      "text": "We act like humans, we talk like humans, and we think like humans. And we call out anyone who does the opposite.",
	      "image_url": "https://picsum.photos/300/150/?random",
	      "href": "https://mindera.com/people-and-culture/we-are-humans/",
	      "is_liked": true
	    },
	    {
	      "id": 2,
	      "title": "We work together",
	      "subtitle": "Would you like to join us?",
	      "text": "We insist on working collaborativelly. <strong>No rockstars</strong>. No departments. The whole owns the whole project together.",
	      "image_url": "https://picsum.photos/300/150/?random",
	      "href": "https://mindera.com/people-and-culture/we-work-together/",
	      "is_liked": false
	    },
		{
	      "id": 3,
	      "title": "We change",
	      "subtitle": "And we embrace change",
	      "text": "Nothing is sacred, from our habits to our rituals, to our enviroment. Change is a natural part of the human life, and we prefer to embrace it.",
	      "image_url": "https://picsum.photos/300/150/?random",
	      "href": "https://mindera.com/people-and-culture/we-change/",
	      "is_liked": true
	    },
	    {
	      "id": 4,
	      "title": "We hire differently",
	      "text": "Most companies operate under the premise that employees should be replaceable like parts of an assembly line. We choose our people more carefully.",
	      "image_url": "https://picsum.photos/300/150/?random",
	      "href": "https://mindera.com/people-and-culture/faq/",
	      "is_liked": true
	    },
	    {
	      "id": 5,
	      "title": "Get autonomous",
	      "text": "You’re given an incredible amount of freedom and autonomy at Mindera. That goes for everyone.",
	      "image_url": "https://picsum.photos/300/150/?random",
	      "href": "https://mindera.com/people-and-culture/faq/",
	      "is_liked": true
	    },
	    {
	      "id": 6,
	      "title": "Work together",
	      "text": "Our flat structure calls for it by necessity. Being a leader may feel unnatural at first, but we expect everyone to step up and own part of the project.",
	      "image_url": "https://picsum.photos/300/150/?random",
	      "href": "https://mindera.com/people-and-culture/faq/",
	      "is_liked": true
	    }
	]}
}
