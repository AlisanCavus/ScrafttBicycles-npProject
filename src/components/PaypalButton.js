import React, {useEffect, useRef, useState} from 'react'
import { db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useAuth } from "../Contexts/AuthContext";
import { useNavigate } from 'react-router-dom';

function PaypalButton( props ) {
  const navigate = useNavigate()
  const { currentUser } = useAuth();
 const [user, setUser] = useState();
 // eslint-disable-next-line no-unused-vars
 const [loading, setLoading] = useState(true);

    const { cartedBikes, sum } = props
    // eslint-disable-next-line no-unused-vars
    const [checkout, setCheckout] = useState(false)

  const paypal = useRef()

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
  


console.log(cartedBikes)

const payedItems = async () => {
    await setDoc(doc(db, "orders", `${currentUser.uid}`), {
    email: user.email,
    adress: user.adress,
    phoneNumber: user.phoneNumber,
    displayName: user.displayName,
    orderedBike: [...cartedBikes],
    createdAt: new Date(),
    ordersPaid: true,
  }, {merge:true});
  console.log('Document Added')
}

const deleteCart = async () => {
  localStorage.removeItem('CartBikes')
  localStorage.removeItem('Sum')
}


  useEffect(() => {

    window.paypal.Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              { bikes: [...cartedBikes],
                amount: {
                  value: `${sum}`
                }
              }
            ],
            
          })
        },
        onApprove: async (data, actions) => {
          return actions.order.capture().then(function(orderData) {
            // Successful capture! For demo purposes:
            console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
            var transaction = orderData.purchase_units[0].payments.captures[0];
            
            alert('Transaction '+ transaction.status + ': ' + transaction.id + '\n\nSee console for all available details');
            deleteCart()
            payedItems()
            navigate('/Profile')
          })}
    }).render(paypal.current)


  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div ref={paypal} className="my-5" > </div>
  )
}

export default PaypalButton