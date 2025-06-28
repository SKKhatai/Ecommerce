import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Adminlogin from "./Admin/Adminlogin";
import Userlogin from "./user/Userlogin";
import Landing from "./Admin/Landing";
import FormExample from './Admin/AdminSignup'
import AdminHomePage from "./Admin/AdminHomePage";
import Userhomepage from "./user/Userhomepage";
import Usersignup from "./user/Usersignup";
import Backend from "./Backend";
import Userviewproducts from "./user/Userviewproducts";
import UserAbout from "./user/UserAbout";
import Contact from "./user/Contact";
import UserCart from "./user/UserCart";
import Errorpage from "./Admin/Errorpage";
// import Homepage from "./PropsDrilling/Homepage";
import ProductProvider from "./context/ProductContext";
import ProductFeature from "./user/ProductFeature";
import SingleProduct from "./user/SingleProduct";
import UserNavbar from "./user/UserNavbar";

const App = () => {
    return ( 
        <div className="app" style={{width:"99vw"}}>
            <ProductProvider>
 <BrowserRouter>
             <UserNavbar/>
             <Routes>
                <Route path="/allnotes" element={<Backend/>} />
                <Route path="/landing" element={<Landing/>} />
                <Route path="/adminlogin" element={<Adminlogin/>} />
                <Route path="/adminsignup" element={<FormExample/>}></Route>
                <Route path="/adminhomepage/*" element={<AdminHomePage/>}></Route>
                <Route path="/userlogin" element={<Userlogin/>}></Route>
                <Route path="/usersignup" element={<Usersignup/>}></Route>
                <Route path="/userhomepage/*" element={<Userhomepage/>}></Route>
                <Route path="/" element={<Userhomepage/>}></Route>
                <Route path='*' element={<Errorpage/>}></Route>
                <Route path="/userAbout" element={<UserAbout/>}></Route>

                <Route path="/userViewProducts" element={<Userviewproducts/>}></Route>
                <Route path="/featureProducts" element={<ProductFeature/>}></Route>
                 <Route path='/singleproduct/:id' element={<SingleProduct/>}></Route>
       
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/userCart" element={<UserCart/>}></Route>

             </Routes>
            </BrowserRouter>
            </ProductProvider>
           

            {/* <Homepage/> */}
            
        </div>
     );
}
 
export default App;