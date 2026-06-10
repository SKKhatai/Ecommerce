import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../Style/Adminlogin.css';
import signupImg from '../images/shop.jpg';
import { endpoints } from '../lib/api.js';

const AdminSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  function signupSubmit(e) {
    e.preventDefault();
    const data = { email, password, name, phone, isAdmin: true };
    axios
      .post(endpoints.users, data)
      .then(() => {
        toast.success('Admin signup successful');
        navigate('/adminlogin');
      })
      .catch(() => toast.error('Signup failed'));
  }

  return (
    <div className="adminsignup">
      <div className="outer">
        <div className="img">
          <img src={signupImg} alt="signup" />
        </div>
        <form onSubmit={signupSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter Email"
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
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            placeholder="Enter Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button type="submit">Sign Up</button>
          <span>
            Already registered? <Link to="/adminlogin">Login</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default AdminSignup;
