import React, { useContext } from 'react'
import { myContext } from '../Context/ContextProvider'

const Form = () => {

    const { registerUsername, setRegisterUsername, registerEmail, setRegisterEmail, registerPassword, setRegisterPassword, registerSubmitFun,  loginUsername, setLoginUsername, loginPassword, setLoginPassword, loginSubmitFun  } = useContext(myContext)

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-6">

                        <h3>Register Form</h3>

                        <form className='my-5' onSubmit={registerSubmitFun}>

                            <label className='form-label'>Enter Username</label>
                            <input type="text" className='form-control mb-3' value={registerUsername} onChange={(e) => setRegisterUsername(e.target.value)} />

                            <label className='form-label'>Enter Email</label>
                            <input type="text" className='form-control mb-3' value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} />

                            <label className='form-label'>Enter Password</label>
                            <input type="text" className='form-control mb-3' value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />

                            <input type="submit" className='btn btn-primary w-100' />
                        </form>

                    </div>

                    <div className="col-6">

                        <h3>Login Form</h3>

                        <form className='my-5' onSubmit={loginSubmitFun}>

                            <label className='form-label'>Enter Username</label>
                            <input type="text" className='form-control mb-3' value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} />

                            <label className='form-label'>Enter Password</label>
                            <input type="text" className='form-control mb-3' value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />

                            <input type="submit" className='btn btn-primary w-100' />

                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Form