import React from "react";
import Header from "./components/Header";
import Body from "./components/Body/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
