// src/components/SortControls.jsx
import React from 'react';

/**
 * @param {object} props
 * @param {string} props.sortBy - Current sorting field (e.g., 'name', 'status', 'id').
 * @param {string} props.sortOrder - Current sorting order ('asc' or 'desc').
 * @param {function(string): void} props.onSortChange - Callback for sorting field change.
 */
const SortControls = ({ sortBy, sortOrder, onSortChange }) => {
  return (
    <div className="sort-controls">
      <label htmlFor="sortBy">Sort By:</label>
      <select id="sortBy" value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
        <option value="name">Name</option>
        <option value="status">Status</option>
        <option value="id">ID</option>
      </select>
      <button onClick={() => onSortChange(sortBy)}>
        Order: {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
      </button>
    </div>
  );
};

export default SortControls;
