import { useContext } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { ProductContext } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import ProductContainer from './ProductContainer';

function SingleProduct() {
  const { id } = useParams();
  const { products, loading } = useContext(ProductContext);
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  if (loading) {
    return <p className="text-white text-center py-20">Loading...</p>;
  }

  if (!product) {
    return (
      <div className="bg-[#0e1420] text-white min-h-screen flex flex-col items-center justify-center gap-4 pt-20">
        <p className="text-xl">Product not found</p>
        <NavLink to="/userViewProducts" className="text-[#EB4235]">
          Back to products
        </NavLink>
      </div>
    );
  }

  function handleAdd() {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  }

  return (
    <div className="bg-[#0e1420] text-white min-h-screen px-4 sm:px-8 py-24">
      <p className="text-lg sm:text-2xl mb-6 max-w-5xl mx-auto">
        <NavLink to="/" className="text-gray-400 hover:text-white no-underline">
          Home /
        </NavLink>{' '}
        <NavLink to="/userViewProducts" className="text-gray-400 hover:text-white no-underline">
          Products /
        </NavLink>{' '}
        {product.name}
      </p>

      <div className="max-w-5xl mx-auto scene-3d">
        <ProductContainer singleProduct={product} />
        <button
          type="button"
          onClick={handleAdd}
          className="mt-8 flex items-center gap-2 bg-[#EB4235] text-white px-8 py-3 rounded-xl font-semibold mx-auto"
        >
          <AddShoppingCartIcon />
          Add to Cart — ₹{product.price}
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
