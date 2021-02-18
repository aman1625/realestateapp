import React from 'react'; 
import logo from './logo.png';
import background from './background.jpg';
import './search.css';


const SearchBox = ({onRouteChange ,searchChange}) => {
	return(
		<div  style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1560448204-444f743ef6e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" )` 
    ,  backgroundSize: 'cover',
            overflow: 'no-repeat',}} >
              <nav className="dt w-100 mw8 center flex flex-wrap"> 
       
        <div  className="dtc v-mid tr pa3 center flex flex-wrap">
          
          <p className="f4 fw4 hover-white no-underline near-black dn dib-ns pv2 ph3 flex flex-wrap" >Pricing</p> 
          <p onClick={() => onRouteChange('about')} className="f4 fw4 hover-white no-underline flex flex-wrap near-black dn dib-l pv2 ph3"  >About</p> 
          <p className="f4 fw4 hover-white no-underline near-black dn dib-l pv2 ph3 flex flex-wrap"  >Careers</p> 
          <p onClick={() => onRouteChange('signout')} className="f4 fw4 hover-white no-underline flex flex-wrap near-black dib ml2 pv2 ph3 ba"  >Conact Us</p> 
        </div>
      </nav> 
           <div className='ma0 ml1 mt0 flex flex-wrap '>
		<div className=" ma1 pa1 br22 shadow-2 bg-white" options={{max : 55}} style={{hight: 150, width:150}}>
		<div className=" pa3"> <img alt='logo' src={logo}/> </div>
		</div>
		</div>


            <div class='f3 pt5  tc na6 grow bw2 '>
      
        <h1 class='sans-serif: -apple-system fw5 white b'>Bright Infra </h1>
      </div>

        
         
		<div className=' f4 tc  center  bw2 pb5'>
        <div className=' f3 tc near-black pt5'>
            <h1 > Redefine home</h1>
            <p class=' f3 sans-serif: -apple-system b'>Call us at 8060797403</p>
            </div>

             
		<input
		className='f4 pt2 w-49 center '
		
		 type='search'
		  placeholder='Enter city , address , PIN code ' 
		  onChange = {searchChange}
		  />
        </div> </div>
		);
}
export default SearchBox;