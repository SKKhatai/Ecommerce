import  { useEffect } from 'react'
// import './Styles/UpdateProducts.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
export default function UpdateProducts() {

let [category,setCategory]= useState("")
  let [name,setName]= useState("")
  let [price,setPrice]= useState("")
  let [desc,setDesc]= useState("")
  let [image,setImage]= useState("")
  let [rating,setRating]= useState("")

    let data = {category,name,price,image,rating,desc}

   

    function updateItem(e){
        e.preventDefault()
        axios.put(`https://68397deb6561b8d882b09d9c.mockapi.io/ecom/products/${param.id}`,data)
        .then((res)=>{
            console.log(res);
            toast.success('Item updated hogaya')
        })
        .catch((err)=>{
            console.log(err)
            toast.err('kch garbar hai')
        })
    }


    let param = useParams()
    
useEffect(()=>{
    axios.get(`https://68397deb6561b8d882b09d9c.mockapi.io/ecom/products/${param.id}`)
    .then((res)=>{
        console.log(data);

        setName(res.data.name)
        setCategory(res.data.category)
        setDesc(res.data.desc)
        setPrice(res.data.price)
        setImage(res.data.image)
        setRating(res.data.rating)
        
    })
    .catch((err)=>{
        console.log(err)
        toast.err('kch garbar hai')
    })
},[])
    
  return (
    <div className='updateproducts'>

<form onSubmit={updateItem}>
                <fieldset className=' d-grid p-3'>
                    <label htmlFor="">Category :</label>
                    <select required value={category} onChange={(e)=>{setCategory(e.target.value)}}>
                        <option>cloths</option>
                        <option>cloths</option>
                        <option>cloths</option>
                        <option>cloths</option>
                        <option>cloths</option>
                        <option>cloths</option>
                    </select>
                    <label htmlFor="">Product Name :</label>
                    <input required type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
                    <label htmlFor="">Price :</label>
                    <input required  type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
                    <label htmlFor="">Des :</label>
                  
                    <textarea name="" id="" value={desc} onChange={(e)=>{setDesc(e.target.value)}}></textarea>
                    <label htmlFor="">Thumbnail :</label>
                    <input required type="text"  value={image} onChange={(e)=>{setImage(e.target.value)}}/>
                    <label htmlFor="">Rating :</label>
                    <input required type="text" value={rating} onChange={(e)=>{setRating(e.target.value)}} />
                    

                    <button 
                    className='btn btn-outline-primary'
                    type='submit'>update product</button>
                </fieldset>
            </form>
      
    </div>
  )
}