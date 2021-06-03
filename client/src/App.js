import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          setMovieList(response.data)
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);
// This is stretch. Prevent the same movie from being "saved" more than once
  const addToSavedList = (id) => {
    setSaved(saved => {
      return [...saved, id]; 
  })}

  const uniqueSavedList = Array.from(new Set(saved.map(movie => movie.id)))
    .map(id => {
      return saved.find(movie => movie.id == id)
    })

  return (
      <div>
        <SavedList list={uniqueSavedList} />

        <div>
          <Switch>
            <Route path='/movies/:id'>
              <Movie save={addToSavedList}/>
            </Route>
            <Route path='/'>
              <MovieList movies={movieList} />
            </Route>
          </Switch>
        </div>
      </div>
  );
}
