import React, { useState, useEffect, useRef } from 'react';
import { useHistory, NavLink } from 'react-router-dom';

export default function SavedList(props) {

  const[dropDown, setDropDown] = useState(false);

  const ref = useRef();
  const history = useHistory();

  const routeToHome = () => {
    history.push('/')
  };

  useEffect(() => {
    const onBodyClick = (e) => {
      !ref.current.contains(e.target) && setDropDown(false)
    }

    document.body.addEventListener('click', onBodyClick, { capture: true})

    return () => {
      document.body.removeEventListener('click', onBodyClick, { capture: true})
    }
  }, []);

  return (
    <div>
      <div className="home-button" onClick={() => routeToHome()}>Home</div>
      <div ref={ref} className='ui form'>
        <div className='field'>
          <div className={`ui selection dropdown ${dropDown && 'visible active'}`} onClick={() => setDropDown(!dropDown)}>
            <i className='dropdown icon'></i>
            <div className='text'>Saved Movies:</div>
            <div className={`menu ${dropDown && 'visible transition'}`}>
              {props.list.map(movie => (
                <NavLink to={`/movies/${movie.id}`}>
                  <div className="saved-movie">{movie.title}</div>
                </NavLink>
              ))}
            </div> 
          </div>
        </div>
      </div>
    </div>  
  );
}

{/* <div className="saved-list">
        <h3>Saved Movies:</h3>
        
        */}
      
     