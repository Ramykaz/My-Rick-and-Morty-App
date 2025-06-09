// src/App.jsx
import React, { useState, useEffect, useCallback } from 'react';
import CharacterTable from './components/CharacterTable';
import FilterControls from './components/FilterControls';
import Pagination from './components/Pagination';
import CharacterDetail from './components/CharacterDetail';
import SortControls from './components/SortControls';

/**
 * @typedef {Object} Character
 * @property {number} id
 * @property {string} name
 * @property {string} status
 * @property {string} species
 * @property {string} gender
 * @property {string} image
 * @property {Object} origin
 * @property {string} origin.name
 * @property {Object} location
 * @property {string} location.name
 */

/**
 * @typedef {Object} ApiResponse
 * @property {Object} info
 * @property {number} info.count
 * @property {number} info.pages
 * @property {string | null} info.next
 * @property {string | null} info.prev
 * @property {Character[]} results
 */

const App = () => {
  /** @type {Character[]} */
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({ name: '', status: '', species: '', gender: '' });
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const fetchCharacters = useCallback(async () => {
    setLoading(true);
    setError(null);
    setSelectedCharacter(null); // Clear detail view on new search or filter

    const queryParams = new URLSearchParams();
    if (filters.name) queryParams.append('name', filters.name);
    if (filters.status) queryParams.append('status', filters.status);
    if (filters.species) queryParams.append('species', filters.species);
    if (filters.gender) queryParams.append('gender', filters.gender);
    queryParams.append('page', String(currentPage));

    const url = `https://rickandmortyapi.com/api/character?${queryParams.toString()}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        if (response.status === 404) {
          // No characters found for the given criteria
          setCharacters([]);
          setTotalCharacters(0);
          setError("No characters found matching your criteria. Please try different filters.");
          return;
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      /** @type {ApiResponse} */
      const data = await response.json();
      setCharacters(data.results);
      setTotalCharacters(data.info.count);
    } catch (e) {
      console.error("Failed to fetch characters:", e);
      setError(`Failed to load characters: ${e.message}. Please try again later.`);
      setCharacters([]);
      setTotalCharacters(0);
    } finally {
      setLoading(false);
    }
  }, [currentPage, filters]);

  // Fetch data when component mounts or dependencies change
  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  // Sort characters on the frontend as API doesn't support direct sorting
  const sortedCharacters = [...characters].sort((a, b) => {
    let valA, valB;
    if (sortBy === 'name') {
      valA = a.name.toLowerCase();
      valB = b.name.toLowerCase();
    } else if (sortBy === 'status') {
      valA = a.status.toLowerCase();
      valB = b.status.toLowerCase();
    } else { // Default to ID sort
      valA = a.id;
      valB = b.id;
    }

    if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
    if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleSortChange = (field) => {
    if (sortBy === field) {
      setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleRowClick = (character) => {
    setSelectedCharacter(character);
  };

  // Rick and Morty API returns 20 characters per page
  const totalPages = Math.ceil(totalCharacters / 20);

  return (
    <div className="app-container">
      <h1>Rick and Morty Characters</h1>

      <FilterControls filters={filters} onFilterChange={handleFilterChange} />
      <SortControls sortBy={sortBy} sortOrder={sortOrder} onSortChange={handleSortChange} />

      {error && <p className="error-message">{error}</p>}
      {loading && <p className="loading-message">Loading characters...</p>}

      {!loading && !error && characters.length === 0 && (
        <p className="no-data-message">No characters found matching your criteria.</p>
      )}

      {!loading && !error && characters.length > 0 && (
        <>
          <CharacterTable characters={sortedCharacters} onRowClick={handleRowClick} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}

      {selectedCharacter && (
        <CharacterDetail character={selectedCharacter} onClose={() => setSelectedCharacter(null)} />
      )}
    </div>
  );
};

export default App;
