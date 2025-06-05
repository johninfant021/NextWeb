import React from 'react'
import Header from './Pages/Header/Header'
import './App.css'
import Banner from './Pages/Banner/Banner'
import Client from './Pages/Client/Client'

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <Banner/>
      <Client/>
    </div>
  )
}

export default App