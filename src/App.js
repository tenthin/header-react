import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/services' exact component={Services} />
        <Route path='/contact-us' exact component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;



<Route path='/' exact component={Home} />