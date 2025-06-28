import "tailwindcss";
import UserNavbar from '../user/UserNavbar'
import Userfooter from '../user/Userfooter'
import Userview from '../user/Userview'
import Contact from "./Contact";
import { useRef } from "react";
import ProductFeature from "./ProductFeature";

function Userhomepage() {

  const contactRef = useRef(null);

  function showContact() {
    contactRef.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="Userhomepage flex item-center justify-center bg-[#0e1420] relative overflow-hidden flex-col">

      {/* <div className="h-[700px] w-[700px] bg-[#EB4235] absolute rotate-45 -top-1/4 right-0 rounded-3xl ">
        </div> */}

      <UserNavbar onContactClick = {showContact} />
      <Userview />
       <ProductFeature/>
      <Contact ref={contactRef}/>
      <Userfooter/>
    </div>


  )
}

export default Userhomepage;
