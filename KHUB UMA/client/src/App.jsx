import React from 'react';

import HomePage from './HomePage';
import ViewDataPage from './ViewDataPage';

import {BrowserRouter, Route , Routes } from 'react-router-dom';

const App = () => {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<HomePage />}></Route>
      <Route path="/ViewDataPage" exact element={<ViewDataPage />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;