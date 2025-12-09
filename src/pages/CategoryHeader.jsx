import React from "react";
import { NavLink } from "react-router-dom";

const categories = [
  { name: "All", path: "/all" },
  { name: "Agricultural", path: "/agricultural" },
  { name: "Fruits", path: "/fruits" },
  { name: "Natural Resources", path: "/natural-resources" },
  { name: "Crafts", path: "/crafts" },
  { name: "Livestock", path: "/livestock" },
];

export default function CategoryHeader() {
  return (
    <div className="flex flex-wrap gap-4 justify-center my-10">
      {categories.map((category) => (
        <NavLink
          key={category.name}
          to={category.path}
          className={({ isActive }) =>
            `px-5 py-2 rounded-full border-2 border-green-900 font-medium transition-colors duration-300 ${
              isActive
                ? "bg-green-900 text-white"
                : "bg-transparent text-green-900 hover:bg-green-900 hover:text-white"
            }`
          }
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
}
