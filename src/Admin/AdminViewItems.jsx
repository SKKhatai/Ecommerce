import axios from 'axios'
import  { useEffect, useState } from 'react'
import '../Style/AdminViewItem.css'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export default function AdminViewItems() {

  let [product, setProduct] = useState([])
  let [force, setForce] = useState(0)

  useEffect(() => {
    function fetchdata() {
      axios.get('https://68397deb6561b8d882b09d9c.mockapi.io/ecom/products')
        .then((res) => {
          console.log(res.data);
          setProduct(res.data)
        })
        .catch((err) => {
          console.log(err);

        })
    }
    fetchdata();
  }, [force])
  // console.log(product);

  function deleteProduct(id, name) {
    axios.delete(`https://68397deb6561b8d882b09d9c.mockapi.io/ecom/products/${id}`)
      .then(() => {
        toast.success(`${name} Deleted succefully`)
        setForce(force + 1)
      })
      .catch(() => {
        toast.error(`Data not present`)
      })
  }

  let navigate = useNavigate()
  function editPage(id) {
    navigate(`/adminhomepage/updateproducts/${id}`)
  }
  return (
    <div className='AdminViewItems'>

      {product.map((product) => {
        return (
          <div className="sub_Item" key={null}>
            <h1>{product.name}</h1>
            <h3>{product.category}</h3>
            <img src={product.image} alt="" />
            <h1>{product.price}</h1>
            <p>{product.description}</p>
            <button onClick={()=>{editPage(product.id)}} className='update'>Update</button>
            <button onClick={() => { deleteProduct(product.id, product.name) }} className='delete'>Delete</button>
          </div>
        )
      })}

</div>
)
}