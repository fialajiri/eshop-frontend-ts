import { getOrderDetails } from "../get-order-details-action";
import configureStore from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";
import { rest } from "msw";
import { server } from "../../../../mocks/server";
import { mockOrder } from "../../../../mocks/mock-data/mock-orders";
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

it("list order details success", async () => {
  const store = setupMockStore();
  const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();

  await store.dispatch(getOrderDetails("123"));
  expect(store.getActions()).toEqual([
    { type: OrderActionTypes.ORDER_DETAILS_REQUEST },
    {
      type: OrderActionTypes.ORDER_DETAILS_SUCCESS,
      payload: mockOrder,
    },
  ]);

  // @ts-ignore
  await reduxTestStore.dispatch(getOrderDetails("123"));
  expect(reduxTestStore.getState().orderDetails.orderDetail).toEqual(mockOrder);
});

it("list order details failed", async () => {
  const payload = "Request failed with status code 500";

  server.resetHandlers(
    rest.get(`${process.env.BACKEND_URL}/api/orders/123`, (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  const store = setupMockStore();
  const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();

  await store.dispatch(getOrderDetails("123"));

  expect(store.getActions()).toEqual([
    { type: OrderActionTypes.ORDER_DETAILS_REQUEST },
    { type: OrderActionTypes.ORDER_DETAILS_ERROR, payload: payload },
  ]);

  // @ts-ignore
  await reduxTestStore.dispatch(getOrderDetails("123"));
  expect(reduxTestStore.getState().orderDetails.error).toEqual(payload);
});
