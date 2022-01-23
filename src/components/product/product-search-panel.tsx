import ProductSearchBar from "./product-search-bar";
import { useTypedSelector } from "../../hooks/use-types-selector";

export interface ProductSearchPanelProps {
  containerRef: any;
}

const ProductSearchPanel: React.FC<ProductSearchPanelProps> = (props) => {
  const { products } = useTypedSelector((state) => state.productList);
  let correctGrammer = "položek";

  if (products) {
    if (products.length === 1) correctGrammer = "položka";
    if (products.length > 1 && products.length < 5)
      correctGrammer = "položky";
  }

  return (
    <div className="product-search-bar__container" ref={props.containerRef}>
      <h2 className="product-search-bar__text">
        <span>{products?.length}</span> {correctGrammer}
      </h2>
      <ProductSearchBar />
    </div>
  );
};

export default ProductSearchPanel;
