import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import { NavLink } from "react-router-dom";


function ProductFeature() {
    const featuredProducts = useContext(ProductContext);
    const featured = featuredProducts.filter((p) => p.featured === true);

    return (
        <div className="featured-products w-full bg-[#0e1420] p-5" >
           
            <h1 className="text-white flex justify-center">Featured Products</h1> 
           <div className="flex mt-5 flex-wrap">
             {
                featured.map((p) => {
                    if (p.featured === true) {
                        return (
                            <NavLink  to={`/singleproduct/${p.id}`} key={p.id} className="each-product max-w-sm 
                                min-w-xs
                                mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300
                                mt-4
                                cursor-pointer
                                relative" >
                                <img
                                    src={p.image}
                                    alt={p.name}
                                    className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
                                />
                                <div className="categ absolute top-4 right-4 bg-gray-200 black p-1 rounded-xl w-24 flex item-center justify-center"><h6>{p.category}</h6></div>
                                <div className="p-4 space-y-2 flex justify-between item-center">
                                   <h3>{p.name}</h3>
                                </div>
                            
                            </NavLink>
                          

                        )
                    }
                })
            }
           </div>
        </div>
    )
}

export default ProductFeature
