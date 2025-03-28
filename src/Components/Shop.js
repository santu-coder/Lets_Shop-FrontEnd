import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/navbar.css";
import "../Style/shop.css";
import logo from "../Assets/LetsShop_Images/images/product-01.jpg";
import logo1 from "../Assets/LetsShop_Images/images/product-02.jpg";
import logo2 from "../Assets/LetsShop_Images/images/product-03.jpg";
import logo3 from "../Assets/LetsShop_Images/images/product-04.jpg";
import logo4 from "../Assets/LetsShop_Images/images/product-05.jpg";
import logo5 from "../Assets/LetsShop_Images/images/product-06.jpg";
import logo6 from "../Assets/LetsShop_Images/images/product-07.jpg";
import logo7 from "../Assets/LetsShop_Images/images/product-08.jpg";
import logo8 from "../Assets/LetsShop_Images/images/product-09.jpg";
import logo9 from "../Assets/LetsShop_Images/images/product-10.jpg";
import logo10 from "../Assets/LetsShop_Images/images/product-11.jpg";
import logo11 from "../Assets/LetsShop_Images/images/product-12.jpg";
import logo12 from "../Assets/LetsShop_Images/images/product-13.jpg";
import logo13 from "../Assets/LetsShop_Images/images/product-14.jpg";
import logo14 from "../Assets/LetsShop_Images/images/product-15.jpg";
import logo15 from "../Assets/LetsShop_Images/images/product-16.jpg";
import Footer from "./Footer";

const categories = ["All Products", "Women", "Men", "Bag", "Shoes", "Watches"];
const products = [
  {
    id: 1,
    title: "White T-Shirt",
    price: "549/- ",
    image: logo,
    category: "Women",
  },
  {
    id: 2,
    title: "White Shirt",
    price: "799/-",
    image: logo1,
    category: "Women",
  },
  {
    id: 3,
    title: "Raymand shirt",
    price: "999/-",
    image: logo2,
    category: "Men",
  },
  {
    id: 4,
    title: "Winter Jacket",
    price: "2999/-",
    image: logo3,
    category: "Women",
  },
  {
    id: 5,
    title: "Primium Combo",
    price: "999/-",
    image: logo4,
    category: "Women",
  },
  {
    id: 6,
    title: "SONATA",
    price: "4999/-",
    image: logo5,
    category: "Watches",
  },
  {
    id: 7,
    title: "Suit",
    price: "1199/-",
    image: logo6,
    category: "Women",
  },
  {
    id: 8,
    title: "T-Shirt",
    price: "499/-",
    image: logo7,
    category: "Women",
  },
  {
    id: 9,
    title: "Sneker's",
    price: "2099/-",
    image: logo8,
    category: "Shoes",
  },
  {
    id: 10,
    title: "Black Top",
    price: "699/-",
    image: logo9,
    category: "Women",
  },
  {
    id: 11,
    title: "Blue primium Shirt",
    price: "2000/-",
    image: logo10,
    category: "Men",
  },
  {
    id: 12,
    title: "Pure Lathner Belt",
    price: "399/-",
    image: logo11,
    category: "Men",
  },
  {
    id: 13,
    title: "Combo",
    price: "1299/-",
    image: logo12,
    category: "Women",
  },
  {
    id: 14,
    title: "Black Top",
    price: "949/-",
    image: logo13,
    category: "Women",
  },
  {
    id: 15,
    title: "TITAN",
    price: "7999/-",
    image: logo14,
    category: "Watches",
  },
  {
    id: 16,
    title: "Sleep Wear Combo",
    price: "2099/-",
    image: logo15,
    category: "Women",
  },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <>
      <div className="container">
        {/* Category Navigation */}
        <div className="shop-container nav-container">
          <div className="category-container">
            <div className="link-category">
              {categories.map((category, index) => (
                <button 
                  key={index}
                  className={`c-link ${selectedCategory === category ? "active" : ""}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="btn-category">
              <Link>Filter</Link>
              <Link>Search</Link>
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="card-container universal">
          {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
              <div key={product.id} className="card">
                <img
                  className="card-img-top"
                  src={product.image}
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.price}</p>
                  <Link to={`/product/${product.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            ))
          ) : ( // <-- This was missing
            <p className="no-products">No products available in this category.</p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Shop;

// // Shop.js
// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { CartContext } from "../CartContext"; // Import the CartContext
// import logo from "../Assets/LetsShop_Images/images/product-01.jpg"; // Example product image
// import "../Style/shop.css";  // External CSS for styling

// const categories = ["All Products", "Women", "Men", "Bag", "Shoes", "Watches"];
// const products = [
//   { id: 1, title: "Product 1", price: "Product price.", image: logo, link: "#" },
//   { id: 2, title: "Product 2", price: "Product price.", image: logo, link: "#" },
//   { id: 3, title: "Product 3", price: "Product price.", image: logo, link: "#" },
//   { id: 4, title: "Product 4", price: "Product price.", image: logo, link: "#" },
//   { id: 5, title: "Product 5", price: "Product price.", image: logo, link: "#" },
//   { id: 6, title: "Product 6", price: "Product price.", image: logo, link: "#" },
//   { id: 7, title: "Product 7", price: "Product price.", image: logo, link: "#" },
//   { id: 8, title: "Product 8", price: "Product price.", image: logo, link: "#" },
// ];

// const Shop = () => {
//   const { addToCart } = useContext(CartContext); // Access addToCart from CartContext

//   return (
//     <div className="container">
//       <div className="category-container">
//         {categories.map((category, index) => (
//           <Link key={index} className="category-link">
//             {category}
//           </Link>
//         ))}
//       </div>

//       <div className="product-container">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <img src={product.image} alt={product.title} className="product-image" />
//             <div className="product-info">
//               <h5>{product.title}</h5>
//               <p>{product.price}</p>
//               <button
//                 className="add-to-cart-btn"
//                 onClick={() => addToCart(product)} // Add to cart on click
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <Link to="/cart" className="view-cart-btn">
//         View Cart
//       </Link>
//     </div>
//   );
// };

// export default Shop;
