import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { endpoints } from '../lib/api.js';
import { ProductContext } from '../context/ProductContext';
import '../Style/AdminViewItem.css';

export default function AdminViewItems() {
  const [product, setProduct] = useState([]);
  const { fetchProducts } = useContext(ProductContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(endpoints.products)
      .then((res) => setProduct(res.data))
      .catch(() => toast.error('Failed to load products'));
  }, []);

  function deleteProduct(id, name) {
    axios
      .delete(endpoints.product(id))
      .then(() => {
        toast.success(`${name} deleted successfully`);
        setProduct((prev) => prev.filter((p) => p.id !== id));
        fetchProducts();
      })
      .catch(() => toast.error('Could not delete product'));
  }

  function editPage(id) {
    navigate(`/adminhomepage/updateProduct/${id}`);
  }

  return (
    <div className="AdminViewItems">
      {product.map((item) => (
        <div className="sub_Item scene-3d card-3d" key={item.id}>
          <h1>{item.name}</h1>
          <h3>{item.category}</h3>
          <img src={item.image} alt={item.name} />
          <h1>₹{item.price}</h1>
          <p>{item.description || item.desc}</p>
          <button type="button" onClick={() => editPage(item.id)} className="update">
            Update
          </button>
          <button type="button" onClick={() => deleteProduct(item.id, item.name)} className="delete">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
