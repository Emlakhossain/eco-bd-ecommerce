import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import Banner from './Pages/Banner/Banner';
import Catagory from './Pages/Catagory/catagory';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <Catagory></Catagory>


    </div>
  );
}

export default App;
