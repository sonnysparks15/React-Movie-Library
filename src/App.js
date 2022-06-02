///////////////////////////////
// Main Application JS
// Edwin Sparks
// June 1, 2022
///////////////////////////////
import './App.css';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';


///////////////////////////////////////////////////////////////////////////
const API_URL = 'http://www.omdbapi.com?apikey=73b55514';
const movie1 = {
    "Title": "Amazing Spiderman Syndrome",
        "Year": "2012",
        "imdbID": "tt2586634",
        "Type": "movie",
        "Poster": "N/A"
}
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('batman');
  }, []);

///////////////////////////////////////////////////////////////////////////
  return (
    <div className="App">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
            src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0
         ? (
            <div className="container">
               {movies.map((movie) => (
                  <MovieCard movie={movie} />
               ))}
            </div>
         ) : (
            <div className='empty'>
               <h2>No Movies Found</h2>
            </div>
      )}
    </div>
  );
}

///////////////////////////////////////////////////////////////////////////
export default App;
