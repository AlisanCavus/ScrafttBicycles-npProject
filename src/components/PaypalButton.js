import React, {useEffect, useRef, useState} from 'react'

function PaypalButton( props ) {

    const { cartedBikes, sum } = props
    // eslint-disable-next-line no-unused-vars
    const [checkout, setCheckout] = useState(false)

  const paypal = useRef()

  

  useEffect(() => {

    window.paypal.Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              ...cartedBikes
            ],
            currency_code:"EUR",
            value: sum,
          })
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture()
          console.log(order)
        },
        onError: (err) => {
          console.log(err)
        }
    }).render(paypal.current)


  },[cartedBikes,sum])
  return (
    <div ref={paypal} className="my-5" > </div>
  )
}

export default PaypalButton