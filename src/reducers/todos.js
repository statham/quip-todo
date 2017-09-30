import { RECEIVE_TODOS, ADD_TODO } from '../actions';

const todos = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_TODOS:
      return action.todos;
    case ADD_TODO:
      return state.concat([action.todo]);
    default:
      return state;
  }
};

export default todos;
