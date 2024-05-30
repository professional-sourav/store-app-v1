import './ProductItem.css'
import { Product } from '../../types/Product'

const ProductItem = (product: Product) => {
  return (
    <div className='productItem'>
      <img src={product.image} />
      <h4>{product.title}</h4>
      <h5><span>${product.price}</span> <span>{product.category}</span></h5>
      <button>Add to cart</button>
    </div>
  )
}

export default ProductItem
