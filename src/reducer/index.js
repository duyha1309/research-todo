import  filterReducer from "./filterReducer";
import todosReducer from "./todosReducer";
import { combineReducers } from "redux";

// const appReducer = (state, action) => {
//   return {
//     todos: todosReducer(state.todos, action),
//     filter: filterReducer(state.filter, action)
//   }
// }

const appReducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer
});

export default appReducer;