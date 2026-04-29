import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductItem({ name, price, id }) {
    const { addToCart } = useContext(CartContext);
    return (
        <div id={id}>
            <h3>{name}</h3>
            <p>{price}</p>
            <button onClick={() => addToCart({ id, name, price})}>Добавить в корзину</button>
        </div>
    )
}

export default ProductItem;