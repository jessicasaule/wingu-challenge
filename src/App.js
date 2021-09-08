import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Form from './Components/Form/Form';
import View from './Components/View/View';
import SuccessMsg from './Components/SuccessMsg/SuccessMsg';

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/form" component={Form} />
      <Route path="/view" component={View} />
      <Route path="/successMsg" component={SuccessMsg} />
    </>
  );
}

export default App;