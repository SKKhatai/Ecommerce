import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { endpoints } from './lib/api.js';
import { ProductContext } from './context/ProductContext.jsx';

export default function Backend() {
  const { products } = useContext(ProductContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(endpoints.products).then((res) => setData(res.data));
  }, []);

  const list = products.length ? products : data;

  return (
    <div className="p-8 pt-24">
      {list.map((i) => (
        <h1 key={i.id}>{i.title || i.name}</h1>
      ))}
    </div>
  );
}
