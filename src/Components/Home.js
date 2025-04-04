// import React from "react";
// import logo from "../Assets/LetsShop_Images/images/slide-01.jpg";
// import logo1 from "../Assets/LetsShop_Images/images/slide-02.jpg";
// import logo2 from "../Assets/LetsShop_Images/images/slide-03.jpg";
// import Footer from "./Footer";
// import Shop from "./Shop";
// import "../Style/home.css";
// const Home = () => {
//   return (
//     <>
//       <div className="container">
//         <div class="slider">
//           <div class="slide-track">
//             <div class="slide">
//               <img src={logo} alt="Slide 1" />
//             </div>
//             <div class="slide">
//               <img src={logo1} alt="Slide 2" />
//             </div>
//             <div class="slide">
//               <img src={logo2} alt="Slide 3" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="product-overview">
//         <h1>Product Overview</h1>
//       </div>
//       <Shop />
//     </>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import logo from "../Assets/LetsShop_Images/images/slide-01.jpg";
import logo1 from "../Assets/LetsShop_Images/images/slide-02.jpg";
import logo2 from "../Assets/LetsShop_Images/images/slide-03.jpg";
import Footer from "./Footer";
import Shop from "./Shop";
import "../Style/home.css";

const Home = () => {
  const images = [logo, logo1, logo2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds automatically

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  return (
    <>
      <div className="container">
        <div className="slider">
          <button className="prev" onClick={prevSlide}>&#10094;</button>
          <div className="slide">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
          </div>
          <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
      </div>
      <div className="product-overview">
        <h1>Product Overview</h1>
      </div>
      <Shop />
    </>
  );
};

export default Home;
