import { combineReducers } from "redux";
import  moviesReducer  from "../reducers/moviesReducer";
import { productReducer } from "../reducers/productReducer";
export const rootStore= combineReducers({
productReducer,
moviesReducer
})