import { useState } from "react";
import '../Style/AdminAddProduct.css'
import axios from "axios";
import {toast} from 'react-toastify'

const AdminAddProducts = () => {

   let [category, setCategory] = useState("")
   let [name, setName] = useState("")
   let [price, setPrice] = useState("")
   let [image, setImage] = useState("")
   let [rating, setRating] = useState("") 
   let [desc, setDesc] = useState("")

   let data = {category,name,image,price,rating, desc}

   function addProducts(e){
      e.preventDefault();
      axios.post('https://68397deb6561b8d882b09d9c.mockapi.io/ecom/products',data)
      .then((res)=>{
         console.log(res)
         toast.success("Data added successfully")
      })
      .catch((err)=>{
         console.log(err)
         toast.error("Invalid Data")
      })
   }

    return ( 
        <div className="addproducts">
           <form onSubmit={addProducts}>
            <fieldset>
               <label >Category</label>
               <select value={category} onChange={(e)=>{setCategory(e.target.value)}}>
                  <option >Dress Material</option>
                  <option >Mobile</option>
                  <option >Electronics</option>
                  <option >Groceries</option>
                  <option >Dress Material</option>
                  <option >Shoes</option>
               </select>
               <label htmlFor="">Name</label>
               <input type="text" placeholder="Name/Brand" value={name} onChange={(e)=>{setName(e.target.value)}}/>
               <label htmlFor="price">Price</label>
               <input type="number" placeholder="Price" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
               <label htmlFor="" >Image</label>
               <input type="text" placeholder="Enter imge address" value={image} onChange={(e)=>{setImage(e.target.value)}}/>
               <label htmlFor="">Description</label>
               <input type="text" placeholder="Description" value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
               <label htmlFor="">Rating</label>
               <input type="text" placeholder="Rating" value={rating} onChange={(e)=>{setRating(e.target.value)}}/>
               <button className="btn btn-primary" type="submit" onClick={addProducts}>Add Product</button>
            </fieldset>
           </form>
        </div>
     );
}
 
export default AdminAddProducts;