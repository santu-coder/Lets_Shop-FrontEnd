import React from "react";
// import logo from "../Assets/LetsShop_Images/images/bg-01.jpg";
import logo1 from "../Assets/LetsShop_Images/images/about-01.jpg";
import logo2 from "../Assets/LetsShop_Images/images/about-02.jpg";
import Footer from "./Footer";
import "../Style/about.css"

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="image-section">
          <div className="about-background">
            <div>
              <h1>ABOUT</h1>
            </div>
          </div>
        </div>

        <div className="our-section">
          <div className="our-story-section">
            <div className="our-story">
              <h1>OUR STORY</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                reprehenderit iure porro iusto voluptates recusandae, cupiditate
                autem sunt sit a nihil voluptate quod eum odio iste dolorem
                accusantium asperiores saepe omnis cumque optio sed magnam fuga
                quidem? Accusantium eveniet enim praesentium ducimus ipsum minus
                doloribus quidem earum dolorem odit ipsam dolor, voluptatibus
                eius quae atque rerum doloremque. Rem, ipsum id maxime quae odio
                eos harum natus numquam ut molestias porro neque nisi provident
                voluptates, illum velit deleniti suscipit eaque? Officiis
                voluptatem necessitatibus animi a voluptatibus sint sit aut
                mollitia sequi adipisci quae ex facilis, repellendus inventore
                dolore? Dolorem, dolorum dicta.
              </p>
              <p className="our-story-p2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                reprehenderit iure porro iusto voluptates recusandae, cupiditate
                autem sunt sit a nihil voluptate quod eum odio iste dolorem
                accusantium asperiores saepe omnis cumque optio sed magnam fuga
                quidem? Accusantium eveniet enim praesentium ducimus ipsum minus
                doloribus quidem earum dolorem odit ipsam dolor, voluptatibus
                eius quae atque rerum doloremque. Rem, ipsum id maxime quae odio
                eos harum natus numquam ut molestias porro neque nisi provident
                voluptates, illum velit deleniti suscipit eaque? Officiis
                voluptatem necessitatibus animi a voluptatibus sint sit aut
                mollitia sequi adipisci quae ex facilis, repellendus inventore
                dolore? Dolorem, dolorum dicta.
              </p>
            </div>
            <div className="our-story-img">
              <img src={logo1} alt="not found" />
            </div>
          </div>

          <div className="our-mission-section">
            <div className="our-mission-img our-story-img">
              <img src={logo2} alt="not found" />
            </div>
            <div className="our-mission our-story">
              <h1>OUR MISSION</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                reprehenderit iure porro iusto voluptates recusandae, cupiditate
                autem sunt sit a nihil voluptate quod eum odio iste dolorem
                accusantium asperiores saepe omnis cumque optio sed magnam fuga
                quidem? Accusantium eveniet enim praesentium ducimus ipsum minus
                doloribus quidem earum dolorem odit ipsam dolor, voluptatibus
                eius quae atque rerum doloremque. Rem, ipsum id maxime quae odio
                eos harum natus numquam ut molestias porro neque nisi provident
                voluptates, illum velit deleniti suscipit eaque? Officiis
                voluptatem necessitatibus animi a voluptatibus sint sit aut
                mollitia sequi adipisci quae ex facilis, repellendus inventore
                dolore? Dolorem, dolorum dicta.
              </p>
              <p className="our-story-p2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                reprehenderit iure porro iusto voluptates recusandae, cupiditate
                autem sunt sit a nihil voluptate quod eum odio iste dolorem
                accusantium asperiores saepe omnis cumque optio sed magnam fuga
                quidem? Accusantium eveniet enim praesentium ducimus ipsum minus
                doloribus quidem earum dolorem odit ipsam dolor, voluptatibus
                eius quae atque rerum doloremque. Rem, ipsum id maxime quae odio
                eos harum natus numquam ut molestias porro neque nisi provident
                voluptates, illum velit deleniti suscipit eaque? Officiis
                voluptatem necessitatibus animi a voluptatibus sint sit aut
                mollitia sequi adipisci quae ex facilis, repellendus inventore
                dolore? Dolorem, dolorum dicta.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
