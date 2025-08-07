import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Format WhatsApp message
  const whatsappText = encodeURIComponent(
    `Hi Vazi Executive Wear and beauty center! I'm interested in buying the following items:\n\n${cartItems
      .map(
        (item) =>
          `• ${item.name} (Qty: ${item.quantity}) - Ksh ${(
            item.price * item.quantity
          ).toFixed(2)}`
      )
      .join('\n')}\n\nTotal: Ksh ${subtotal.toFixed(2)}`
  );

  const whatsappLink = `https://wa.me/254738380692?text=${whatsappText}`;

  return (
    <div className="max-w-6xl mx-auto mt-24 px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 text-gray-800">
      {/* Cart Items Section */}
      <section className="lg:col-span-2 space-y-6">
        <h2 className="text-3xl font-bold text-blue-800 border-b pb-4">🛒 Your Cart</h2>

        {cartItems.length === 0 ? (
          <div className="text-gray-500 text-lg">
            Your cart is currently empty.{' '}
            <Link to="/" className="text-blue-700 hover:underline">
              Start shopping →
            </Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 object-cover flex-shrink-0"
              />
              <div className="flex flex-col flex-grow px-4 py-3 justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-blue-900">{item.name}</h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  {/* Quantity Controls */}
                  <div className="flex items-center border rounded-md overflow-hidden">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      disabled={item.quantity <= 1}
                      className="px-3 py-1 text-blue-700 hover:bg-blue-100 disabled:opacity-40 transition"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4 font-semibold text-blue-900">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-3 py-1 text-blue-700 hover:bg-blue-100 transition"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Price + Remove */}
                  <div className="flex items-center gap-6">
                    <p className="text-blue-800 font-semibold">
                      Ksh {(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </section>

      {/* Summary / WhatsApp CTA */}
      <aside className="bg-white shadow-md rounded-xl p-6 h-fit sticky top-28">
        <h3 className="text-2xl font-semibold text-blue-900 mb-6 border-b pb-4">
          Summary
        </h3>
        <div className="flex justify-between text-lg font-medium text-gray-700 mb-4">
          <span>Subtotal</span>
          <span>Ksh {subtotal.toFixed(2)}</span>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`block mt-6 bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-lg font-semibold transition ${
            cartItems.length === 0 ? 'pointer-events-none opacity-50' : ''
          }`}
        >
          Book or Buy via WhatsApp
        </a>

        <p className="text-sm text-gray-500 mt-3">
          We'll confirm your order and guide you through the next steps on WhatsApp.
        </p>
      </aside>
    </div>
  );
}

export default Cart;


// import React from 'react';
// import { useCart } from '../context/CartContext';
// import { Trash2, Plus, Minus } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';  // Import useNavigate

// function Cart() {
//   const { cartItems, removeFromCart, updateQuantity } = useCart();
//   const navigate = useNavigate();  // Initialize useNavigate
  
//   // Calculate subtotal
//   const subtotal = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   // Checkout function
//   const handleCheckout = () => {
//     if (cartItems.length === 0) {
//       alert('Your cart is empty!');
//     } else {
//       // Navigate to checkout page (adjust path if needed)
//       navigate('/checkout');
//     }
//   };

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

//           {/* Cart Summary and Checkout */}
//           <div className="flex justify-between items-center pt-6 border-t">
//             <p className="text-lg font-bold text-amber-800">
//               Subtotal: ksh {subtotal.toFixed(2)}
//             </p>
//             <button
//               onClick={handleCheckout}  // Trigger checkout
//               className={`px-6 py-2 rounded ${cartItems.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-amber-700 text-white hover:bg-amber-800'}`}
//               disabled={cartItems.length === 0}
//             >
//               Checkout
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;


