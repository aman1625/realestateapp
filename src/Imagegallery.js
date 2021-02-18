import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import home from './home.jpg'
import kitchen from './kitchen.jpg'
import livingroom from './livingroom.jpg'

const slideImages = [
  'home',
  'kitchen',
  'home'
];


const Imagegallery =()=>{
	return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})` }}>
            <div ><img src={home} width="1700" height="400" /> </div>
              <span>House</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <div ><img src={livingroom} width="1700" height="400"/> </div>
              <span>livingroom</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <div ><img src={kitchen} width="1700" height="400" /> </div>
              <span>Kitchen</span>
            </div>
          </div>
        </Slide>
      </div>
    );
}
export default Imagegallery;