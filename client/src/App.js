import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css'
import Home from './Home'
import Main from './Main'
import Result from './Result'

function App() {

  // useEffect(() => {
  //   callApi()
  //     .then(res => console.log(res))
  // })

  // const callApi = async()=> {
  //   const response = await fetch('/api/bada');
  //   const body = await response.json();
  //   return body;
  // }

  return (
    <>
      <Route path="/" exact={true} component={Home} />
      <Route path="/main" component={Main} />
      <Route path="/result/:code" component={Result} />
    </>
  );
}

export default App;
