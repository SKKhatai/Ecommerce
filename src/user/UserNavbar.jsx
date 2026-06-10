import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ekart from '../images/ekart.png';
import { useCart } from '../context/CartContext';
import '../Style/AdminNavbar.css';

function UserNavbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  function closeSidebar() {
    setSidebarOpen(false);
  }

  function handleContact() {
    closeSidebar();
    if (location.pathname === '/') {
      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/contact');
    }
  }

  return (
    <>
      <div className="AdminNavbar">
        <div className="logo">
          <Link to="/">
            <img src={ekart} alt="Ekart logo" />
          </Link>
        </div>

        <div className="links">
          <NavLink to="/" className="li" end>
            Home
          </NavLink>
          <NavLink to="/userAbout" className="li">
            About
          </NavLink>
          <NavLink to="/userViewProducts" className="li">
            Products
          </NavLink>
          <button type="button" className="li" onClick={handleContact} style={{ background: 'none', border: 'none' }}>
            Contact
          </button>
          <button type="button">
            <NavLink to="/landing">Login</NavLink>
          </button>
          <NavLink to="/userCart" className="li">
            <ShoppingCartIcon fontSize="small" />
            Cart
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </NavLink>
        </div>

        <div className="menu" onClick={() => setSidebarOpen(true)} role="button" tabIndex={0} aria-label="Open menu">
          <i className="fa-solid fa-bars" />
        </div>
      </div>

      {sidebarOpen && (
        <>
          <div className="sidebar-overlay" onClick={closeSidebar} />
          <div className="sidebar open">
            <div className="cross">
              <i className="fa-solid fa-xmark" onClick={closeSidebar} />
            </div>
            <Link to="/" className="item1" onClick={closeSidebar}>
              Home
            </Link>
            <Link to="/userAbout" className="item1" onClick={closeSidebar}>
              About
            </Link>
            <Link to="/userViewProducts" className="item1" onClick={closeSidebar}>
              Products
            </Link>
            <button type="button" className="item1" onClick={handleContact} style={{ background: 'none', border: 'none', textAlign: 'left', width: '100%' }}>
              Contact
            </button>
            <Link to="/landing" className="item1" onClick={closeSidebar}>
              Login
            </Link>
            <Link to="/userCart" className="item1" onClick={closeSidebar}>
              Cart {cartCount > 0 && `(${cartCount})`}
            </Link>
          </div>
        </>
      )}
    </>
  );
}

export default UserNavbar;
