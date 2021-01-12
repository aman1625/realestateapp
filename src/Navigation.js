import React from 'react';
import logo from './logo.png';

const Navigation =({onRouteChange , isSignedIn}) => {

		
			return (
				<div>
				<div >
				<nav className="dt w-100 mw8 center"> 
       
        <div className="dtc v-mid tr pa3">
          <p onClick={() => onRouteChange('home')} className="f4 fw4 hover-blue no-underline near-black dn dib-ns pv2 ph3"  >Home</p> 
          <a className="f4 fw4 hover-blue no-underline near-black dn dib-ns pv2 ph3" >Pricing</a> 
          <p onClick={() => onRouteChange('about')} className="f4 fw4 hover-blue no-underline near-black dn dib-l pv2 ph3"  >About</p> 
          <a className="f4 fw4 hover-blue no-underline near-black dn dib-l pv2 ph3"  >Careers</a> 
          <p onClick={() => onRouteChange('signout')} className="f4 fw4 hover-blue no-underline near-black dib ml2 pv2 ph3 ba"  >Conact Us</p> 
        </div>
      </nav> 
      </div>
       <div className='ma4 nt4 '>
		<div className=" ma1 pa1 br22 shadow-2" options={{max : 55}} style={{hight: 150, width:150}}>
		<div className=" pa3"> <img alt='logo' src={logo}/> </div>
		</div>
		</div>
      </div>
			
		);
	}
		
       


export default Navigation;