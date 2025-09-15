import React from 'react'
import { Routes ,Route } from 'react-router-dom'
import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/Result'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-24 min-h-screen bg-gradient-to-b 
    from-teal-50 to-orange-50'>
      <Navbar/>
    <Routes>

       <Route path='/' element={<Home/>}/>
       <Route path='/buy' element={<BuyCredit/>}/> 
       <Route path='/result' element={ <Result/>}/>
  
   </Routes>
    <Footer/>
    </div>
  );
}

export default App