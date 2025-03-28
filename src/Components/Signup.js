// import React from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/ReactToastify.css";
// import "../Style/signup.css";
// import { Link, useNavigate } from "react-router-dom";
// import ApiService from "../service/ApiService";
// import { useState } from "react";

// const SignUp = () => {
//   const [userdata, setUserData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setUserData({ ...userdata, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (userdata.password !== userdata.confirmPassword) {
//       setError("Passwords do not match!");
//       return;
//     }
//     try {
//       await ApiService.signup(userdata); // Use signup method instead of register
//       alert("Registration successful!"); // Alert on success
//       setUserData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//       });
//       navigate("/login"); 
//     } catch (error) {
//       setError(error.message || "An error occurred during registration."); // Show error message
//     }
//   };
  
//   return (
//     <div className="signup-container">
//       <div className="signup-box">
//         <h2>
//           Create an <span>account</span>
//         </h2>
//         <p>Please provide your valid information to register!</p>

//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <input
//               type="text"
//               placeholder="First Name *"
//               name="firstName"
//               value={userdata.firstName}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="text"
//               placeholder="Last Name *"
//               name="lastName"
//               value={userdata.lastName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <input
//             type="email"
//             placeholder="E-Mail Address *"
//             name="email"
//             value={userdata.email}
//             onChange={handleChange}
//             required
//           />
//           <div className="input-group">
//             <input
//               type="password"
//               placeholder="Password *"
//               name="password"
//               value={userdata.password}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="password"
//               placeholder="Confirm Password *"
//               name="confirmPassword"
//               value={userdata.confirmPassword}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <button type="submit" className="register-btn">
//             Register
//           </button>
//         </form>

//         <p className="login-text">
//           Have an account? <Link to="/login">LogIn?</Link>
          
//         </p>

//         <div className="social-login">
//           <span>Or Login with</span>
//           <div className="social-icons">
//             <button className="google-btn">G</button>
//             <button className="facebook-btn">f</button>
//             <button className="linkedin-btn">in</button>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default SignUp;

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import "../Style/signup.css";
import { Link, useNavigate } from "react-router-dom";
import ApiService from "../service/ApiService";
import { useState } from "react";

const SignUp = () => {
  const [userdata, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userdata.password !== userdata.confirmPassword) {
      toast.error("Passwords do not match!"); // Show error toast
      return;
    }
    try {
      await ApiService.signup(userdata); // Call signup API
      toast.success("Registration successful! Redirecting to login..."); // Success toast
      setUserData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      setTimeout(() => {
        navigate("/login"); // Navigate after toast
      }, 2000); // 2 seconds delay for better user experience
    } catch (error) {
      toast.error(error.message || "An error occurred during registration."); // Error toast
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>
          Create an <span>account</span>
        </h2>
        <p>Please provide your valid information to register!</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="First Name *"
              name="firstName"
              value={userdata.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Last Name *"
              name="lastName"
              value={userdata.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            placeholder="E-Mail Address *"
            name="email"
            value={userdata.email}
            onChange={handleChange}
            required
          />
          <div className="input-group">
            <input
              type="password"
              placeholder="Password *"
              name="password"
              value={userdata.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password *"
              name="confirmPassword"
              value={userdata.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>

        <p className="login-text">
          Have an account? <Link to="/login">LogIn?</Link>
        </p>

        <div className="social-login">
          <span>Or Login with</span>
          <div className="social-icons">
            <button className="google-btn">G</button>
            <button className="facebook-btn">f</button>
            <button className="linkedin-btn">in</button>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div>
  );
};

export default SignUp;
