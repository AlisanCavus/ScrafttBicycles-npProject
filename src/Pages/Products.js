import React, { useState, useEffect, useRef} from 'react';
import { collref } from '../firebase';
import { getDocs } from 'firebase/firestore';
import ProductsCard from '../Components/ProductsCard';
import LoadingScreen from '../Components/LoadingScreen';
import  useScrollSnap  from 'react-use-scroll-snap'


function Products() {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchData = async() => {try {getDocs(collref)
      .then((snapshot) => {
        let bicycles = [];
        snapshot.docs.forEach((doc) => {
          bicycles.push({ ...doc.data(), id: doc.id });
        });
        setBikes(bicycles);
        
      })} 
     
      catch(err) { console.log(err.message)}}
    
      fetchData()
      console.log(bikes)
       
      
    return () => {
      setLoading(false)
    };
  }, [bikes]);

  

  const scrollRef = useRef(null);
    useScrollSnap({ ref: scrollRef, duration: 150});

  

  return (
    <div className=" min-h-screen bg-primary " ref={scrollRef} >
      {!loading ? (<ul >
        {bikes.map((id, index) => 
          <ProductsCard
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
}

export default Products;
