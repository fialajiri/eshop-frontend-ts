import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { middlewares, store } from "../state";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import ReduxThunkTester from "redux-thunk-tester";

import reducers from "../state/reducers";

const allTheProviders: FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

const renderWithStore = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => {
  render(ui, { wrapper: allTheProviders, ...options });
};

export * from "@testing-library/react";
export { renderWithStore as render };

export const storeFactory = (initialState: any) => {
  return createStore(reducers, initialState, applyMiddleware(...middlewares));
};

export const reduxThunkTestStore = () => {
  const reduxThunkTester = new ReduxThunkTester();
  const reduxTestStore = createStore(
    reducers,
    applyMiddleware(reduxThunkTester.createReduxThunkHistoryMiddleware(), thunk)
  );

  return { reduxThunkTester, reduxTestStore };
};
