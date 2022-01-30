import { useTypedSelector } from "../../hooks/use-types-selector";
import CartItem from "../cart/cart-item";
import Button from "../ui-elements/button";
import LoadingSpinner from "../ui-elements/loading-spinner";

export interface CartSummaryProps {
  setActive: (index: number) => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({ setActive }) => {
  const { cart } = useTypedSelector((state) => state.cartState);

  if (!cart) {
    return <LoadingSpinner asOverlay />;
  }

  return (
    <div className="cart-summary__container">
      <ul>
        {cart.items.map((item) => (
          <CartItem key={item.name} item={item} />
        ))}
      </ul>

      <div className="cart__total">
        <h2 className="heading-secondary cart__total__text">
          <span>Celkem:</span>{" "}
          <span className="cart__total__text__amount">
            {new Intl.NumberFormat("cs-CZ").format(cart!.total)} Kč
          </span>
        </h2>
      </div>

      <Button className="cart-summary__button" onClick={() => setActive(1)}>
        Doprava
      </Button>
    </div>
  );
};

export default CartSummary;
