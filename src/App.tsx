import Cart from "./components/cart/Cart"
import ProductListing from "./components/Product/ProductListing"
import './App.css'
import { useStore } from "./stores/Cart"
import { NavCart } from "./types/Cart"
import { Product } from "./types/Product"

function App() {

  const items: Product[] = useStore((state: any) => state.items)

  const navCart: NavCart = {
      items: items,
      total: items.reduce((acc: number, item: Product) => acc + item.price, 0)
  }

  return (
    <section id="app">
      <Cart {...navCart} />
      <ProductListing />     
    </section>
  )
}

export default App
