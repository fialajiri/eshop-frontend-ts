import { mockProducts } from "../../../../mocks/mock-data/mock-products";
import {
  productDeleteReducer,
  ProductDeleteState,
} from "../product-delete-reducer";
import { ProductActionTypes } from "../../../action-types/product-types";

it("set loading to true upon receiving an action of type PRODUCT_DELETE_REQUEST", async () => {
  const previousState: ProductDeleteState = {
    loading: false,
    success: false,
    error: null,
  };
  const expectedState: ProductDeleteState = {
    loading: true,
    success: false,
    error: null,
  };

  const newState = productDeleteReducer(previousState, {
    type: ProductActionTypes.PRODUCT_DELETE_REQUEST,
  });
  expect(newState).toEqual(expectedState);
});

it("set an error upon receiving an action of type PRODUCT_DELETE_ERROR", async () => {
  const payload = ["Internal server error"];
  const previousState: ProductDeleteState = {
    loading: true,
    success: false,
    error: null,
  };

  const expectedState: ProductDeleteState = {
    loading: false,
    success: false,
    error: payload,
  };

  const newState = productDeleteReducer(previousState, {
    type: ProductActionTypes.PRODUCT_DELETE_ERROR,
    payload,
  });

  expect(newState).toEqual(expectedState);
});

it("set success to true upon receiving an action of type PRODUCT_DELETE_SUCCESS", async () => {
  const payload = mockProducts[0];
  const previousState: ProductDeleteState = {
    loading: true,
    success: false,
    error: null,
  };

  const expectedState: ProductDeleteState = {
    loading: false,
    success: true,
    error: null,
  };

  const newState = productDeleteReducer(previousState, {
    type: ProductActionTypes.PRODUCT_DELETE_SUCCESS,
  });

  expect(newState).toEqual(expectedState);
});
