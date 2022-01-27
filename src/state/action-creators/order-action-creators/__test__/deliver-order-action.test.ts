import { deliveredOrder } from "../deliver-order-action";
import configureStore from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";
import { rest } from "msw";
import { server } from "../../../../mocks/server";
import { OrderAction } from "../../../actions/order-actions";
import { OrderActionTypes } from "../../../action-types/order-types";
import { reduxThunkTestStore } from "../../../../test-utils/testing-library-utils";

const setupMockStore = () => {
  const initialState = {};
  type State = typeof initialState;
  const middlewares = [thunk];
  const mockStore = configureStore<State, ThunkDispatch<State, any, OrderAction>>(
    middlewares
  );

  return mockStore(initialState);
};

it("deliver order success", async () => {
  const store = setupMockStore();
  const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();

  await store.dispatch(deliveredOrder("123"));
  expect(store.getActions()).toEqual([
    { type: OrderActionTypes.ORDER_DELIVERED_REQUEST },
    {
      type: OrderActionTypes.ORDER_DELIVERED_SUCCESS,
    },
  ]);

  // @ts-ignore
  await reduxTestStore.dispatch(deliveredOrder("123"));
  expect(reduxTestStore.getState().orderDelivered.success).toEqual(true);
});

it("deliver order failed", async () => {
  const payload = "Request failed with status code 500";

  server.resetHandlers(
    rest.put(`${process.env.BACKEND_URL}/api/orders/delivered/*`, (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  const store = setupMockStore();
  const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();

  await store.dispatch(deliveredOrder("123"));

  expect(store.getActions()).toEqual([
    { type: OrderActionTypes.ORDER_DELIVERED_REQUEST },
    { type: OrderActionTypes.ORDER_DELIVERED_ERROR, payload: payload },
  ]);

  // @ts-ignore
  await reduxTestStore.dispatch(deliveredOrder("123"));
  expect(reduxTestStore.getState().orderDelivered.error).toEqual(payload);
});
