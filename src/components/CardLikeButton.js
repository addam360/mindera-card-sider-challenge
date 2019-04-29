import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Static Assets */
import likedHeart from '../liked-heart.png';
import unlikedHeart from '../unliked-heart.png';

/* Redux Actions */
import { connect } from 'react-redux';
import { likeCard } from '../actions/cardActions';
import { unlikeCard } from '../actions/cardActions';

const cardLikeButtonStyle = {
	position: 'relative',
	zIndex: '10',
	width: '26px',
	height: '26px',
}

class CardLikeButton extends Component {
	/* Call to Redux Action for Liking Card */
	onLikeCardClick = (id) => {
		this.props.likeCard(id);
	}
	/* Call to Redux Action for Unliking Card */
	onUnlikeCardClick = (id) => {
		this.props.unlikeCard(id);
	}
	render() {
		return(
			<div>
				<img className='CardLikeButton'  data-test="CardLikeButton"
					src={this.props.is_liked ? likedHeart : unlikedHeart}
					alt={this.props.is_liked ? 'A Full Heart :)' : 'An Unfulfilled Heart :('}
					style={cardLikeButtonStyle}
					/* Call to Redux Action for Liking Card */
					onClick= {
						this.props.is_liked
						? this.onUnlikeCardClick.bind(this, this.props.id)
						: this.onLikeCardClick.bind(this, this.props.id)
					}
				/>		
			</div>
		);
	}

}

CardLikeButton.propTypes = {
	likeCard: PropTypes.func.isRequired,
	unlikeCard: PropTypes.func.isRequired,
	card: PropTypes.object.isRequired,
	id: PropTypes.number.isRequired,
	is_liked: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
	card: state.card
});

export default connect(mapStateToProps, { likeCard, unlikeCard })(CardLikeButton);
