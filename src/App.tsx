import Cart from "./components/cart/Cart"
import ProductListing from "./components/Product/ProductListing"
import './App.css'

function App() {

  return (
    <section id="app">
      <Cart items={0} total={0} />
      <ProductListing />     
    </section>
  )
}

export default App
