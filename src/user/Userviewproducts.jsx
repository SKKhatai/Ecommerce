import  {useContext} from 'react'
import '../Style/Userviewproducts.css'
import {ProductContext} from '../context/ProductContext'
import { NavLink } from 'react-router-dom'
import ProductCard from './ProductCard'
import FilterProducts from './FilterProducts'

function Userviewproducts() {

    const product = useContext(ProductContext)

    return (
        <div className='AdminViewItems flex flex-col pl-10 pr-10'>

            <div className='flex items-center justify-between w-30 gap-2'>
                <NavLink to='/' ><h2>Home</h2></NavLink>
                <h2>›</h2>
                <h3>ViewProducts</h3>
            </div>

            <div className='product-container flex flex-wrap items-start justify-around gap-10 relative'>
                 <FilterProducts/>
                 <ProductCard product={product} />
            </div>
          
            


        </div>
    );
}

export default Userviewproducts
