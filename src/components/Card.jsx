import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="carta">
        <div className="subcarta">
          <p className="cardname" data-testid="name-card">{cardName.toUpperCase()}</p>
          <div className="imgcontainer">
            <div className="imgspace">
              <img
                className="image"
                src={ cardImage }
                alt={ cardName }
                data-testid="image-card"
              />
            </div>
          </div>
          <p className="description" data-testid="description-card">{cardDescription}</p>
          <p data-testid="attr1-card">
            Ataque:
            {' '}
            {cardAttr1}
          </p>
          <p data-testid="attr2-card">
            Meio de campo:
            {' '}
            {cardAttr2}
          </p>
          <p data-testid="attr3-card">
            Defesa:
            {' '}
            {cardAttr3}
          </p>
          <p data-testid="rare-card">{cardRare}</p>

          {cardTrunfo === true
          && <p className="truf" data-testid="trunfo-card"> Super Clube </p>}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.bool,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Card;
