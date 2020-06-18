import  filterReducer from "./filterReducer";
import todosReducer from "./todosReducer";

const appReducer = (state, action) => {
  return {
    todos: todosReducer(state.todos, action),
    filter: filterReducer(state.filter, action)
  }
}

export default appReducer;