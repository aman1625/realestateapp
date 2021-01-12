import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	
 return (
 	 <div>
 	 {
     robots.map((property , i) => {
		return (
		 <Card
		  key ={i}
		  id={robots[i].id}
		   location={robots[i].location}
		    budget={robots[i].budget}
		    bedroom={robots[i].bedroom}
		    details={robots[i].details}
		    />
		);
   })
 }
 </div>   

 	);
}

export default CardList;