import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ text, completed, onClickHandler }) => (
  <li>
    <input
      type="checkbox"
      checked={completed}
      onClick={onClickHandler}
    />
    {text}
  </li>
);

Todo.propTypes = {
  text: PropTypes.string.isRequired
};

export default Todo;
