import { useState, useEffect } from 'react'
import image1 from '../images/men1.png'
import image2 from '../images/woman1.png'
import image3 from '../images/sale1.png'

function Userview() {
    let [slideItem, setSlide] = useState(0)

  let Items = [
    {
      id: 1,
      title: "70% off on men's shopping",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quidem vitae, ullam odit debitis iure adipisci minima molestias laboriosam libero amet dolor ipsa, tenetur dolorem quia.",
      image: image1
    },
    {
      id: 2,
      title: "70% off on Women's shopping",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quidem vitae, ullam odit debitis iure adipisci minima molestias laboriosam libero amet dolor ipsa, tenetur dolorem quia.",
      image: image2
    },
    {
      id: 3,
      title: "Sales in all products",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quidem vitae, ullam odit debitis iure adipisci minima molestias laboriosam libero amet dolor ipsa, tenetur dolorem quia.",
      image: image3
    }
  ]

useEffect(() => {
  const interval = setInterval(() => {
    setSlide(prev => (prev === Items.length - 1 ? 0 : prev + 1));
  }, 3000);

  return () => clearInterval(interval); // Clean up interval on unmount
}, [Items.length]);
  return (
    <div className="hero" style={{
        width: "70%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        height: "90vh",
        zIndex: "1",
        marginTop: "5rem",
        alignSelf: "center",
        }}>
         <div style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap"
            }}>
            <div className="content w-lg">
            <h1 style={{ color: "white" }}>{Items[slideItem].title}</h1>
            <p style={{color:"white"}}>{Items[slideItem].description}</p>
            <button style={{backgroundColor:"#EB4235"}}>Order now</button>
             </div>

             <div className="image w-96 ">
            <img src={Items[slideItem].image} alt="image" style={{ objectFit: "cover", marginLeft: "3rem", filter: "drop-shadow(5px 5px 50px #EB4235)" }} />
            </div>
         </div>

      </div>
  )
}

export default Userview
