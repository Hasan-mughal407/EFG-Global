import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Footer from "/src/pages/Footer.jsx";
import {
  FaLeaf,
  FaPlay,
  FaShoppingCart,
  FaApple,
  FaPalette,
  FaGlobe,
  FaSyncAlt,
  FaCogs,
  FaShieldAlt,
  FaTruck,
  FaEye,
} from "react-icons/fa";

import { IoDiamond } from "react-icons/io5";
import { GiElephant, GiWheat } from "react-icons/gi";

// ===================== Image Imports (Assuming these paths are correct in your project) =====================
import Leather from "/src/images/Leather Goods.png";
import Mangoes from "/src/images/Mangoes.png";
import Gold from "/src/images/Gold.png";
import Coffee from "/src/images/Coffee.png";
import Cocoa from "/src/images/Cocoa.png";
import Banana from "/src/images/Bananas.png";
import Diamond from "/src/images/Diamonds.png";
import Sesame from "/src/images/Sesame Seeds.png";
import Pineapple from "/src/images/Pineapples.png";
import Copper from "/src/images/Copper.png";
import Chicken from "/src/images/Chicken.png";
import Rice from "/src/images/Rice.png";
import Avocado from "/src/images/Avocados.png";
import Iron from "/src/images/Iron Ore.png";
import Wood from "/src/images/Wood Carvings.png";
import Tea from "/src/images/Tea.png";
import Goat from "/src/images/Goats.png";
import Cotton from "/src/images/Cotton.png";

// ===================== Categories =====================
const categories = [
  "All",
  "Agricultural",
  "Fruits",
  "Natural Resources",
  "Crafts",
  "Livestock",
];

// ===================== Products =====================
const products = [
  { name: "Premium Cocoa Beans", category: "Agricultural", image: Cocoa },
  { name: "Fresh Mangoes", category: "Fruits", image: Mangoes },
  { name: "Pure Gold", category: "Natural Resources", image: Gold },
  { name: "Organic Coffee Beans", category: "Agricultural", image: Coffee },
  { name: "Premium Cotton", category: "Agricultural", image: Cotton },
  { name: "Sweet Bananas", category: "Fruits", image: Banana },
  { name: "Natural Diamonds", category: "Natural Resources", image: Diamond },
  { name: "Sesame Seeds", category: "Agricultural", image: Sesame },
  { name: "Fresh Pineapples", category: "Fruits", image: Pineapple },
  { name: "Copper Ore", category: "Natural Resources", image: Copper },
  { name: "Free Range Chickens", category: "Livestock", image: Chicken },
  { name: "Leather Goods", category: "Crafts", image: Leather },
  { name: "Premium Rice", category: "Agricultural", image: Rice },
  { name: "Fresh Avocados", category: "Fruits", image: Avocado },
  { name: "Iron Ore", category: "Natural Resources", image: Iron },
  { name: "Wood Carvings", category: "Crafts", image: Wood },
  { name: "Premium Tea", category: "Agricultural", image: Tea },
  { name: "Live Goats", category: "Livestock", image: Goat },
];

// ===================== Services =====================
const services = [
  {
    icon: <FaGlobe size={24} />,
    title: "Global Marketplace Platform",
    desc: "Online product listing and cataloging of African commodities, cultural goods, and natural resources.",
  },
  {
    icon: <FaSyncAlt size={24} />,
    title: "Supply Chain Management",
    desc: "Complete supply chain design, from farmgate to final buyer with real-time tracking.",
  },
  {
    icon: <FaCogs size={24} />,
    title: "Agri-Technology Integration",
    desc: "Smart agriculture practices through digital tools, sensors, and mobile advisory services.",
  },
  {
    icon: <FaShieldAlt size={24} />,
    title: "Secure Payment Systems",
    desc: "Multi-currency payment gateway with blockchain-backed transaction validation.",
  },
  {
    icon: <FaTruck size={24} />,
    title: "Export & Import Facilitation",
    desc: "Customs clearance, documentation, and international market access consulting.",
  },
  {
    icon: <FaEye size={24} />,
    title: "Explore All Services",
    desc: "Discover our complete range of comprehensive services & activities with detailed insights.",
    button: true,
  },
];

// ===================== Feature Card Component (Helper) =====================

const FeatureCard = ({ text }) => {
  return (
    <div className="inline-block px-5 py-2.5 border-2 border-[#1e4d3a] rounded-lg text-[#1e4d3a] text-sm font-medium tracking-wider hover:bg-[#1e4d3a] hover:text-white transition-all duration-300 ease-in-out cursor-default">
      {text}
    </div>
  );
};

