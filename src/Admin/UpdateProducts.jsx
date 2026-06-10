import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { endpoints } from '../lib/api.js';
import { ProductContext } from '../context/ProductContext';
import '../Style/UpdateProducts.css';

function UpdateProducts() {
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  const param = useParams();
  const navigate = useNavigate();
  const { fetchProducts } = useContext(ProductContext);

  useEffect(() => {
    axios
      .get(endpoints.product(param.id))
      .then((res) => {
        const d = res.data;
        setName(d.name || '');
        setCategory(d.category || '');
        setDescription(d.description || d.desc || '');
        setPrice(d.price || '');
        setImage(d.image || '');
        setRating(d.rating || '');
      })
      .catch(() => toast.error('Product not found'));
  }, [param.id]);

  function updateItems(e) {
    e.preventDefault();
    const data = { category, name, price, image, rating, description, desc: description };
    axios
      .put(endpoints.product(param.id), data)
      .then(() => {
        toast.success('Product updated successfully');
        fetchProducts();
        navigate('/adminhomepage/viewitems');
      })
      .catch(() => toast.error('Update failed'));
  }

  return (
    <div className="updateproducts">
      <form onSubmit={updateItems}>
        <fieldset>
          <legend>Edit Product</legend>
          <label>Category</label>
          <select required value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>Dress Materials</option>
            <option>Mobile</option>
            <option>Electronics</option>
            <option>Groceries</option>
            <option>Shoes</option>
          </select>
          <label>Product Name</label>
          <input required type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <label>Product Price</label>
          <input required type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
          <label>Description</label>
          <textarea required rows="3" value={description} onChange={(e) => setDescription(e.target.value)} />
          <label>Thumbnail URL</label>
          <input required type="text" value={image} onChange={(e) => setImage(e.target.value)} />
          <label>Ratings</label>
          <input required type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
          <button className="btn btn-danger" type="submit">
            Update
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default UpdateProducts;
