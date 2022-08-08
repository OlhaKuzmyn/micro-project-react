import React, {FC} from 'react';
import {Route, Routes, Navigate} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts";
import {MovieFullPage, MoviesPage} from "./pages";
import {SearchPage} from "./pages";


const App: FC = () => {

  return (
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<Navigate to={'movies'}/>} />
              <Route path={'movies'} element={<MoviesPage/>} />
              <Route path={'search'} element={<SearchPage/>} />
              <Route path={'movie/:id'} element={<MovieFullPage/>} />
          </Route>
      </Routes>

  );
}

export default App;
