import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Product from './Pages/Product'
import ContextProvider from './Context/ContextProvider'
import Form from './Pages/Form'
import Protect from './Pages/Protect'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <Routes>
            <Route path='/' element={<Form />} />
            <Route path='/home' element={<Protect> <Home /> </Protect>} />
            <Route path='/shop' element={<Protect> <Shop /> </Protect>} />
            <Route path='/product/:id' element={<Protect> <Product /> </Protect>} />
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App