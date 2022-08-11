import { legacy_createStore as createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { devToolsEnhancer } from "redux-devtools-extension";
import RootReducer from "./rootReducer";
const store = createStore(RootReducer, devToolsEnhancer());

export default store;
