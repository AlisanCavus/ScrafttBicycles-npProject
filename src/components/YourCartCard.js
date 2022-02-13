import React, {useState}from 'react';
import { MdOutlineDeleteSweep } from 'react-icons/md'
import ProductPhotos from './ProductPhotos';

function YourCartCard(props) {
  const [toogle, setToogle] = useState(false)
  const {
    id,
    brand,
    img0,
    model,
    price,
    handleDelete
  } = props;




  return (
    <li
      key={id}
      className="min-w-screen min-h-1/12 flex flex-col justify-center bg-scroll mobile:w-full">
      <div className="h-1/9 flex">
      {toogle ? (<ProductPhotos
        className='w-screen h-screen absolute'
        img0={img0}
        toggle={toogle}
        setToogle={setToogle}
        />) : (<img className="cursor-pointer w-24 h-20 object-contain mobile:w-10 mobile:h-8" alt="bikes" src={img0} onClick={() => setToogle(true)} />)}
        <div className="flex justify-center items-center w-9/12 ">
          <span className=" text-3xl text-center font-medium text-slate-700 animate-pulse mobile:text-xl">
            {brand}&nbsp;
          </span>
          <span className=" text-2xl text-center font-medium text-slate-700 mobile:text-lg">
            {model}&nbsp;
          </span>
        </div>
        <div className="flex items-center flex-row justify-end w-2/12">
            <span className=" text-right">{price}€</span>
        </div>
        <div className=" flex justify-center items-center w-1/12 ">
        <MdOutlineDeleteSweep className="w-5 h-5 hover:animate-bounce cursor-pointer" onClick={() => handleDelete(id)}/>
        </div>
        
      </div>
    </li>
  );
}

export default YourCartCard;
