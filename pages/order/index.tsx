import CartItem from "../../src/components/cart/cart-item";
import { useTypedSelector } from "../../src/hooks/use-types-selector";
import { useActions } from "../../src/hooks/use-actions";
import FloatingLabelInput from "../../src/components/form-elements/floating-label-input";
import { useState } from "react";
import OrderPage from "../../src/components/order/order-page";

const ShippingPage: React.FC = () => {
  
  return (
    <div>
      <OrderPage />
      
    </div>
  );
};

export default ShippingPage;
