import React from 'react'
import Header from './Pages/Header/Header'
import './App.css'
import Banner from './Pages/Banner/Banner'
import Client from './Pages/Client/Client'
import Service from './Pages/Service/Service'
import Whyus from './Pages/Why/Whyus'
import Blog from './Pages/Blog/Blog'

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className='head-cont'>
        <Banner/>
      </div>
      <Client/>
      <Service/>
      <Whyus/>
      <Blog/>
    </div>
  )
}

export default App