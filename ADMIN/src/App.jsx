import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContextProvider from './Context/ContextProvider'
import Form from './Pages/Form'
import Products from './Pages/Products'
import Users from './Pages/Users'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <ContextProvider>
                    <Routes>
                        <Route path='/' element={<Form />} />
                        <Route path='/products' element={<Products />} /> 
                        <Route path='/users' element={<Users />} /> 
                    </Routes>
                </ContextProvider>
            </BrowserRouter>
        </>
    )
}

export default App 