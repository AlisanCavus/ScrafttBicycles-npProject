import React from 'react';
import FirstJumb from '../Components/HomeComps/FirstJumb';
import HomeProd from '../Components/HomeComps/HomeProd';




function Home() {


  
  return (
    <div className=" min-h-screen bg-primary">
        <div className="bg-bicycle bg-cover min-h-screen opacity-60">
            <FirstJumb />
        </div>
        <div className=" max-h-screen mx-auto rounded-lg bg-primary  z-30 mobile:w-full mobile:border-0">
          <HomeProd />
        </div>
    </div>
    
  
    
 
  );
}

export default Home;
