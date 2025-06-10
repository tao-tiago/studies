import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import reducer from "./modules/reducers"
import sagas from './modules/sagas'

import { ICartState } from './modules/cart/types'

export interface IState {
  cart: ICartState
}

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer,
  middleware
});

sagaMiddleware.run(sagas)


export default store;