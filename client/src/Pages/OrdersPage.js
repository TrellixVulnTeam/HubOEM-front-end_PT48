import React from 'react'
import { useNavigate } from 'react-router-dom'

import OrderOverview from '../Components/OrderOverview'

function OrdersPage() {
  let navigate = useNavigate();

  function placeOrder() {
    navigate('/order_parts')
  }
  
  return (
    <div className="OrdersPage">
      <button onClick={placeOrder}>Place an Order</button>
      <OrderOverview />
    </div>
  )
}

export default OrdersPage