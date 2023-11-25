import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body'
import { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [search,setSearch] = useState('false')

  return (
    <div className="App">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} search={search} setSearch={setSearch}/>
      <Body searchQuery={searchQuery} search={search} setSearch={setSearch}/>
    </div>
  );
}

export default App;
