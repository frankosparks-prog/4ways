import React, { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Thank you for reaching out to Zama Fashions! We'll get back to you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12 mt-8">
      {/* Hero */}
      <div className="text-center mb-16" data-aos="fade-down">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Let's Talk Style</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-600">
          Whether you're inquiring about a custom outfit, collaboration, or just want to say hello — we're all ears.
        </p>
      </div>

      {/* Contact Info Cards */}
      <section className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-2xl font-semibold mb-8 text-gray-800">Reach Us</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <FaEnvelope className="text-3xl text-indigo-600 mb-3 mx-auto" />
            <h3 className="text-lg font-semibold mb-1">Email</h3>
            <p>support@Zamafashions.com</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <FaPhoneAlt className="text-3xl text-indigo-600 mb-3 mx-auto" />
            <h3 className="text-lg font-semibold mb-1">Call Us</h3>
            <p>+254 712 345 678</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <FaMapMarkerAlt className="text-3xl text-indigo-600 mb-3 mx-auto" />
            <h3 className="text-lg font-semibold mb-1">Visit Our Store</h3>
            <p>Irura Road, Nanyuki, Kenya</p>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="mb-16" data-aos="zoom-in">
        <h2 className="text-2xl font-semibold text-center mb-6">Our Location</h2>
        <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg">
          
          <iframe
            title="Zama Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.272553617873!2d37.07284848932761!3d0.009989144775446318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1787f630e0fc2697%3A0x11fd44a1ecdb9f45!2sZAMA%20FASHION%20%26%20BEAUTY%20CENTRE!5e0!3m2!1sen!2ske!4v1754553460198!5m2!1sen!2ske"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto" data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-center mb-6">Send a Message</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 bg-white p-8 rounded-xl shadow-lg">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we help you?"
            className="p-4 border border-gray-300 rounded-lg h-36 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 text-white py-3 rounded-lg text-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/254712345678?text=Hello%20Zama%20Fashions!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </div>
  );
}

export default Contact;
