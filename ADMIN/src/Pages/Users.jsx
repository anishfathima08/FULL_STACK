import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { myContext } from "../Context/ContextProvider";

const Users = () => {

    const { userData, registerDeleteFun } = useContext(myContext)

    return (
        <>
            <div className="container my-3">
                <div className="my-3">
                    <div className="d-flex justify-content-between align-items-center my-3">
                        <h3>View Users</h3>

                        <div className="d-flex gap-4">
                            <Link to="/">
                                <button className="btn btn-primary">Add Products</button>
                            </Link>
                            <Link to="/products">
                                <button className="btn btn-primary">View Products</button>
                            </Link>
                        </div>
                    </div>
                </div>

                {
                    userData.length === 0
                    ?
                    <p className='text-center text-danger my-5'>No User Found</p>
                    :
                    <table className='table table-bordered border-dark text-center'>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData.map((value, index) => (
                                    <tr key={index}>
                                        <td>{value.registerUsername}</td>
                                        <td>{value.registerEmail}</td>
                                        <td>{value.registerPassword}</td>
                                        <td>
                                            <button className='btn btn-close' onClick={() => registerDeleteFun(value._id)}></button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                }
            </div>
        </>
    );
};

export default Users;
