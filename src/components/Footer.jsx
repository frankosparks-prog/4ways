// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Facebook, Instagram, Mail } from 'lucide-react';

// function Footer() {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <>
//       <footer className="bg-amber-900 text-white py-10 px-6 mt-20">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left">
//           {/* Branding */}
//           <div>
//             <h3 className="text-xl font-semibold mb-3">Fourways secondhand clothes</h3>
//             <p className="text-sm text-amber-200">
//               Handmade with passion. Designed to inspire. Beaded with love.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
//             <ul className="space-y-2 text-sm">
//               <li><Link to="/" className="hover:underline">Home</Link></li>
//               <li><Link to="/shop" className="hover:underline">Shop</Link></li>
//               <li><Link to="/blog" className="hover:underline">Blog</Link></li>
//               <li><Link to="/about" className="hover:underline">About</Link></li>
//               <li><Link to="/contact" className="hover:underline">Contact</Link></li>
//               <li><button onClick={() => setShowModal(true)} className="hover:underline">Terms & Returns</button></li>
//             </ul>
//           </div>

//           {/* Contact + Social */}
//           <div>
//             <h4 className="text-lg font-semibold mb-3">Connect with Us</h4>
//             <div className="flex justify-center sm:justify-start gap-4 mb-4">
//               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300">
//                 <Facebook />
//               </a>
//               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300">
//                 <Instagram />
//               </a>
//               <a href="mailto:info@beadworks.com" className="hover:text-amber-300">
//                 <Mail />
//               </a>
//             </div>
//             <p className="text-sm text-amber-200">info@beadworks.com</p>
//           </div>
//         </div>

//         <div className="border-t border-amber-700 mt-10 pt-4 text-sm text-amber-300 text-center">
//           &copy; {new Date().getFullYear()} Fourways secondhand clothes. All rights reserved.
//         </div>
//       </footer>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
//           <div className="bg-white text-black p-6 rounded-xl max-w-lg w-full shadow-lg relative">
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-2 right-4 text-xl font-bold text-grey-700 hover:text-red-500"
//             >
//               ×
//             </button>
//             <h2 className="text-lg font-bold mb-4">Terms of Service & Returns</h2>
//             <p className="text-sm mb-3">
//               All items are handmade with care. Orders are processed within 2–3 business days. Due to the custom nature of our products, we only accept returns for defective or damaged items.
//             </p>
//             <p className="text-sm">
//               If you have any issues with your order, please contact us within 7 days of delivery. Returns must be unused and in original packaging. Shipping costs are non-refundable.
//             </p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Footer;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

function Footer() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <footer className="bg-zinc-900 text-gray-200 px-6 py-12 mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
          
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Zama Fashions</h3>
            <p className="text-gray-400">
              Your one-stop destination for elegant, curated, and affordable secondhand fashion pieces. Style is eternal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/shop" className="hover:text-white">Shop</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Customer Care</h4>
            <ul className="space-y-2">
              <li><button onClick={() => setShowModal(true)} className="hover:text-white">Terms & Returns</button></li>
              <li><Link to="/faq" className="hover:text-white">FAQs</Link></li>
              <li><Link to="/shipping" className="hover:text-white">Shipping Info</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Connect with Us */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="mailto:info@Zamafashions.com" className="hover:text-white">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400 flex items-center gap-1"><Mail size={14} /> info@Zamafashions.com</p>
            <p className="text-gray-400 flex items-center gap-1"><Phone size={14} /> +254 712 345 678</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Zama Fashions. All rights reserved.
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-xl max-w-md w-full shadow-2xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-2xl font-bold text-gray-700 hover:text-red-500"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Terms & Returns</h2>
            <p className="text-sm mb-3">
              We accept returns only for damaged or defective items. Kindly report within 7 days of delivery.
            </p>
            <p className="text-sm">
              All items must be returned in their original condition and packaging. Shipping costs are non-refundable.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
