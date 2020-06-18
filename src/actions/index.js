import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO, FETCH_TODO, FILTER_TODO } from "../constants/actionType";
import fetchApi from "../api";

export const fetchAPITodosAction = () => {
  return async (dispatch) => {
    const todos = await fetchApi();
    dispatch({type: FETCH_TODO, payload: todos});
  }
}
export const addTodoAction = title => ({type: ADD_TODO, payload: title});
export const toggleTodoAction = id => ({type: TOGGLE_TODO, payload: id });
export const removeTodoAction = id => ({type: REMOVE_TODO, payload: id});
export const filterTodoAction = filterArg => ({type: FILTER_TODO, payload: filterArg});