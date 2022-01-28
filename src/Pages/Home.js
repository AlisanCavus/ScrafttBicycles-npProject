import React from 'react';
import FirstJumb from '../Components/HomeComps/FirstJumb';
import HomeProd from '../Components/HomeComps/HomeProd';
import Prod1 from '../Components/HomeComps/Prod1';




function Home() {


  
  return (
    <div className=" min-h-screen bg-primary overflow-hidden ">
        <div className="bg-bicycle bg-cover min-h-screen opacity-60">
            <FirstJumb />
        </div>
        <div className=" min-h-screen mx-auto  bg-primary  z-30 mobile:w-full overflow-hidden">
          <HomeProd />
        </div>
        <div className="min-h-screen bg-primary overflow-hidden">
          <Prod1 />
        </div>
    </div>
    
  
    
 
  );
}

export default Home;
