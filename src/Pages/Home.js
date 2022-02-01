import React, { useRef} from "react";
import FirstJumb from "../Components/HomeComps/FirstJumb";
import HomeProd from "../Components/HomeComps/HomeProd";
import Prod1 from "../Components/HomeComps/Prod1";
import useScrollSnap from 'react-use-scroll-snap';



function Home() {


  const scrollRef = useRef(null);
    useScrollSnap({ ref: scrollRef, duration: 150});
  // const container = useRef()


  // const bindScrollSnap = () => {
  //   const element = container.current
  //   createScrollSnap(element, {
  //     snapDestinationY: '100vh',
  //   })
  // }

  // useLayoutEffect(() => {
  //   bindScrollSnap()
  // }, []);
  
  
  // const element = document.getElementById('container')

  // const { bind, unbind } = createScrollSnap(element, {
  //   snapDestinationX: '0',
  //   snapDestinationY: '100vh',
  //   timeout: 100,
  //   duration: 300,
  //   threshold: 0.2,
  //   snapStop: false,
  // }, () => console.log('element snapped'))
  
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
