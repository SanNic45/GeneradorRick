import React, { useState } from 'react';
import axios from 'axios';
import Button from '../components/Button';
import CharacterImage from '../components/CharacterImage';
import CharacterDescription from '../components/CharacterDescription';

const Home = () => {
  const [character, setCharacter] = useState(null);

  const generateRandomCharacter = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character/');
      const randomCharacter = response.data.results[Math.floor(Math.random() * response.data.results.length)];
      setCharacter(randomCharacter);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <Button onClick={generateRandomCharacter} />
      {character && (
        <div>
          <CharacterImage imageUrl={character.image} />
          <CharacterDescription character={character} />
        </div>
      )}
    </div>
  );
};

export default Home;
