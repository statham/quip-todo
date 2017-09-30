import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import './TodoList.css';

const TodoList = ({ todos, onTodoClick }) => (
  <ul className='TodoList'>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClickHandler={() => onTodoClick(todo)} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
