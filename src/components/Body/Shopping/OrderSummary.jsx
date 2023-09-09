import React from 'react';
import Panel from '../../../reusable/Panel';

const OrderSummary = ({cart}) => {
  return (
   
        <Panel>
              <h1>Order Summary</h1>
              {cart.map((item) => (
                <div key={item.id}>
                  {item.qty}*{item.price}
                </div>
              ))}
            </Panel>
   
  )
}

export default OrderSummary