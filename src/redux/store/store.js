import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import cartReducer from "../slices/cartSlice";
const reducers = combineReducers({
  cart: cartReducer,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const persistedReducers = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducers,
});

export const persistor = persistStore(store);
