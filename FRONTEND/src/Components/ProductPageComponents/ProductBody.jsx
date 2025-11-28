import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { allProducts } from '../../assets/assets'
import { myContext } from '../../Context/ContextProvider'

const ProductBody = () => {

    const { id } = useParams()

    const { productData } = useContext(myContext)

    const selectedProduct = productData.find((value) => value._id == id)

    return (
        <>
            <div className="container">
                <div className="row my-2">
                    <div className="col-lg-6">
                        <img src={selectedProduct.productImg} alt="" className='img-fluid' />
                    </div>
                    <div className="col-lg-6">
                        <p className="display-6">{selectedProduct.productDescription}</p>
                        <p>{selectedProduct.productDescription}</p>
                        <p>₹ {selectedProduct.productPrice}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductBody