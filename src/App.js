import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/ui/Navbar';
import { Home } from './components/pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {ShowDetails} from './components/pages/ShowDetails';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/show/:id" element={<ShowDetails/>} />
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
