import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import MyProductReducer from "../Redux/MyProductSlice";
import MyCartReducer from "../Redux/MyCartSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    version: 1,
    debug: true,

};

const rootReducer = combineReducers({
    product: MyProductReducer,
    cart: MyCartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const mystore = configureStore({
    reducer: persistedReducer,
});





