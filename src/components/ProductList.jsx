import products from "../products";
import ProductItem from "./ProductItem";

function ProductList() {
    return (
        <div>
    {products.map((product) => (
        <ProductItem key={product.id} name={product.name} price={product.price}/>
    ))}
    </div>
)
}

export default ProductList;