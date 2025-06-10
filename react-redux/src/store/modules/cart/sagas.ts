import { addProductToCartRequest, addProductToCartSuccess, addProductToCartFailure } from './actions';
import { all, takeLatest, select, call, put } from "redux-saga/effects"
import { AxiosResponse } from "axios";
import api from "../../../services/api";
import { IState } from './../../index';

type CheckStockProductRequest = ReturnType<typeof addProductToCartRequest>

interface IAvaliableStockResponse {
  id: number;
  quantity: number;
}

function* checkStockProduct({ payload }: CheckStockProductRequest) {
  const { product } = payload

  const currentQuantity: number = yield select((state: IState) => (
    state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0
  ));

  const avaliableStockResponse: AxiosResponse<IAvaliableStockResponse> =
    yield call(api.get, `stock/${product.id}`);

  if (avaliableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product))
  } else {
    yield put(addProductToCartFailure(product.id))
  }

}

export default all([
  takeLatest("ADD_PRODUCT_TO_CART_REQUEST", checkStockProduct)
])