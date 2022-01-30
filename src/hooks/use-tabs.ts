import { useCallback, useReducer } from "react";

enum SetTabState {
  SET_ACTIVE = "SET_ACTIVE",
}

interface SetActiveTabAction {
  type: SetTabState;
  index: number;
}

export interface TabState {
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

export const useTabs = (initialState: TabState): [TabState, (index: number) => void] => {
  const [tabState, dispatch] = useReducer(tabStateReducer, initialState);

  const setActive = useCallback((index: number) => {
    dispatch({ type: SetTabState.SET_ACTIVE, index });
  }, []);

  return [tabState, setActive];
};
