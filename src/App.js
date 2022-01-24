import { BrowserRouter, Routes, Route, Outlet, Switch } from 'react-router-dom';
import Favorites from './Pages/Favorites';
import Home from './Pages/Home';
import YourCart from './Pages/YourCart';
import About from './Pages/About';
import Products from './Pages/Products';
import Profile from './Pages/Profile';
import Login from './Pages/Login';

import Logout from './Pages/Logout';
import Navbar from './Components/Navbar';
import NotFound from './Pages/NotFound'
import SignUpModalWrapper from './Modals/SignUpModalWrapper';
import AuthContextProvider from './Contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />}/>
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/YourCart" element={<YourCart />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/About" element={<About />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<SignUpModalWrapper />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="*" element={<NotFound /> } />
        </Route>
      </Routes>
      <Outlet />
    </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
