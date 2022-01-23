import { listProducts } from "../product-list-action";
import configureStore from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";
import { rest } from "msw";
import { server } from "../../../../mocks/server";
import { UserAction } from "../../../actions/user-actions";
import { mockProducts } from "../../../../mocks/mock-data/mock-products";
import { ProductActionTypes } from "../../../action-types/product-types";
import ReduxThunkTester from "redux-thunk-tester";
import reducers from "../../../reducers";
import { createStore, applyMiddleware } from "redux";

const setup = () => {
  const initialState = {};
  type State = typeof initialState;
  const middlewares = [thunk];
  const mockStore = configureStore<
    State,
    ThunkDispatch<State, any, UserAction>
  >(middlewares);
  const store = mockStore(initialState);

  return store;
};

const set = () => {
  const reduxThunkTester = new ReduxThunkTester();
  const store = createStore(
    reducers,
    applyMiddleware(reduxThunkTester.createReduxThunkHistoryMiddleware(), thunk)
  );

  return { reduxThunkTester, store };
};

describe("user actions creators", () => {
  it("load current user success", async () => {
    const store = setup();
    const {
      store: mystore,
      reduxThunkTester: {
        getActionHistoryAsync,
        getActionHistoryStringifyAsync,
      },
    } = set();

    // @ts-ignore
    // await mystore.dispatch(listProducts())
    // console.log(mystore.getState().productList)
    // expect(mystore.getState().productList.products).toEqual(mockProducts)

    await store.dispatch(listProducts());

    expect(store.getActions()).toEqual([
      { type: ProductActionTypes.PRODUCT_LIST_REQUEST },
      {
        type: ProductActionTypes.PRODUCT_LIST_SUCCESS,
        payload: {
          products: mockProducts,
          category: undefined,
          pages: undefined,
          page: undefined,
        },
      },
    ]);
  });

  it("load current user failed", async () => {
    const store = setup();
    const payload = "Request failed with status code 500";

    // override default msw response for options endpoint with error response
    server.resetHandlers(
      rest.get(`${process.env.BACKEND_URL}/api/products`, (req, res, ctx) =>
        res(ctx.status(500))
      )
    );

    await store.dispatch(listProducts());

    expect(store.getActions()).toEqual([
      { type: ProductActionTypes.PRODUCT_LIST_REQUEST },
      { type: ProductActionTypes.PRODUCT_LIST_ERROR, payload: payload },
    ]);
  });
});
