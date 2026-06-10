import { Link } from 'react-router-dom';
import '../Style/Landing.css';

const adminIcon =
  'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
const userIcon =
  'https://cdn-icons-png.flaticon.com/512/1077/1077114.png';

const Landing = () => (
  <div className="landing">
    <div className="orb orb-red" />
    <div className="orb orb-blue" />

    <div className="landingtext scene-3d">
      <h1>
        Start your <span>online</span> business today
      </h1>
      <p className="landing-sub">Choose your portal to continue</p>
    </div>

    <div className="linkitem">
      <Link to="/adminlogin" className="flip-card-3d">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={adminIcon} alt="Admin" />
            <h3>Admin</h3>
          </div>
          <div className="flip-card-back">
            <h3>Manage Store</h3>
            <p>Products, orders & users</p>
          </div>
        </div>
      </Link>

      <Link to="/userlogin" className="flip-card-3d">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={userIcon} alt="User" />
            <h3>Shopper</h3>
          </div>
          <div className="flip-card-back">
            <h3>Start Shopping</h3>
            <p>Browse deals & checkout</p>
          </div>
        </div>
      </Link>
    </div>
  </div>
);

export default Landing;
