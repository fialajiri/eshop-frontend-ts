import { useReducer } from "react";
import TabBody from "../layout/tabs/tab-body";
import TabButton from "../layout/tabs/tab-button";
import TabContainer from "../layout/tabs/tab-container";
import TabFooter from "../layout/tabs/tab-footer";
import Tabhead from "../layout/tabs/tab-head";
import UserInfo from "./user-info";
import UserOrders from "./user-orders";
import UserContact from "./user-contact";

enum SetTabState {
  SET_ACTIVE = "SET_ACTIVE",
}

interface SetActiveTabAction {
  type: SetTabState;
  index: number;
}

interface TabState {
  isActive: boolean[];
}

const tabStateReducer = (state: TabState, action: SetActiveTabAction) => {
  switch (action.type) {
    case SetTabState.SET_ACTIVE:
      const arrayLength = state.isActive.length;
      let newIsActive = new Array<boolean>(arrayLength).fill(false);
      newIsActive[action.index] = true;
      return {
        ...state,
        isActive: newIsActive,
      };

    default:
      return state;
  }
};
let initialState: TabState = { isActive: new Array<boolean>(3).fill(false) };
initialState.isActive[0] = true;

const UserProfile: React.FC = () => {


  const [tabState, dispatch] = useReducer(tabStateReducer, initialState);
  console.log(tabState.isActive[0]);

  return (
    <div className="base-container user-profile__container">
      <h2 className="heading-secondary user-profile__heading">Uživatelský profil</h2>
      <TabContainer>
        <Tabhead>
          <TabButton
            isSelected={tabState.isActive[0]}
            title="Profil"
            onClick={() => dispatch({ type: SetTabState.SET_ACTIVE, index: 0 })}
          />
           <TabButton
            isSelected={tabState.isActive[1]}
            title="Kontaktní informace"
            onClick={() => dispatch({ type: SetTabState.SET_ACTIVE, index: 1 })}
          />
          <TabButton
            isSelected={tabState.isActive[2]}
            title="Objednávky"
            onClick={() => dispatch({ type: SetTabState.SET_ACTIVE, index: 2 })}
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
