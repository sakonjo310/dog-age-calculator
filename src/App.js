import './App.css';
import HumanAge from './components/HumanAge';
import DogAge from './components/DogAge';
import PetsIcon from '@mui/icons-material/Pets';

function App() {
  return (
    <div className="App">
      <h2>Dog Year Calculator<PetsIcon /></h2>
      <DogAge />
      <HumanAge />
    </div>
  );
}

export default App;
