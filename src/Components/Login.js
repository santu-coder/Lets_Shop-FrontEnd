// import React from "react";
// import "../Style/login.css";
// import { Link } from "react-router-dom";
// import Footer from "./Footer";

// const Login = () => {
//   return (
//     <>
//       <div className="login-container">
//         <div className="login-box">
//           <h2>
//             Login to your <span>account</span>
//           </h2>
//           <p>
//             Please input your username and password and login to your account to
//             get access to your dashboard.
//           </p>

//           <form>
//             <input type="text" placeholder="Username or Email *" required />
//             <input type="password" placeholder="Password *" required />

//             <div className="options">
//               <label>
//                 {" "}
//                 Remember_Me
//                 <input type="checkbox" />
//               </label>
//               <a href="#">Forgot your password?</a>
//             </div>

//             <button type="submit" className="login-btn">
//               Login
//             </button>
//           </form>

//           <p className="signup-text">
//             Haven't any account? <Link to="/signup">SignUp?</Link>
//             {/* <a href="#">Sign Up</a> */}
//           </p>

//           <div className="social-login">
//             <span>Or Login with</span>
//             <div className="social-icons">
//               <button className="google-btn">G</button>
//               <button className="facebook-btn">f</button>
//               <button className="linkedin-btn">in</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Style/login.css";
import Footer from "./Footer";
import ApiService from "../service/ApiService"; // Assuming you have a login API

const Login = () => {
  const [userdata, setUserData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userdata.email || !userdata.password) {
      toast.error("Please fill in both fields.");
      return;
    }

    try {
      await ApiService.login(userdata); // Mock API call for login
      toast.success("Login successful! Redirecting...");
      
      setTimeout(() => {
        navigate("/"); // Redirect after login
      }, 2000);
    } catch (error) {
      toast.error(error.message || "Invalid credentials!");
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <h2>
            Login to your <span>account</span>
          </h2>
          <p>
            Please input your email and password to access your dashboard.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email *"
              name="email"
              value={userdata.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Password *"
              name="password"
              value={userdata.password}
              onChange={handleChange}
              required
            />

            <div className="options">
              <label>
                Remember Me
                <input type="checkbox" />
              </label>
              <a href="#">Forgot your password?</a>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          <p className="signup-text">
            Haven't an account? <Link to="/signup">SignUp?</Link>
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
      </div>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      <Footer />
    </>
  );
};

export default Login;
