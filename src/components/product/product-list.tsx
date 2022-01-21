import { useActions } from "../../hooks/use-actions";
import { TypedUseSelectorHook } from "react-redux";
import { ProductDoc } from "../../interfaces/models";

import ProductCard from "./product-card";
import { useTypedSelector } from "../../hooks/use-types-selector";
import { useEffect } from "react";
import LoadingSpinner from "../ui-elements/loading-spinner";


// interface ProductListProps {
//   products: ProductDoc[];
// }

const ProductList: React.FC = () => {
  const {listProducts} = useActions();
  const {loading, error, products} = useTypedSelector(state =>state.productList)

  useEffect(() => {
    listProducts()
  }, [])

  if (loading || !products){
    return <LoadingSpinner asOverlay />
  }

  return (
    <div className="product-list__grid">
      {products!.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
