import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Redux Actions */
import { connect } from 'react-redux';
import { getCards } from '../actions/cardActions';

/* Child Components */
import Card from './Card.js';

/* Static Assets */
import prevButtonImg from '../prev-button.svg';
import nextButtonImg from '../next-button.svg';

const cardSliderStyle = {
	padding: '26px'
}

const cardsContainerStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fill, minmax(308px, 1fr))',
	gridGap: '26px',
	maxWidth: '976px', /* 3 columns + 2 gaps */
	margin: '0 auto', /* center align cards */
	marginBottom: '26px'
}

const cardSliderButtonsContainerStyle = {
	textAlign: 'center',
}

const cardSliderButtonStyle = {
	maxWidth: '20px',
}

class CardSlider extends Component {
	state = {
		pageStart: 0,
		pageEnd: this.props.pageSize
	}

	componentDidMount() {
		this.props.getCards(this.state.pageStart, this.props.pageSize);
	}
	
	onPreviousButtonClick = () => {
		this.setState({
			pageStart: this.state.pageStart-this.props.pageSize,
			pageEnd: this.state.pageEnd-this.props.pageSize
		}, () => {
			/* Error Handling for < Page 0 */
			if(this.state.pageStart < 0) {
				this.setState({
					pageStart: 0,
					pageEnd: this.props.pageSize
				}, () => {
					this.props.getCards(this.state.pageStart, this.state.pageEnd);
				});
			/* Normal Page GET response */
			} else {
				this.props.getCards(this.state.pageStart, this.state.pageEnd);
			}
		});
	}

	onNextButtonClick = () => {
		this.setState({
			pageStart: parseInt(this.state.pageStart) + parseInt(this.props.pageSize), 
			pageEnd: parseInt(this.state.pageEnd) + parseInt(this.props.pageSize)
		}, () => {
			/* Error Handling for > Final Page */
			if(this.props.card.cards[this.props.pageSize-1] === undefined) {
				this.setState({
					pageStart: this.state.pageStart - this.props.pageSize,
					pageEnd: this.state.pageEnd - this.props.pageSize
				}, () => {
					this.props.getCards(this.state.pageStart, this.state.pageEnd);
				});
			/* Normal Page GET response */
			} else {
				this.props.getCards(this.state.pageStart, this.state.pageEnd);
			}
		});
	}

	render() {
		/* Get Card Props from State */
		const { cards } = this.props.card;
		return(
			<div className='CardSlider' style={cardSliderStyle} data-test='CardSlider'>
				<div className='CardsContainer' style={cardsContainerStyle}>
					{cards.map(( { id, title, subtitle, text, image_url, href, is_liked } ) => (
						<Card data-test='Card'
							key={id}
							id={id}
							title={title}
							subtitle={subtitle}
							text={text}
							image_url={image_url}
							href={href}
							is_liked={is_liked}
						/>
					))}
				</div>
				<div className='CardSliderButtonsContainer' style={cardSliderButtonsContainerStyle}>
					<button className='PreviousCardsButton' style={cardSliderButtonStyle} type='button'
						data-test='PreviousCardsButton'
						onClick={this.onPreviousButtonClick.bind(this)}>
						<img src={prevButtonImg} alt='Previous Cards' />
					</button>
					<button className='NextCardsButton' style={cardSliderButtonStyle} type='button'
						data-test='NextCardsButton'
						onClick={this.onNextButtonClick.bind(this)}>
						<img src={nextButtonImg} alt='Next Cards' />
					</button>
				</div>
			</div>
		);
	}
}

CardSlider.propTypes = {
	getCards: PropTypes.func.isRequired,
	card: PropTypes.object.isRequired,
	pageSize: PropTypes.number.isRequired
}

const mapStateToProps = (state) => ({
	card: state.card
});

export default connect(mapStateToProps, { getCards })(CardSlider);