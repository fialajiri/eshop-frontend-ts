import { mockProducts } from "../../../../mocks/mock-data/mock-products";
import { ProductActionTypes } from "../../../action-types/product-types";
import { productListReducer, ProductListState } from "../product-list-reducer";

it("set loading to true upon receiving an action of type PRODUCT_LIST_REQUEST", async () => {
  const previousState: ProductListState = {
    loading: false,
    error: null,
    products: null,
    page: 0,
    pages: 0,
    category: undefined
  };
  const expectedState: ProductListState = {
    loading: true,
    error: null,
    products: null,
    page: 0,
    pages: 0,
    category: undefined
  };

  const newState = productListReducer(previousState, {
    type: ProductActionTypes.PRODUCT_LIST_REQUEST,
  });
  expect(newState).toEqual(expectedState);
});

it("set an error upon receiving an action of type PRODUCT_LIST_ERROR", async () => {
  const payload = ["Internal server error"];
  const previousState: ProductListState = {
    loading: true,
    error: null,
    products: null,
    page: 0,
    pages: 0,
    category: undefined
  };
  const expectedState: ProductListState = {
    loading: false,
    error: payload,
    products: null,
    page: 0,
    pages: 0,
    category: undefined
  };

  const newState = productListReducer(previousState, {
    type: ProductActionTypes.PRODUCT_LIST_ERROR,
    payload: payload,
  });
  
  expect(newState).toEqual(expectedState);
});
it("set list of products upon receiving ac action of type PRODUCT_LIST_REQUEST", async () => {
  const payload = mockProducts;
  const previousState: ProductListState = {
    loading: true,
    error: null,
    products: null,
    page: 0,
    pages: 0,
    category: undefined
  };
  const expectedState: ProductListState = {
    loading: false,
    error: null,
    products: mockProducts,
    page: 1,
    pages: 1,
    category: undefined
  };

  const newState = productListReducer(previousState, {
    type: ProductActionTypes.PRODUCT_LIST_SUCCESS,
    payload: {
      products: mockProducts,
      page: 1,
      pages: 1,
      category: undefined
    } 
  });
});
