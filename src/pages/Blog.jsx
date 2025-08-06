import React from "react";
import { Calendar } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "New Arrivals: Royal Blue Elegance",
    date: "July 18, 2025",
    description:
      "Discover our latest collection of gowns and dresses, featuring bold cuts and timeless elegance in our signature blue hues.",
    link: "/blog/1",
  },
  {
    id: 2,
    title: "Style Talk: How to Pair Beaded Accessories",
    date: "July 5, 2025",
    description:
      "A modern guide on how to elevate your outfits using handcrafted beaded accessories from Zama.",
    link: "/blog/2",
  },
  {
    id: 3,
    title: "Zama’s Artisan Stories: Behind the Seams",
    date: "June 25, 2025",
    description:
      "Get inspired by the hands and hearts behind our fashion—meet the creatives behind every stitch and sparkle.",
    link: "/blog/3",
  },
];

function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4 text-center shadow-lg overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('https://picsum.photos/400/250?random=2')" }}></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
            Welcome to the Zama Blog
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Discover fashion tips, new arrivals, and behind-the-scenes stories
            from the heart of our boutique.
          </p>

          <div className="mt-8">
            <a
              href="#latest-posts"
              className="inline-block bg-white text-blue-800 hover:bg-blue-100 transition px-6 py-3 rounded-full font-semibold shadow-md"
            >
              Explore Latest Posts
            </a>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow-lg p-6 hover:scale-[1.02] transition transform duration-300 border border-blue-100"
          >
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              {post.title}
            </h3>
            <div className="flex items-center text-sm text-blue-700 mb-3">
              <Calendar className="w-4 h-4 mr-2" /> {post.date}
            </div>
            <p className="text-gray-700 mb-4">{post.description}</p>
            {/* <a
              href={post.link}
              className="text-blue-700 hover:text-blue-900 font-semibold transition"
            >
              Read more →
            </a> */}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Blog;

// import React, { useEffect, useState } from "react";
// import { Calendar } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import CircularProgress from "@mui/material/CircularProgress";

// const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// function Blog() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch(`${SERVER_URL}/api/blogs`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch blog posts");
//         }
//         const data = await response.json();
//         setPosts(data);
//       } catch (error) {
//         console.error("Error fetching posts:", error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);
// const formatDateWithSuffix = (dateStr) => {
//   const dateObj = new Date(dateStr);

//   const day = dateObj.getDate();
//   const month = dateObj.toLocaleString("default", { month: "long" });
//   const year = dateObj.getFullYear();

//   // Determine the ordinal suffix
//   const getSuffix = (d) => {
//     if (d > 3 && d < 21) return "th";
//     switch (d % 10) {
//       case 1: return "st";
//       case 2: return "nd";
//       case 3: return "rd";
//       default: return "th";
//     }
//   };

//   return `${day}${getSuffix(day)} ${month} ${year}`;
// };
//   return (
//     <div className="min-h-screen bg-white mt-12 md:mt-4">
//       {/* Hero Section */}
//       <section className="bg-amber-100 text-center py-16 px-4">
//         <h1 className="text-4xl font-bold text-amber-900 mb-4">
//           Fourways_Secondhand_Clothes Blog
//         </h1>
//         <p className="text-lg text-amber-800 max-w-xl mx-auto">
//           Stories, insights, and style tips from the world of beads and fashion.
//         </p>
//       </section>

//       {/* Loading State */}
//       {loading ? (
//         <div className="flex justify-center items-center py-20">
//           {" "}
//           <CircularProgress style={{ color: "#D97706" }} />
//         </div>
//       ) : (
//         <section className="max-w-6xl mx-auto px-4 py-16 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {posts.length > 0 ? (
//             posts.map((post) => (
//               <div
//                 key={post._id}
//                 className="border rounded-xl shadow-sm hover:shadow-lg transition p-6 bg-amber-50"
//               >
//                 <h3 className="text-xl font-semibold text-amber-900 mb-2">
//                   {post.title}
//                 </h3>
//                 <div className="flex items-center text-sm text-amber-700 mb-1">
//                   <Calendar className="w-4 h-4 mr-2" />{formatDateWithSuffix(post.date)}
//                 </div>
//                 <p className="text-sm text-amber-700 italic mb-2">
//                   By {post.author}
//                 </p>
//                 <p className="text-amber-800 mb-4">{post.description}</p>
//                 <button
//                   onClick={() => navigate(`/blog/${post._id}`)}
//                   className="text-amber-700 font-medium hover:underline"
//                 >
//                   Read more →
//                 </button>
//               </div>
//             ))
//           ) : (
//             <div className="text-center text-amber-700 col-span-full">
//               No blog posts available.
//             </div>
//           )}
//         </section>
//       )}
//     </div>
//   );
// }

// export default Blog;
