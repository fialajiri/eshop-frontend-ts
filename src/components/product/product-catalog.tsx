import { useEffect, useRef } from "react";
import { useTypedSelector } from "../../hooks/use-types-selector";
import { useRouter } from "next/router";
import ProductList from "./product-list";
import { useActions } from "../../hooks/use-actions";
import ProductSort from "./product-sort";
import ProductSearchPanel from "./product-search-panel";
import ProductFilter from "./product-filter";
import LoadingSpinner from "../ui-elements/loading-spinner";
import { useElementOnScreen } from "../../hooks/use-element-on-screen";

const ProductCatalog: React.FC = () => {
  const router = useRouter();
  const { categoryId } = router.query as { categoryId: string };

  const { containerRef, isVisible } = useElementOnScreen({
    root: null,
    rootMargin: "-100px",
    threshold: 0,
  });

  const { listProducts, listCategories } = useActions();
  const { loading, error, products } = useTypedSelector((state) => state.productList);
  const { categories } = useTypedSelector((state) => state.categoryList);

  const { category } = useTypedSelector((state) => state.productList);

  useEffect(() => {
    if (products.length === 0) {
      listProducts();
    }

    if (categories.length === 0) {
      listCategories();
    }

    if (categoryId != undefined) {
      listProducts("", categoryId);
    }
  }, []);

  if (loading || !products) {
    return <LoadingSpinner asOverlay />;
  }

  return (
    <div className="base__container">
      <h1 className="catalog__heading">{category ? category.name : "Vše"}</h1>

      <ProductSearchPanel containerRef={containerRef} />

      <div className="catalog__container">
        <div className="catalog__container--top">
          <div className={isVisible ? "" : "catalog__container--top--sticky"}>
            <ProductFilter isVisible={isVisible} />
            <ProductSort />
          </div>
        </div>
        <ProductList />
      </div>
    </div>
  );
};

export default ProductCatalog;
