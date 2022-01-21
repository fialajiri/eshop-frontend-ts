import { mockProducts } from "../../../../mocks/mock-data/mock-products";
import { productUpdateReducer, productUpdateInitialState, ProductUpdateState } from "../product-update-reducer";
import { ProductActionTypes } from "../../../action-types/product-types";

it("set loading to true upon receiving an action of type PRODUCT_UPDATE_REQUEST", async () => {
  const previousState: ProductUpdateState = {
    loading: false,
    success: false,
    error: null,
    product: null,
  };
  const expectedState: ProductUpdateState = {
    loading: true,
    success: false,
    error: null,
    product: null,
  };

  const newState = productUpdateReducer(previousState, {
    type: ProductActionTypes.PRODUCT_UPDATE_REQUEST,
  });
  expect(newState).toEqual(expectedState);
});

it("set an error upon receiving an action of type PRODUCT_UPDATE_ERROR", async () => {
  const payload = ["Internal server error"];
  const previousState: ProductUpdateState = {
    loading: true,
    success: false,
    error: null,
    product: null,
  };

  const expectedState: ProductUpdateState = {
    loading: false,
    success: false,
    error: payload,
    product: null,
  };

  const newState = productUpdateReducer(previousState, {
    type: ProductActionTypes.PRODUCT_UPDATE_ERROR,
    payload,
  });

  expect(newState).toEqual(expectedState);
});

it("set product upon receiving an action of type PRODUCT_UPDATE_SUCCESS", async () => {
  const payload = mockProducts[0];
  const previousState: ProductUpdateState = {
    loading: true,
    success: false,
    error: null,
    product: null,
  };

  const expectedState: ProductUpdateState = {
    loading: false,
    success: true,
    error: null,
    product: payload,
  };

  const newState = productUpdateReducer(previousState, {
    type: ProductActionTypes.PRODUCT_UPDATE_SUCCESS,
    payload,
  });

  expect(newState).toEqual(expectedState);
});

it("set ProductUpdateState to initail state upon receiving an action of type PRODUCT_UPDATE_RESET", async () => {
  const payload = mockProducts[0];

  const previousState: ProductUpdateState = {
    loading: false,
    success: true,
    error: null,
    product: payload,
  };

  const newState = productUpdateReducer(previousState, {
    type: ProductActionTypes.PRODUCT_UPDATE_RESET,
  });

  expect(newState).toEqual(productUpdateInitialState);
});