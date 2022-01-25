import { useActions } from "../../hooks/use-actions";
import { useTypedSelector } from "../../hooks/use-types-selector";
import Button from "../ui-elements/button";

const ProductDetailsInfo:React.FC = () => {
  const { addToCart } = useActions();
  const { product } = useTypedSelector((state) => state.productDetails);

  const increaseQuantityHandler = () => {
    addToCart(product!.id, 1);
  };
  return (
    <div className="product-detail-info__container">
      <h2 className="product-detail-info__name">{product!.name}</h2>
      <p className="product-detail-info__description">{product!.description}</p>
      <p className="product-detail-info__price">
        {new Intl.NumberFormat("cs-CZ").format(product!.price)}
        <span> Kč</span>{" "}
      </p>
      <Button className="product-detail-info__button" onClick={increaseQuantityHandler}>
        Přidat do košíku
      </Button>
    </div>
  );
};

export default ProductDetailsInfo;
