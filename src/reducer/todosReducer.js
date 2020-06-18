import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, FETCH_TODO } from "../constants/actionType";
import uuid from 'react-uuid';

const todosReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_TODO:
      return action.payload;
    case ADD_TODO:
      const newTodo = {id: uuid(), title: action.payload, complete: false};
      return [newTodo, ...state];
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {...todo, complete: !todo.complete}
        }
        return todo;
      })
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

export default todosReducer;