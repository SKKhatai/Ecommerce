import { useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { endpoints } from '../lib/api.js';
import { ProductContext } from '../context/ProductContext';
import '../Style/AdminAddProduct.css';

const AdminAddProducts = () => {
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [rating, setRating] = useState('');
  const [desc, setDesc] = useState('');
  const { fetchProducts } = useContext(ProductContext);

  function addProducts(e) {
    e.preventDefault();
    const data = { category, name, image, price, rating, desc };
    axios
      .post(endpoints.products, data)
      .then(() => {
        toast.success('Product added successfully');
        fetchProducts();
        setCategory('');
        setName('');
        setPrice('');
        setImage('');
        setRating('');
        setDesc('');
      })
      .catch(() => toast.error('Failed to add product'));
  }

  return (
    <div className="addproducts">
      <form onSubmit={addProducts}>
        <fieldset>
          <legend>Add New Product</legend>
          <label>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Select category</option>
            <option>Dress Material</option>
            <option>Mobile</option>
            <option>Electronics</option>
            <option>Groceries</option>
            <option>Shoes</option>
          </select>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Name/Brand" value={name} onChange={(e) => setName(e.target.value)} required />
          <label htmlFor="price">Price</label>
          <input id="price" type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
          <label htmlFor="image">Image URL</label>
          <input id="image" type="url" placeholder="Image address" value={image} onChange={(e) => setImage(e.target.value)} required />
          <label htmlFor="desc">Description</label>
          <input id="desc" type="text" placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)} />
          <label htmlFor="rating">Rating</label>
          <input id="rating" type="text" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} />
          <button className="btn btn-primary" type="submit">
            Add Product
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default AdminAddProducts;
