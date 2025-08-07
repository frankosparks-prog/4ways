import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Google Fonts
const fontLink = (
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap"
    rel="stylesheet"
  />
);

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1100, once: true });
  }, []);

  return (
    <>
      {fontLink}
      <main
        className="min-h-screen bg-white text-gray-900"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {/* HERO SECTION */}
        <section className="relative flex flex-col justify-center items-center text-center px-6 py-48 bg-gradient-to-br from-blue-950 via-indigo-900 to-cyan-800 text-white overflow-hidden">
          {/* Overlay glow effect */}
          <div className="absolute inset-0 bg-black/30 z-0 backdrop-blur-sm" />

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto" data-aos="fade-down">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-xl">
              <span className="text-cyan-400">Redefining</span> Elegance
              <br />
              <span className="text-indigo-300">with Every Look</span>
            </h1>

            <p
              className="mt-6 text-lg sm:text-xl font-light text-blue-100 tracking-wide"
              data-aos="fade-up"
            >
              At{" "}
              <span className="font-semibold text-white">
                Vazi Executive Wear
              </span>
              , we bring you iconic styles, timeless class, and curated pieces
              that elevate your wardrobe.
            </p>

            <Link to="/shop" className="inline-block mt-10" data-aos="zoom-in">
              <button className="bg-gradient-to-r from-cyan-600 to-indigo-700 hover:from-indigo-700 hover:to-cyan-600 text-white font-semibold px-10 py-4 rounded-full shadow-xl hover:scale-105 transition-all duration-300">
                Explore Our Collection
              </button>
            </Link>
          </div>

          {/* Decorative SVG pattern (optional) */}
          <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              className="w-full h-20 text-white opacity-10"
            >
              <path
                d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                className="fill-current"
              ></path>
            </svg>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="py-24 px-6 max-w-5xl mx-auto text-center">
          <h2
            className="text-4xl font-bold mb-6 text-blue-900"
            data-aos="fade-up"
          >
            Welcome to Vazi Executive Wear
          </h2>
          <p
            className="text-blue-800 text-lg leading-relaxed max-w-3xl mx-auto font-medium"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            We’re not just a fashion store — we’re a lifestyle brand. Our
            handpicked outfits blend global trends with African flair to help
            you stand out, every day.
          </p>
        </section>

        {/* FEATURED PICKS */}
        <section className="bg-blue-50 py-24 px-6">
          <h2
            className="text-4xl font-bold text-center mb-16 text-blue-900"
            data-aos="fade-up"
          >
            Handpicked Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[1, 2, 3].map((item) => (
              <article
                key={item}
                className="bg-white shadow-md rounded-xl p-6 hover:shadow-2xl transition-transform hover:-translate-y-2"
                data-aos="zoom-in"
                data-aos-delay={item * 150}
              >
                <div
                  className="h-64 bg-cover bg-center rounded-lg mb-5"
                  style={{
                    backgroundImage: `url('https://picsum.photos/400/500?random=${
                      item + 100
                    }')`,
                  }}
                />
                <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                  Signature Style {item}
                </h3>
                <p className="text-gray-600 mb-3 font-light">
                  Elevate your fit with this refined, fashion-forward piece.
                </p>
                <span className="font-bold text-indigo-600 text-lg">
                  KSh 2,950
                </span>
              </article>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link to="/shop">
              <button className="bg-gradient-to-r from-cyan-600 to-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform">
                View Full Collection
              </button>
            </Link>
          </div>
        </section>

        {/* CUSTOMER STYLE SHOWCASE */}
        <section className="bg-white py-24 px-6">
          <h2
            className="text-4xl font-bold text-center mb-14 text-blue-900"
            data-aos="fade-up"
          >
            #ZamaLooks
          </h2>
          <div
            className="flex gap-6 overflow-x-scroll scrollbar-hide px-4 max-w-7xl mx-auto"
            data-aos="zoom-in"
          >
            {[1, 2, 3, 4, 5, 6].map((img) => (
              <div
                key={img}
                className="min-w-[300px] h-80 rounded-xl overflow-hidden shadow-lg flex-shrink-0 transform hover:scale-105 transition duration-300"
              >
                <img
                  src={`https://picsum.photos/400/300?random=${img + 70}`}
                  alt={`Vazi E.Wear ${img}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-blue-700">
            Styled by our vibrant community. Tag us to get featured.
          </p>
        </section>

        {/* NEWSLETTER SIGNUP */}
        <section className="py-20 px-6 bg-blue-50 text-center max-w-xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Stay Ahead in Style
          </h2>
          <p className="text-blue-800 mb-8 text-lg font-medium">
            Be the first to know about fresh drops, limited deals & exclusive
            looks.
          </p>
          <form className="flex flex-col sm:flex-row gap-5 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 border border-blue-300 rounded-md text-lg focus:outline-none focus:ring-4 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-600 to-indigo-700 text-white font-semibold px-8 py-3 rounded-md shadow-md hover:scale-105 transition-transform"
            >
              Subscribe
            </button>
          </form>
        </section>

        {/* BLOG / STYLE TIPS */}
        <section className="bg-white py-24 px-6">
          <h2
            className="text-4xl font-bold text-center mb-14 text-blue-900"
            data-aos="fade-up"
          >
            Style Guides & Inspiration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[1, 2, 3].map((blog) => (
              <article
                key={blog}
                className="bg-blue-50 rounded-xl shadow-md p-6 hover:shadow-xl transition"
                data-aos="fade-up"
                data-aos-delay={blog * 100}
              >
                <img
                  src={`https://picsum.photos/400/250?random=${blog + 90}`}
                  alt={`Blog ${blog}`}
                  className="w-full h-52 object-cover rounded-md mb-5"
                />
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                  Fashion Talk {blog}
                </h3>
                <p className="text-gray-600 mb-4">
                  Fresh takes on styling essentials, seasonal looks, and more.
                </p>
                <Link
                  // to={`/blog/${blog}`}
                  to={`/blog`}
                  className="text-indigo-600 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import axios from "axios";
// import { toast } from 'react-hot-toast';

// const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// function Home() {
//   const [featured, setFeatured] = useState([]);
//   const [blogs, setBlogs] = useState([]);
//   const [beaded, setBeaded] = useState([]);
//   const [inspiration, setInspiration] = useState([]);
//   const [testimonials, setTestimonials] = useState([]);
//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     AOS.init({ duration: 1000 });

//     // Fetch all dynamic content
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const [featuredRes, blogsRes, beadedRes, inspirationRes, testimonialsRes] = await Promise.all([
//         axios.get(`${SERVER_URL}/api/products?tag=Featured&limit=3`),
//         axios.get(`${SERVER_URL}/api/blogs?limit=3`),
//         axios.get(`${SERVER_URL}/api/products?collection=BeadedWithLove&limit=6`),
//         axios.get(`${SERVER_URL}/api/products?collection=Inspiration&limit=3`),
//         axios.get(`${SERVER_URL}/api/testimonials`),
//       ]);

//       setFeatured(featuredRes.data);
//       setBlogs(blogsRes.data);
//       setBeaded(beadedRes.data);
//       setInspiration(inspirationRes.data);
//       setTestimonials(testimonialsRes.data);
//     } catch (error) {
//       console.error("Failed to fetch homepage data:", error);
//     }
//   };

//   const handleSubscribe = async (e) => {
//   e.preventDefault();
//   try {
//     await axios.post(`${SERVER_URL}/api/subscribe`, { email });
//     toast.success("Thanks for subscribing!");
//     setEmail("");
//   } catch (err) {
//     toast.error("Subscription failed. Please try again.");
//     console.error(err);
//   }
// };

//   return (
//     <div>
//       {/* Hero Section */}
//       <section
//         className="bg-cover bg-center text-center py-32 px-4"
//         style={{
//           backgroundImage:
//             "url('https://img.freepik.com/free-photo/multi-colored-balls-with-abstract-patterns-shiny-jewelry-generated-by-ai_188544-21784.jpg?t=st=1746705694~exp=1746709294~hmac=bd738b84a458eea4b3629a724ba873af955632319fbe3d6d03ba59f6b41b00a8&w=1060')",
//         }}
//       >
//         <h1
//           className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg"
//           data-aos="fade-down"
//         >
//           Handmade Beadworks, Crafted with Love
//         </h1>
//         <p
//           className="text-lg text-white mb-6 max-w-xl mx-auto drop-shadow-lg"
//           data-aos="fade-up"
//         >
//           Explore our unique collection of beaded mats, jewelry, and home decor
//           — each piece tells a story.
//         </p>
//         <Link to="/shop">
//           <button
//             className="bg-amber-700 text-white px-6 py-2 rounded-lg hover:bg-amber-800 transition"
//             data-aos="zoom-in"
//           >
//             Shop Now
//           </button>
//         </Link>
//       </section>

//       {/* About Section */}
//       <section className="py-16 px-6 text-center bg-white">
//         <h2
//           className="text-3xl font-semibold mb-4 text-amber-900"
//           data-aos="fade-up"
//         >
//           Our Story
//         </h2>
//         <p
//           className="text-amber-800 max-w-2xl mx-auto"
//           data-aos="fade-up"
//           data-aos-delay="200"
//         >
//           Every bead, every stitch, every color — tells a story rooted in
//           African tradition and modern creativity. We are passionate about
//           sharing the beauty of handmade craft with the world.
//         </p>
//       </section>

//       {/* Featured Creations */}
//       <section className="bg-amber-50 py-16 px-6">
//         <h2 className="text-3xl font-semibold text-center mb-10 text-amber-900" data-aos="fade-up">
//           Featured Creations
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {featured.map((item, index) => (
//             <Link to={`/product/${item._id}`}>
//             <div
//               key={item._id}
//               className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition transform hover:-translate-y-1"
//               data-aos="zoom-in"
//               data-aos-delay={index * 150}
//             >
//               <div
//                 className="h-48 bg-cover bg-center rounded mb-4"
//                 style={{ backgroundImage: `url(${item.image})` }}
//               ></div>
//               <h3 className="text-xl font-semibold text-amber-800">{item.name}</h3>
//               <p className="text-sm text-gray-600 mt-1 mb-2">{item.description}</p>
//               <span className="font-bold text-amber-700">ksh {item.price}</span>
//             </div>
//             </Link>
//           ))}
//         </div>
//         <div className="text-center mt-10">
//           <Link to="/shop">
//             <button className="bg-amber-700 text-white px-6 py-2 rounded-lg hover:bg-amber-800 transition">
//               View All Products
//             </button>
//           </Link>
//         </div>
//       </section>

//       {/* Newsletter Signup */}
//       <section className="py-16 px-6 bg-white text-center" data-aos="fade-up">
//         <h2 className="text-3xl font-semibold text-amber-900 mb-4">Stay in the Loop</h2>
//         <p className="text-amber-800 mb-6">
//           Subscribe to our newsletter for updates, deals, and stories from our workshop.
//         </p>
//         <form onSubmit={handleSubscribe} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 justify-center">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="px-4 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 flex-1"
//           />
//           <button type="submit" className="bg-amber-700 text-white px-6 py-2 rounded-md hover:bg-amber-800 transition">
//             Subscribe
//           </button>
//         </form>
//       </section>

//       {/* Blog Section */}
//       <section className="py-16 px-6 bg-amber-50">
//         <h2 className="text-3xl font-semibold text-center mb-10 text-amber-900" data-aos="fade-up">
//           From the Blog
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {blogs.map((blog, index) => (
//             <div
//               key={blog._id}
//               className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-4"
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//             >
//               <img
//                 src={"https://img.freepik.com/free-photo/multi-colored-balls-with-abstract-patterns-shiny-jewelry-generated-by-ai_188544-21784.jpg?t=st=1746705694~exp=1746709294~hmac=bd738b84a458eea4b3629a724ba873af955632319fbe3d6d03ba59f6b41b00a8&w=1060"}
//                 alt="blog"
//                 className="w-full h-48 object-cover rounded-md mb-4"
//               />
//               <h3 className="text-xl font-semibold text-amber-800 mb-2">{blog.title}</h3>
//               <p className="text-sm text-gray-600 mb-2">{blog.description}</p>
//               <Link to={`/blog/${blog._id}`} className="text-amber-700 font-medium hover:underline">
//                 Read More
//               </Link>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* #BeadedWithLove Instagram-style Grid */}
//       <section className="py-16 px-6 bg-white">
//         <h2 className="text-3xl font-semibold text-center mb-10 text-amber-900" data-aos="fade-up">
//           #BeadedWithLove
//         </h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-6xl mx-auto">
//           {beaded.map((item, index) => (
//             <img
//               key={item._id}
//               src={item.image}
//               alt="beaded"
//               className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 rounded-lg"
//               data-aos="zoom-in"
//               data-aos-delay={index * 100}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Inspiration Gallery */}
//       <section className="py-16 px-6 bg-white">
//         <h2 className="text-3xl font-semibold text-center mb-10 text-amber-900" data-aos="fade-up">
//           Inspiration Gallery
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           {inspiration.map((item, index) => (
//             <img
//               key={item._id}
//               src={item.image}
//               alt="inspiration"
//               className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//             />
//           ))}
//         </div>
//       </section>
//       {/* Testimonials */}
//       <section className="py-16 px-6 bg-amber-50">
//         <h2 className="text-3xl font-semibold text-center mb-10 text-amber-900" data-aos="fade-up">
//           What Our Customers Say
//         </h2>
//         <div className="flex flex-col md:flex-row justify-center items-center gap-6">
//           {testimonials.slice(0, 3).map((testimonial, index) => (
//             <div
//               key={testimonial._id}
//               className="bg-white p-6 rounded-lg shadow-lg max-w-xs"
//               data-aos="fade-up"
//               data-aos-delay={index * 150}
//             >
//               <p className="text-sm text-gray-600 mb-4">"{testimonial.message}"</p>
//               <div className="text-amber-800 font-semibold">{testimonial.name}</div>
//               <span className="text-gray-500 text-xs">Verified Buyer</span>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;
