import { getDocs } from '@firebase/firestore';
import React, {useEffect, useState} from 'react';
import { collref } from '../firebase';
import LoadingScreen from '../components/LoadingScreen';


function Favorites() {
  const [favBikes, setFavBikes] = useState([])
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);

  const [ favoritedBikes, setFavoritedBikes ] = useState([])

  useEffect(() => {
    const data = localStorage.getItem('FavoriteBikes')
    if (data) {
      setFavBikes(JSON.parse(data));
    }

  },[]);


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



useEffect(()=> {
  setLoading(true)
  setFavoritedBikes(bikes.filter((_, i)=> favBikes[i]))
  setLoading(false)

},[bikes, favBikes])

console.log(favoritedBikes)

  if ( loading ) {  
    return(<LoadingScreen/>) 
  } else {
    return (<div className=" min-h-screen bg-primary">
      <ul className="h-11/12 w-11/12 rounded border-2 flex justify-center">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    )}
 
  
  
}

export default Favorites;
