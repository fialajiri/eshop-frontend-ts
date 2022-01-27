import produce from "immer";
import { ProductAction } from "../../actions/product-actions";
import { ProductActionTypes } from "../../action-types/product-types";
import { ProductDoc } from "../../../interfaces/models";


export interface ProductUpdateState {
  loading: boolean;
  success: boolean | undefined;
  error: string[] | null;
  product: ProductDoc | null;
}

export const productUpdateInitialState: ProductUpdateState = {
  loading: false,
  success: undefined,
  error: null,
  product: null,
};

export const productUpdateReducer = produce(
  (
    state: ProductUpdateState = productUpdateInitialState,
    action: ProductAction
  ): ProductUpdateState => {
    switch (action.type) {
      case ProductActionTypes.PRODUCT_UPDATE_REQUEST:
        state.loading = true;
        return state;
      case ProductActionTypes.PRODUCT_UPDATE_ERROR:
        state.loading = false;
        state.success = false;
        state.error = action.payload;
        return state;
      case ProductActionTypes.PRODUCT_UPDATE_SUCCESS:
        state.loading = false;
        state.success = true;
        state.product = action.payload;
        return state;
      case ProductActionTypes.PRODUCT_UPDATE_RESET:
        return productUpdateInitialState;

      default:
        return state;
    }
  },
  productUpdateInitialState
);
