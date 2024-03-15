import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import reduxThunk from "redux-thunk";
import testStore from "./test/reducer";

// 组合各个模块的reducer
const reducers = combineReducers({
  testStore,
});

// 开启 redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 把仓库数据，浏览器redux-dev-tools，还有reduxThunk插件关联在store中
const store = legacy_createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk)),
);
export default store;
