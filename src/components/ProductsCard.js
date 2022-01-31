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
      className="min-h-screen w-full
        flex flex-row mobile:flex-col"
    >
      <div className=" carousel h-screen w-6/12 mx-auto mobile:w-full">
        <div className="w-full h-screen carousel-item mx-auto">
          <img
            id="car"
            src={img0}
            alt=""
            className="w-full object-cover h-screen mx-auto"
          />
        </div>
        <div className="w-full h-screen carousel-item mx-auto">
          <img
            src={img1}
            alt=""
            className="w-full object-cover h-screen mx-auto"
          />
        </div>
        <div className="w-full h-screen carousel-item mx-auto">
          <img
            src={img2}
            alt=""
            className="w-full object-cover h-screen mx-auto"
          />
        </div>
      </div>

      <div className="w-6/12 flex flex-col justify-around mobile:w-full ">
        <div className=" flex font-semibold w-1/4 h-4/12 justify-center mx-auto text-center">
          <div className=" text-slate-600 mx-auto text-center text-3xl self-center font-semibold">{brand}&nbsp;</div>
          <div className=" text-slate-600 mx-auto text-center text-3xl self-center font-semibold">&nbsp;{model}</div>
        </div>
       
        <div className="h-2/12 text-slate-600 w-10/12 mx-auto text-center italic text-2xl font-semibold" > "{headtitle}" </div>
        <div className="h-2/12 text-slate-600 w-10/12 mx-auto text-center ">{descrip}</div>
        <div className="h-2/12 text-slate-600 w-10/12 mx-auto text-center"></div>
        <div className="h-2/12 text-slate-600 w-10/12 mx-auto text-center">{price}€</div>
      </div>
    </li>
  );
}

export default ProductsCard;
