import React from 'react';
import { AiOutlineLine } from 'react-icons/ai';
import { MdDirectionsBike } from 'react-icons/md';

function LoadingScreen() {
  return (
    <div className= " bg-opacity-25 mx-auto my-auto w-full h-full">
      <div className="flex flex-column relative mobile:content-center mobile:mx-auto">
        <div className="place-content-center flex my-auto hover group flex-row">
          <AiOutlineLine className=" text-textMain mt-6  -right-[1rem]   group:animate-bounce "></AiOutlineLine>
          <AiOutlineLine className=" text-textMain mt-2 -right-[2rem] visible  group:animate-bounce   "></AiOutlineLine>
          <AiOutlineLine className=" text-textMain  -mt-2 -right-[3rem] visible  group:animate-bounce  "></AiOutlineLine>
          <MdDirectionsBike className="w-10 h-10 text-textMain " />
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
