import {
  categoryDeleteReducer,
  CategoryDeleteState,
} from "../category-delete-reducer";
import { CategoryActionTypes } from "../../../action-types/category-types";

it("set loading to true upon receiving an action of type CATEGORY_DELETE_REQUEST", async () => {
  const previousState: CategoryDeleteState = {
    loading: false,
    error: null,
    success: false,
  };
  const expectedState: CategoryDeleteState = {
    loading: true,
    error: null,
    success: false,
  };

  const newState = categoryDeleteReducer(previousState, {
    type: CategoryActionTypes.CATEGORY_DELETE_REQUEST,
  });
  expect(newState).toEqual(expectedState);
});

it("set an error upon receiving an action of type CATEGORY_DELETE_ERROR", async () => {
  const payload = ["Internal server error"];
  const previousState: CategoryDeleteState = {
    loading: true,
    error: null,
    success: false,
  };
  const expectedState: CategoryDeleteState = {
    loading: false,
    error: payload,
    success: false,
  };

  const newState = categoryDeleteReducer(previousState, {
    type: CategoryActionTypes.CATEGORY_DELETE_ERROR,
    payload: payload,
  });

  expect(newState).toEqual(expectedState);
});
it("set a category of CATEGORYs upon receiving ac action of type CATEGORY_DELETE_REQUEST", async () => {
  
  const previousState: CategoryDeleteState = {
    loading: true,
    error: null,
    success: false,
  };
  const expectedState: CategoryDeleteState = {
    loading: false,
    error: null,
    success: true,
  };

  const newState = categoryDeleteReducer(previousState, {
    type: CategoryActionTypes.CATEGORY_DELETE_SUCCESS,
    
  });
});
