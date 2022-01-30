import { useActions } from "../../hooks/use-actions";
import { useTypedSelector } from "../../hooks/use-types-selector";
import { AddressDoc } from "../../interfaces/models";
import { CreateOrderData } from "../../state/action-creators/order-action-creators";
import { PaymentMethods } from "../../interfaces/payment-methods-enum";
import Button from "../ui-elements/button";
import React, { useState } from "react";

export interface PaymentProps {
  setActive: (index: number) => void;
  address: AddressDoc;
  shippingPrice: number;
}

const Payment: React.FC<PaymentProps> = ({ setActive, address, shippingPrice }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethods>(
    PaymentMethods.BANK_TRANSFER
  );
  const { cart } = useTypedSelector((state) => state.cartState);
  const { createOrder } = useActions();

  const radioButtonHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPaymentMethod(event.target.value as PaymentMethods);
  };

  const placeOrderHandler = () => {
    const orderData: CreateOrderData = {
      cartId: cart!.id,
      address: address,
      paymentMethod: selectedPaymentMethod,
      shippingPrice: shippingPrice,
    };
    createOrder(orderData);
  };

  return (
    <div className="payment__container">
      <h2 className="heading-secondary">Platba</h2>
      <div className="payment__method">
        <div className="payment__form__radio-group">
          <input
            type="radio"
            className="payment__form__radio-input"
            id="bank"
            name="size"
            value={PaymentMethods.BANK_TRANSFER}
            onChange={radioButtonHandler}
          />
          <label htmlFor="bank" className="payment__form__radio-label">
            <span className="payment__form__radio-button"></span>
            Bankovním převodem
          </label>
        </div>
        <div className="payment__form__radio-group">
          <input
            type="radio"
            className="payment__form__radio-input"
            id="card"
            name="size"
            value={PaymentMethods.CREDIT_CARD}
            onChange={radioButtonHandler}
          />
          <label htmlFor="card" className="payment__form__radio-label">
            <span className="payment__form__radio-button"></span>
            Kreditní kartou
          </label>
        </div>
        <div className="payment__form__radio-group">
          <input
            type="radio"
            className="payment__form__radio-input"
            id="transfer"
            name="size"
            value={PaymentMethods.PAYPAL}
            onChange={radioButtonHandler}
          />
          <label htmlFor="transfer" className="payment__form__radio-label">
            <span className="payment__form__radio-button"></span>
            Paypal
          </label>
        </div>
      </div>
      <div className="payment__buttons">
        <Button onClick={() => setActive(1)}>Doprava</Button>
        <Button onClick={placeOrderHandler}>Objednat</Button>
      </div>
    </div>
  );
};

export default Payment;
