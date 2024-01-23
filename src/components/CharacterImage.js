import React from 'react';
import PropTypes from 'prop-types';
import './CharacterImage.css'; 

const CharacterImage = ({ imageUrl }) => (
  <img className="character-image" src={imageUrl} alt="Personaje" />
);

CharacterImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default CharacterImage;
