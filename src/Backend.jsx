import  { useEffect, useState } from 'react'
import  axios  from 'axios'
export default function Backend() {
    let [a,setA]= useState([]);
useEffect(()=>{
    
    function fetchdata(){
      axios.get('https://68397deb6561b8d882b09d9c.mockapi.io/ecom/products')
      .then((res)=>{
        console.log(res.data)
        setA(res.data)
      })
    }
    fetchdata()

},[])
  return (
    <div>
        {a.map((i,idx)=>{
            return <h1 key={idx}>{i.title}</h1>
        })}
    </div>
  )
}
