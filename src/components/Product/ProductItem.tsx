import './ProductItem.css'
import { Product } from '../../types/Product'
import { useStore } from '../../stores/Cart'
import { useState } from 'react'

const AddToCartButton = (product: Product) => {

  const [addToCart, setAddToCart] = useState(false)

  const addItem = useStore((state: any) => state.addItem)
  const removeItem = useStore((state: any) => state.removeItem)

  const handleOnClickAddToCart = (product: Product) => {  

    if (addToCart) {
      removeItem(product)
    } else {    
      addItem(product)
    }

    setAddToCart((addToCart) => !addToCart)
  }

  return <button onClick={(event: HTMLButtonElement) => handleOnClickAddToCart(product)}>
    { addToCart ? 'Remove From Cart' : 'Add to cart' }
  </button>
}

const ProductItem = (product: Product) => {

  return (
    <div className='productItem'>
      <img src={product.image} />
      <h4>{product.title}</h4>
      <h5><span>${product.price}</span> <span>{product.category}</span></h5>
      <AddToCartButton {...product} />
    </div>
  )
}

export default ProductItem
