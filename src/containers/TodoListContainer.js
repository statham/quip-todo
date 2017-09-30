import { connect } from 'react-redux';
import { completeTodo } from '../actions';
import TodoList from '../components/TodoList';

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: todo => {
      dispatch(completeTodo(todo))
    }
  };
};

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default TodoListContainer;
