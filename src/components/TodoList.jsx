import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  console.log(todos);

  return (
    <ul>
      {todos.map((todo, idx) => (
        <li key={idx}>
          <span>{todo.text}</span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
