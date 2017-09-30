import { RECIEVE_TODOS } from '../actions';

const todos = (state = [], action) => {
  switch(action.type) {
    case RECIEVE_TODOS:
      return action.todos;
    default:
      return state;
  }
};

export default todos;
