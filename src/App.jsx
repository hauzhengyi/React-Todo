import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import { DarkMode } from './components/DarkMode';

function App() {
  return (
    <div className="App">
      <TodoWrapper />
      <DarkMode />
      <footer className="todo-footer">
        <div>Created using React JS</div>
        <div>by Zheng Yi</div>
      </footer>
    </div>
  );
}

export default App;
