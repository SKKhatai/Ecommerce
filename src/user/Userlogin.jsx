import  {useEffect, useState} from 'react';
import '../Style/Userlogin.css'
import loginImg from '../images/shop.jpg'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Userlogin = () => {

    let [User, setUser] = useState([]);
    let navigate = useNavigate()

    // fetching userData
    useEffect(() => {
    const getUserData = async () => {
        let res = await fetch('https://68397deb6561b8d882b09d9c.mockapi.io/ecom/users');
        let data = await res.json()
        setUser(data);
    }
    getUserData()

   },[])


    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    
    function login(){
        let filterUser = User.filter(x=>{
            return (x.email === username &&x.password === password)
        })

        if(filterUser.length > 0){
            alert("Login successfull")
            navigate('/userhomepage')
        }
    }

    return ( 
        <div className="userlogin">
              <div className="outer">
                <div className='img'>
                  <img src={loginImg} alt="img" />
                </div>
        
                <form action="" className='form'>
                  <label htmlFor="">
                    User Username :
                  </label>
                  <input type="text" placeholder='  Enter email / Username' value={username}
                    onChange={(e) => { setUsername(e.target.value) }} required />
                  <label htmlFor="">
                    User Password :
                  </label>
                  <input type="text" placeholder='  Enter password' value={password}
                    onChange={(e) => { setPassword(e.target.value) }} required />
                  <button type="button" onClick={login} style={{ backgroundColor: "black", color: "white", margin: "10px" }}>User Login</button>
                  <span>Click here to <Link to='/usersignup'>Sign Up</Link></span>
                </form>
              </div>
        
            </div>
     );
}
 
export default Userlogin;