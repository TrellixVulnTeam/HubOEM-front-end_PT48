import React from 'react'
import { useNavigate } from 'react-router-dom'

import MessagesInput from '../Components/MessageInput'

function MessagesPage() {
  let navigate = useNavigate();


  function contactUsBtn() {
    navigate('/contact')
  }
  return (
    <>
      <div className="MessagesPage">
        <MessagesInput />
      </div>
      <button onClick={contactUsBtn}>Contact Us</button>
    </>
  )
}

export default MessagesPage