import React, { Component } from 'react';

/* Redux Dependencies */
import { Provider } from 'react-redux';
import store from './store';

/* Components */
import CardSlider from './components/CardSlider';

/* Reset Sane Defaults */
import './destyle.css';

/* Inline Styling for 'App' */
const bgColor = '#F6f6f6';
const appStyle = {
	backgroundColor: bgColor,
}

class App extends Component {
  render() {
    return (
    	/* Wrap in Redux Provider */
    	<Provider store={store}>
      		<div style={appStyle}>
      			<CardSlider pageSize={3}>Test</CardSlider>
      		</div>
    	</Provider>
    );
  }
}

export default App;
