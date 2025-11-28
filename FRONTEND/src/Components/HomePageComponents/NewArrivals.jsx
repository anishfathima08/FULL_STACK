import React, { useContext } from 'react'
import { allProducts } from '../../assets/assets'
import { myContext } from '../../Context/ContextProvider'

const NewArrivals = () => {

    const { navigate, productData } = useContext(myContext)

    return (
        <>
            <h3 className='text-center display-5'>New Arrival</h3>

            <div className="container m-5">
                <div className="row">
                    {productData.filter((value) => value.productCategory === 'New Arrival').map((value, index) => (
                        <div className="col-3" key={index}>
                            <div className="card border-0">
                                <img src={value.productImg} alt="" onClick={() => navigate(`/product/${value._id}`)} />
                                <div className="card-body">
                                    <p className='m-0'>{value.productName}</p>
                                    <p className='m-0'>{value.productCategory}</p>
                                    <p className='text-secondary'>{value.productDescription}</p>
                                    <p>₹ {value.productPrice}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default NewArrivals