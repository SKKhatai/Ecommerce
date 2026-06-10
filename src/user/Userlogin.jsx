import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import loginImg from '../images/shop.jpg';
import { endpoints } from '../lib/api.js';
import '../Style/Adminlogin.css';

const Userlogin = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(endpoints.users)
      .then((res) => res.json())
      .then(setUsers)
      .catch(() => toast.error('Could not load users'));
  }, []);

  function login(e) {
    e.preventDefault();
    const match = users.filter(
      (x) => x.email === username && x.password === password && !x.isAdmin
    );
    if (match.length > 0) {
      toast.success('Login successful');
      navigate('/userhomepage');
    } else {
      toast.error('Invalid email or password');
    }
  }

  return (
    <div className="userlogin">
      <div className="outer">
        <div className="img">
          <img src={loginImg} alt="shop" />
        </div>
        <form className="form" onSubmit={login}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter email"
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
          <button type="submit">User Login</button>
          <span>
            New here? <Link to="/usersignup">Sign Up</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Userlogin;
