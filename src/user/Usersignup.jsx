import React, { useEffect, useState } from 'react'
import loginImg from '../images/shop.jpg'
import axios from 'axios'


function Usersignup() {
 
  let [username, setUsername] = useState("")
  let [password, setPassword] = useState("")
    
  useEffect(()=>{
     axios.get('https://68397deb6561b8d882b09d9c.mockapi.io/ecom/users')
     .then((res)=>{
      console.log(res)
     })
     .catch((err)=>{
      console.log(err)
     })
  })


  return (
    <div className="usersignup">
                 <div className="outer">
                   <div className='img'>
                     <img src={loginImg} alt="img" />
                   </div>
           
                   <form action="/userlogin" className='form' method='post'>
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
                     <button type="button" onClick={login} style={{ backgroundColor: "black", color: "white", margin: "10px" }}>User SignUp</button>
                   </form>
                 </div>
           
               </div>
  )
}

export default Usersignup
