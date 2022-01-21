import { useTypedSelector } from "../../hooks/use-types-selector";
import LoadingSpinner from "../ui-elements/loading-spinner";
import Button from "../ui-elements/button";
import CartItem from "./cart-item";


const Cart: React.FC = () => {
  
  const { cart } = useTypedSelector((state) => state.cartState);
  
    if (cart === null){
        return <LoadingSpinner />
    }

    
   

  return (
    <div className="cart__container">
      <h2 className="heading-secondary cart__heading">Váš nákupní košík</h2>
      <form className="cart__form">
        <ul className="cart__list">
          {cart.items.map((item) => (
            <li key={item.name} className="cart__list__item">
              <CartItem item={item} />
            </li>
          ))}
        </ul>

        <div className="cart__infos">
          <div className="cart__total">
            <h2 className="heading-secondary cart__total__text">
              <span>Celkem:</span>{" "}
              <span className="cart__total__text__amount">
                {new Intl.NumberFormat("cs-CZ").format(cart.total)} Kč
              </span>
            </h2>
          </div>
          <div className="cart__actions">
            <Button type="button" className="cart__actions__button" inverse>
              Pokračovat v nakupování
            </Button>
            <Button type="submit" className="cart__actions__button">
              Pokračovat
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
  

};

export default Cart;
