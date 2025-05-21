// import React, { useState } from "react";
// import {
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaWhatsapp,
// } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function Contact() {
//   // Handle form state
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate form submission
//     console.log("Form Submitted", formData);
//     alert("Thank you for reaching out!");
//   };

//   return (
//     <div className="min-h-screen bg-amber-50 text-amber-900 px-6 py-12 mt-4">
//       {/* Hero Section */}
//       <div className="text-center mb-12" data-aos="fade-down">
//         <h1 className="text-4xl font-bold mb-4">Get in Touch with Us</h1>
//         <p className="text-lg max-w-2xl mx-auto text-amber-800">
//           We’d love to hear from you. Whether you have a question or just want
//           to say hello, don’t hesitate to reach out.
//         </p>
//       </div>

//       {/* Contact Information */}
//       <section className="text-center mb-12" data-aos="zoom-in">
//         <h2 className="text-2xl font-semibold mb-8">Our Contact Information</h2>
//         <div className="grid sm:grid-cols-3 gap-8">
//           <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
//             <FaEnvelope className="text-4xl text-amber-700 mb-4 mx-auto" />
//             <h3 className="text-lg font-bold mb-2">Email</h3>
//             <p>info@beadworksboutique.com</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
//             <FaPhoneAlt className="text-4xl text-amber-700 mb-4 mx-auto" />
//             <h3 className="text-lg font-bold mb-2">Phone</h3>
//             <p>+123 456 7890</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
//             <FaMapMarkerAlt className="text-4xl text-amber-700 mb-4 mx-auto" />
//             <h3 className="text-lg font-bold mb-2">Location</h3>
//             <p>123 Beadworks Ave, Craft City, AB</p>
//           </div>
//         </div>
//       </section>

//       {/* Google Map Embed */}
//       <section className="mb-12" data-aos="fade-up">
//         <h2 className="text-2xl font-semibold text-center mb-4">
//           Our Location
//         </h2>
//         <div className="w-full h-80 overflow-hidden rounded-lg shadow-lg">
//           <iframe
//             title="Location Map"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.926065417317!2d36.82194657487547!3d-1.2920653356417284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d528fd4b3f%3A0x2d5b7289277e474e!2sNairobi!5e0!3m2!1sen!2ske!4v1683208748496!5m2!1sen!2ske"
//             width="100%"
//             height="100%"
//             frameBorder="0"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//           ></iframe>
//         </div>
//       </section>

//       {/* Contact Form */}
//       <section className="max-w-4xl mx-auto" data-aos="fade-up">
//         <h2 className="text-2xl font-semibold text-center mb-6">
//           Send Us a Message
//         </h2>
//         <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Your Name"
//             className="p-4 bg-white border border-amber-300 rounded-lg w-full"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Your Email"
//             className="p-4 bg-white border border-amber-300 rounded-lg w-full"
//             required
//           />
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Your Message"
//             className="p-4 bg-white border border-amber-300 rounded-lg w-full h-40"
//             required
//           ></textarea>
//           <button
//             type="submit"
//             className="bg-amber-700 text-white py-3 rounded-full text-lg w-full transition duration-300 hover:bg-amber-800"
//           >
//             Send Message
//           </button>
//         </form>
//       </section>
//       {/* WhatsApp Button */}
//       <section className="fixed">
//         <a
//           href="https://wa.me/1234567890?text=Hello!%20I%20have%20a%20question%20about%20Beadworks%20Boutique."
//           target="_blank"
//           rel="noopener noreferrer"
//           className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg transition duration-300 hover:bg-green-600 animate-bounce transition-all duration-300"
//           style={{ zIndex: 1000 }}
//         >
//           <FaWhatsapp className="text-3xl" />
//         </a>
//       </section>
//     </div>
//   );
// }

// export default Contact;

import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { toast } from "react-hot-toast";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${SERVER_URL}/api/contact/send-mail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.success || "Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(data.error || "Failed to send message.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-amber-50 text-amber-900 px-6 py-12 mt-12 md:mt-4">
      {/* Hero */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h1 className="text-4xl font-bold mb-4">Get in Touch with Us</h1>
        <p className="text-lg max-w-2xl mx-auto text-amber-800">
          We’d love to hear from you. Whether you have a question or just want
          to say hello, don’t hesitate to reach out.
        </p>
      </div>

      {/* Contact Info */}
      <section className="text-center mb-12" data-aos="zoom-in">
        <h2 className="text-2xl font-semibold mb-8">Contact Information</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <FaEnvelope className="text-4xl text-amber-700 mb-4 mx-auto" />
            <h3 className="text-lg font-bold mb-2">Email</h3>
            <a
              href="mailto:info@beadworksboutique.com"
              className="hover:underline text-amber-800"
            >
              info@beadworksboutique.com
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <FaPhoneAlt className="text-4xl text-amber-700 mb-4 mx-auto" />
            <h3 className="text-lg font-bold mb-2">Phone</h3>
            <a href="tel:+1234567890" className="hover:underline text-amber-800">
              +123 456 7890
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <FaMapMarkerAlt className="text-4xl text-amber-700 mb-4 mx-auto" />
            <h3 className="text-lg font-bold mb-2">Location</h3>
            <p>123 Beadworks Ave, Craft City, AB</p>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="mb-12" data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-center mb-4">Our Location</h2>
        <div className="w-full h-80 overflow-hidden rounded-lg shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.926065417317!2d36.82194657487547!3d-1.2920653356417284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d528fd4b3f%3A0x2d5b7289277e474e!2sNairobi!5e0!3m2!1sen!2ske!4v1683208748496!5m2!1sen!2ske"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-4xl mx-auto" data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Send Us a Message
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 bg-white p-6 rounded-lg shadow-lg"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-4 border border-amber-300 rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-4 border border-amber-300 rounded-lg"
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject (optional)"
            className="p-4 border border-amber-300 rounded-lg"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="p-4 border border-amber-300 rounded-lg h-40"
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="bg-amber-700 hover:bg-amber-800 text-white py-3 px-6 rounded-full font-medium transition duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/1234567890?text=Hello!%20I%20have%20a%20question%20about%20Beadworks%20Boutique."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 animate-bounce z-50"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </div>
  );
}

export default Contact;
