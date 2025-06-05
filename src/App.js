import React from 'react'
import Header from './Pages/Header/Header'
import './App.css'
import Banner from './Pages/Banner/Banner'
import Client from './Pages/Client/Client'
import Service from './Pages/Service/Service'
import Whyus from './Pages/Why/Whyus'

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <Banner/>
      <Client/>
      <Service/>
      <Whyus/>
    </div>
  )
}

export default App