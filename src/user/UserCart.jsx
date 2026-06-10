import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useCart } from '../context/CartContext';

function UserCart() {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  if (!cart.length) {
    return (
      <div className="min-h-screen bg-[#f4f6fb] pt-24 pb-12 px-4 flex flex-col items-center justify-center gap-4">
        <div className="glass-panel p-10 text-center max-w-md w-full" style={{ background: 'white', color: '#333' }}>
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Add some products to get started.</p>
          <Link
            to="/userViewProducts"
            className="inline-block bg-[#0e1420] text-white px-6 py-3 rounded-xl no-underline font-medium"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  function checkout() {
    toast.success('Order placed successfully! (Demo checkout)');
    clearCart();
  }

  return (
    <div className="min-h-screen bg-[#f4f6fb] pt-24 pb-12 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="flex flex-col gap-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md p-4 sm:p-5 flex flex-col sm:flex-row gap-4 items-center scene-3d card-3d"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-xl shrink-0"
              />
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="text-[#EB4235] font-bold mt-1">₹{item.price}</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="p-1 rounded-lg bg-gray-100 border-none"
                  aria-label="Decrease quantity"
                >
                  <RemoveIcon fontSize="small" />
                </button>
                <span className="font-semibold w-6 text-center">{item.quantity}</span>
                <button
                  type="button"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-1 rounded-lg bg-gray-100 border-none"
                  aria-label="Increase quantity"
                >
                  <AddIcon fontSize="small" />
                </button>
              </div>
              <p className="font-bold text-gray-900 w-20 text-right">
                ₹{(Number(item.price) * item.quantity).toFixed(0)}
              </p>
              <button
                type="button"
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 bg-transparent border-none p-1"
                aria-label="Remove item"
              >
                <DeleteOutlineIcon />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-2xl shadow-md p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-gray-500 text-sm">Order Total</p>
            <p className="text-3xl font-extrabold text-gray-900">₹{cartTotal.toFixed(0)}</p>
          </div>
          <button
            type="button"
            onClick={checkout}
            className="w-full sm:w-auto bg-[#EB4235] text-white px-10 py-3 rounded-xl font-semibold border-none"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCart;
