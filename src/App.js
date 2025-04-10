import logo from './logo.svg';
import Dropdown from "./Dropdown/dropdown"
import './App.css';
import { useState } from 'react';

function App() {
  const [selectedOptions,setSelectedOptions] = useState([])
  const handleDropdownChange = (selected) => {
    setSelectedOptions(selected)
  }
  return (
    <div className="App">
     <Dropdown  onChange={handleDropdownChange}   options={['Option 1','Option 2','Option 3','Option 4']} />
     <p>Selected Options: {selectedOptions.join(', ')}</p>
    </div>
  );
}

export default App;
