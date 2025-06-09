// src/components/CharacterTable.jsx
import React from 'react';

/**
 * @param {object} props
 * @param {Array<object>} props.characters - Array of character objects to display.
 * @param {function(object): void} props.onRowClick - Function to call when a row is clicked.
 */
const CharacterTable = ({ characters, onRowClick }) => {
  return (
    <table className="character-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Status</th>
          <th>Species</th>
          <th>Gender</th>
          <th>Origin</th>
          <th>Location</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {characters.map((character) => (
          <tr key={character.id} onClick={() => onRowClick(character)}>
            <td>{character.id}</td>
            <td>{character.name}</td>
            <td>{character.status}</td>
            <td>{character.species}</td>
            <td>{character.gender}</td>
            <td>{character.origin.name}</td>
            <td>{character.location.name}</td>
            <td>
              <img src={character.image} alt={character.name} className="character-image" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CharacterTable;
