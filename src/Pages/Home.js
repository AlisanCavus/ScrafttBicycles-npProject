import React from 'react';
import FirstJumb from '../Components/HomeComps/FirstJumb';




function Home() {

  
  return (
    <div className=" min-h-screen bg-primary">
        <div className="bg-bicycle bg-cover min-h-screen opacity-60">
            <FirstJumb />
        </div>
        <div className="w-1/2 min-h-screen ">Hello</div>
    </div>
    
  
    
 
  );
}

export default Home;
