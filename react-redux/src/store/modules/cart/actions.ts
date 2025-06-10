import { IProduct } from './types';

export const addProductToCartRequest = (product: IProduct) => (
  {
    type: "ADD_PRODUCT_TO_CART_REQUEST",
    payload: {
      product
    }
  }
)

export const addProductToCartSuccess = (product: IProduct) => (
  {
    type: "ADD_PRODUCT_TO_CART_SUCCESS",
    payload: {
      product
    }
  }
)

export const addProductToCartFailure = (productId: number) => (
  {
    type: "ADD_PRODUCT_TO_CART_FAILURE",
    payload: {
      productId
    }
  }
)