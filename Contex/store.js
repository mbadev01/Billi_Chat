import { createStore } from "redux";
import myReducer from "./Reducers";

const Store = createStore(myReducer);

export default Store;
