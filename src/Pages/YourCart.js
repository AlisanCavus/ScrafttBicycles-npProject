import React,{ useState, useEffect} from 'react';
import cart from "../Assets/cart.mp4"
import { animated, useSpring } from 'react-spring';
import { Link } from 'react-router-dom'
import YourCartCard from '../components/YourCartCard';
import  LoadingScreen  from '../components/LoadingScreen'


function YourCart() {
  const [loading, setLoading ] = useState(false)
  const [cartedBikes, setCartedBikes] = useState([])
  const [ addedCartBike, setAddedCartBike ] = useState([])


  useEffect(() => {
    const data = localStorage.getItem('CartBikes');
    if (data) {
      setCartedBikes(JSON.parse(data));
    }
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('CartBikes', JSON.stringify(addedCartBike));
  // });






  const anim = useSpring({
    from: { opacity: 0, transform: 'translateX(-100%)' },
    to: { opacity: 1, transform: 'translateX(0%)' },
    delay: 300,
  });

  return (
  <div className="min-h-screen w-screen bg-primary flex flex-row">
    <div className="w-1/2 h-screen flex mobile:w-full">
     <video
              autoPlay={true}
              loop={true}
              preload="auto"
              muted={true}
              className=" object-cover w-screen"
            >
              <source src={cart}></source>
      </video>
      <animated.div
            style={anim}
            className="flex top-0 left-0 justify-center w-1/2 m-auto  mx-auto absolute py-36 mobile:w-screen "
          >
            <h1 className="text-4xl h-full w-11/12 flex flex-col text-center justify-center font-normal text-primary mobile:text-xl text-shadow-md ">
              Your Cart
            </h1>
          </animated.div>
    </div>
    <div className="w-1/2 min-h-screen flex justify-center">
      <div className='w-11/12 mx-auto h-10/12 my-auto'>
      {cartedBikes.length === 0 ? (
        <div className="w-1/2 min-h-screen h-screen flex justify-center flex-col mobile:w-full mx-auto">
          <div className="flex justify-center mx-auto">
            <span className="text-center">You don't have any Product in your Cart.</span>
          </div>
         <div className="flex justify-center">
          <Link to="/Products" className="text-primary text-center rounded w-60 mx-auto p-2 bg-slate-700 hover:animate-pulse">Go to Products</Link>
         </div>
        </div>
        
        ) : (<div className="w-full min-h-screen h-screen flex justify-center flex-col mobile:w-full mx-auto">
          <div className=" flex justify-between m-6 border-b-2 border-slate-700">
            <span className=" w-10/12 text-center" >Products</span>
            <span className="w-2/12 text-center">&nbsp; Price </span>
          </div>
          {!loading ? (
            <ul className="mx-auto w-full">
              {cartedBikes.map((bike, index) => (
                <YourCartCard
                  className="snap-center w-full min-h-screen h-screen justify-evenly bg-black"
                  key={index}
                  id={bike.id}
                  brand={bike.brand}
                  img0={bike.img0}
                  model={bike.model}
                  price={bike.price}
                  // handleDelete={handleDelete}
                />
              ))}
            </ul>
          ) : (
            <LoadingScreen />
          )}
        </div>)}
      </div>
    </div>
  </div>
  )}

export default YourCart;
