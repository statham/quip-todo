import React from 'react';
import PropTypes from 'prop-types';
import './Todo.css';

const Todo = ({ text, completed, onClickHandler }) => (
  <div className='Todo'>
    <input className='checkbox'
      type='checkbox'
      checked={completed}
      onClick={onClickHandler}
    />
    <p
      style={{
        display: 'inline-block',
        margin: '0',
        textDecoration: completed ? 'line-through' : 'none',
        color: completed ? '#E1E1E1' : 'black'
      }}
    >
      {text}
    </p>
  </div>
);

Todo.propTypes = {
  text: PropTypes.string.isRequired
};

export default Todo;
