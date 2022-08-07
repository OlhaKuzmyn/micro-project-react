import React, {FC} from 'react';
import {Route, Routes, Navigate} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts";
import {MoviesPage} from "./pages";
import {SearchPage} from "./pages/SearchPage/SearchPage";


const App: FC = () => {

  return (
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<Navigate to={'movies'}/>} />
              <Route path={'movies'} element={<MoviesPage/>} />
              <Route path={'search'} element={<SearchPage/>} />

          </Route>
      </Routes>

  );
}

export default App;
