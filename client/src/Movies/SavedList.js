import React from 'react';
import { useHistory } from 'react-router-dom';

export default function SavedList(props) {

  const history = useHistory();

  const routeToHome = () => {
    history.push('/')
  };

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <div className="saved-movie">{movie.title}</div>
      ))}
      <div className="home-button" onClick={() => routeToHome()}>Home</div>
    </div>
  );
}
