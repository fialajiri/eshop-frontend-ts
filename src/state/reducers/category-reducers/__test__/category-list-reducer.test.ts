import { mockCategories } from "../../../../mocks/mock-data/mock-categories";
import { CategoryActionTypes } from "../../../action-types/category-types";
import { categoryListReducer, CategoryListState } from "../category-list-reducer";

it("set loading to true upon receiving an action of type CATEGORY_LIST_REQUEST", async () => {
  const previousState: CategoryListState = {
    loading: false,
    error: null,
    categories: null,
  };
  const expectedState: CategoryListState = {
    loading: true,
    error: null,
    categories: null,
  };

  const newState = categoryListReducer(previousState, {
    type: CategoryActionTypes.CATEGORY_LIST_REQUEST,
  });
  expect(newState).toEqual(expectedState);
});

it("set an error upon receiving an action of type CATEGORY_LIST_ERROR", async () => {
  const payload = ["Internal server error"];
  const previousState: CategoryListState = {
    loading: true,
    error: null,
    categories: null,
  };
  const expectedState: CategoryListState = {
    loading: false,
    error: payload,
    categories: null,
  };

  const newState = categoryListReducer(previousState, {
    type: CategoryActionTypes.CATEGORY_LIST_ERROR,
    payload: payload,
  });
  
  expect(newState).toEqual(expectedState);
});
it("set list of CATEGORYs upon receiving ac action of type CATEGORY_LIST_REQUEST", async () => {
  const payload = mockCategories;
  const previousState: CategoryListState = {
    loading: true,
    error: null,
    categories: null,
  };
  const expectedState: CategoryListState = {
    loading: false,
    error: null,
    categories: mockCategories,
  };

  const newState = categoryListReducer(previousState, {
    type: CategoryActionTypes.CATEGORY_LIST_SUCCESS,
    payload: mockCategories,
  });
});
