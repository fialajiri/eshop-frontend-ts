import { ProductActionTypes } from "../../action-types/product-types";
import { ProductAction } from "../../actions/product-actions";
import axios from "axios";
import { Dispatch } from "react";
import { ProductDoc } from "../../../interfaces/models";

export interface CreateProductData {
  name: string;
  images: File[];
  categories: string[];
  description: string;
  price: number;
  countInStock: number;
}

export const createProduct = (inputs: CreateProductData) => {
  return async (dispatch: Dispatch<ProductAction>) => {
    dispatch({ type: ProductActionTypes.PRODUCT_CREATE_REQUEST });

    try {
      let images: string[] = [];

      for (const image of inputs.images) {
        const {
          data: { key, url },
        }: { data: { key: string; url: string } } = await axios.post(
          `${process.env.BACKEND_URL}/api/upload/image`,
          {
            name: inputs.name,
          }
        );

        await axios.put(url, image, {
          headers: {
            "Content-Type": image.type,
          },
        });

        images.push(key);
      }

      console.log({...inputs, images})

      const { data: product }: { data: ProductDoc } = await axios.post(
        `${process.env.BACKEND_URL}/api/products`,
        { ...inputs, images}
      );
      dispatch({
        type: ProductActionTypes.PRODUCT_CREATE_SUCCESS,
        payload: product,
      });
    } catch (err: any) {
      dispatch({
        type: ProductActionTypes.PRODUCT_CREATE_ERROR,
        payload: err.message,
      });
    }
  };
};
