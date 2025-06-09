// src/components/CharacterDetail.jsx
import React from 'react';

/**
 * @param {object} props
 * @param {object} props.character - Character object to display details for.
 * @param {function(): void} props.onClose - Function to call when closing the detail view.
 */
const CharacterDetail = ({ character, onClose }) => {
  if (!character) return null;

  return (
    <div className="character-detail-card">
      <button onClick={onClose} className="close-button">X</button>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} className="detail-image" />
      <p><strong>ID:</strong> {character.id}</p>
      <p><strong>Status:</strong> {character.status}</p>
      <p><strong>Species:</strong> {character.species}</p>
      <p><strong>Type:</strong> {character.type || 'N/A'}</p>
      <p><strong>Gender:</strong> {character.gender}</p>
      <p><strong>Origin:</strong> {character.origin?.name || 'N/A'}</p>
      <p><strong>Last Location:</strong> {character.location?.name || 'N/A'}</p>
      <p><strong>Created:</strong> {new Date(character.created).toLocaleDateString()}</p>
    </div>
  );
};

export default CharacterDetail;
