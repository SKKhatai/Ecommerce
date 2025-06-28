import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import { NavLink, useParams } from "react-router-dom"
import ProductContainer from "./ProductContainer"

function SingleProduct() {
  const {id} = useParams()
  const products = useContext(ProductContext)
//   console.log("products", products)
  const product = products.find((p)=>p.id === id);
 

  return (
     <div key={id} className="bg-[#0e1420] text-white p-5 mt-5">
      <p className="text-2xl"> <NavLink to='/'>Home /</NavLink> {product.name}</p>

        <ProductContainer singleProduct={product} />
     </div>
  )
}

export default SingleProduct
