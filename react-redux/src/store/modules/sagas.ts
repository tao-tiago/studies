import { all } from "redux-saga/effects"

import cart from "./cart/sagas"

export default function* sagas(): Generator<any> {
  return yield all([cart])
}