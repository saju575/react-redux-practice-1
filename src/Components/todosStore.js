import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import todosReducer from "../Services/reducers/todosReducer";

const todosStore = createStore(todosReducer, applyMiddleware(thunk));
export default todosStore;
