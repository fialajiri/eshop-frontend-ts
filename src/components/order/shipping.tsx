import { Dispatch, SetStateAction } from "react";
import AddressForm from "./address-form";
import { AddressDoc } from "../../interfaces/models";
import Button from "../ui-elements/button";

export interface ShippingProps {
  address: AddressDoc;
  setActive: (index: number) => void;
  setAddress: Dispatch<SetStateAction<AddressDoc>>;
}

const Shipping: React.FC<ShippingProps> = ({ address, setActive, setAddress }) => {
  return (
    <div className="shipping__container">
      <h2 className="heading-secondary">Kontaktní informace</h2>
      <AddressForm setAddress={setAddress} address={address} />

      <div className="shipping__buttons">
        <Button onClick={() => setActive(0)}>Košík</Button>
        <Button onClick={() => setActive(2)}>Způsob platby</Button>
      </div>
    </div>
  );
};

export default Shipping;
