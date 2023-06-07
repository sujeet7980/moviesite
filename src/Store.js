import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
  } from "redux";
  import thunk from "redux-thunk";
  import { composeWithDevTools } from "redux-devtools-extension";
  import {
    showListReducer, showDetailsReducer
  } from "./Reducers/ShowReducer";
  
  const reducer = combineReducers({
    showList: showListReducer,
    showDetails: showDetailsReducer,
  });
  const initialState = {
  };
  const middleware = [thunk];
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  
  export default store;
  