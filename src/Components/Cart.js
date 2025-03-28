// import React from "react";
// import { useCart } from "../Context/CartContext";
// import "../Style/cart.css";
// import logo from "../Assets/LetsShop_Images/images/item-cart-01.jpg";
// import "../Style/navbar.css";

// const Cart = () => {
//   const { Cart, updateQuantity } = useCart();
   
//   const calculateTotal = () => {
//     return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
//   };

//   return (
//     <div className="cart-container nav-container">
//       <div className="cart-items">
//       {cart.length === 0 ? (
//           <p>Your cart is empty!</p>
//         ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Product</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Total</th>
//             </tr>
//           </thead>
//           {/* <tbody>
//             <tr>
//               <td>
//                 <img src={logo} alt="Product image" />
//                 Fresh Strawberries
//               </td>
//               <td>$36.00</td>
//               <td>
//                 <button>-</button>
//                 <span>1</span>
//                 <button>+</button>
//               </td>
//               <td>$36.00</td>
//             </tr>
//           </tbody> */}
//           <tbody>
//               {cart.map((item) => (
//                 <tr key={item.id}>
//                   <td>
//                     <img src={item.image} alt={item.name} />
//                     {item.name}
//                   </td>
//                   <td>${item.price.toFixed(2)}</td>
//                   <td>
//                     <button onClick={() => updateQuantity(item.id, -1)}>-</button>
//                     <span>{item.quantity}</span>
//                     <button onClick={() => updateQuantity(item.id, 1)}>+</button>
//                   </td>
//                   <td>${(item.price * item.quantity).toFixed(2)}</td>
//                 </tr>
//               ))}
//             </tbody>
//         </table>
//         {/* <div className="cart-buttons">
//           <input type="text" placeholder="Coupon Code" />
//           <button>Apply Coupon</button>
//           <button>Update Cart</button>
//         </div> */}
//       </div>
//       <div className="cart-totals">
//         <h3>Cart Totals</h3>  <span>$79.65</span>
//         {/* <p>
//           Subtotal: <span>$79.65</span>
//         </p>
//         <hr />
//         <p>
//           Total: <span>$79.65</span>
//         </p> */}
//         <button className="checkout-btn">BUY</button>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext"; // Import CartContext
import "../Style/cart.css";
import "../Style/navbar.css"

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  // Calculate total cart value
  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty 🛒</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.image} alt={item.title} className="cart-item-img" />
                  {item.title}
                </td>
                <td>${item.price.toFixed(2)}</td>  
                <td>${(item.price * item.quantity).toFixed(2)}</td>

                <td>
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                    ❌ Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Cart Total Section */}
      {cart.length > 0 && (
        <div className="cart-totals">
          <h3>Cart Totals</h3>
          <span>Total: ${calculateTotal()}</span>
          <button className="checkout-btn">BUY</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