// ===================== Main Home Component =====================
export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const footerFeatures = [
    '100% FRESH',
    'HEALTHY PRODUCT',
    'QUALITY FIRST',
    'ECO FRIENDLY',
    'FARM FOOD',
    'NATURAL FOOD',
  ];

  return (
    <div className="container mx-auto w-full h-auto flex flex-col items-center justify-center m-0">
      {/* ===================== Hero Section ===================== */}
      {/* ... Hero Section Code ... (आपके मौजूदा कोड का हिस्सा) */}
      <div className="p-5 container-box w-full h-auto flex flex-col items-center justify-center gap-4 mx-auto my-20">
        <div className="w-80 h-12 bg-gray-300 border-2 border-gray-400 flex items-center justify-center rounded-full px-3 py-2 gap-2 text-green-900 font-medium">
          <FaLeaf />
          100% Authentic African Products
        </div>

        <h1 className="text-4xl text-center lg:text-7xl font-bold text-[#333]">
          Your Gateway to
        </h1>

        <div className="flex items-center justify-center lg:gap-25">
          <img
            className="hidden lg:flex w-30 h-auto bg-[#0a0a0a] rounded-2xl shadow-2xl"
            src={Leather}
          />
          <h1 className="text-4xl text-center lg:text-7xl font-bold text-transparent bg-gradient-to-r from-[rgba(30,100,30,1)] to-[rgba(220,130,50,1)] bg-clip-text">
            African Excellence
          </h1>
          <img
            className="hidden lg:flex w-30 h-auto bg-[#0a0a0a] rounded-2xl shadow-2xl"
            src={Mangoes}
          />
        </div>

        <p className="w-full md:w-[50%] lg:text-[25px] text-[20px] text-[#333] font-medium text-center">
          Connecting global markets with premium African agricultural products,
          natural resources, and handcrafted treasures.
        </p>

        {/* Buttons */}
        <div className="w-full lg:w-[60%] flex items-center justify-center mx-auto gap-5 lg:gap-40">
          <img
            className="hidden lg:flex w-30 h-auto bg-[#0a0a0a] rounded-2xl shadow-2xl"
            src={Gold}
          />
          <div className="gap-5 w-full md:flex items-center justify-center">
            <button className="cursor-pointer mb-5 w-full md:w-60 h-15 rounded-full text-white bg-green-900 hover:bg-orange-500 transition-all duration-300 text-[20px] flex items-center justify-center gap-2">
              <FaShoppingCart /> Explore Products
            </button>
            <button className="cursor-pointer mb-5 w-full md:w-50 h-15 rounded-full text-green-900 border-2 border-green-900 hover:bg-green-900 hover:text-white transition-all duration-300 text-[20px] flex items-center justify-center gap-2">
              <FaPlay /> Learn More
            </button>
          </div>
          <img
            className="hidden lg:flex w-30 h-auto bg-[#0a0a0a] rounded-2xl shadow-2xl"
            src={Coffee}
          />
        </div>

        {/* Stats */}
        <div className="gap-20 w-full md:flex items-center justify-center">
          <div className="my-10 text-center">
            <p className="font-bold text-4xl text-green-900">500</p>
            <p className="text-2xl text-[#333]">Products</p>
          </div>
          <div className="my-10 text-center">
            <p className="font-bold text-4xl text-green-900">50</p>
            <p className="text-2xl text-[#333]">Countries</p>
          </div>
          <div className="my-10 text-center">
            <p className="font-bold text-4xl text-green-900">1000</p>
            <p className="text-2xl text-[#333]">Satisfied Customers</p>
          </div>
        </div>
      </div>

      {/* ===================== Popular Categories ===================== */}
      {/* ... Popular Categories Code ... (आपके मौजूदा कोड का हिस्सा) */}
      <div className="p-5 container-box w-full h-auto flex flex-col items-center justify-center">
        <div className="gap-5 my-20 flex-col flex items-center">
          <p className="w-25 h-7 bg-green-900 text-white rounded-full font-medium flex items-center justify-center">
            EXPLORE
          </p>
          <p className="text-5xl text-center font-medium text-[#222]">
            Popular Categories
          </p>
          <p className="text-[#333] text-center text-[20px]">
            Discover our wide range of authentic African products
          </p>
        </div>

        {/* Category Cards */}

    <div className="w-full flex flex-col items-center mt-10">

      {/* ========== DESKTOP GRID ========== */}
      <div className="hidden md:flex w-full flex-wrap text-center mb-5 flex items-start justify-center gap-10">
        
        {/* 1 */}
        <div className="bg-gray-100 hover:border hover:border-black w-50 rounded-2xl flex flex-col items-center gap-5 py-5 px-3">
          <div className="w-15 h-15 bg-green-900 rounded-2xl text-4xl text-white flex items-center justify-center">
            <GiWheat />
          </div>
          <p className="text-3xl font-medium text-[#222]">Agricultural Products</p>
          <p className="text-[#333] text-[20px]">150+ Products</p>
        </div>

        {/* 2 */}
        <div className="bg-gray-100 hover:border hover:border-black w-50 rounded-2xl flex flex-col items-center gap-5 py-5 px-3">
          <div className="w-15 h-15 bg-green-900 rounded-2xl text-4xl text-white flex items-center justify-center">
            <FaApple />
          </div>
          <p className="text-3xl font-medium text-[#222]">Fresh Fruits</p>
          <p className="text-[#333] text-[20px]">80+ Products</p>
        </div>

        {/* 3 */}
        <div className="bg-gray-100 hover:border hover:border-black w-50 rounded-2xl flex flex-col items-center gap-5 py-5 px-3">
          <div className="w-15 h-15 bg-green-900 rounded-2xl text-4xl text-white flex items-center justify-center">
            <IoDiamond />
          </div>
          <p className="text-3xl font-medium text-[#222]">Natural Resources</p>
          <p className="text-[#333] text-[20px]">45+ Products</p>
        </div>

        {/* 4 */}
        <div className="bg-gray-100 hover:border hover:border-black w-50 rounded-2xl flex flex-col items-center gap-5 py-5 px-3">
          <div className="w-15 h-15 bg-green-900 rounded-2xl text-4xl text-white flex items-center justify-center">
            <FaPalette />
          </div>
          <p className="text-3xl font-medium text-[#222]">Crafts & Artisan</p>
          <p className="text-[#333] text-[20px]">120+ Products</p>
        </div>

        {/* 5 */}
        <div className="bg-gray-100 hover:border hover:border-black w-50 rounded-2xl flex flex-col items-center gap-5 py-5 px-3">
          <div className="w-15 h-15 bg-green-900 rounded-2xl text-4xl text-white flex items-center justify-center">
            <GiElephant />
          </div>
          <p className="text-3xl font-medium text-[#222]">Livestock & Poultry</p>
          <p className="text-[#333] text-[20px]">25+ Products</p>
        </div>

      </div>

      {/* ========== MOBILE SLIDER — PURE TAILWIND ========== */}
      <div className="w-full md:hidden overflow-x-auto overflow-y-visible flex gap-5 px-3 no-scrollbar">
        
        {/* Slider Item 1 */}
        <div className="bg-gray-100 min-w-[250px] rounded-2xl flex flex-col items-center gap-5 py-6 px-4 shadow">
          <div className="w-14 h-14 bg-green-900 rounded-2xl text-3xl text-white flex items-center justify-center">
            <GiWheat />
          </div>
          <p className="text-2xl font-medium text-[#222]">Agricultural Products</p>
          <p className="text-[#333] text-[18px]">150+ Products</p>
        </div>

        {/* Slider Item 2 */}
        <div className="bg-gray-100 min-w-[250px] rounded-2xl flex flex-col items-center gap-5 py-6 px-4 shadow">
          <div className="w-14 h-14 bg-green-900 rounded-2xl text-3xl text-white flex items-center justify-center">
            <FaApple />
          </div>
          <p className="text-2xl font-medium text-[#222]">Fresh Fruits</p>
          <p className="text-[#333] text-[18px]">80+ Products</p>
        </div>

        {/* Slider Item 3 */}
        <div className="bg-gray-100 min-w-[250px] rounded-2xl flex flex-col items-center gap-5 py-6 px-4 shadow">
          <div className="w-14 h-14 bg-green-900 rounded-2xl text-3xl text-white flex items-center justify-center">
            <IoDiamond />
          </div>
          <p className="text-2xl font-medium text-[#222]">Natural Resources</p>
          <p className="text-[#333] text-[18px]">45+ Products</p>
        </div>

        {/* Slider Item 4 */}
        <div className="bg-gray-100 min-w-[250px] rounded-2xl flex flex-col items-center gap-5 py-6 px-4 shadow">
          <div className="w-14 h-14 bg-green-900 rounded-2xl text-3xl text-white flex items-center justify-center">
            <FaPalette />
          </div>
          <p className="text-2xl font-medium text-[#222]">Crafts & Artisan</p>
          <p className="text-[#333] text-[18px]">120+ Products</p>
        </div>

        {/* Slider Item 5 */}
        <div className="bg-gray-100 min-w-[250px] rounded-2xl flex flex-col items-center gap-5 py-6 px-4 shadow">
          <div className="w-14 h-14 bg-green-900 rounded-2xl text-3xl text-white flex items-center justify-center">
            <GiElephant />
          </div>
          <p className="text-2xl font-medium text-[#222]">Livestock & Poultry</p>
          <p className="text-[#333] text-[18px]">25+ Products</p>
        </div>

      </div>

    </div>
  

         {/* Category Cards End*/}
      </div>

      {/* ===================== Recommended Products ===================== */}
      {/* ... Recommended Products Code ... (आपके मौजूदा कोड का हिस्सा) */}
      <div className="w-full flex flex-col items-center justify-center">
        {/* Category Buttons */}
        <div className="flex flex-wrap gap-4 justify-center my-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === cat
                  ? "bg-green-900 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-green-700 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="w-full flex-wrap gap-7 px-5 mb-20 mx-auto flex items-center justify-center">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="w-50 bg-white hover:border rounded-2xl p-5 shadow hover:shadow-xl transition-all duration-300 flex flex-col  cursor-pointer hover:-translate-y-2"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-40 h-auto object-contain mb-3 rounded-2xl"
              />
              <p className="font-semibold text-lg text-[#222]">
                {product.name}
              </p>
              <p className="text-sm text-gray-600 mt-1">Origin: Africa</p>
              <button className="mt-4 w-full py-2 rounded-lg bg-green-900 text-white hover:bg-orange-500 transition-all duration-300">
                Inquiry
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ===================== Services Section ===================== */}
      {/* ... Services Section Code ... (आपके मौजूदा कोड का हिस्सा) */}
      <div className="container mx-auto px-4 py-16">
        <p className="w-fit bg-green-900 text-white px-4 py-1 mx-auto flex items-center justify-center   rounded-full mb-4">OUR EXCELLENCE</p>
        <h2 className="text-3xl font-bold mb-2 text-center">Comprehensive Services & Activities</h2>
        <p className="text-gray-600 text-center mb-12">Discover our complete range of professional services</p>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-lg border border-green-900 hover:border-amber-500 flex flex-col items-center text-center  ${service.button ? "bg-green-900 text-white" : "bg-green-100"
                }`}
            >
              <div className="bg-green-900 text-white p-3 rounded mb-4">{service.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-black mb-4">{service.desc}</p>
              {service.button && (
                <button className="bg-white text-green-900 px-4 py-2 rounded mt-2 hover:bg-gray-200 transition">
                  View All Services →
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <Swiper spaceBetween={16} slidesPerView={1.1}>
            {services.map((service, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className={`p-6 rounded-lg border border-green-900 flex flex-col items-center text-center ${service.button ? "bg-green-900 text-white" : "bg-green-100"
                    }`}
                >
                  <div className="bg-green-900 text-white p-3 rounded mb-4">{service.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.desc}</p>
                  {service.button && (
                    <button className="bg-white text-green-900 px-4 py-2 rounded mt-2 hover:bg-gray-200 transition">
                      View All Services →
                    </button>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* ===================== EFG Afro Market Footer Section (NEWLY ADDED) ===================== */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 w-full">
        {/* 🌿 Newsletter Signup Section */}
        <div className="w-full mx-auto p-6 md:p-10 rounded-2xl bg-green-900 shadow-xl">
          <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            {/* Text Content */}
            <div className="text-white flex-1 pr-0 md:pr-6">
              <h3 className="text-xl sm:text-2xl font-bold">
                Don't Miss Out on EFG Afro Market Updates
              </h3>
              <p className="text-sm mt-1 opacity-90">
                Stay updated with the latest products, offers, and market insights
              </p>
            </div>

            {/* Email Input Form */}
            <div className="flex-shrink-0 w-full  md:w-auto">
              <div className="flex bg-white rounded-full overflow-hidden border border-transparent focus-within:border-orange-500 transition-all">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  aria-label="Enter your email address"
                  className="w-full rounded-full  px-4 py-3 text-gray-700 focus:outline-none placeholder-gray-500"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="bg-[#ff8c42]  hover:bg-orange-600 p-3 flex items-center justify-center transition-colors"
                >
                  {/* Send Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-15 text-white transform rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 🚚 Features Section */}
        <div className="max-w-6xl mx-auto mt-12 text-center">
          <p className="text-gray-600 text-lg mb-8">We Deliver</p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 px-4">
            {footerFeatures.map((feature, index) => (
              <FeatureCard key={index} text={feature} />
            ))}
          </div>
        </div>
      </div>
      {/* ===================== END OF NEWLY ADDED SECTION ===================== */}
      <Footer />
    </div>
    
  );
}