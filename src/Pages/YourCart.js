import React, { useState, useEffect } from 'react';
import cart from '../Assets/cart.mp4';
import { animated, useSpring } from 'react-spring';
import { Link } from 'react-router-dom';
import YourCartCard from '../components/YourCartCard';
import LoadingScreen from '../components/LoadingScreen';
import { collref } from '../firebase';
import { getDocs } from '@firebase/firestore';
import { useAuth } from '../Contexts/AuthContext';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

function YourCart() {
  const { currentUser } = useAuth();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [cartedBikes, setCartedBikes] = useState([]);
  const [bikes, setBikes] = useState([]);
  const [addedCartBikes, setAddedCartBikes] = useState([]);
  const [cartSum, setCartSum] = useState();

  useEffect(() => {
    const getUserInfo = () => {
      const docRef = doc(db, 'users', `${currentUser?.uid}`);
      getDoc(docRef)
        .then((doc) => {
          if (doc.exists) {
            setUser(doc.data());
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    let isApiSubscribed = true;
    if (isApiSubscribed) {
      getUserInfo();
    }

    return () => {
      // cancel the subscription
      isApiSubscribed = false;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const data = localStorage.getItem('CartBikes');
    if (data) {
      setCartedBikes(JSON.parse(data));
    }
    localStorage.getItem('Sum');
  }, []);

  useEffect(() => {
    localStorage.setItem('CartBikes', JSON.stringify(addedCartBikes));
    localStorage.setItem('Sum', JSON.stringify(cartSum));
  });

  const handleDelete = (id) => {
    const newList = cartedBikes.filter((bike) => bike.id !== id);

    setCartedBikes(newList);

    localStorage.setItem('CartBikes', JSON.stringify(cartedBikes));
    localStorage.setItem('Sum', JSON.stringify(cartSum));
  };

  useEffect(() => {
    setLoading(true);
    setAddedCartBikes(cartedBikes.filter((_, i) => bikes[i]));
    totalCart();
    setLoading(false);
    localStorage.setItem('Sum', JSON.stringify(cartSum));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bikes, cartedBikes, cartSum]);

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

  //sum
  const totalCart = () => {
    const sum = cartedBikes
      .map((item) => item.price)
      .reduce((prev, curr) => prev + curr, 0);
    setCartSum(sum);
    console.log(cartSum);
  };

  const anim = useSpring({
    from: { opacity: 0, transform: 'translateX(-100%)' },
    to: { opacity: 1, transform: 'translateX(0%)' },
    delay: 600,
  });

  console.log(user);

  if (loading || !user === undefined) {
    return <LoadingScreen />;
  } else {
    return (
      <div className="min-h-screen w-screen bg-primary flex flex-row mobile:flex-col">
        <div className="w-1/2 h-screen flex mobile:w-full">
          <video
            autoPlay={true}
            loop={true}
            preload="auto"
            muted={true}
            playsInline={true}
            controls={false}
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
        <div className="w-1/2 min-h-screen flex justify-center mobile:w-full">
          <div className="w-11/12 mx-auto h-10/12 my-auto">
            {cartedBikes.length === 0 ? (
              <div className="w-1/2 min-h-screen h-screen flex justify-center flex-col mobile:w-full mx-auto">
                <div className="flex justify-center mx-auto">
                  <span className="text-center">
                    You don't have any bike in your Cart.
                  </span>
                </div>
                <div className="flex justify-center">
                  <Link
                    to="/Products"
                    className="text-primary text-center rounded w-60 mx-auto p-2 bg-slate-700 hover:animate-pulse"
                  >
                    Go to Products
                  </Link>
                </div>
              </div>
            ) : (
              <div className="w-full min-h-screen h-screen flex justify-center flex-col mobile:w-full mx-auto">
                <div className=" flex justify-between m-6 border-b-2 border-slate-700">
                  <span className=" w-10/12 text-center">Products</span>
                  <span className="w-2/12 text-center">&nbsp; Price </span>
                </div>
                {!loading ? (
                  <>
                    <ul className="mx-auto w-full mobile:w-full">
                      {cartedBikes.map((bike, index) => (
                        <YourCartCard
                          className="snap-center w-full min-h-screen h-screen justify-evenly bg-black mobile:w-full"
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

                    <div className="w-full flex justify-end border-t-2 border-slate-700 my-3 mobile:justify-center">
                      <div className="mx-5 pr-10 py-5 mobile:pr-0">
                        <span className="mx-5">Total Amount :</span>
                        <span>{cartSum}€</span>
                      </div>
                    </div>
                    <div className="h-3/12 text-slate-600 w-6/12 flex justify-center mx-auto  my-2 cursor-pointer mobile:w-full ">
                      <Link
                        to="/CheckOut"
                        className="flex text-center justify-center rounded fill-slate-600 py-2 w-3/4  px-10 mobile:py-0 mobile:px-2 text-primary mobile:w-1/2 bg-slate-700 align-middle"
                      >
                        
                        CheckOut
                      </Link>
                    </div>
                  </>
                ) : (
                  <LoadingScreen />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default YourCart;
