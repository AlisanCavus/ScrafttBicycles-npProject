import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favorites from './Pages/Favorites';
import Home from './Pages/Home';
import YourCart from './Pages/YourCart';
import About from './Pages/About';
import Products from './Pages/Products';
import Profile from './Pages/Profile'
import Login from './Pages/Login'
import Signup from './Pages/SignUp'
import Logout from './Pages/Logout'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Favorites" element={<Favorites />}   />
        <Route path="/YourCart" element={< YourCart/>}  />
        <Route path="/Products" element={<Products/>}  />
        <Route path="/About" element={<About/>}  />
        <Route path="/Profile" element={<Profile/>}  />
        <Route path="/Login" element={<Login/>}  />
        <Route path="/Signup" element={<Signup/>}  />
        <Route path="/Logout" element={<Logout/>}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
