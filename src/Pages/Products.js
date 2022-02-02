import React, { useState, useEffect} from 'react';
import { collref } from '../firebase';
import { getDocs } from 'firebase/firestore';
import ProductsCard from '../components/ProductsCard';
import LoadingScreen from '../components/LoadingScreen';
import createScrollSnap ,{ easeInOutQuad } from 'scroll-snap'




function Products() {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);

  const element = document.getElementById('container')

const { bind, unbind } = createScrollSnap(element, {
  snapDestinationX: '0%',
  snapDestinationY: '90%',
  timeout: 100,
  duration: 300,
  threshold: 0.2,
  snapStop: false,
  easing: easeInOutQuad,
}, () => console.log('element snapped'))

  

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
          console.log(bikes)
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

  
 

  

  return (
    <div className=" min-h-screen bg-primary overflow-hidden"  >
      {!loading ? (<ul  className='snap-y ' id='container' >
        {bikes.map((id, index) => 
          <ProductsCard className='snap-center'
          index={index}
          key={id.id}
          amount={id.amount}
          id={id.id}
          brand={id.brand}
          descrip={id.descrip}
          headtitle={id.headtitle}
          img0={id.img0}
          img1={id.img1}
          img2={id.img2}
          model={id.model}
          price={id.price}
          />
        )}
      </ul>) : ( <LoadingScreen />)}
      
    </div>
  );



//   return (
//   <div className=" min-h-screen bg-primary " ref={scrollRef} >
//     <ul>
//       {bikes.map((id, index) => 
//         <ProductsCard
//         index={index}
//         key={id.id}
//         amount={id.amount}
//         id={id.id}
//         brand={id.brand}
//         descrip={id.descrip}
//         headtitle={id.headtitle}
//         img0={id.img0}
//         img1={id.img1}
//         img2={id.img2}
//         model={id.model}
//         price={id.price}
//         />
//       )}
//     </ul>
//   </div>
// );
}

export default Products;



