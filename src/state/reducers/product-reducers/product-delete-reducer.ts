import produce from "immer";
import { ProductAction } from "../../actions/product-actions";
import { ProductActionTypes } from "../../action-types/product-types";
import { ProductDoc } from "../../../interfaces/models";

export interface ProductDeleteState {
  loading: boolean;
  success: boolean;
  error: string[] | null;
}

export const productDeleteInitialState: ProductDeleteState = {
  loading: false,
  success: false,
  error: null,
};

export const productDeleteReducer = produce(
  (
    state: ProductDeleteState = productDeleteInitialState,
    action: ProductAction
  ): ProductDeleteState => {
    switch (action.type) {
      case ProductActionTypes.PRODUCT_DELETE_REQUEST:
        state.loading = true;
        return state;

      case ProductActionTypes.PRODUCT_DELETE_ERROR:
        state.loading = false;
        state.success = false;
        state.error = action.payload;
        return state;

      case ProductActionTypes.PRODUCT_DELETE_SUCCESS:
        state.loading = false;
        state.success = true;
        return state;

      default:
        return state;
    }
  },
  productDeleteInitialState
);
