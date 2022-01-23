import { useTypedSelector } from "../../hooks/use-types-selector";

import ProductCard from "./product-card";

const ProductList: React.FC = () => {
  const { products } = useTypedSelector((state) => state.productList);

  return (
    <div className="product-list__grid">
      {products!.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
