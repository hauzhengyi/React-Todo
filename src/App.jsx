import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import { DarkMode } from './components/DarkMode';

function App() {
  return (
    <div className="App">
      <TodoWrapper />
      <DarkMode />
    </div>
  );
}

export default App;
