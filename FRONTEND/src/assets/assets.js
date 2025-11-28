import logo from "./images/logo.png"

import img1 from "./images/product/image-1.png"
import img2 from "./images/product/image-2.png"
import img3 from "./images/product/image-3.png"
import img4 from "./images/product/image-4.png"

export const myAsset = {
    logo
}

export const allProducts = [
    {
        _id : 1,
        productImg : img1,
        productName : 'Hoodies',
        productCategory : "New Arrival", 
        productDescription : "Dime Classic Remast Hoodie" , 
        productPrice : 140.00
    },
    {
        _id : 2,
        productImg : img2,
        productName : 'Men',
        productCategory : "New Arrival", 
        productDescription : "Dime Sunny Tee, forest green" , 
        productPrice : 55.00
    },
    {
        _id : 3,
        productImg : img3,
        productName : 'Pant',
        productCategory : "Shop", 
        productDescription : "Dime Classic Small Sweatpants" , 
        productPrice : 100.00
    },
    {
        _id : 4,
        productImg : img4,
        productName : 'Men',
        productCategory : "Shop", 
        productDescription : "Dime Classic Remast Hoodie" , 
        productPrice : 135.00
    }
]
