import React from "react";
import { Routes, Route } from "react-router-dom";
import All from "./Products/All";
import Agricultural from "./Products/Agricultural";
import Fruits from "./Products/Fruits";
import NaturalResources from "./Products/Natural";
import Crafts from "./Products/Crafts";
import Livestock from "./Products/Livestock";

export default function CategoryRouter() {
  return (
    <Routes>
      <Route path="/all" element={<All />} />
      <Route path="/agricultural" element={<Agricultural />} />
      <Route path="/fruits" element={<Fruits />} />
      <Route path="/natural-resources" element={<NaturalResources />} />
      <Route path="/crafts" element={<Crafts />} />
      <Route path="/livestock" element={<Livestock />} />
    </Routes>
  );
}
