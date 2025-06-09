// src/components/FilterControls.jsx
import React from 'react';

/**
 * @param {object} props
 * @param {object} props.filters - Current filter values.
 * @param {function(string, string): void} props.onFilterChange - Callback for filter value changes.
 */
const FilterControls = ({ filters, onFilterChange }) => {
  return (
    <div className="filter-controls">
      <input
        type="text"
        placeholder="Filter by name"
        value={filters.name}
        onChange={(e) => onFilterChange('name', e.target.value)}
      />
      <select
        value={filters.status}
        onChange={(e) => onFilterChange('status', e.target.value)}
      >
        <option value="">All Statuses</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <select
        value={filters.species}
        onChange={(e) => onFilterChange('species', e.target.value)}
      >
        <option value="">All Species</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
        <option value="humanoid">Humanoid</option>
        <option value="robot">Robot</option>
        <option value="mythological creature">Mythological Creature</option>
      </select>
      <select
        value={filters.gender}
        onChange={(e) => onFilterChange('gender', e.target.value)}
      >
        <option value="">All Genders</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
};

export default FilterControls;
