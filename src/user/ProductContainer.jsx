import React, { useEffect } from 'react'
import { useState } from 'react';

function ProductContainer({singleProduct}) {

    if (!singleProduct) {
    return <p>Loading product...</p>; 
  }

    const {id, name, price, desc, category, image, rating, brand, stock, imgArray} = singleProduct;
    const [heroImg, setHeroImg] = useState(image);

    function setImage(i){
   
        setHeroImg(i);
        // console.log(i)
   
    }

    // console.log(singleProduct);

  return (
       <div className="w-[80%] flex flex-wrap item-center justify-center gap-10" >
                <div className="imgs flex w-[600px] h-[400px]">
                    <div className='flex items-center justify-between flex-col gap-3'>
                        {imgArray.map((img, imgId)=>{
                            return(
                                 <img src={img} key={imgId} alt="img" className='h-25 w-23 hover:border-1 rounded-2xl hover:bg-white p-2'
                                  onClick={() => setImage(img)} 
                                  />
                            )
                        })}
                    </div>
                   <div className='h-full w-full flex items-center justify-center'> <img src={heroImg} className='h-[300px] w-[300px] hover:border-1 rounded-2xl hover:bg-white p-2' alt="image" /></div>
               </div>
                <div className="content flex flex-col gap-3">
                   <h2>{name}</h2>
                   <p>{brand}</p>
                   <p>{rating}</p>
                   <p>{stock}</p>
                   <div className='price'>
                        MRP: {price}
                   </div> 
                   <p>{desc}</p>

                </div>
        </div> 
  )
}

export default ProductContainer
