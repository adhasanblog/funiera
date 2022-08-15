import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<h1>Hello Home</h1>} />
        <Route path='product' element={<h1>Hello Product</h1>} />
        <Route path='showroom' element={<h1>Hello Showroom</h1>} />
        <Route path='categories' element={<h1>Hello Categories</h1>} />
      </Routes>
    </>
  );
}

export default App;
