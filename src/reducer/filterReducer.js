const { FILTER_TODO } = require("../constants/actionType");

const filterReducer = (state = 'all', action) => {
  switch(action.type) {
    case FILTER_TODO:
      return action.payload;
    default:
      return state;
  }
}

export default filterReducer;