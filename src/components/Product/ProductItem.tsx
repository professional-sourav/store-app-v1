import './ProductItem.css'
import { Product } from '../../types/Product'
import { useStore } from '../../stores/Cart'

const AddToCartButton = (product: Product) => {

  const addItem = useStore((state: any) => state.addItem)
  return <button onClick={(event: HTMLButtonElement) => addItem(product)}>Add to cart</button>
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
