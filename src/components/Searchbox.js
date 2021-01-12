import React from 'react'; 
import logo from './logo.png';
import background from './background.jpg';


const SearchBox = ({onRouteChange ,searchChange}) => {
	return(
		<div  style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1560448204-444f743ef6e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" )` 
    ,  backgroundSize: 'cover',
            overflow: 'hidden',}} >
              <nav className="dt w-100 mw8 center"> 
       
        <div className="dtc v-mid tr pa3">
          
          <a className="f4 fw4 hover-white no-underline near-black dn dib-ns pv2 ph3" >Pricing</a> 
          <p onClick={() => onRouteChange('about')} className="f4 fw4 hover-white no-underline near-black dn dib-l pv2 ph3"  >About</p> 
          <a className="f4 fw4 hover-white no-underline near-black dn dib-l pv2 ph3"  >Careers</a> 
          <p onClick={() => onRouteChange('signout')} className="f4 fw4 hover-white no-underline near-black dib ml2 pv2 ph3 ba"  >Conact Us</p> 
        </div>
      </nav> 
           <div className='ma4 mt1 '>
		<div className=" ma1 pa1 br22 shadow-2" options={{max : 55}} style={{hight: 150, width:150}}>
		<div className=" pa3"> <img alt='logo' src={logo}/> </div>
		</div>
		</div>


            <div class='f3  tc na6 grow bw2'>
      
        <h1 class='sans-serif: -apple-system fw5 white b'>Bright Infra </h1>
      </div>

        
         
		<div className=' f4 tc  pa6 ma5  bw2'>
        <div className=' f3 tc near-black'>
            <h1 > Redefine home</h1>
            <p class=' f3 sans-serif: -apple-system'>Your search to find the perfect home ends here.</p>
            </div>

             
		<input
		className='pa3 ba w-60  '
		
		 type='search'
		  placeholder='Enter city , address , PIN code ' 
		  onChange = {searchChange}
		  />
        </div> </div>
		);
}
export default SearchBox;