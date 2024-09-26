import {createStore, applyMiddleware, combineReducers} from 'redux';
import {thunk} from 'redux-thunk';
import {productReducer, authReducer} from '../redux/reducers/reducers';

const rootReducer = combineReducers({
  products: productReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
