import React, { useState } from 'react'
import './Contact.css'


const Contact = () => {
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [message,setmessage]=useState('')
    const handleclick=(e)=>{
        e.preventDefault();

        alert(`Hii ${name} our team will contact you shortly!`)
        setname('')
        setemail('')
        setmessage('')
    }
  return (
    <div id='contact'>
      <h2 className='client-head'>Contact</h2>
      <form onSubmit={handleclick} className='form-grid'>
        <label htmlFor='user-name'>Name</label>
        <input
          type="text"
          id="user-name"
          name="user_name"
          value={name}
          onChange={(e) => setname(e.target.value)}
          required
        />

        <label htmlFor='user-email'>Email</label>
        <input
          type="email"
          id="user-email"
          name="user_email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
        />

        <label htmlFor='message'>Message</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setmessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
      <center>
        <p>@john-infant</p>
        <i>All rights reserved</i>
      </center>
    </div>
  )
}

export default Contact