import React from 'react'
import { useNavigate } from 'react-router-dom'


function HomePage() {
  let navigate = useNavigate();

  function placeOrder() {
    navigate('/dashboard')
  }
  
  return (
    <div>
      <button className="button__green"onClick={placeOrder}>Dashboard</button>
    </div>
  )
}

export default HomePage