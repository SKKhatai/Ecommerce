import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import loginImg from '../images/shop.jpg';
import { endpoints } from '../lib/api.js';
import '../Style/Adminlogin.css';

const Adminlogin = () => {
  const [admins, setAdmins] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(endpoints.users)
      .then((res) => res.json())
      .then(setAdmins)
      .catch(() => toast.error('Could not load admin data'));
  }, []);

  function login(e) {
    e.preventDefault();
    const match = admins.filter(
      (x) => x.isAdmin === true && x.email === username && x.password === password
    );
    if (match.length > 0) {
      toast.success('Admin login successful');
      navigate('/adminhomepage');
    } else {
      toast.error('Invalid admin credentials');
    }
  }

  return (
    <div className="adminlogin">
      <div className="outer">
        <div className="img">
          <img src={loginImg} alt="shop" />
        </div>
        <form className="form" onSubmit={login}>
          <label htmlFor="email">Admin Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter admin email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Admin Login</button>
          <span>
            New admin? <Link to="/adminsignup">Sign Up</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Adminlogin;
