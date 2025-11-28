import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { myContext } from "../Context/ContextProvider";
import { myAssets } from "../assets/assets";

const Products = () => {

    const { productData, productDeleteFun, productUpdateName, setProductUpdateName, productUpdateDescription, setProductUpdateDescription, productUpdatePrice, setProductUpdatePrice, productUpdateCategory, setProductUpdateCategory, productUpdateFun, productUpdateImg, productUpdateImgFun, productUpdateSubmitFun } = useContext(myContext)

    return (
        <>
            <div className="container my-3">
                <div className="my-3">
                    <div className="d-flex justify-content-between align-items-center my-3">
                        <h3>View Products</h3>

                        <div className='d-flex gap-4'>
                            <Link to="/">
                                <button className="btn btn-primary">Add Products</button>
                            </Link>
                             <Link to="/users">
                                <button className="btn btn-primary">View Users</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <table className='table table-bordered border-dark text-center align-middle'>
                    <thead>
                        <tr>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Product Description</th>
                            <th>Product Price</th>
                            <th>Product Category</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        productData.length == 0
                        ?
                            <tr>
                                <td colSpan={7} className='text-danger'>No Products Found</td>
                            </tr>
                        :
                        productData.map((value, index) => (
                            <tr key={index}>
                                <td>
                                    <img src={value.productImg} alt="" height='80' width='80' />
                                </td>
                                <td>{value.productName}</td>
                                <td>{value.productDescription}</td>
                                <td>{value.productPrice}</td>
                                <td>{value.productCategory}</td>
                                <td>
                                    <button className='btn btn-warning' data-bs-toggle='modal' data-bs-target='#updateProductModal' onClick={() => productUpdateFun(value._id)} >Update</button>
                                </td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => productDeleteFun(value._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="modal fade" id='updateProductModal'>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3>Update Product</h3>
                                <button className='btn btn-close' data-bs-dismiss='modal'></button>
                            </div>
                            <div className="modal-body">

                                <form onSubmit={productUpdateSubmitFun}>

                                    <label>Update Product Image</label>
                                    <input type="file" className='form-control' id='updateProductImg' hidden onChange={productUpdateImgFun} />

                                    <br />

                                    <label htmlFor='updateProductImg'>
                                        <img src={productUpdateImg ? productUpdateImg : myAssets.uploadImg} alt="" height='80' width='80' />
                                    </label>

                                    <br /><br />

                                    <label>Update Product Name</label>
                                    <input type="text" className='form-control mb-3' value={productUpdateName} onChange={(e) => setProductUpdateName(e.target.value) } />

                                    <label>Update Product Description</label>
                                    <input type="text" className='form-control mb-3' value={productUpdateDescription} onChange={(e) => setProductUpdateDescription(e.target.value)} />

                                    <label>Update Product Price</label>
                                    <input type="text" className='form-control mb-3' value={productUpdatePrice} onChange={(e) => setProductUpdatePrice(e.target.value)} />

                                    <label>Update Product Category</label>
                                    <select className='form-control mb-3' value={productUpdateCategory} onChange={(e) => setProductUpdateCategory(e.target.value)}>
                                        <option hidden>Choose</option>
                                        <option>New Arrival</option>
                                        <option>Shop</option>
                                    </select>

                                    <input type="submit" className='btn btn-primary w-100' />

                                </form>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Products;
