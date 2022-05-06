import React from 'react'
import { useNavigate } from 'react-router-dom'


function HomePage() {
  let navigate = useNavigate();

  function goToDashboard() {
    navigate('/dashboard')
  }

  return (
    <div>
      <div>this is the <h1>Home Page</h1></div>
      <h3>go to the <button className="button__green" onClick={goToDashboard}>Dashboard</button> </h3>

    </div>
  )
}

export default HomePage