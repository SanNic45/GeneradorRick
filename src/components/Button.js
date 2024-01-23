import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // Importa el archivo de estilos

const Button = ({ onClick }) => (
  <button className="custom-button" onClick={onClick}>
    Generar Personaje
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
