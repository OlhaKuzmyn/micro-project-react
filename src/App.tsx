import React, {FC} from 'react';
import {Route, Routes, Navigate} from "react-router-dom";

import './App.css';
import {Search} from "./components";
import {MainLayout} from "./layouts";
import {MoviesPage} from "./pages";


const App: FC = () => {

  return (
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<Navigate to={'movies'}/>} />
              <Route path={'movies'} element={<MoviesPage/>} />
              <Route path={'search'} element={<Search/>} />

          </Route>
      </Routes>

  );
}

export default App;
