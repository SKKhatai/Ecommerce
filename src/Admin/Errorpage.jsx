import { NavLink } from "react-router-dom"

function Errorpage() {
  return (
    <div className='errorpage' style={{
        width:'100vw',
        height:'100vh',
        display:'flex',
        flexDirection:"column",
        alignItems:'center',
        justifyContent:'center'
    }}>
      <h1>404</h1>
      <h2>UH OH! You are lost.</h2>
      <p>
        The page you are looking for does not exist.
        But you can click the button below to go back to the Homepage
      </p>
      <button style={{backgroundColor:"#EB4235"}}>
        <NavLink to='/'>
        GO BACK TO HOME
        </NavLink>
      </button>
    </div>
  )
}

export default Errorpage
