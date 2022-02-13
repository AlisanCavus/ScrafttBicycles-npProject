import React, { useRef } from "react";
import FirstJumb from "../components/HomeComps/FirstJumb";
import HomeProd from "../components/HomeComps/HomeProd";
import Prod1 from "../components/HomeComps/Prod1";
import useScrollSnap from 'react-use-scroll-snap';



function Home() {


  const scrollRef = useRef(null);
    useScrollSnap({ ref: scrollRef, duration: 150});

  
  return (
    <div className=" min-h-screen bg-primary overflow-x-hidden" ref={scrollRef}  >
      <div className="bg-bicycle bg-cover min-h-screen opacity-60 ">
        <FirstJumb />
      </div>
      <div className=" min-h-screen mx-auto  bg-primary  z-30 mobile:w-full overflow-hidden ">
        <HomeProd />
      </div>
      <div className="min-h-screen bg-primary overflow-hidden ">
        <Prod1 />
      </div>
    
    </div>
  );
}

export default Home;
