import { createContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { endpoints } from '../lib/api.js';

export const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = useCallback(() => {
    setLoading(true);
    axios
      .get(endpoints.products)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <ProductContext.Provider value={{ products, loading, fetchProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
