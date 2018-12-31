import React, { Component } from 'react';
import ModalImage from 'react-modal-image';
import SpatialNavigation, { Focusable} from 'react-js-spatial-navigation';
import {NavLink} from 'react-router-dom';
import '../App.css';
import img1  from './img/img1.jpg';
import img11  from './img/img11.jpg';
import img3  from './img/img3.jpg';
import img33  from './img/img33.jpg';
import img4  from './img/img4.jpg';
import img44  from './img/img44.jpg';
import img6  from './img/img6.jpg';
import img66  from './img/img66.jpg';

 
class App extends Component {
 
  render() {
    return (
      <div className="App">
       <div className="container">
       <h3>One</h3>
       <SpatialNavigation>     
    <div className="row onerow">
        
  <div className="column onecol">
    <Focusable >
      <ModalImage
  small={img11}
  large={img1}
  alt="Hello World!"
/>
    </Focusable> 
   
  </div>
  <div className="column onecol">
   <Focusable >
      <ModalImage
  small={img33}
  large={img3}
  alt="Hello World!"
/>
    </Focusable>
  </div>
  <div className="column onecol">
   <Focusable >
      <ModalImage
  small={img44}
  large={img4}
  alt="Hello World!"
/>
    </Focusable>
  </div>
  <div className="column onecol">
   <Focusable >
      <ModalImage
  small={img11}
  large={img11}
  alt="Hello World!"
/>
    </Focusable>
  </div>
   <div className="column onecol">
   <Focusable >
      <ModalImage
  small={img66}
  large={img6}
  alt="Hello World!"
/>
    </Focusable>
  </div>
   <div className="column onecol">
   <Focusable >
      <ModalImage
  small={img33}
  large={img3}
  alt="Hello World!"
/>
    </Focusable>
  </div>     
</div>
 </SpatialNavigation>

      </div>
   <div>want to go for screen <b>Two</b>? <NavLink to="/two">click here</NavLink></div> 
            <div><NavLink to="/">Back</NavLink></div> 
      </div>
    );
  }
}

export default App;