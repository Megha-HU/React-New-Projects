import './App.css';
import { useState } from 'react';
import Dropdown from "./Dropdown/dropdown"
import RenderTabs from "./Tabs/RenderTabs"

function App() {
  const [selectedOptions,setSelectedOptions] = useState([])
  const handleDropdownChange = (selected) => {
    setSelectedOptions(selected)
  }
  return (
    // <div className="App">
    //  <Dropdown  onChange={handleDropdownChange}   options={['Option 1','Option 2','Option 3','Option 4']} />
    //  <p>Selected Options: {selectedOptions.join(', ')}</p>
    // </div>
    <div>
      <RenderTabs/>
    </div>
  );
}

export default App;
