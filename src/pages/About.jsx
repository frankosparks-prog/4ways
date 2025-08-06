import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Heart, Truck, Sparkles, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white text-gray-800 mt-16">
      {/* Hero Section */}
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-cyan-800 text-white py-28 px-6 overflow-hidden shadow-xl">
        <div className="max-w-7xl mx-auto text-center z-10 relative">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight drop-shadow-lg"
            data-aos="fade-down"
          >
            Discover Your Signature Look ✨
          </h1>
          <p
            className="mt-6 text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Zama Fashions blends timeless elegance with bold modern trends
            to give you style that turns heads.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-10"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <button className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-blue-700 px-10 py-4 text-white font-semibold rounded-full shadow-xl hover:scale-105 transition-transform">
              Explore Our Collection
            </button>
          </Link>
        </div>

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-400 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 opacity-20 rounded-full blur-3xl"></div>
      </section>

      {/* OUR JOURNEY SECTION */}
      <section className="bg-white py-24 px-6 text-gray-800" id="our-journey">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl font-bold text-center mb-16"
            data-aos="fade-up"
          >
            Our Journey 🚀
          </h2>
          <div className="space-y-12 relative border-l-4 border-blue-600 pl-8">
            {/* Timeline Item */}
            <div data-aos="fade-right">
              <div className="absolute left-0 -ml-[24px] bg-blue-600 w-5 h-5 rounded-full mt-1.5"></div>
              <h3 className="text-2xl font-semibold">
                2019 — Our Humble Beginning
              </h3>
              <p className="mt-2 text-gray-600">
                Zama Fashions started in a small studio with a dream to
                redefine fashion in Kenya — delivering class, comfort, and
                confidence.
              </p>
            </div>

            {/* Timeline Item */}
            <div data-aos="fade-left">
              <div className="absolute left-0 -ml-[24px] bg-indigo-600 w-5 h-5 rounded-full mt-1.5"></div>
              <h3 className="text-2xl font-semibold">
                2021 — The Rise of Elegance
              </h3>
              <p className="mt-2 text-gray-600">
                With a growing community of loyal customers, our brand evolved
                into a symbol of quality and stylish uniqueness.
              </p>
            </div>

            {/* Timeline Item */}
            <div data-aos="fade-right">
              <div className="absolute left-0 -ml-[24px] bg-cyan-600 w-5 h-5 rounded-full mt-1.5"></div>
              <h3 className="text-2xl font-semibold">
                2023 — Boutique & Online Growth
              </h3>
              <p className="mt-2 text-gray-600">
                We opened our flagship boutique and launched our online platform
                — offering fashion that speaks volumes, accessible to all.
              </p>
            </div>

            {/* Timeline Item */}
            <div data-aos="fade-left">
              <div className="absolute left-0 -ml-[24px] bg-blue-600 w-5 h-5 rounded-full mt-1.5"></div>
              <h3 className="text-2xl font-semibold">
                2025 — The Future is Now
              </h3>
              <p className="mt-2 text-gray-600">
                We’re redefining luxury with every stitch, and taking Kenyan
                fashion global. Join us as we inspire confidence and celebrate
                style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Description */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://picsum.photos/600/400?random=13"
            alt="About Zama"
            className="rounded-2xl shadow-lg"
            data-aos="fade-right"
          />
          <div data-aos="fade-left">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Zama Fashions is more than a boutique — it's a lifestyle. We
              curate top-tier fashion for men, women, and kids with a focus on
              quality, class, and culture. From the latest streetwear to
              timeless elegance, we offer it all — and we deliver it with care.
            </p>
            <p className="text-gray-600">
              Proudly serving fashion lovers across Kenya, one outfit at a time.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="bg-blue-50 py-14 px-6">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h3
            className="text-3xl font-bold text-blue-900 mb-2"
            data-aos="fade-up"
          >
            Why Choose Zama?
          </h3>
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            We're more than a fashion store. We're a fashion experience.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div
            className="bg-white shadow-lg rounded-xl p-6 text-center"
            data-aos="fade-up"
          >
            <Sparkles className="text-blue-800 mx-auto mb-3" size={40} />
            <h4 className="font-bold text-xl mb-2">Trendy & Classy</h4>
            <p className="text-gray-600">
              Always in-season, always on point — the latest trends tailored for
              you.
            </p>
          </div>
          <div
            className="bg-white shadow-lg rounded-xl p-6 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Heart className="text-blue-800 mx-auto mb-3" size={40} />
            <h4 className="font-bold text-xl mb-2">Customer-First</h4>
            <p className="text-gray-600">
              You're the heart of our boutique. We serve with love, respect, and
              style.
            </p>
          </div>
          <div
            className="bg-white shadow-lg rounded-xl p-6 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Truck className="text-blue-800 mx-auto mb-3" size={40} />
            <h4 className="font-bold text-xl mb-2">Swift Delivery</h4>
            <p className="text-gray-600">
              Nationwide delivery at your doorstep. Fast, reliable, and
              stylishly packaged.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-white px-6">
        <h3
          className="text-3xl font-bold text-blue-900 mb-4"
          data-aos="zoom-in"
        >
          Ready to Elevate Your Wardrobe?
        </h3>
        <p
          className="text-gray-600 mb-6"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          Explore our collection or get in touch — fashion awaits!
        </p>
        <Link
          to="/contact"
          className="inline-block bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-md"
        >
          <PhoneCall className="inline mr-2 -mt-1" size={20} />
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default About;
