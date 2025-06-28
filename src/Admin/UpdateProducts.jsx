// import '../Style/UpdateProducts.css'
// import React,{ useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import {toast} from 'react-toastify'

// function UpdateProducts(){
  
//     const [name,setName] = useState("");
//     const [price,setPrice] = useState('');
//     const [desc,setDesc] = useState('');
//     const [image,setImage] = useState('');
//     const [category,setCategory] = useState('');
//     const [rating,setRating] = useState('');

//     let data = {name,price,desc,image,category,rating}
    
//     function updateItems(e){
//       e.preventDefault()
//       axios.put(`https://68397deb6561b8d882b09d9c.mockapi.io/ecom/products/${param.id}`,data)
//       .then((res)=>{
//         toast.success(`data updated`)
//       })
//       .catch((err)=>{
//         toast.error('Data not present')
//       })
//     }
    
//     let param = useParams()

//     useEffect(()=>{
//       axios.get(`http://localhost:1000/products/${param.id}`)
//      .then((res)=>{
      
//       setName(res.data.name)
//       setPrice(res.data.price)
//       setDesc(res.data.desc)
//       setImage(res.data.image)
//       setCategory(res.data.category)
//       setRating(res.data.rating)
//       console.log(res)
//      })
//      .catch((err)=>{
//        toast.error(err.message)
//           console.log("kuch gadbad hai")
//      }) 
//   },[])
    
   
//     return ( 
//         <div className="updateProduct" >
          
//           <form onSubmit={updateItems}>
//             <fieldset>
//             <h2>Edit Product</h2>
//                 <select value={category} onChange={(e)=>setCategory(e.target.value)}>
//                     <option value="Dress materia">Dress material</option>
//                     <option value="Mobile">Mobile</option>
//                     <option value="Electronics">Electronics</option>
//                     <option value="Groceries">Groceries</option> 
//                     <option value="Shoes">Shoes</option>
//                 </select>
               
//                 <label htmlFor="name">Name</label>
//                 <input required type="text" value={name} onChange={(e)=>setName(e.target.value) } />
//                 <label htmlFor="price">Price</label>
//                 <input required type="text" value={price} onChange={(e)=>setPrice(e.target.value) }/>
//                 <label htmlFor="desc">Description</label>
//                   <textarea name="" id=""value={desc} onChange={(e)=>setDesc(e.target.value) } style={{width:"50%", backgroundColor:"white"}}></textarea>
//                 <label htmlFor="image">Image</label>
//                 <input required type="text" value={image} onChange={(e)=>setImage(e.target.value) }/>
//                 <label htmlFor="rating">Rating</label>
//                 <input required type="text" value={rating} onChange={(e)=>setRating(e.target.value) }/>
//                 <button type="submit" >Update</button>
//             </fieldset>
//           </form>

     

//         </div>
//      );
// }
 
// export default UpdateProducts;
import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import '../Style/UpdateProducts.css';

function UpdateProducts(){

    let [category,setCategory] = useState("");
    let [name,setName] = useState("");
    let [price,setPrice] = useState("");
    let [image,setImage] = useState("");
    let [rating,setRating] = useState("");
    let [description,setDescription] = useState("")

    let data = {category,name,price,image,rating,description}

    function updateItems(e){
        e.preventDefault();
        axios.put(`https://68397deb6561b8d882b09d9c.mockapi.io/ecom/products/${param.id}`,data)
        .then((res)=>{
            console.log(res);
            toast.success("Item updated successfully")
        })
        .catch((err)=>{
            console.log(err);
            toast.error("Invalid Data")
        })
    }

    let param = useParams()
    useEffect(()=>{
        axios.get(`https://68397deb6561b8d882b09d9c.mockapi.io/ecom/products/${param.id}`)
    .then((res)=>{
        console.log(res.data);
        setName(res.data.name)
        setCategory(res.data.category)
        setDescription(res.data.description)
        setPrice(res.data.price)
        setImage(res.data.image)
        setRating(res.data.rating)
    })
    .catch((err)=>{
        console.log(err); 
    })
    },[])

    return(
        <div className="updateproducts">

        <form onSubmit={updateItems} action="">
                <fieldset>

                    <label htmlFor="">Category</label>
                    <select required value={category} onChange={(e) => {setCategory(e.target.value)}}>
                        <option>Dress Materials</option>
                        <option>Mobile</option>
                        <option>Mobile Assosories</option>                        
                        <option>Electronics</option>                        
                        <option>Groceries</option>                        
                    </select>
                    <label htmlFor="">Product Name</label>
                    <input required type="text" placeholder="Enter the Product" value={name} onChange={(e) => setName(e.target.value)}/>
                    <label htmlFor="">Product Price</label>
                    <input required type="text" placeholder="Enter the price" value={price} onChange={(e) => setPrice(e.target.value)}/>
                    <label htmlFor="">Description</label>
                    <textarea required rows="2" cols="30" placeholder="Enter the details" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    <label htmlFor="">Thumbnail</label>
                    <input required type="text" placeholder="Enter the image address" value={image} onChange={(e) => setImage(e.target.value)} />
                    <label htmlFor="">Ratings</label>
                    <input required type="Number" placeholder="Enter the ratings" value={rating} onChange={(e) => setRating(e.target.value)}/>
                    <button className="btn btn-danger">Update</button>
                </fieldset>
            </form>
        </div>
    )
}
export default UpdateProducts