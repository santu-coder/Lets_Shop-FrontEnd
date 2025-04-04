import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbarr from "./Components/Navbarr";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";
import ProductDetails from "./Components/ProductDetails";
import Cart from "./Components/Cart";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <>
          <Navbarr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cart"  element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </>
      </Router>
      </CartProvider>
// >>>>>>> f0b5cda ( signup done)
  );
};

export default App;
