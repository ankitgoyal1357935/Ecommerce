import {createStore,applyMiddleware} from "redux";
import rootReducer from "./Reducer/rootReducer.js";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

let initialState = {};
const middleware = [thunk]

const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;