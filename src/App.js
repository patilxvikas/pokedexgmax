import Layout from './components/Layout';
import {Data} from './components/Context';
import { useState } from 'react';
import './App.css';
function App() {
  const [filteredData,setFilteredData]=useState([]);

  return (
    <div className="App">
      <Data.Provider value={{filteredData,setFilteredData}}>
        <Layout/>                              
      </Data.Provider>
    </div>
  );
}

export default App;
