import produce from "immer";
import { ProductAction } from "../../actions/product-actions";
import { ProductActionTypes } from "../../action-types/product-types";
import { ProductDoc } from "../../../interfaces/models";

export interface ProductCreateState {
  loading: boolean;
  success: boolean | undefined;
  error: string[] | null;
  product: ProductDoc | null;
}

export const productCreateInitialState: ProductCreateState = {
  loading: false,
  success: undefined,
  error: null,
  product: null,
};

export const productCreateReducer = produce(
  (
    state: ProductCreateState = productCreateInitialState,
    action: ProductAction
  ): ProductCreateState => {
    switch (action.type) {
      case ProductActionTypes.PRODUCT_CREATE_REQUEST:
        state.loading = true;
        return state;
      case ProductActionTypes.PRODUCT_CREATE_ERROR:
        state.loading = false;
        state.success = false;
        state.error = action.payload;
        return state;
      case ProductActionTypes.PRODUCT_CREATE_SUCCESS:
        state.loading = false;
        state.success = true;
        state.product = action.payload;
        return state;
      case ProductActionTypes.PRODUCT_CREATE_RESET:
        return productCreateInitialState;

      default:
        return state;
    }
  },
  productCreateInitialState
);
