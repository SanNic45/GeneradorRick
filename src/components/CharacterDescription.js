import React from 'react';
import PropTypes from 'prop-types';
import './CharacterDescription.css'; 

const getStatusColor = (status) => {
  switch (status) {
    case 'Alive':
      return '#4CAF50'; 
    case 'Dead':
      return '#FF0000'; 
    case 'unknown':
      return '#808080'; 
    default:
      return '#000000'; 
  }
};

const CharacterDescription = ({ character }) => (
  <div className="character-description">
    <div className="status-circle" style={{ backgroundColor: getStatusColor(character.status) }}></div>
    <h3>{character.name}</h3>
    <p>
      <strong>Status:</strong> {character.status}
    </p>
    <p>
      <strong>Species:</strong> {character.species}
    </p>
    <p>
      <strong>Type:</strong> {character.type}
    </p>
    <p>
      <strong>Gender:</strong> {character.gender}
    </p>
    <p>
      <strong>Origin:</strong> {character.origin.name}
    </p>
    <p>
      <strong>Location:</strong> {character.location.name}
    </p>
    {/* Agrega más detalles según tus necesidades */}
  </div>
);

CharacterDescription.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    type: PropTypes.string,
    gender: PropTypes.string,
    origin: PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    }),
    location: PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    }),
    // Agrega más propiedades según tus necesidades
  }).isRequired,
};

export default CharacterDescription;
