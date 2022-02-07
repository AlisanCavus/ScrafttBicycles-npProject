import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Favorites from './Pages/Favorites';
import Home from './Pages/Home';
import YourCart from './Pages/YourCart';
import About from './Pages/About';
import Products from './Pages/Products';
import Profile from './Pages/Profile';
import Layout from './Pages/Layout';
import Logout from './Pages/Logout';
import NotFound from './Pages/NotFound';
import SignUpModalWrapper from './Modals/SignUpModalWrapper';
import AuthContextProvider from './Contexts/AuthContext';
import RequireAuth from './Pages/RequireAuth';
import LoginModalWrapper from './Modals/LoginModalWrapper';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UpdateProfileModalWrapper from './Modals/UpdateProfileModalWrapper';
import ForgotPassModalWrapper from './Modals/ForgotPassModalWrapper'

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            
            
            <Route path="/Favorites" element={<Favorites />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/About" element={<About />} />

            <Route element={<RequireAuth />}>
              <Route index element={<Home />} />
              <Route path="/YourCart" element={<YourCart />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Logout" element={<Logout />} />
              <Route path="/UpdateProfile" element={<UpdateProfileModalWrapper />} />
            </Route>
        
            <Route path="/Login" element={<LoginModalWrapper />} />
            <Route path="/Signup" element={<SignUpModalWrapper />} />
            <Route path="/ForgotPassword" element={<ForgotPassModalWrapper />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Outlet />
      </BrowserRouter>
    </AuthContextProvider>
  );
}


export default App;
