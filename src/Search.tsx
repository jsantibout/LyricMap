import React from 'react';
import { useState } from 'react';

interface SearchProps {
  placeholder?: string;
  onSubmit?: (searchTerm: string) => void;
};

const Search: React.FC<SearchProps> = function ({ items }) {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        // type="search" 
        // placeholder={placeholder}
        // value={searchTerm}
        // onChange={handleSearch}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;