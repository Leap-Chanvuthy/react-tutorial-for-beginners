import Home from './pages/Home';
import Navbar from './components/layout/Navbar';
import { useState } from 'react';

function App() {

  const [name , setName] = useState('vuthy');
  const handleChange = () => {
    setName('tiven');
  }

  return (
    <div className="App">
      <Navbar/>
      <h4>{name}</h4> 
      <button onClick={handleChange}>change name</button> 
      <Home/>
    </div>
  );
}

export default App;

