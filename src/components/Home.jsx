import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
       <div className="container">
           <h3>Home</h3>
           <div className="btn-group">
             <button type="button" className="btn btn-primary"><NavLink to="/one"><b className="tabtextcolor">One</b></NavLink></button>
             <button type="button" className="btn btn-primary"><NavLink to="/two"><b className="tabtextcolor">Two</b></NavLink></button>
             
           </div>
    
      </div>
      
      </div>
    );
  }
}

export default App;