import React from 'react';
import FirstJumb from '../Components/HomeComps/FirstJumb';
import HomeProd from '../Components/HomeComps/HomeProd';




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

        </div>
    </div>
    
  
    
 
  );
}

export default Home;
