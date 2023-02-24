import { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSubmit }: any) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event: any) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter search term</label>
        <input placeholder="search term" value={term} onChange={handleChange} />
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
