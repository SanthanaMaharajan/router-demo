import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './Login';
import Error from './Error';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
import { Route, Routes } from 'react-router-dom';
import AddProduct from './AddProduct';
import Products from './Product';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/add-product' element={<AddProduct/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
