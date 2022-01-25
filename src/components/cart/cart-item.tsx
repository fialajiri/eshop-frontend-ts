import Image from "next/image";
import { useActions } from "../../hooks/use-actions";

import { Plus, Minus, X } from "phosphor-react";
import { CartItemDoc } from "../../interfaces/models";
import Button from "../ui-elements/button";

interface CartItemProps {
  item: CartItemDoc;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { addToCart, removeItemFromCart, subtractFromCart } = useActions();

  const increaseQuantityHandler = () => {
    addToCart(item.product, 1);
  };
  const decreaseQuantityHandler = () => {
    subtractFromCart(item.product, 1);
  };
  const removeItemHandler = () => {
    removeItemFromCart(item.product);
  };

  return (
    <div className="cart-item__container">
      <div className="cart-item__image">
        <Image
          src={`${process.env.IMAGE_DOMAIN}/${item.image}`}
          layout="fill"
          objectFit="cover"
          alt={item.name}
        />
      </div>
      <div className="cart-item__info">
        <h2 className="cart-item__info__name">{item.name}</h2>
        <p className="cart-item__info__subtotal">
          {new Intl.NumberFormat("cs-CZ").format(item.subTotal)} <span>Kč</span>
        </p>
      </div>
      <div className="cart-item__actions">
        <div className="cart-item__actions__remove">
          <Button
            type="button"
            onClick={removeItemHandler}
            unstyled
            className="button__cart button__cart__remove"
          >
            <X />
          </Button>
        </div>
        <div className="cart-item__actions__quantity">
          <Button
            type="button"
            onClick={decreaseQuantityHandler}
            unstyled
            className="button__cart button__cart__quantity"
          >
            <Minus />
          </Button>
          <span className="cart-item__actions__quantity-text">
            {item.quantity}
          </span>
          <Button
            type="button"
            onClick={increaseQuantityHandler}
            unstyled
            className="button__cart button__cart__quantity"
          >
            <Plus />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
