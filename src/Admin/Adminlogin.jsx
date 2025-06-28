import React, { useEffect, useState } from "react";
import '../Style/Adminlogin.css'
import loginImg from '../images/shop.jpg'
// import FormExample from './AdminSignup'
import data from '../Data/AdminData.json'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import AdminHomePage from './AdminHomePage'

const Adminlogin = () => {

  // fetching using useEffect
  let [Admin, setAdmin] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchAdminData = async () => {
      let res = await fetch('https://68397deb6561b8d882b09d9c.mockapi.io/ecom/users');
      let data = await res.json();
      setAdmin(data)
    }
    fetchAdminData();
  }, [])

  // console.log(Admin);
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  const login = () => {
    let filterVal = Admin.filter((x) => {      
      return ( x.isAdmin== true && x.email === username && x.password == password)
    })

    if (filterVal.length > 0) {
      alert("Login successfull")
      navigate('/adminhomepage')

    }
    else {
      alert("Invalids details")
    }
  }

  return (
    <div className="adminlogin">
      <div className="outer">
        <div className='img'>
          <img src={loginImg} alt="img" />
        </div>

        <form action="" className='form'>
          <label htmlFor="">
            Admin Username :
          </label>
          <input type="text" placeholder='  Enter AdminName' value={username}
            onChange={(e) => { setUsername(e.target.value) }} required />
          <label htmlFor="">
            Admin Password :
          </label>
          <input type="text" placeholder='  Enter password' value={password}
            onChange={(e) => { setPassword(e.target.value) }} required />
          <button type="button" onClick={login} style={{ backgroundColor: "black", color: "white", margin: "10px" }}>Admin Login</button>
          <span>Click here to <Link to='/adminsignup'>Sign Up</Link></span>
        </form>
      </div>

    </div>
  )
}

export default Adminlogin;