import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import './styles/effects-3d.css';
import './styles/product-cards.css';
import './styles/homepage.css';
import Adminlogin from './Admin/Adminlogin';
import Userlogin from './user/Userlogin';
import Landing from './Admin/Landing';
import FormExample from './Admin/AdminSignup';
import AdminHomePage from './Admin/AdminHomePage';
import Userhomepage from './user/Userhomepage';
import Usersignup from './user/Usersignup';
import Backend from './Backend';
import Userviewproducts from './user/Userviewproducts';
import UserAbout from './user/UserAbout';
import Contact from './user/Contact';
import UserCart from './user/UserCart';
import Errorpage from './Admin/Errorpage';
import ProductProvider from './context/ProductContext';
import CartProvider from './context/CartContext';
import SingleProduct from './user/SingleProduct';
import UserNavbar from './user/UserNavbar';

const HIDE_NAV_PATHS = ['/landing', '/adminlogin', '/adminsignup', '/userlogin', '/usersignup'];

function AppLayout() {
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith('/adminhomepage');
  const hideNav = HIDE_NAV_PATHS.includes(pathname) || isAdmin;

  return (
    <div className="app">
      {!hideNav && <UserNavbar />}
      <Routes>
        <Route path="/allnotes" element={<Backend />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path="/adminsignup" element={<FormExample />} />
        <Route path="/adminhomepage/*" element={<AdminHomePage />} />
        <Route path="/userlogin" element={<Userlogin />} />
        <Route path="/usersignup" element={<Usersignup />} />
        <Route path="/userhomepage/*" element={<Userhomepage />} />
        <Route path="/" element={<Userhomepage />} />
        <Route path="/userAbout" element={<UserAbout />} />
        <Route path="/userViewProducts" element={<Userviewproducts />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/userCart" element={<UserCart />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </div>
  );
}

const App = () => (
  <ProductProvider>
    <CartProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </CartProvider>
  </ProductProvider>
);

export default App;
