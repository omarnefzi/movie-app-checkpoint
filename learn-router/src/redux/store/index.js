import { legacy_createStore as createStore } from "redux";
import { rootStore } from "./combine";


export const store =createStore(rootStore,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())