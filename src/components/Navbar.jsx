// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  ShoppingBag,
  Info,
  Phone,
  ChevronDown,
  ChevronUp,
  ShoppingCart,
  Search,
  Shirt,
  Sparkles,
  Baby,
  BriefcaseBusiness,
  Footprints,
} from "lucide-react";
import SearchModal from "./SearchModal";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeSidebar = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  return (
    <>
      {/* TOP NAV */}
      <nav
        className={`fixed w-full z-50 top-0 left-0 transition-shadow duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo + Mobile Toggle */}
          <div className="flex items-center gap-5">
            <button
              onClick={toggleSidebar}
              className="md:hidden text-blue-700 hover:text-blue-900 focus:outline-none"
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
            <Link
              to="/"
              className="flex items-center space-x-3 select-none"
              aria-label="Homepage"
            >
              <img
                src="/johnsaga-logo.jpg" // replace with your logo path
                alt="Zama Logo"
                className="w-10 h-10 rounded-full border-2 border-blue-800 object-cover shadow-md"
              />
              <span className="text-2xl font-extrabold text-blue-800 tracking-tight">
                Zama Fashion
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 font-semibold text-blue-700">
            <NavLink to="/" label="Home" icon={<Home size={18} />} />
            <NavLink to="/shop" label="Shop" icon={<ShoppingBag size={18} />} />

            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-1 hover:text-blue-900 transition"
              >
                Categories{" "}
                {dropdownOpen ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>

              <div
                className={`absolute bg-white shadow-md border rounded-md w-64 mt-2 z-50 overflow-hidden transition-all origin-top duration-300 ${
                  dropdownOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <DropdownLink
                  to="/category/mens-clothing"
                  label="Men's Clothing"
                  icon={<Shirt size={16} />}
                />
                <DropdownLink
                  to="/category/womens-clothing"
                  label="Women's Clothing"
                  icon={<Sparkles size={16} />}
                />
                <DropdownLink
                  to="/category/kids-clothing"
                  label="Kids' Clothing"
                  icon={<Baby size={16} />}
                />
                <DropdownLink
                  to="/category/shoes"
                  label="Shoes"
                  icon={<Footprints size={16} />}
                />
                <DropdownLink
                  to="/category/bags-accessories"
                  label="Bags & Accessories"
                  icon={<BriefcaseBusiness size={16} />}
                />
                {/* <DropdownLink to="/category/home-decor" label="Home Decor" icon={<Sofa size={16} />} />
                <DropdownLink to="/category/household-items" label="Household Items" icon={<Box size={16} />} /> */}
              </div>
            </div>

            <NavLink to="/about" label="About" icon={<Info size={18} />} />
            <NavLink to="/blog" label="Blog" icon={<Sparkles size={18} />} />
            <NavLink to="/contact" label="Contact" icon={<Phone size={18} />} />
          </div>

          {/* Search + Cart */}
          <div className="flex items-center space-x-5">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-blue-700 hover:text-blue-900"
              aria-label="Search"
            >
              <Search size={22} />
            </button>
            <Link
              to="/cart"
              className="relative text-blue-700 hover:text-blue-900"
              aria-label="Cart"
            >
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-600 text-white rounded-full text-xs font-bold px-2 animate-pulse">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-blue-50 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-blue-200">
          <div className="flex items-center space-x-3">
            <span className="text-xl font-bold text-blue-800">Zama</span>
            <img
              src="/johnsaga-logo.jpg" // replace with your logo path
              alt="Johnsaga Logo"
              className="w-8 h-8 rounded-full border-2 border-blue-800 object-cover shadow-md"
            />
          </div>
          <button
            onClick={closeSidebar}
            className="text-blue-700 hover:text-blue-900"
          >
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-5 text-blue-800 font-semibold">
          <NavLinkMobile
            to="/"
            label="Home"
            icon={<Home size={20} />}
            onClick={closeSidebar}
          />
          <NavLinkMobile
            to="/shop"
            label="Shop"
            icon={<ShoppingBag size={20} />}
            onClick={closeSidebar}
          />
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-2 text-blue-700 font-semibold"
          >
            {dropdownOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            Categories
          </button>
          {dropdownOpen && (
            <div className="ml-6 mt-2 flex flex-col space-y-3">
              <NavLinkMobile
                to="/category/mens-clothing"
                label="Men's Clothing"
                icon={<Shirt size={18} />}
                onClick={closeSidebar}
              />
              <NavLinkMobile
                to="/category/womens-clothing"
                label="Women's Clothing"
                icon={<Sparkles size={18} />}
                onClick={closeSidebar}
              />
              <NavLinkMobile
                to="/category/kids-clothing"
                label="Kids' Clothing"
                icon={<Baby size={18} />}
                onClick={closeSidebar}
              />
              <NavLinkMobile
                to="/category/shoes"
                label="Shoes"
                icon={<Footprints size={18} />}
                onClick={closeSidebar}
              />
              <NavLinkMobile
                to="/category/bags-accessories"
                label="Bags & Accessories"
                icon={<BriefcaseBusiness size={18} />}
                onClick={closeSidebar}
              />
              {/* <NavLinkMobile to="/category/home-decor" label="Home Decor" icon={<Sofa size={18} />} onClick={closeSidebar} />
              <NavLinkMobile to="/category/household-items" label="Household Items" icon={<Box size={18} />} onClick={closeSidebar} /> */}
            </div>
          )}
          <NavLinkMobile
            to="/about"
            label="About"
            icon={<Info size={20} />}
            onClick={closeSidebar}
          />
          <NavLink
            to="/blog"
            label="Blog"
            icon={<Sparkles size={18} />}
            onClick={closeSidebar}
          />
          <NavLinkMobile
            to="/contact"
            label="Contact"
            icon={<Phone size={20} />}
            onClick={closeSidebar}
          />
        </nav>
      </aside>

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}

function NavLink({ to, label, icon }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-1 text-blue-700 hover:text-blue-900 transition relative group"
    >
      {icon}
      <span>{label}</span>
      <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-blue-700 transition-all group-hover:w-full" />
    </Link>
  );
}

function DropdownLink({ to, label, icon }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-2 px-4 py-2 hover:bg-blue-100 transition"
    >
      {icon}
      {label}
    </Link>
  );
}

function NavLinkMobile({ to, label, icon, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center gap-2 hover:text-blue-900 transition"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

export default Navbar;
