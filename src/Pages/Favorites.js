import { getDocs } from '@firebase/firestore';
import React, { useEffect, useState } from 'react';
import { collref } from '../firebase';
import LoadingScreen from '../components/LoadingScreen';
import FavoritesCard from '../components/FavoritesCard';
import Fav from '../Assets/fav.mp4';
import { animated, useSpring } from 'react-spring';

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
    setFavoritedBikes(bikes.filter((_, i) => favBikes[i]));
    setLoading(false);
  }, [bikes, favBikes]);

  console.log(favoritedBikes);

  const anim = useSpring({
    from: { opacity: 0, transform: 'translateX(100%)' },
    to: { opacity: 1, transform: 'translateX(0%)' },
    delay: 300,
  });

  return (
    <div
      className="h-screen bg-primary"
      id="container">
      <div className="min-h-screen w-screen flex mobile:flex-row">
        
        <div className="w-1/2 min-h-screen h-screen flex justify-center flex-col ">
        <div className=" flex justify-between m-6 border-b-2 border-slate-700">
          <span className=" w-10/12 text-center" >Products</span>
          <span className="w-2/12 text-center">&nbsp; Price </span>
        </div>
          {!loading ? (
            <ul>
              {favoritedBikes.map((id, index) => (
                <FavoritesCard
                  className="snap-center w-full min-h-screen h-screen grid grid-flow-row grid-rows-6 justify-evenly bg-black"
                  index={index}
                  key={id.id}
                  guarantie={id.guarantie}
                  amount={id.amount}
                  id={id.id}
                  specs={id.specs}
                  brand={id.brand}
                  descrip={id.descrip}
                  headtitle={id.headtitle}
                  img0={id.img0}
                  img1={id.img1}
                  img2={id.img2}
                  model={id.model}
                  price={id.price}
                />
              ))}
            </ul>
          ) : (
            <LoadingScreen />
          )}
        </div>
        <div className="w-1/2 mobile:min-w-screen ">
          <div className=" flex mobile:flex-row justify-center max-h-screen m-0 p-0 min-h-screen relative h-screen min-w-screen ">
            <video
              autoPlay={true}
              loop={true}
              preload="auto"
              muted={true}
              className=" object-cover w-screen"
            >
              <source src={Fav}></source>
            </video>
          </div>
          <animated.div
            style={anim}
            className="flex top-0 right-0 justify-center w-1/2 m-auto  mx-auto absolute py-36 mobile:w-screen "
          >
            <h1 className="text-4xl h-full w-11/12 flex flex-col text-center justify-center font-normal text-secondary mobile:text-xl text-shadow-md ">
              Your Favorites
            </h1>
          </animated.div>
        </div>
      </div>
    </div>
  );
}

export default Favorites;
