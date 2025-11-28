import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const myContext = createContext()

const ContextProvider = ({children}) => {

    var [ productName, setProductName ] = useState('')
    var [ productDescription, setProductDescription ] = useState('')
    var [ productPrice, setProductPrice ] = useState('')
    var [ productCategory, setProductCategory ] = useState('')
    var [ productImg, setProductImg ] = useState('')

    var [ productData, setProductData ] = useState([])

    var [ productUpdateName, setProductUpdateName ] = useState('')
    var [ productUpdateDescription, setProductUpdateDescription ] = useState('')
    var [ productUpdatePrice, setProductUpdatePrice ] = useState('')
    var [ productUpdateCategory, setProductUpdateCategory ] = useState('')
    var [ productUpdateImg, setProductUpdateImg ] = useState('')

    var [ productID, setProductID ] = useState('')

    const url =  'http://localhost:5000'

    const productAddFun = async (e) => {
        e.preventDefault()
        try{
            var formData = {
                productName,
                productDescription,
                productPrice,
                productCategory,
                productImg
            }
            
            await axios.post(`${url}/product/addProduct`, formData)
            alert('Product Added Successfully...')

            setProductName('')
            setProductDescription('')
            setProductPrice('')
            setProductCategory('')
            setProductImg('')
        }
        catch(err){
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`)
        }
    }

    const productImgFun = (e) => {
        var file = e.target.files[0] 

        if(file){
            var reader = new FileReader()

            reader.onloadend = () => {
                setProductImg(reader.result)
            }
        }

        reader.readAsDataURL(file)
    }

    const productFetchFun = async () => {
        try{
            const productList = await axios.get(`${url}/product/getProduct`)
            setProductData(productList.data)
        }
        catch(err){
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`)
        }
    }
    
    useEffect(() => {
        productFetchFun()
    } , [])

    const productDeleteFun = async (productID) => {
        try{
            if(confirm('Are You Sure Want to Delete ?')){
                await axios.delete(`${url}/product/deleteProduct/${productID}`)
                alert('Product Deleted Successfully...')
            }
        }   
        catch(err){
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`)
        }
        productFetchFun()
    }

    const productUpdateFun = (productID) => {
        var product = productData.find((value) => value._id == productID )
        
        if(product){
            setProductUpdateName(product.productName)
            setProductUpdateDescription(product.productDescription)
            setProductUpdatePrice(product.productPrice)
            setProductUpdateCategory(product.productCategory)
            setProductUpdateImg(product.productImg)
            setProductID(product._id)
        }
    }

    const productUpdateImgFun = (e) => {
        var file = e.target.files[0]

        if(file){
            var reader = new FileReader()

            reader.onloadend = () => {
                setProductUpdateImg(reader.result)
            }
        }

        reader.readAsDataURL(file)
    }

    const productUpdateSubmitFun = async (e) => {
        e.preventDefault()

        try{
            var productUpdateData = {
                productName : productUpdateName,
                productDescription : productUpdateDescription,
                productPrice : productUpdatePrice,
                productCategory : productUpdateCategory,
                productImg : productUpdateImg,
            }

            await axios.put(`${url}/product/updateProduct/${productID}`, productUpdateData)
            alert('Product Updated Successfully...')
        }
        catch(err){
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`)
        }

        productFetchFun()
    }

    const  [ userData, setUserData ] = useState([])

    const userFetchFun = async () => {
        try{
            const userList = await axios.get(`${url}/user/getUser`)
            setUserData(userList.data);
            
        }
        catch(err){
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`)
        }
    }

    useEffect(() => {
        userFetchFun()
    }, [])

    const registerDeleteFun = async (userID) => {
        try{
            if(confirm('Are You Sure Want to Remove This User ?')){
                await axios.delete(`${url}/user/deleteUser/${userID}`)
                alert('User Removed Successfully...')
            }
        } 
        catch(err){
            console.log(`Error Name : ${err.name}, Error Message : ${err.message}`)
        }

        userFetchFun()
    }

    const myContextValue = {
        productName, setProductName,
        productDescription, setProductDescription,
        productPrice, setProductPrice,
        productCategory, setProductCategory,

        productAddFun, 
        
        productImgFun, productImg,

        productData, productDeleteFun,

        productUpdateName, setProductUpdateName,
        productUpdateDescription, setProductUpdateDescription,
        productUpdatePrice, setProductUpdatePrice,
        productUpdateCategory, setProductUpdateCategory,

        productUpdateFun, productUpdateImg, productUpdateImgFun,
        productUpdateSubmitFun,

        userData, registerDeleteFun
    }

    return (
        <myContext.Provider value={myContextValue}>
            {children}
        </myContext.Provider>
    )
}

export default ContextProvider 