import React, { useState, useLayoutEffect} from 'react';
import { collref } from '../firebase'
import { getDocs } from 'firebase/firestore'




function Products() {

  const [ bikes , setBikes] = useState([])
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    getDocs(collref)
  .then((snapshot) => {
    let bicycles = []
    snapshot.docs.forEach((doc) => {
      bicycles.push({...doc.data() , id: doc.id})
    })
    setBikes(bicycles)
  })
  .catch( err => {
    console.log(err.message)
  })
    return () => {
     setLoading(true)
    };
  }, []);
  
  

  

  
  return( 
  
  <div className=" min-h-screen bg-primary">
    <ul>
      {bikes.map((id) => 
          <li key={id.id}>{id.price}</li>
         
      )}
      
    </ul>
  </div>
  
  );
}

export default Products;
