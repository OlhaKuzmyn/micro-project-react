import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";

import './App.css';
import {Movies} from "./components";


const App: FC = () => {

  return (
      // <Routes>
      //     <Route>
      //
      //     </Route>
      // </Routes>
      <Movies/>
  );
}

export default App;
