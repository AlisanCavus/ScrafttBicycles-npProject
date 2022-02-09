import React, { useState, useEffect} from 'react';
import { collref } from '../firebase';
import { getDocs, doc, updateDoc, getDoc, arrayUnion } from 'firebase/firestore';
import ProductsCard from '../components/ProductsCard';
import LoadingScreen from '../components/LoadingScreen';
import { db } from '../firebase';
import { useAuth } from '../Contexts/AuthContext'






function Products() {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState();
  const { currentUser } = useAuth() 
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favBikes, setFavBikes ] = useState([]);
  const [orderedBike, setOrderedBike] = useState([])

  useEffect(() => {
    const data = localStorage.getItem('FavoriteBikes')
    if (data) {
      setFavBikes(JSON.parse(data));
    }

  },[]);

  useEffect(() => {
    localStorage.setItem('FavoriteBikes', JSON.stringify(favBikes));
  });


  const addToFav = (id, model, price, brand, img0) => {
    if(favBikes.includes(id)) {
      alert("You have already added this bike to your Favorites")
     } else if (favBikes.length > 5) {
       alert("You can only add 5 bikes in favorites")
     } else {
       setFavBikes([...favBikes, {id:id, model:model, price:price, brand:brand, img0:img0,}])
     }
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
          setLoading(false)
        
        })
        .catch((err) => {
          console.log(err.message);
        });
    }

    let isApiSubscribed = true
    if (isApiSubscribed) {
      getbikes()
    }
    
  
    return () => {
      // cancel the subscription
      isApiSubscribed = false
  };
   
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[]);

   useEffect(() => {
    const getUserInfo = () => {
      const docRef = doc(db, "users", `${currentUser?.uid}`);
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

 
 
  

 const addOrderedBikes =  (id) => {
  setOrderedBike([...orderedBike, id])
  
}

  useEffect(() => {
    const addUserCart = async (orderedBike) => {
      const userDoc = doc(db, "users", `${currentUser?.uid}`)
      await updateDoc( userDoc, {
        orderedBikes: arrayUnion(...orderedBike)
      })
    }

    let isApiSubscribed = true;
    if (isApiSubscribed) {
      addUserCart();
    }

    return () => {
      // cancel the subscription
      isApiSubscribed = false;
    };

    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderedBike]);
 


  return (
    <div className=" min-h-screen bg-primary overflow-hidden" id='container' >
      {!loading ? (<ul>
        {bikes.map((id, index) => 
          <ProductsCard className='snap-center'
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
          addToFav={addToFav}
          favBikes={favBikes}
          addOrderedBikes={addOrderedBikes}
          
          
          
          />
        )}
      </ul>) : ( <LoadingScreen />)}
      
    </div>
  );



}

export default Products;



