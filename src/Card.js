import React from 'react';

const Card =({location , bedroom , budget , details})=>{
	return (
       <div className='bg-white dib br3 pa3 ma2  bw2 shadow-5  '>
       <div className=" ma1 pa1 br22 shadow-1 mt1 br2 ">
          <img alt='site' src={`https://en.pimg.jp/028/695/480/1/28695480.jpg`}/>
          </div>
          <div> <div className="dt w-100 mt1">
          <div className="dtc">
          <h2 className="b">₹{budget}</h2>
          </div>
          <div className="dtc tr">
          <p className='f5  mv0 b'> {location} </p>
          </div> 
          <p className='f4 w-100'>{bedroom} BHK </p>
          </div>
          <p className='f6 lh-copy measure mt2 mid-gray'>{details}  </p>
          </div>

       </div>

		);
}
export default Card;