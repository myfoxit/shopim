import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
  productDetailsReducer,
  productListReducer,
} from './reducers/productReducers';

const reducers = combineReducers({
  productList: productListReducer,
  productDetail: productDetailsReducer,
});

const initialState = {};

const middleware = applyMiddleware(thunk);

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(middleware)
);

export default store;
