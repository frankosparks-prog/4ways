import React, { useEffect } from "react";
import { FaRecycle, FaUsers, FaHeart, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 text-amber-900 px-6 py-16 mt-12">
      {/* Hero Section */}
      <div className="text-center mb-16" data-aos="fade-down">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight drop-shadow-sm">
          About Fourways Second Hand Clothes
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-amber-700 leading-relaxed">
          Quality pre-loved fashion with a purpose — making style affordable, sustainable, and community-driven.
        </p>
      </div>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto mb-20 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=600&q=80"
          alt="Fourways Second Hand Clothes Store"
          className="rounded-3xl shadow-lg w-full object-cover h-96 hover:scale-105 transition-transform duration-500"
          data-aos="fade-right"
        />
        <div data-aos="fade-left">
          <h2 className="text-3xl font-semibold mb-6 border-l-4 border-amber-600 pl-4">
            Our Story & Mission
          </h2>
          <p className="text-amber-800 leading-relaxed text-lg">
            Founded in 2018, Fourways Second Hand Clothes is dedicated to providing high-quality, affordable second-hand clothing to our community. We believe in extending the life of fashion while promoting sustainability and reducing waste.
          </p>
          <p className="text-amber-800 leading-relaxed text-lg mt-4">
            Our carefully curated collection supports eco-friendly shopping habits and helps customers find unique styles without compromising their budget or the planet.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="text-center mb-24" data-aos="zoom-in">
        <h2 className="text-3xl font-semibold mb-12 tracking-wide">What We Stand For</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[{
            icon: <FaRecycle className="text-5xl text-amber-700 mb-5 mx-auto" />,
            title: "Sustainability",
            desc: "Giving clothes a second life to reduce fashion waste and protect the environment."
          }, {
            icon: <FaUsers className="text-5xl text-amber-700 mb-5 mx-auto" />,
            title: "Community",
            desc: "Supporting local families and fostering connections through affordable, quality clothing."
          }, {
            icon: <FaHeart className="text-5xl text-amber-700 mb-5 mx-auto" />,
            title: "Passion",
            desc: "Passionate about fashion that’s both stylish and responsible."
          }].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-default"
              data-aos={`flip-${i === 0 ? 'left' : i === 1 ? 'up' : 'right'}`}
            >
              {icon}
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-amber-700 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-4xl mx-auto mb-20 px-6 bg-white rounded-3xl shadow-lg" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-center mb-8 text-amber-900">
          Why Shop With Fourways Second Hand Clothes?
        </h2>
        <p className="text-center text-amber-700 leading-relaxed text-lg max-w-3xl mx-auto">
          We combine affordability, quality, and sustainability. Every item in our store is carefully inspected and selected to ensure you get great style without compromising the planet. Join us in making fashion circular and empowering our local community.
        </p>
      </section>

      {/* Contact Button */}
      <div className="text-center" data-aos="zoom-in-up">
        <Link to="/contact" aria-label="Contact Us Page">
          <button className="mt-6 inline-flex items-center gap-3 bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg transition duration-300">
            <FaPhoneAlt className="text-lg" />
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
}

export default About;
