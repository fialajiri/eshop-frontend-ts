import { mockProducts } from "../../../../mocks/mock-data/mock-products";
import {
  productCreateReducer,
  productCreateInitialState,
  ProductCreateState,
} from "../product-create-reducer";
import { ProductActionTypes } from "../../../action-types/product-types";

it("set loading to true upon receiving an action of type PRODUCT_CREATE_REQUEST", async () => {
  const previousState: ProductCreateState = {
    loading: false,
    success: false,
    error: null,
    product: null,
  };
  const expectedState: ProductCreateState = {
    loading: true,
    success: false,
    error: null,
    product: null,
  };

  const newState = productCreateReducer(previousState, {
    type: ProductActionTypes.PRODUCT_CREATE_REQUEST,
  });
  expect(newState).toEqual(expectedState);
});

it("set an error upon receiving an action of type PRODUCT_CREATE_ERROR", async () => {
  const payload = ["Internal server error"];
  const previousState: ProductCreateState = {
    loading: true,
    success: false,
    error: null,
    product: null,
  };

  const expectedState: ProductCreateState = {
    loading: false,
    success: false,
    error: payload,
    product: null,
  };

  const newState = productCreateReducer(previousState, {
    type: ProductActionTypes.PRODUCT_CREATE_ERROR,
    payload,
  });

  expect(newState).toEqual(expectedState);
});

it("set product upon receiving an action of type PRODUCT_CREATE_SUCCESS", async () => {
  const payload = mockProducts[0];
  const previousState: ProductCreateState = {
    loading: true,
    success: false,
    error: null,
    product: null,
  };

  const expectedState: ProductCreateState = {
    loading: false,
    success: true,
    error: null,
    product: payload,
  };

  const newState = productCreateReducer(previousState, {
    type: ProductActionTypes.PRODUCT_CREATE_SUCCESS,
    payload,
  });

  expect(newState).toEqual(expectedState);
});

it("set ProductCreateState to initail state upon receiving an action of type PRODUCT_CREATE_RESET", async () => {
  const payload = mockProducts[0];

  const previousState: ProductCreateState = {
    loading: false,
    success: true,
    error: null,
    product: payload,
  };

  const newState = productCreateReducer(previousState, {
    type: ProductActionTypes.PRODUCT_CREATE_RESET,
  });

  expect(newState).toEqual(productCreateInitialState);
});
