import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import { DarkMode } from './DarkMode';

function App() {
  return (
    <div className="App">
      <TodoWrapper />
      <DarkMode />
    </div>
  );
}

export default App;
