import './App.css';
import SearchBar from './components/SearchBar';
import searchImages from './api';

function App() {
  const handleSubmit = (term: string) => {
    searchImages(term);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
