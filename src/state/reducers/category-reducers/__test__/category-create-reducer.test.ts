import { mockCategories } from "../../../../mocks/mock-data/mock-categories";
import { categoryCreateInitialState, categoryCreateReducer, CategoryCreateState } from "../category-create-reducer";
import { CategoryActionTypes } from "../../../action-types/category-types";


it("set loading to true upon receiving an action of type CATEGORY_CREATE_REQUEST", async () => {
    const previousState: CategoryCreateState = {
      loading: false,
      error: null,
      success:false,
      category: null,
    };
    const expectedState: CategoryCreateState = {
      loading: true,
      error: null,
      success:false,
      category: null,
    };
  
    const newState = categoryCreateReducer(previousState, {
      type: CategoryActionTypes.CATEGORY_CREATE_REQUEST,
    });
    expect(newState).toEqual(expectedState);
  });
  
  it("set an error upon receiving an action of type CATEGORY_CREATE_ERROR", async () => {
    const payload = ["Internal server error"];
    const previousState: CategoryCreateState = {
      loading: true,
      error: null,
      success:false,
      category: null,
    };
    const expectedState: CategoryCreateState = {
      loading: false,
      error: payload,
      success:false,
      category: null,
    };
  
    const newState = categoryCreateReducer(previousState, {
      type: CategoryActionTypes.CATEGORY_CREATE_ERROR,
      payload: payload,
    });
    
    expect(newState).toEqual(expectedState);
  });
  it("set a category of CATEGORYs upon receiving ac action of type CATEGORY_CREATE_REQUEST", async () => {
    const payload = mockCategories;
    const previousState: CategoryCreateState = {
      loading: true,
      error: null,
      success:false,
      category: null,
    };
    const expectedState: CategoryCreateState = {
      loading: false,
      error: null,
      success:true,
      category: mockCategories[0],
    };
  
    const newState = categoryCreateReducer(previousState, {
      type: CategoryActionTypes.CATEGORY_CREATE_SUCCESS,
      payload: mockCategories[0],
    });
  });

  it("set ProductCreateState to initail state upon receiving an action of type PRODUCT_CREATE_RESET", async () => {
    const payload = mockCategories[0];
  
    const previousState: CategoryCreateState = {
      loading: false,
      success: true,
      error: null,
      category: payload,
    };
  
    const newState = categoryCreateReducer(previousState, {
      type: CategoryActionTypes.CATEGORY_CREATE_RESET,
    });
  
    expect(newState).toEqual(categoryCreateInitialState);
  });