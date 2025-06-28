import '../Style/AdminNavbar.css'
import {Link} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import AdminAddProducts from './AdminAddProducts';
import AdminViewItems from './AdminViewItems';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ekart from '../images/ekart.png'
import AdminHomePage from './AdminHomePage';

const AdminNavbar = () => {
    return (
        <div className="AdminNavbar">
            <div className="logo">
               {/* <h1> E<span>kart</span></h1> */}
               <img src={ekart} alt="logo" />
            </div>
            <div className="links">
                <Link to='/adminhomepage' className='li'>Home</Link>
                <Link to='/adminhomepage/addproducts' className='li'>Add Products</Link>
                <Link to='/adminhomepage/viewitems' className='li'>View Products</Link> 
                <Link to='/adminhomepage/viewport' className='li'><ShoppingCartIcon/>Cart</Link>

            </div>

            

            {/*Admin  Account */}
            
            <Dropdown>
                <Dropdown.Toggle variant="danger" id="dropdown-basic">
        
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">account</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default AdminNavbar;