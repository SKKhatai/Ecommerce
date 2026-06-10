import { NavLink } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { toast } from 'react-toastify';
import { useCart } from '../context/CartContext';

export default function ProductTile({ product, showAddToCart = false }) {
  const { addToCart } = useCart();

  function handleAdd(e) {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  }

  return (
    <article className="product-tile">
      <NavLink to={`/singleproduct/${product.id}`} className="product-tile-link">
        <div className="product-tile-image-wrap">
          {product.featured && <span className="product-tile-badge">Featured</span>}
          {product.category && (
            <span className="product-tile-category-chip">{product.category}</span>
          )}
          <img src={product.image} alt={product.name} loading="lazy" />
        </div>
        <div className="product-tile-body">
          <h3 className="product-tile-name">{product.name}</h3>
          {product.rating && (
            <p className="product-tile-rating">
              <i className="fa-solid fa-star" />
              {product.rating} / 5
            </p>
          )}
          <div className="product-tile-footer">
            <span className="product-tile-price">₹{product.price}</span>
            {showAddToCart && (
              <button type="button" className="product-tile-cart-btn" onClick={handleAdd}>
                <AddShoppingCartIcon sx={{ fontSize: 15 }} />
                <span>Add</span>
              </button>
            )}
          </div>
        </div>
      </NavLink>
    </article>
  );
}
