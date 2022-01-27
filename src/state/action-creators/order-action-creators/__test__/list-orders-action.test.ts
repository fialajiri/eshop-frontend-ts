import { listOrders } from "../list-orders-action";
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

it("list order success", async () => {
  const store = setupMockStore();
  const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();

  await store.dispatch(listOrders());
  expect(store.getActions()).toEqual([
    { type: OrderActionTypes.ORDER_LIST_REQUEST },
    {
      type: OrderActionTypes.ORDER_LIST_SUCCESS,
      payload: [mockOrder],
    },
  ]);

  // @ts-ignore
  await reduxTestStore.dispatch(listOrders());
  expect(reduxTestStore.getState().orderList.orders).toEqual([mockOrder]);
});

it("list order failed", async () => {
  const payload = "Request failed with status code 500";

  server.resetHandlers(
    rest.get(`${process.env.BACKEND_URL}/api/orders`, (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  const store = setupMockStore();
  const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();

  await store.dispatch(listOrders());

  expect(store.getActions()).toEqual([
    { type: OrderActionTypes.ORDER_LIST_REQUEST },
    { type: OrderActionTypes.ORDER_LIST_ERROR, payload: payload },
  ]);

  // @ts-ignore
  await reduxTestStore.dispatch(listOrders());
  expect(reduxTestStore.getState().orderList.error).toEqual(payload);
});
