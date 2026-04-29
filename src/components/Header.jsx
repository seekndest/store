import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function Header() {
    const { cartItems } = useContext(CartContext)
    return (
        <div>
            <h1>Магазин</h1>
            <div>
                <img src="" alt="Корзина"></img>
                <p>Товаров: {cartItems.length}</p>
            </div>
        </div>
    )
}

export default Header;