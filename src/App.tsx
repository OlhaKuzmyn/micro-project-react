import React, {FC, useEffect} from 'react';
import {Route, Routes} from "react-router-dom";

import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks";
import {movieActions} from "./redux";


const App: FC = () => {
    const {movies} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(movieActions.getPage())
    },[dispatch])
  return (
      // <Routes>
      //     <Route>
      //
      //     </Route>
      // </Routes>
      <div>
          {movies.map(movie=><div>{movie.original_title}</div>)}
      </div>
  );
}

export default App;
