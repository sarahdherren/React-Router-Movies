import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

export default function MovieList({ movies }) {

  

  

  return (
    <div className="movie-list">
      {movies.map(movie => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <MovieDetails movie={movie}/>
          </Link>
      ))}
      
    </div>
  );
}

function MovieDetails( props ) {
  const { title, director, metascore } = props.movie;

  return (
    <div>
      <MovieCard title={title} director={director} metascore={metascore} />
    </div>
  );
}
