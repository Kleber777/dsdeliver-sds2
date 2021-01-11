import ProductCard from "./ProductCard";
import { type } from "os";
import { Product } from "./Types";

type Props = {
    products: Product[];
    onSelectProduct: (product: Product) => void;
}

function ProductList ({products, onSelectProduct}: Props){
    return(
    <div className="orders-list-container">
        <div  className="orders-list-items">
            {products.map(product => (
                <ProductCard key={product.id} product={product}
                onSelectProduct={onSelectProduct}/>
            ))}
        </div>
    </div>
    )
}

export default ProductList;