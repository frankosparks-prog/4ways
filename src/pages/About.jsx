import React, { useEffect } from "react";
import { FaGem, FaHandsHelping, FaHeart, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-amber-50 text-amber-900 px-6 md:mt-4 mt-12 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h1 className="text-4xl font-bold mb-4">About Beadworks Boutique</h1>
        <p className="text-lg max-w-2xl mx-auto text-amber-800">
          Crafting beauty one bead at a time. Our passion is turning tradition
          into timeless elegance.
        </p>
      </div>

      {/* Our Story */}
      <section className="max-w-5xl mx-auto mb-16 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://picsum.photos/400/250?random=12"
          alt="Beadworks"
          className="rounded-lg shadow-md w-full object-cover h-80"
          data-aos="fade-right"
        />
        <div data-aos="fade-left">
          <h2 className="text-2xl font-semibold mb-4">Our Story & History</h2>
          <p className="text-amber-800">
            Founded in 2021, Beadworks Boutique began as a heartfelt venture
            rooted in tradition and love for handmade art. Each creation
            embodies cultural depth, modern fashion, and community empowerment.
            <br />
            <br />
            We started with just a few beaded pieces at local fairs and evolved
            into a full brand that supports local talent and celebrates African
            elegance.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="text-center mb-20" data-aos="zoom-in">
        <h2 className="text-2xl font-semibold mb-8">What We Stand For</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            data-aos="flip-left"
          >
            <FaGem className="text-4xl text-amber-700 mb-4 mx-auto" />
            <h3 className="text-lg font-bold mb-2">Craftsmanship</h3>
            <p>
              We believe in quality over quantity. Every item is handmade with
              love and precision.
            </p>
          </div>
          <div
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            data-aos="flip-up"
          >
            <FaHandsHelping className="text-4xl text-amber-700 mb-4 mx-auto" />
            <h3 className="text-lg font-bold mb-2">Empowerment</h3>
            <p>
              We support local artisans and provide platforms for women in
              business to thrive.
            </p>
          </div>
          <div
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            data-aos="flip-right"
          >
            <FaHeart className="text-4xl text-amber-700 mb-4 mx-auto" />
            <h3 className="text-lg font-bold mb-2">Passion</h3>
            <p>
              We love what we do and it shows in every stitch, clasp, and
              strand.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-4xl mx-auto mb-16" data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Why Choose Us?
        </h2>
        <p className="text-center text-amber-800">
          Our products aren’t just accessories — they are stories, statements,
          and symbols of identity. With eco-friendly practices, fair trade
          partnerships, and culturally inspired designs, we blend authenticity
          with style.
        </p>
      </section>

      {/* Contact Button */}
      <div className="text-center" data-aos="zoom-in-up">
        <Link to="/contact">
          <button className="mt-4 inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-full text-lg transition duration-300">
            <FaPhoneAlt />
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
}

export default About;
