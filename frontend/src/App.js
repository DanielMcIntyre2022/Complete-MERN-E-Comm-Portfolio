import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';

function App() {

  return (
    <>
    <Router>
      <Header />
      <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/login' element={<Login/>}/>
     </Routes>
     </Router>
    </>
  );
}

export default App;
