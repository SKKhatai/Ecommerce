import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ekart from '../images/ekart.png';
import '../Style/AdminNavbar.css';

const AdminNavbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  function closeSidebar() {
    setSidebarOpen(false);
  }

  function logout() {
    navigate('/landing');
  }

  return (
    <>
      <div className="AdminNavbar">
        <div className="logo">
          <Link to="/adminhomepage">
            <img src={ekart} alt="logo" />
          </Link>
        </div>
        <div className="links">
          <Link to="/adminhomepage" className="li">
            Home
          </Link>
          <Link to="/adminhomepage/addproducts" className="li">
            Add Products
          </Link>
          <Link to="/adminhomepage/viewitems" className="li">
            View Products
          </Link>
          <Link to="/adminhomepage/viewitems" className="li">
            <ShoppingCartIcon fontSize="small" />
            Inventory
          </Link>
          <button type="button" onClick={logout} style={{ background: '#eb4235', border: 'none', borderRadius: 8 }}>
            <span style={{ color: 'white', padding: '0 12px' }}>Logout</span>
          </button>
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
            <Link to="/adminhomepage" className="item1" onClick={closeSidebar}>
              Home
            </Link>
            <Link to="/adminhomepage/addproducts" className="item1" onClick={closeSidebar}>
              Add Products
            </Link>
            <Link to="/adminhomepage/viewitems" className="item1" onClick={closeSidebar}>
              View Products
            </Link>
            <button type="button" className="item1" onClick={() => { closeSidebar(); logout(); }} style={{ background: 'none', border: 'none', textAlign: 'left' }}>
              Logout
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default AdminNavbar;
