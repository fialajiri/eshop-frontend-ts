import { ProductDoc } from "../../interfaces/models";
import ProductCard from "./product-card";

interface ProductListProps {
  products: ProductDoc[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="product-list__grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
