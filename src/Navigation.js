import React from 'react';
import logo from './logo.png';

const Navigation =({onRouteChange , isSignedIn}) => {

		
			return (
				<div >
				<div >
				<nav className="dt w-100 mw8 center flex flex-wrap"> 
       
        <div className="dtc v-mid tr pa3 flex flex-wrap">
          <p onClick={() => onRouteChange('home')} className="f4 fw4 hover-blue no-underline near-black dn dib-ns pv2 ph3 flex flex-wrap"  >Home</p> 
          <p className="f4 fw4 hover-blue no-underline near-black dn dib-ns pv2 ph3 flex flex-wrap" >Pricing</p> 
          <p onClick={() => onRouteChange('about')} className="f4 fw4 hover-blue no-underline near-black dn dib-l pv2 ph3 flex flex-wrap"  >About</p> 
          <p className="f4 fw4 hover-blue no-underline near-black dn dib-l pv2 ph3 flex flex-wrap"  >Careers</p> 
          <p onClick={() => onRouteChange('signout')} className="f4 fw4 hover-blue no-underline near-black dib ml2 pv2 ph3 ba flex-wrap"  >Conact Us</p> 

        </div>
      </nav> 
      </div>
       
      </div>
			
		);
	}
		
       


export default Navigation;