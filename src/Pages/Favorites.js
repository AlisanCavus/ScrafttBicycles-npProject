import { getDocs } from '@firebase/firestore';
import React, { useEffect, useState } from 'react';
import { collref } from '../firebase';
import LoadingScreen from '../components/LoadingScreen';
import FavoritesCard from '../components/FavoritesCard';
import Fav from '../Assets/fav.mp4';
import { animated, useSpring } from 'react-spring';
import { Link } from 'react-router-dom'

function Favorites() {
  const [favBikes, setFavBikes] = useState([]);
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favoritedBikes, setFavoritedBikes] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('FavoriteBikes');
    if (data) {
      setFavBikes(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('FavoriteBikes', JSON.stringify(favoritedBikes));
  });
  

 
    const handleDelete = (id) => {

     
     const newList = favBikes.filter((bike)=> bike.id !== id)
   
    setFavBikes(newList)
    
    localStorage.setItem('FavoriteBikes', JSON.stringify(favBikes));
      
    }


  

  useEffect(() => {
    const getbikes = () => {
      getDocs(collref)
        .then((snapshot) => {
          let bicycles = [];
          snapshot.docs.forEach((doc) => {
            bicycles.push({ ...doc.data(), id: doc.id });
          });
          setBikes(bicycles);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    let isApiSubscribed = true;
    if (isApiSubscribed) {
      getbikes();
    }

    return () => {
      // cancel the subscription
      isApiSubscribed = false;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLoading(true);
    setFavoritedBikes(favBikes.filter((_, i) => bikes[i]));
    setLoading(false);
  }, [bikes, favBikes]);

  

  const anim = useSpring({
    from: { opacity: 0, transform: 'translateX(100%)' },
    to: { opacity: 1, transform: 'translateX(0%)' },
    delay: 300,
  });

  return (
    <div
      className="min-h-screen w-full bg-primary overflow-hidden relative mobile:w-full">
      <div className="min-h-screen w-screen flex mobile:flex-col-reverse ">
        
        {favoritedBikes.length === 0 ? (
        <div className="w-1/2 min-h-screen h-screen flex justify-center flex-col mobile:w-full">
          <div className="flex justify-center">
            <span className="text-center">You don't have any Favorite.</span>
          </div>
         <div className="flex justify-center">
          <Link to="/Products" className="text-primary text-center rounded w-60 mx-auto p-2 bg-slate-700 hover:animate-pulse">Go to Products</Link>
         </div>
        </div>
        
        ) : (<div className="w-1/2 min-h-screen h-screen flex justify-center flex-col mobile:w-full">
          <div className=" flex justify-between m-6 border-b-2 border-slate-700">
            <span className=" w-10/12 text-center" >Products</span>
            <span className="w-2/12 text-center">&nbsp; Price </span>
          </div>
          {!loading ? (
            <>
            <ul>
              {favoritedBikes.map((bike, index) => (
                <FavoritesCard
                  className="snap-center w-full min-h-screen h-screen justify-evenly bg-black"
                  key={index}
                  id={bike.id}
                  brand={bike.brand}
                  img0={bike.img0}
                  model={bike.model}
                  price={bike.price}
                  handleDelete={handleDelete}
                />
              ))}
            </ul>
            <div className="h-3/12 text-slate-600 w-10/12 flex justify-center mx-auto ">
            <Link to="/Products" className="flex text-center rounded fill-slate-600  w-1/2  px-10 py-2 mobile:py-0 mobile:px-2 text-primary justify-center mobile:w-full bg-slate-700 align-middle">Go to Products</Link>
           </div>
           </>
          ) : (
            <LoadingScreen />
          )}
        </div>)}
        
        <div className="w-1/2 mobile:w-screen overflow-hidden ">
          <div className=" flex mobile:flex-row justify-center max-h-screen m-0 p-0 min-h-screen relative h-screen min-w-screen overflow-hidden">
            <video
              autoPlay={true}
              loop={true}
              playsInline={true}
              preload="auto"
              muted={true}
              controls={false}
              className=" object-cover w-screen"
            >
              <source src={Fav}></source>
            </video>
          </div>
          <animated.div
            style={anim}
            className="flex top-0 right-0 justify-center w-1/2 m-auto  mx-auto absolute py-36 mobile:w-screen "
          >
            <h1 className="text-4xl h-full w-11/12 flex flex-col text-center justify-center font-normal text-primary mobile:text-xl text-shadow-md ">
              Your Favorites
            </h1>
          </animated.div>
        </div>
      </div>
    </div>
  );
}

export default Favorites;
