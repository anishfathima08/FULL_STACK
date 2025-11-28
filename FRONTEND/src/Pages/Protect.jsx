import React from 'react'
import { Navigate } from 'react-router-dom'

const Protect = ({children}) => {

    const user = localStorage.getItem('username')

    if(!user){
        return <Navigate to='/' />
    }

    return (
        <>
            {children}
        </>
    )
}

export default Protect