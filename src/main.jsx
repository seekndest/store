import App from './App';
import { CartProvider } from './context/CartContext';

function main() {
    return (
        <CartProvider>
            <App></App>
        </CartProvider>
    )
}

export default main;