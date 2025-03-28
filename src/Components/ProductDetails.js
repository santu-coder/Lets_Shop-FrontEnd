// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import "../Style/productdetails.css"; // Importing external CSS
// import logo1 from "../Assets/LetsShop_Images/images/product-min-01.jpg"
// import logo2 from "../Assets/LetsShop_Images/images/product-min-02.jpg"
// import logo3 from "../Assets/LetsShop_Images/images/product-min-03.jpg"
// import logo4 from "../Assets/LetsShop_Images/images/product-detail-01.jpg"

// const ProductPage = () => {
//   const [quantity, setQuantity] = useState(1);

//   const handleIncrease = () => setQuantity(quantity + 1);
//   const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

//   return (
//   <>
//     <div className="product-container">
//       <div className="product-box">
//         <div className="image-section">
//         <div className="thumbnail-images">
//           <img src={logo1} alt="Thumbnail 1" />
//           <img src={logo2} alt="Thumbnail 2" />
//           <img src={logo3} alt="Thumbnail 3" />
//         </div>
//         <div className="main-image">
//           <img src={logo4}  alt="Product" />
//         </div>
//       </div>
//       <div className="details-section">
//         <h2>Lightweight Jacket</h2>
//         <p className="price">$58.79</p>
//         <p className="description">Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.</p>
//         <label>Size</label>
//         <select>
//           <option>Choose an option</option>
//         </select>
//         <label>Color</label>
//         <select>
//           <option>Choose an option</option>
//         </select>
//         <div className="quantity-container">
//           <div className="q-c-div" onClick={handleDecrease}>-</div>
//           <span>{quantity}</span>
//           <div className="q-c-div" onClick={handleIncrease}>+</div>
//         </div>
//         <div className="add-buy">
//         <button className="add-to-cart">ADD TO CART</button>
//         <button className="buy-now">BUY NOW</button>
//         </div>
//         <div className="social-icons">
//           <span>❤️</span>
//           <span>🔗</span>
//         </div>
//       </div>
//      </div>
//     </div>
//     </>
//   );
// };

// export default ProductPage;

import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Import useParams
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import "../Style/productdetails.css"; // Importing external CSS
import { products } from "../data/products";
import { CartContext } from "../context/CartContext";

const ProductPage = () => {
  const { id } = useParams(); // Get product ID from URL
  const product = products.find((p) => p.id === parseInt(id)); // Find product by ID
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(""); 
  const [color, setColor] = useState(""); 

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  if (!product) {
    return <h2>Product not found</h2>;
  }
  

  const handleAddToCart = () => {
    if (!size) {
      toast.error("Please select a size!");
      return;
    }
    if (!color) {
      toast.error("Please select a color!");
      return;
    }

    addToCart(product, quantity);
    toast.success(`${product.title} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <div className="product-container">
      <button className="close-btn" onClick={() => navigate("/shop")}>
        ❌
      </button>
        <div className="product-box">
          <div className="image-section">
            <div className="main-image">
              <img src={product.image} alt="Product" />
            </div>
          </div>
          <div className="details-section">
            <h2>{product.title}</h2>
            <p className="price">${product.price}</p>
            <p className="description">
              Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus
              ligula. Mauris consequat ornare feugiat.
            </p>
            <label>Size</label>
            <select value={size} onChange={(e) => setSize(e.target.value)}>
              <option value="" disabled>
                Choose an option
              </option>
              <option value="S">Size S</option>
              <option value="M">Size M</option>
              <option value="L">Size L</option>
              <option value="XL">Size XL</option>
            </select>
            <label>Color</label>
            <select value={color} onChange={(e) => setColor(e.target.value)}>
              <option value="" disabled>Choose a color</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="White">White</option>
              <option value="Grey">Grey</option>
            </select>
            <div className="quantity-container">
              <div className="q-c-div" onClick={handleDecrease}>
                -
              </div>
              <span>{quantity}</span>
              <div className="q-c-div" onClick={handleIncrease}>
                +
              </div>
            </div>
            <div className="add-buy">
              <button className="add-to-cart" onClick={handleAddToCart}>
                ADD TO CART
              </button>
              <button className="buy-now">BUY NOW</button>
            </div>
            <div className="social-icons">
              <span>❤️</span>
              <span>🔗</span>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default ProductPage;
