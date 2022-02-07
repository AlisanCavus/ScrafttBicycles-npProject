import React from 'react';

function FavoritesCard(props) {
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
    guarantie,
    specs,
  } = props;

  return (
    <li
      key={index}
      className="min-w-screen min-h-1/12 flex flex-col justify-center bg-scroll m-5">
      <div className="h-1/9 flex">
        <img className=" w-24 h-20 object-contain mobile:w-10 mobile:h-8" alt="bikes" src={img0}  />
        <div className="flex justify-center items-center w-10/12 ">
          <span className=" text-3xl text-center font-medium text-slate-700 animate-pulse mobile:text-xl">
            {brand}&nbsp;
          </span>
          <span className=" text-2xl text-center font-medium text-slate-700 mobile:text-lg">
            {model}&nbsp;
          </span>
          <span className=" text-xl text-center font-medium text-slate-700 mobile:hidden">"{headtitle}"</span>
        </div>
        <div className="flex items-center flex-row justify-center w-2/12">
            <span className="text-center">{price}€</span>
        </div>
      </div>
    </li>
  );
}

export default FavoritesCard;
