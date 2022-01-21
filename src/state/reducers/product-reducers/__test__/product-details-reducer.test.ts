import { mockProducts } from "../../../../mocks/mock-data/mock-products";
import {
  productDetailsReducer,
  ProductDetailsState,
} from "../product-details-reducer";
import { ProductActionTypes } from "../../../action-types/product-types";

it("set loading to true upon receiving an action of type PRODUCT_DETAILS_REQUEST", async () => {
  const previousState: ProductDetailsState = {
    loading: false,
    error: null,
    product: null,
  };
  const expectedState: ProductDetailsState = {
    loading: true,
    error: null,
    product: null,
  };

  const newState = productDetailsReducer(previousState, {
    type: ProductActionTypes.PRODUCT_DETAILS_REQUEST,
  });
  expect(newState).toEqual(expectedState);
});

it("set an erro upon receiving an action of type PRODUCT_DETAILS_ERROR", async () => {
  const payload = ["Internal server error"];
  const previousState: ProductDetailsState = {
    loading: true,
    error: null,
    product: null,
  };

  const expectedState: ProductDetailsState = {
    loading: false,
    error: payload,
    product: null,
  };

  const newState = productDetailsReducer(previousState, {
    type: ProductActionTypes.PRODUCT_DETAILS_ERROR,
    payload
  });

  

  expect(newState).toEqual(expectedState);
});

it("set product upon receiving an action of type PRODUCT_DETAILS_SUCCESS", async () => {
  const payload = mockProducts[0];
  const previousState: ProductDetailsState = {
    loading: true,
    error: null,
    product: null,
  };

  const expectedState: ProductDetailsState = {
    loading: false,
    error: null,
    product: payload,
  };

  const newState = productDetailsReducer(previousState, {
    type: ProductActionTypes.PRODUCT_DETAILS_SUCCESS,
    payload,
  });

  expect(newState).toEqual(expectedState);
});
