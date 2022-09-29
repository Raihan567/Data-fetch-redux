import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import todosReducer from "./Services/Reducer/todosReducer";

// create a store
const store = createStore(todosReducer, applyMiddleware(thunk));

export default store;
