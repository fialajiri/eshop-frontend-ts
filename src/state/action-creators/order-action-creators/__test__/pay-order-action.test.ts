import { payOrder } from "../pay-order-action";
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

it("pay order success", async () => {
  const store = setupMockStore();
  const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();

  await store.dispatch(payOrder("123"));
  expect(store.getActions()).toEqual([
    { type: OrderActionTypes.ORDER_PAID_REQUEST },
    {
      type: OrderActionTypes.ORDER_PAID_SUCCESS,
    },
  ]);

  // @ts-ignore
  await reduxTestStore.dispatch(payOrder("123"));
  expect(reduxTestStore.getState().orderPaid.success).toEqual(true);
});

it("pay order failed", async () => {
  const payload = "Request failed with status code 500";

  server.resetHandlers(
    rest.put(`${process.env.BACKEND_URL}/api/orders/pay/*`, (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  const store = setupMockStore();
  const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();

  await store.dispatch(payOrder("123"));

  expect(store.getActions()).toEqual([
    { type: OrderActionTypes.ORDER_PAID_REQUEST },
    { type: OrderActionTypes.ORDER_PAID_ERROR, payload: payload },
  ]);

  // @ts-ignore
  await reduxTestStore.dispatch(payOrder("123"));
  expect(reduxTestStore.getState().orderPaid.error).toEqual(payload);
});