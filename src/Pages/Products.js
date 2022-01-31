import React, { useState, useLayoutEffect } from 'react';
import { collref } from '../firebase';
import { getDocs } from 'firebase/firestore';
import ProductsCard from '../Components/ProductsCard';

function Products() {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    getDocs(collref)
      .then((snapshot) => {
        let bicycles = [];
        snapshot.docs.forEach((doc) => {
          bicycles.push({ ...doc.data(), id: doc.id });
        });
        setBikes(bicycles);
      })
      .catch((err) => {
        console.log(err.message);
      });
    return () => {
      setLoading(true);
    };
  }, []);

  console.log(bikes)

  return (
    <div className=" min-h-screen bg-primary">
      <ul>
        {bikes.map((id) => 
          <ProductsCard
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
      </ul>
    </div>
  );
}

export default Products;
