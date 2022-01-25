import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring'

function HomeJumbotron() {

        const trans = useTransition(null, {

        })


  return (
    <div  className='z-10 bg-gradient-to-t from-transparent'>
      <div className="bg-gradient-to-t from-transparent ">
        <img className="opacity-40  bg-cover  bg-gradient-to-t from-transparent  transform -scale-x-100  "
          src="https://images.pexels.com/photos/686230/pexels-photo-686230.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          alt="mainbikebg"
        />
      </div>
    </div>
  );
}

export default HomeJumbotron;
