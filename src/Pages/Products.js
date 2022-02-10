import React, { useState, useEffect} from 'react';
import { collref } from '../firebase';
import { getDocs, doc, getDoc,} from 'firebase/firestore';
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
  const [cartBikes, setCartBikes] = useState([])

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
    if(favBikes.includes(id,model,price, brand,img0)) {
      alert("You have already added this bike to your Favorites")
     } else if (favBikes.length > 4) {
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

 // CART
  useEffect(() => {
    const data = localStorage.getItem('CartBikes')
    if (data) {
      setCartBikes(JSON.parse(data));
    }

  },[]);

  useEffect(() => {
    localStorage.setItem('CartBikes', JSON.stringify(cartBikes));
  });


  const addToCart = (id, model, price, brand, img0) => {
    if(cartBikes.includes(id,model,price, brand,img0)) {
      alert("You have already added this bike to your Cart")
     } else if (cartBikes.length > 4) {
       alert("You can only add 5 bikes in Your Cart")
     } else {
       setCartBikes([...cartBikes, {id:id, model:model, price:price, brand:brand, img0:img0,}])
     }
  }

//  const addOrderedBikes =  (id,brand,model,price) => {
//   setOrderedBike([...orderedBike, {id,model,brand,price}])
//   localStorage.setItem('orderedBikes', JSON.stringify(orderedBike));
  
// }

// console.log(orderedBike)
// const objbikes = Object.assign({},orderedBike)
// console.log(objbikes)


// const addUserCart = async () => {
      
//   const userDoc = doc(db, "users", `${currentUser?.uid}`)
//   await updateDoc( userDoc, {
//     orderedBike: objbikes
//   })
// }

// useEffect(() => {
//   addUserCart()
  
// });
  

   

    
  

 


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
          addToCart={addToCart}
          cartBikes={cartBikes}
          
          
          
          
          />
        )}
      </ul>) : ( <LoadingScreen />)}
      
    </div>
  );



}

export default Products;



