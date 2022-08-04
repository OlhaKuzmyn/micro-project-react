import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";

import './App.css';
import {Movies} from "./components";
import Header from "./app-components/Header";


const App: FC = () => {

  return (
      // <Routes>
      //     <Route>
      //
      //     </Route>
      // </Routes>
      <div>
      <Header/>
      <Movies/>
      </div>
  );
}

export default App;
