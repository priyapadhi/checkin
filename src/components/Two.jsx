import React, { Component } from 'react';
import ModalImage from 'react-modal-image';
import SpatialNavigation, { Focusable} from 'react-js-spatial-navigation';
import {NavLink} from 'react-router-dom';
import '../App.css';
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
       <h3>Two</h3>
      <SpatialNavigation>      
    <div className="row">
     <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
        <div className='imagedivtwo'>
            <Focusable >
      <ModalImage
  small={img66}
  large={img6}
  alt="Hello World!"
/>
    </Focusable>
         </div>
        </div>
     <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
         <div className='imagedivtwo'>
            <Focusable >
      <ModalImage
  small={img66}
  large={img6}
  alt="Hello World!"
/>
    </Focusable>
         </div>
        </div>
     <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
         <div className='imagedivtwo'>
            <Focusable >
      <ModalImage
  small={img66}
  large={img6}
  alt="Hello World!"
/>
    </Focusable>
         </div>
        </div>
     <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
         <div className='imagedivtwo'>
            <Focusable >
      <ModalImage
  small={img66}
  large={img6}
  alt="Hello World!"
/>
    </Focusable>
         </div>
        </div>
     <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
         <div className='imagedivtwo'>
             <Focusable >
      <ModalImage
  small={img33}
  large={img3}
  alt="Hello World!"
/>
    </Focusable>
         </div>
        </div>
     <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
         <div className='imagedivtwo'>
            <Focusable >
      <ModalImage
  small={img66}
  large={img6}
  alt="Hello World!"
/>
    </Focusable>
         </div>
        </div>  
     <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
         <div className='imagedivtwo'>
             <Focusable >
      <ModalImage
  small={img44}
  large={img4}
  alt="Hello World!"
/>
    </Focusable>
         </div>
        </div>
     <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
        <div className='imagedivtwo'>
            <Focusable >
      <ModalImage
  small={img33}
  large={img3}
  alt="Hello World!"
/>
    </Focusable>
         </div> 
        </div>   
    </div>
 </SpatialNavigation>
   <div>want to go for screen <b>One</b>? <NavLink to="/one">click here</NavLink></div>   
           <div><NavLink to="/">Back</NavLink></div>   
      </div>
      
      </div>
    );
  }
}

export default App;