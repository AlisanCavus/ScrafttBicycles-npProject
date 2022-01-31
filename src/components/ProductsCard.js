import React, { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { animateScroll as scroll } from 'react-scroll';

function ProductsCard(props) {
  const {
    index,
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

  if (index % 2 === 0) {
    return (
      <>
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
            <div className=" flex font-semibold w-1/4 h-3/12 justify-center mx-auto text-center">
              <div className=" text-slate-600 mx-auto mt-10 text-center text-3xl self-center font-semibold">
                {brand}&nbsp;
              </div>
              <div className=" text-slate-600 mx-auto mt-10 text-center text-3xl self-center font-semibold">
                &nbsp;{model}
              </div>
            </div>

            <div className="h-2/12 text-slate-600 -mt-10 w-10/12 mx-auto text-center italic text-2xl font-semibold">  
              "{headtitle}"
            </div>
            <div className="h-2/12 text-slate-600 w-10/12 mx-auto text-center ">
              {descrip}
            </div>
            <div>
              <div className="h-2/12 text-slate-600 w-10/12 mx-auto "> 
                In stock : Yes ({amount})
              </div>
              <div className="h-2/12 text-slate-600 w-10/12 mx-auto ">
                Price: {price}€
              </div>
            </div>

            <div className="h-1/12 text-slate-600 w-10/12 mx-auto text-center">
              <button
                onClick={() => scroll.scrollToTop()}
                className="bg-inherit flex flex-col text-center z-50 items-end align-end hover:animate-bounce  justify-end mt-auto mb-5 mx-5 opacity-30 h-10 fill-slate-500 w-10 "
              >
                <IoIosArrowUp className="border-black  w-full h-full fill-slate-500" />
              </button>
            </div>
          </div>
        </li>
      </>
    );
  } else {
    return (
      <>
        <li
          key={id}
          className="min-h-screen w-full
          flex flex-row mobile:flex-col"
        >
          <div className="w-6/12 flex flex-col justify-around mobile:w-full ">
            <div className=" flex font-semibold w-1/4 h-3/12 justify-center mx-auto text-center">
              <div className=" text-slate-600 mx-auto mt-10 text-center text-3xl self-center font-semibold">
                {brand}&nbsp;
              </div>
              <div className=" text-slate-600 mx-auto mt-10 text-center text-3xl self-center font-semibold">
                &nbsp;{model}
              </div>
            </div>

            <div className="h-2/12 text-slate-600 -mt-10 w-10/12 mx-auto text-center italic text-2xl font-semibold">
              
              "{headtitle}"
            </div>
            <div className="h-2/12 text-slate-600 w-10/12 mx-auto text-center ">
              {descrip}
            </div>
            <div>
              <div className="h-2/12 text-slate-600 w-10/12 mx-auto ">
                
                In stock : Yes ({amount})
              </div>
              <div className="h-2/12 text-slate-600 w-10/12 mx-auto ">
                
                Price: {price}€
              </div>
            </div>

            <div className="h-1/12 text-slate-600 w-10/12 mx-auto text-center">
              <button
                onClick={() => scroll.scrollToTop()}
                className="bg-inherit flex flex-col text-center z-50 items-end align-end hover:animate-bounce  justify-end mt-auto mb-5 mx-5 opacity-30 h-10 fill-slate-500 w-10 "
              >
                <IoIosArrowUp className="border-black  w-full h-full fill-slate-500" />
              </button>
            </div>
          </div>

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
        </li>
      </>
    );
  }
}

export default ProductsCard;
