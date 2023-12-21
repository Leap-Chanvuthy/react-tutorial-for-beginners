import Home from './pages/Home';
import Navbar from './components/layout/Navbar';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Create from './pages/Create';


function App() {



  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

