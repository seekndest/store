import './App.css';
import Header from './components/Header';
import { CartProvider } from './context/CartContext';
import ProductList from './components/ProductList';



function App() {
  return (
    <div>
      <CartProvider>
      <Header></Header>
      <ProductList></ProductList>
      </CartProvider>
    </div>
    
  );
}

export default App;
