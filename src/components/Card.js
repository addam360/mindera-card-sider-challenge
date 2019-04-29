import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Child Components */
import CardLikeButton from './CardLikeButton.js';

/* Styling */
const cardStyle = {
	position: 'relative',
	zIndex: '0',
	display: 'block',
	boxShadow: '0px 1px 2px #ddd',
}

const cardImageStyle = {
	minWidth: '100%',
	maxWidth: '100%',
}

const cardLinkStyle = {
	position: 'absolute',
	zIndex: '5',
	width: '100%',
	height: '100%',
}

const cardContentContainerStyle = {
	padding: '19px',
	backgroundColor: '#FFF',
}

const cardHeaderStyle = {
	display: 'grid',
	gridTemplateColumns: '42px 1fr',
	gridGap: '10px',
	marginBottom: '19px',
}

const cardIconStyle = {
	height: '46px',
	width: '46px',
	borderRadius: '50%',
}

const cardTitleStyle = {
	fontSize: '23px',
	color: '#3A3A3A',
	fontWeight: 'bold',
	fontFamily: 'Arial, Helvetica Neue, Helvetica, sans-serif',
}

const cardSubtitleStyle = {
	fontSize: '12px',
	color: '#ADADAD',
	fontWeight: 'bold',
	fontFamily: 'Arial, Helvetica Neue, Helvetica, sans-serif',
	textTransform: 'uppercase',
	lineHeight: '1.583em',
}

const cardTextStyle = {
	fontSize: '12px',
	color: '#3A3A3A',
	fontWeight: 'regular',
	fontFamily: 'Arial, Helvetica Neue, Helvetica, sans-serif',
	lineHeight: '1.583em',
	marginBottom: '19px',
}

class Card extends Component {

	render() {
		return(
			<div>
				<div className='Card' style={cardStyle} data-test='Card'>
					<a href={this.props.href} style={cardLinkStyle} data-test="CardHref"> </a>
					<img style={cardImageStyle} src={this.props.image_url} alt={this.props.title} data-test="CardImg"/>
					<div className='CardContentContainer' style={cardContentContainerStyle}>
						<div className='CardHeader' style={cardHeaderStyle}>
							<img className='CardIcon' style={cardIconStyle} data-test="CardIcon"
							alt='Author Icon' src='https://picsum.photos/42/42/?random' />
							<div className='cardTitleContainer'>
								<h2 style={cardTitleStyle} data-test="CardTitle">{this.props.title}</h2>
								<h3 style={cardSubtitleStyle} data-test="CardSubtitle">{this.props.title}</h3>
							</div>
						</div>
						<p style={cardTextStyle} data-test="CardText">{this.props.text}</p>
						<CardLikeButton 
							id={this.props.id} 
							is_liked={this.props.is_liked}
							data-test='CardLikeButton'
						/>
					</div>
				</div>
			</div>
		);
	}

}

Card.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string, /* Some items in db.json were missing this, hence not required */
	text: PropTypes.string.isRequired,
	image_url: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	is_liked: PropTypes.bool.isRequired
}

export default Card;
