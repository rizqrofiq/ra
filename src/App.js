import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import User from './Kasir/User';
import Menu from './Kasir/Menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/user" element={<User/>}></Route>
      <Route path="/menu" element={<Menu/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
