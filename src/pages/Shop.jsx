import React, { useState } from "react";
import { FaHeart, FaCartPlus, FaSearch } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

AOS.init();

const sampleProducts = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: `Sample Product ${i + 1}`,
  image: `https://picsum.photos/300/300?random=${i + 1}`,
  price: 1000 + i * 100,
  category: [
    "Men's Clothing",
    "Women's Clothing",
    "Kids' Clothing",
    "Shoes",
    "Bags & Accessories",
    "Home Decor",
    "Household Items",
  ][i % 5],
  tag: ["New Arrival", "Bestseller", "Featured"][i % 3],
  dateAdded: Date.now() - i * 10000000,
  rating: 5 - (i % 5),
}));

function Shop() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [sortOption, setSortOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [likedProducts, setLikedProducts] = useState([]);
  const itemsPerPage = 6;
  const { addToCart } = useCart();

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredProducts = sampleProducts
    .filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((p) =>
      selectedCategories.length ? selectedCategories.includes(p.category) : true
    )
    .filter((p) => p.price <= maxPrice)
    .sort((a, b) => {
      switch (sortOption) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "newest":
          return b.dateAdded - a.dateAdded;
        case "rated":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleLike = (productId) => {
    setLikedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="bg-amber-50 text-amber-900 min-h-screen px-6 py-12 sm:px-12 lg:px-20 mt-12">
      {/* Hero */}
      <header className="text-center mb-12" data-aos="fade-down">
        <h1 className="text-5xl font-extrabold tracking-tight mb-3 text-amber-900">
          Shop Our Collection
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-amber-700">
          Discover handcrafted jewelry made with love and tradition.
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Filters Sidebar */}
        <aside
          className="md:w-1/4 bg-white p-8 rounded-lg shadow-lg border border-amber-200"
          data-aos="fade-right"
        >
          <div className="space-y-8">
            {/* Search */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-amber-900">
                Search
              </h2>
              <div className="relative text-amber-600 focus-within:text-amber-900">
                <FaSearch className="absolute left-4 top-3.5 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-12 pr-4 py-3 border border-amber-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  aria-label="Search products"
                />
              </div>
            </div>

            {/* Category */}
            <div>
              <h3 className="font-semibold text-xl mb-4 text-amber-900">
                Category
              </h3>
              <div className="space-y-3">
                {[
                  "Men's Clothing",
                  "Women's Clothing",
                  "Kids' Clothing",
                  "Shoes",
                  "Bags & Accessories",
                  "Home Decor",
                  "Household Items",
                ].map((cat) => (
                  <label
                    key={cat}
                    className="inline-flex items-center space-x-2 cursor-pointer text-amber-800 hover:text-amber-600 transition"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => handleCategoryChange(cat)}
                      className="form-checkbox h-5 w-5 text-amber-600"
                      aria-checked={selectedCategories.includes(cat)}
                    />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Max Price */}
            <div>
              <h3 className="font-semibold text-xl mb-3 text-amber-900">
                Max Price
              </h3>
              <input
                type="range"
                min="100"
                max="5000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full accent-amber-600"
                aria-valuemin={100}
                aria-valuemax={5000}
                aria-valuenow={maxPrice}
                aria-label="Max price filter"
              />
              <p className="mt-2 text-amber-600 font-semibold">
                Ksh {maxPrice}
              </p>
            </div>

            {/* Tags */}
            <div>
              <h3 className="font-semibold text-xl mb-3 text-amber-900">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {["New Arrival", "Bestseller", "Featured"].map((tag) => (
                  <span
                    key={tag}
                    className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium select-none"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Sort */}
          <div className="flex justify-end mb-8" data-aos="fade-left">
            <select
              className="border border-amber-300 p-3 rounded-md text-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              aria-label="Sort products"
            >
              <option value="">Sort by</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
              <option value="rated">Best Rated</option>
            </select>
          </div>

          {/* Products Grid */}
          <section
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            data-aos="fade-up"
            aria-live="polite"
          >
            {paginatedProducts.length === 0 ? (
              <p className="text-center col-span-full text-amber-500 font-medium">
                No products found matching your criteria.
              </p>
            ) : (
              paginatedProducts.map((product) => (
                <article
                  key={product.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden relative flex flex-col border border-amber-200"
                >
                  <Link
                    to={`/product/${product.id}`}
                    className="block overflow-hidden"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
                      loading="lazy"
                    />
                  </Link>
                  <span className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 text-xs font-semibold rounded-full select-none">
                    {product.tag}
                  </span>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold mb-2 text-amber-900 truncate">
                      {product.name}
                    </h3>
                    <p className="text-amber-700 font-bold mb-4">
                      Ksh {product.price}
                    </p>
                    <div className="mt-auto flex items-center gap-3">
                      <button
                        className="flex-1 bg-amber-700 text-white py-2 rounded-md hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                        onClick={() => addToCart(product)}
                        aria-label={`Add ${product.name} to cart`}
                      >
                        <FaCartPlus className="inline mr-2" /> Add to Cart
                      </button>
                      <button
                        onClick={() => toggleLike(product.id)}
                        aria-pressed={likedProducts.includes(product.id)}
                        aria-label={
                          likedProducts.includes(product.id)
                            ? `Unlike ${product.name}`
                            : `Like ${product.name}`
                        }
                        className={`p-2 rounded-md border transition ${
                          likedProducts.includes(product.id)
                            ? "bg-red-100 border-red-500 text-red-600"
                            : "bg-white border-amber-300 text-amber-700 hover:bg-amber-50"
                        } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400`}
                      >
                        <FaHeart />
                      </button>
                    </div>
                  </div>
                </article>
              ))
            )}
          </section>

          {/* Pagination */}
          <nav
            className="flex justify-center items-center space-x-4 mt-10"
            aria-label="Pagination Navigation"
          >
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-5 py-2 bg-amber-700 text-white rounded-md disabled:opacity-50 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-disabled={currentPage === 1}
            >
              Prev
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`px-4 py-1 rounded-full text-sm font-semibold ${
                  currentPage === i + 1
                    ? "bg-amber-600 text-white"
                    : "bg-amber-100 text-amber-700 hover:bg-amber-200"
                } focus:outline-none focus:ring-2 focus:ring-amber-500`}
                onClick={() => setCurrentPage(i + 1)}
                aria-current={currentPage === i + 1 ? "page" : undefined}
              >
                {i + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages || totalPages === 0}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-5 py-2 bg-amber-700 text-white rounded-md disabled:opacity-50 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-disabled={currentPage === totalPages || totalPages === 0}
            >
              Next
            </button>
          </nav>
        </main>
      </div>
    </div>
  );
}

export default Shop;

// import React, { useState, useEffect } from "react";
// import { FaHeart, FaCartPlus, FaSearch } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import axios from "axios";
// import CircularProgress from "@mui/material/CircularProgress";

// const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// AOS.init();

// function Shop() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [maxPrice, setMaxPrice] = useState(5000);
//   const [sortOption, setSortOption] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [likedProducts, setLikedProducts] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const itemsPerPage = 6;
//   const { addToCart } = useCart();

//   // Fetch products from backend
//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       setError("");

//       try {
//         const queryParams = new URLSearchParams({
//           search: searchTerm,
//           maxPrice: maxPrice,
//           sort: sortOption,
//         });

//         // Add selected category filters
//         if (selectedCategories.length === 1) {
//           queryParams.append("category", selectedCategories[0]);
//         }

//         const res = await axios.get(
//           `${SERVER_URL}/api/products?${queryParams}`
//         );
//         setProducts(res.data);
//       } catch (err) {
//         setError("Failed to load products.");
//       }

//       setLoading(false);
//     };

//     fetchProducts();
//   }, [searchTerm, selectedCategories, maxPrice, sortOption]);

//   const totalPages = Math.ceil(products.length / itemsPerPage);
//   const paginatedProducts = products.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handleCategoryChange = (category) => {
//     setSelectedCategories((prev) =>
//       prev.includes(category)
//         ? prev.filter((c) => c !== category)
//         : [...prev, category]
//     );
//   };

//   const toggleLike = (productId) => {
//     setLikedProducts((prev) =>
//       prev.includes(productId)
//         ? prev.filter((id) => id !== productId)
//         : [...prev, productId]
//     );
//   };

//   return (
//     <div className="bg-amber-50 text-amber-900 min-h-screen px-4 sm:px-6 py-10 mt-12 md:mt-6">
//       <div className="text-center mb-10" data-aos="fade-down">
//         <h1 className="text-4xl font-bold mb-3">Shop Our Collection</h1>
//         <p className="text-lg max-w-2xl mx-auto text-amber-800">
//           Discover handcrafted jewelry made with love and tradition.
//         </p>
//       </div>

//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Filters Sidebar */}
//         <aside className="md:w-1/4" data-aos="fade-right">
//           <div className="bg-white p-6 rounded-lg shadow space-y-6">
//             <div>
//               <h2 className="text-xl font-semibold mb-2">Search</h2>
//               <div className="relative">
//                 <FaSearch className="absolute left-3 top-3 text-amber-400" />
//                 <input
//                   type="text"
//                   placeholder="Search products..."
//                   className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//               </div>
//             </div>

//             <div>
//               <h3 className="font-bold mb-2">Category</h3>
//               {[
//                 "Home & living",
//                 "Decor",
//                 "Fashion",
//                 "Accessories",
//                 "Art & collectibles",
//               ].map((cat) => (
//                 <div key={cat}>
//                   <label className="flex items-center gap-2">
//                     <input
//                       type="checkbox"
//                       checked={selectedCategories.includes(cat)}
//                       onChange={() => handleCategoryChange(cat)}
//                     />
//                     {cat}
//                   </label>
//                 </div>
//               ))}
//             </div>

//             <div>
//               <h3 className="font-bold mb-2">Max Price</h3>
//               <input
//                 type="range"
//                 min="10"
//                 max="5000"
//                 value={maxPrice}
//                 onChange={(e) => setMaxPrice(e.target.value)}
//                 className="w-full"
//               />
//               <p className="text-sm text-amber-700 mt-1">Ksh {maxPrice}</p>
//             </div>

//             <div>
//               <h3 className="font-bold mb-2">Tags</h3>
//               <div className="flex flex-wrap gap-2">
//                 {["New Arrival", "Bestseller", "Featured"].map((tag) => (
//                   <span
//                     key={tag}
//                     className="bg-amber-200 px-2 py-1 rounded-full text-sm"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <div className="flex-1">
//           {/* Sort */}
//           <div className="flex justify-end mb-6" data-aos="fade-left">
//             <select
//               className="border border-amber-300 p-2 rounded"
//               value={sortOption}
//               onChange={(e) => setSortOption(e.target.value)}
//             >
//               <option value="">Sort by</option>
//               <option value="price-low">Price: Low to High</option>
//               <option value="price-high">Price: High to Low</option>
//               <option value="newest">Newest</option>
//               <option value="rated">Best Rated</option>
//             </select>
//           </div>

//           {/* Products Grid */}
//           {loading ? (
//             <div className="flex justify-center items-center py-20">
//               <CircularProgress style={{ color: "#D97706" }} />{" "}
//               {/* Tailwind amber-600 */}
//             </div>
//           ) : error ? (
//             <p className="text-center text-red-600 bg-red-100 border border-red-300 px-4 py-2 rounded-md w-fit mx-auto font-semibold mb-6">
//               {error}
//             </p>
//           ) : (
//             <div
//               className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
//               // data-aos="fade-up"
//             >
//               {paginatedProducts.map((product) => (
//                 <div
//                   key={product._id}
//                   className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition relative"
//                 >
//                   <Link to={`/product/${product._id}`}>
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-64 object-cover rounded-lg mb-4"
//                     />
//                   </Link>
//                   <span className="absolute top-4 left-4 bg-amber-500 text-white px-2 py-1 text-xs rounded-full">
//                     {product.tag}
//                   </span>
//                   <h3 className="font-semibold text-lg">{product.name}</h3>
//                   <p className="text-amber-700 font-bold mb-3">
//                     Ksh {product.price}
//                   </p>
//                   <div className="flex gap-3">
//                     <button
//                       className="flex-1 bg-amber-900 text-white py-2 rounded hover:bg-amber-800"
//                       onClick={() => addToCart(product)}
//                     >
//                       <FaCartPlus className="inline mr-2" /> Add to Cart
//                     </button>
//                     <button
//                       onClick={() => toggleLike(product._id)}
//                       className={`p-2 rounded border ${
//                         likedProducts.includes(product._id)
//                           ? "bg-red-100 border-red-500 text-red-500"
//                           : "bg-white border-amber-900 text-amber-900 hover:bg-amber-100"
//                       }`}
//                     >
//                       <FaHeart />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Pagination */}
//           <div className="flex justify-center items-center space-x-4">
//             <button
//               disabled={currentPage === 1}
//               onClick={() => setCurrentPage((p) => p - 1)}
//               className="px-4 py-2 bg-amber-900 text-white rounded disabled:opacity-50"
//             >
//               Prev
//             </button>
//             {[...Array(totalPages)].map((_, i) => (
//               <button
//                 key={i}
//                 className={`px-3 py-1 rounded-full text-sm font-medium ${
//                   currentPage === i + 1
//                     ? "bg-amber-500 text-white"
//                     : "bg-amber-100"
//                 }`}
//                 onClick={() => setCurrentPage(i + 1)}
//               >
//                 {i + 1}
//               </button>
//             ))}
//             <button
//               disabled={currentPage === totalPages}
//               onClick={() => setCurrentPage((p) => p + 1)}
//               className="px-4 py-2 bg-amber-900 text-white rounded disabled:opacity-50"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Shop;
