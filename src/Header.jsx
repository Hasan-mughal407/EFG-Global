import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "/src/images/logo.png"
import { FaEarthAfrica } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/Products" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-4 ">
        <div className="flex  justify-center items-center ">
          {/* Logo */}
          <img className="w-25 h-auto mr-8" src={Logo} alt="" />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition-all duration-300 ${isActive
                    ? "bg-[#ecf0f1] text-black underline  "
                    : "text-black hover:underline hover:bg-gray-100 "
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="hidden lg:flex justify-center items-center gap-4 ">
         <button className="flex items-center justify-center gap-2 w-1/3 px-4 py-2 rounded-full border bg-gray-100 ">
        <FaEarthAfrica className="text-sky-600" /> 
<select id="Language" className="outline-0">
  <option value="apple" selected>EN</option>
  <option value="banana">AR</option>
  <option value="mango">ZH</option>
  <option value="orange">FR</option>
  <option value="orange">ES</option>
</select>
      </button>
          <button className="gap-2 flex  justify-center items-center text-white w-40 h-12 rounded-full  bg-gradient-to-r from-[rgb(30,100,30)] to-[rgb(220,130,50)] hover:bg-gradient-to-r hover:from-[rgb(220,130,50)] hover:to-[rgb(39,39,39)] border-2 border-[Green] hover:border-2 hover:border-[Orange] transition-all duration-400">
            <FaUser />Login/Register</button>
        </div>
        {/* Mobile Hamburger */}
        <div className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Nav */}

{open && (
  <nav className="lg:hidden bg-white shadow-md px-4 pb-6">

    {/* Row 1 → 3 items */}
    <div className="flex justify-center gap-3 mt-3">
      {navLinks.slice(0, 3).map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            `w-full text-center bg-gray-100 px-4 py-4 rounded-md transition ${
              isActive
                ? "bg-gray-200 text-black"
                : "hover:bg-gray-200 text-black"
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </div>

    {/* Row 2 → 3 items */}
    <div className="flex justify-center gap-3 mt-3 w-full ">
      {navLinks.slice(3, 6).map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            `w-full bg-gray-100 text-center px-4 py-4 rounded-md transition ${
              isActive
                ? "bg-gray-200 text-black"
                : "hover:bg-gray-200 text-black"
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </div>

    {/* Last Row → Login + Language */}
    <div className="w-full flex justify-center gap-3 mt-4">
{/* Login Button */}
      <button className="flex items-center justify-center gap-2 w-full h-12 px-4 py-2 rounded-md text-white bg-gradient-to-r from-[rgb(30,100,30)] to-[rgb(220,130,50)] hover:from-[rgb(220,130,50)] hover:to-[rgb(39,39,39)]
    transition-all duration-900  border border-black">
        <FaUser /> Login/Register
      </button>
      {/* Language Button */}
      <button className="flex items-center justify-center gap-2 w-1/3 px-4 py-2 rounded-md border bg-gray-100">
        <FaEarthAfrica className="text-sky-600" /> 
<select id="Language">
  <option value="apple">EN</option>
  <option value="banana">AR</option>
  <option value="mango">ZH</option>
  <option value="orange">FR</option>
  <option value="orange">ES</option>
</select>
      </button>

      

    </div>

  </nav>
)}
    </header>
  );
};

export default Header;