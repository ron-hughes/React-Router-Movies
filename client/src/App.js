import React, { useState } from 'react';
<<<<<<< HEAD

import {Route} from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

=======
import {Route} from 'react-router-dom';
>>>>>>> ron-hughes
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    (!savedList.includes(movie))&&
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
     
      <SavedList list={savedList} />
<<<<<<< HEAD
      <Route path='/' exact component={MovieList} />
      <Route path='/movies/:id' exact render={ (props) => ( <Movie addToSavedList={addToSavedList} {...props}/>)}/>
      </div>
=======
      <Route path='/' component={MovieList} exact></Route>
      <Route path='/Movie/:id' component={Movie}></Route>
    </div>
>>>>>>> ron-hughes
  );
};

export default App;
