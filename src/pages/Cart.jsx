// import React from 'react';
// import { useCart } from '../context/CartContext';
// import { Trash2, Plus, Minus } from 'lucide-react';

// function Cart() {
//   const { cartItems, removeFromCart, updateQuantity } = useCart();

//   const subtotal = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="max-w-4xl mx-auto p-6 mt-16 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold mb-4 text-amber-800">Your Cart 🛒</h2>

//       {cartItems.length === 0 ? (
//         <p className="text-gray-500">Your cart is empty.</p>
//       ) : (
//         <div className="space-y-6">
//           {cartItems.map((item) => (
//             <div
//               key={item.id}
//               className="flex items-center justify-between border p-4 rounded-md shadow-sm bg-white"
//             >
//               <div className="flex items-center space-x-4">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-20 h-20 object-cover rounded"
//                 />
//                 <div>
//                   <h3 className="text-lg font-semibold text-amber-900">{item.name}</h3>
//                   <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                  
//                   {/* Product Description */}
//                   <p className="text-sm text-gray-500 mt-1">{item.description}</p>

//                   <div className="flex items-center mt-2 space-x-2">
//                     <button
//                       onClick={() => updateQuantity(item.id, -1)}
//                       className="p-1 bg-gray-200 rounded hover:bg-gray-300"
//                     >
//                       <Minus size={16} />
//                     </button>
//                     <span className="px-2">{item.quantity}</span>
//                     <button
//                       onClick={() => updateQuantity(item.id, 1)}
//                       className="p-1 bg-gray-200 rounded hover:bg-gray-300"
//                     >
//                       <Plus size={16} />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <button
//                 onClick={() => removeFromCart(item.id)}
//                 className="text-red-600 hover:text-red-800"
//               >
//                 <Trash2 size={20} />
//               </button>
//             </div>
//           ))}

//           <div className="flex justify-between items-center pt-6 border-t">
//             <p className="text-lg font-bold text-amber-800">
//               Subtotal: ksh {subtotal.toFixed(2)}
//             </p>
//             <button className="bg-amber-700 text-white px-6 py-2 rounded hover:bg-amber-800">
//               Checkout
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;

import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();  // Initialize useNavigate
  
  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Checkout function
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
    } else {
      // Navigate to checkout page (adjust path if needed)
      navigate('/checkout');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-16 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-amber-800">Your Cart 🛒</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded-md shadow-sm bg-white"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="text-lg font-semibold text-amber-900">{item.name}</h3>
                  <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                  {/* Product Description */}
                  <p className="text-sm text-gray-500 mt-1">{item.description}</p>

                  <div className="flex items-center mt-2 space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}

          {/* Cart Summary and Checkout */}
          <div className="flex justify-between items-center pt-6 border-t">
            <p className="text-lg font-bold text-amber-800">
              Subtotal: ksh {subtotal.toFixed(2)}
            </p>
            <button
              onClick={handleCheckout}  // Trigger checkout
              className={`px-6 py-2 rounded ${cartItems.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-amber-700 text-white hover:bg-amber-800'}`}
              disabled={cartItems.length === 0}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;


