import { TodoProvider } from './context/TodoContext';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import './App.css';

function App() {
  return (
    <TodoProvider>
      <TodoList />
      <TodoForm />
    </TodoProvider>
  );
}

export default App;
