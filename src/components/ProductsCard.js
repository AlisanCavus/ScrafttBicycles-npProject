import React, { useState } from 'react';

function ProductsCard(props) {
  const {
    id,
    amount,
    brand,
    descrip,
    headtitle,
    img0,
    img1,
    img2,
    model,
    price,
  } = props;

  return (
    <li
      key={id}
      className="min-h-screen  w-full
       border-0 rounded-sm flex flex-row "
    >
     
        <div className=" carousel h-screen w-6/12 mx-auto" >
          <div className="w-full h-screen carousel-item mx-auto">
            <img src={img0} alt="" className="w-full object-cover h-screen mx-auto" />
          </div>
          <div className="w-full h-screen carousel-item mx-auto">
            <img src={img1} alt="" className="w-full object-cover h-screen mx-auto" />
          </div>
          <div className="w-full h-screen carousel-item mx-auto">
            <img src={img2} alt="" className="w-full object-cover h-screen mx-auto" />
          </div>
        </div>
     

      <div className="w-6/12"></div>
      
    </li>
  );
}

export default ProductsCard;
