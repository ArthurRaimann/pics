import { useState } from 'react';

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
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange} />
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
