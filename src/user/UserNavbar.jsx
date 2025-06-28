import { NavLink , Link} from 'react-router-dom';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ekart from '../images/ekart.png'
import Button from 'react-bootstrap/Button';
import "../Style/AdminNavbar.css"


function UserNavbar({onContactClick}) {

  function showsidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "block";
  }

  function hidesidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  }

  return (
    <div className="AdminNavbar">
      <div className="logo">
        <img src={ekart} alt="logo" />
      </div>
      <div className="links">
        <NavLink to='/' className='li'>Home</NavLink>
        <NavLink to='/userAbout' className='li'>About</NavLink>
        <NavLink to='/userViewProducts' className='li'>Products</NavLink>
        <NavLink className='li' onClick={onContactClick}>Contact</NavLink>
        <button><NavLink to='/landing' >Login</NavLink></button>
        <NavLink to='/userCart' className='li'><ShoppingCartIcon />Cart</NavLink>
      </div>

      <div className="sidebar flex flex-col">
        <div className="cross" >
           <i className="fa-solid fa-xmark" onClick={hidesidebar} ></i>
        </div>
        <Link to='/' className='item1'>Home</Link>
        <Link to='/userAbout' className='item1'>About</Link>
        <Link to='/userViewProducts' className='item1'>Products</Link>
        <Link to='/contact' className='item1'>Contact</Link>
        <Link variant="outline-primary">Login</Link>
        <Link to='/userCart' className='item1'><ShoppingCartIcon />Cart</Link>
      </div>

      <div className="menu h-5 w-10 flex item-center justify-center text-2xl cursor-pointer " onClick={showsidebar}>
        <i className="fa-solid fa-bars"></i></div>
        {/* <i className="fa-solid fa-x"></i> */}
    </div>
  );
}

export default UserNavbar;