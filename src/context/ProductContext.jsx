import { createContext, useState, useEffect } from 'react'   
import axios from 'axios'

// create context
export const ProductContext = createContext();

// provider component
function ProductProvider({ children }) {
 
     let [product, setProduct] = useState([])

       function fetchdata() {
            axios.get('https://68397deb6561b8d882b09d9c.mockapi.io/ecom/products')
                .then((res) => {
                    // console.log(res.data);
                    setProduct(res.data)
                })
                .catch((err) => {
                    console.log(err);
                })
        }

    useEffect(() => {
        fetchdata();
    }, [])

  return (
   <ProductContext.Provider value={product}>
     {children}
   </ProductContext.Provider>
  )
}

export default ProductProvider
