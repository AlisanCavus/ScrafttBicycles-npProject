import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring'

function HomeJumbotron() {



  return (
    <div  className='z-10 '>
      <div className=" ">
        <img className="opacity-50  bg-cover    transform -scale-x-100  "
          src="https://images.pexels.com/photos/686230/pexels-photo-686230.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          alt="mainbikebg"
        />
      </div>
    </div>
  );
}

export default HomeJumbotron;
