import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './Home'
import Main from './Main'
import Result from './Result'

function App() {
  return (
    <>
      <Route path="/" exact={true} component={Home} />
      <Route path="/main" component={Main} />
      <Route path="/result" component={Result} />
    </>
  );
}

export default App;
