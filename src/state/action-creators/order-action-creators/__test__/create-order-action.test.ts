import { createOrder, CreateOrderData } from "../create-order-action";
import configureStore from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";
import { rest } from "msw";
import { server } from "../../../../mocks/server";
import { mockOrder, mockAddress } from "../../../../mocks/mock-data/mock-orders";
import { OrderAction } from "../../../actions/order-actions";
import { OrderActionTypes } from "../../../action-types/order-types";
import { reduxThunkTestStore } from "../../../../test-utils/testing-library-utils";
import { PaymentMethods } from "../../../../interfaces/payment-methods-enum";

const setupMockStore = () => {
  const initialState = {};
  type State = typeof initialState;
  const middlewares = [thunk];
  const mockStore = configureStore<State, ThunkDispatch<State, any, OrderAction>>(
    middlewares
  );

  return mockStore(initialState);
};

const orderData: CreateOrderData = {
  cartId: "123",
  paymentMethod: PaymentMethods.CREDIT_CARD,
  shippingPrice: 1000,
  address: mockAddress,
};

it("create order success", async () => {
    const store = setupMockStore();
    const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();
  
    await store.dispatch(createOrder(orderData));
    expect(store.getActions()).toEqual([
      { type: OrderActionTypes.ORDER_CREATE_REQUEST },
      {
        type: OrderActionTypes.ORDER_CREATE_SUCCESS,
        payload: mockOrder,
      },
    ]);
  
    // @ts-ignore
    await reduxTestStore.dispatch(createOrder(orderData));
    expect(reduxTestStore.getState().orderCreate.order).toEqual(
        mockOrder
    );
  });
  
  it("create order failed", async () => {
    const payload = "Request failed with status code 500";
  
    server.resetHandlers(
      rest.post(`${process.env.BACKEND_URL}/api/orders`, (req, res, ctx) =>
        res(ctx.status(500))
      )
    );
  
    const store = setupMockStore();
    const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();
  
    await store.dispatch(createOrder(orderData));
  
    expect(store.getActions()).toEqual([
      { type: OrderActionTypes.ORDER_CREATE_REQUEST },
      { type: OrderActionTypes.ORDER_CREATE_ERROR, payload: payload },
    ]);
  
    // @ts-ignore
    await reduxTestStore.dispatch(createOrder(orderData));  
    expect(reduxTestStore.getState().orderCreate.error).toEqual(payload);
  });
