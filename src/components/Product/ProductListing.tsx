import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import './ProductListing.css'

const ProductListing = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(products => setProducts(products))

    }, [])

    return (
        <div className='product-listing'>
            { !products && <p>loading...</p> }
            { products && products.map(
                    (product: any) => 
                    <ProductItem key={product.id} {...product} />
                )
            }
        </div>
    )
}

export default ProductListing
