// App.js or your main component file
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import DetialsSign from './DetialsSign';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={LoginForm} />
      <Route path="/create-account" component={DetialsSign} />
    </Router>
  );
}

export default App;
