import { useEffect } from "react";
import { useRouter } from "next/router";
import { useTypedSelector } from "../../hooks/use-types-selector";
import { useActions } from "../../hooks/use-actions";
import LoadingSpinner from "../ui-elements/loading-spinner";
import ProductDetailsGallery from "./product-details-gallery";
import ProductDetailsInfo from "./product-details-info";
import ProductDetailsNavigation from "./product-details-navigation";

export const ProductDetails: React.FC = () => {
  const router = useRouter();
  const { productId } = router.query as { productId: string };

  const { productDetails, listCategories } = useActions();
  const {
    loading: loadingProduct,
    error: productError,
    product,
  } = useTypedSelector((state) => state.productDetails);
  const {
    loading: loadingCategories,
    error: categoryError,
    categories,
  } = useTypedSelector((state) => state.categoryList);

  useEffect(() => {
    productDetails(productId);
    listCategories();
  }, []);

  if (loadingProduct || loadingCategories || !product) {
    return <LoadingSpinner asOverlay />;
  }

  return (
    <div className="product-detail__container">
      <ProductDetailsNavigation />
      <ProductDetailsGallery />
      <ProductDetailsInfo />
    </div>
  );
};

export default ProductDetails;
