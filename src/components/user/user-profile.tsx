import TabBody from "../layout/tabs/tab-body";
import TabButton from "../layout/tabs/tab-button";
import TabContainer from "../layout/tabs/tab-container";
import TabFooter from "../layout/tabs/tab-footer";
import Tabhead from "../layout/tabs/tab-head";
import UserInfo from "./user-info";
import UserOrders from "./user-orders";
import UserContact from "./user-contact";
import { useTabs, TabState } from "../../hooks/use-tabs";

let initialState: TabState = { isActive: new Array<boolean>(3).fill(false) };
initialState.isActive[0] = true;

const UserProfile: React.FC = () => {
  const [tabState, setActive] = useTabs(initialState);

  return (
    <div className="base-container user-profile__container">
      <h2 className="heading-secondary user-profile__heading">Uživatelský profil</h2>
      <TabContainer>
        <Tabhead>
          <TabButton
            isSelected={tabState.isActive[0]}
            title="Profil"
            onClick={() => setActive(0)}
          />
          <TabButton
            isSelected={tabState.isActive[1]}
            title="Kontaktní informace"
            onClick={() => setActive(1)}
          />
          <TabButton
            isSelected={tabState.isActive[2]}
            title="Objednávky"
            onClick={() => setActive(2)}
          />
        </Tabhead>

        <TabBody>
          {tabState.isActive[0] && <UserInfo />}

          {tabState.isActive[1] && <UserContact />}

          {tabState.isActive[2] && <UserOrders />}
        </TabBody>

        <TabFooter></TabFooter>
      </TabContainer>
    </div>
  );
};

export default UserProfile;
