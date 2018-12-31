import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Home from './components/Home.jsx';
import One from './components/One.jsx';
import Two from './components/Two.jsx';

ReactDOM.render(
    <BrowserRouter>
    <div>
    <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/one" component={One} />
    <Route path="/two" component={Two} />
  </Switch> 
    </div>
 </BrowserRouter>,document.getElementById('root')
    );
