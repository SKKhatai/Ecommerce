import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import loginImg from '../images/shop.jpg';
import { endpoints } from '../lib/api.js';
import '../Style/Adminlogin.css';

function Usersignup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  function signup(e) {
    e.preventDefault();
    const data = { name: username, email, password, isAdmin: false };
    axios
      .post(endpoints.users, data)
      .then(() => {
        toast.success('Signup successful! Please login.');
        navigate('/userlogin');
      })
      .catch(() => toast.error('Signup failed. Try again.'));
  }

  return (
    <div className="usersignup">
      <div className="outer">
        <div className="img">
          <img src={loginImg} alt="shop" />
        </div>
        <form className="form" onSubmit={signup}>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <button type="submit">Sign Up</button>
          <span>
            Already have an account? <Link to="/userlogin">Login</Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Usersignup;
