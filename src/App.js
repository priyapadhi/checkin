import React, { Component } from 'react';
import './App.css';

import Home from './components/Home.jsx';

class App extends Component {
    
    constructor() {
        super();

    }
    
  render() {
    return (
      <div className="App">
       <div className="container">
       
    <div >
      <Home />
    </div>
 
      </div>
      
      </div>
    );
  }
}

export default App;
