import './App.css';
import HumanAge from './components/HumanAge';
import DogAge from './components/DogAge';

function App() {
  return (
    <div className="App">
      <h2>Dog Year Calculator</h2>
      <DogAge />
      <HumanAge />
    </div>
  );
}

export default App;
