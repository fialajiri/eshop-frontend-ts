import { useEffect, useState } from "react";
import CartSummary from "./cart-summary";
import Shipping from "./shipping";
import Payment from "./payment";
import { AddressDoc } from "../../interfaces/models";
import AddressForm, { initialAddress } from "./address-form";
import TabBody from "../layout/tabs/tab-body";
import TabContainer from "../layout/tabs/tab-container";
import TabHead from "../layout/tabs/tab-head";
import TabFooter from "../layout/tabs/tab-footer";
import TabButton from "../layout/tabs/tab-button";
import { useTabs, TabState } from "../../hooks/use-tabs";
import { useActions } from "../../hooks/use-actions";

let initialState: TabState = { isActive: new Array<boolean>(3).fill(false) };
initialState.isActive[0] = true;

const OrderPage: React.FC = () => {
  const [address, setAddress] = useState<AddressDoc>(initialAddress);
  const [shippingPrice, setShippingPrice] = useState<number>(0);
  const [tabState, setActive] = useTabs(initialState);

  const { toggleCartVisibility } = useActions();

  useEffect(() => {
    toggleCartVisibility(false);
  }, []);

  return (
    <TabContainer>
      <TabHead>
        <TabButton
          title="Košík"
          isSelected={tabState.isActive[0]}
          onClick={() => setActive(0)}
        />
        <TabButton
          title="Doprava"
          isSelected={tabState.isActive[1]}
          onClick={() => setActive(1)}
        />
        <TabButton
          title="Platba"
          isSelected={tabState.isActive[2]}
          onClick={() => setActive(2)}
        />
      </TabHead>
      <TabBody>
        {tabState.isActive[0] && <CartSummary setActive={setActive} />}

        {tabState.isActive[1] && (
          <Shipping address={address} setAddress={setAddress} setActive={setActive} />
        )}

        {tabState.isActive[2] && (
          <Payment
            setActive={setActive}
            shippingPrice={shippingPrice}
            address={address}
          />
        )}
      </TabBody>
    </TabContainer>
  );
};

export default OrderPage;
