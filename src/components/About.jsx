import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>Bringing the joy of cooking to every kitchen.</p>
            </div>
            <p className="mid">
            Welcome to Foodiof, your go-to place for delicious and easy-to-make recipes! We are passionate about bringing people together through the love of food. At Foodiof, you'll find a variety of recipes, from classic comfort foods to modern dishes, all designed to inspire your cooking journey. Whether you're a beginner or an experienced cook, we provide simple, step-by-step guides to help you create tasty meals at home. Join us, explore new flavors, and make every meal special!
            </p>
            <Link to={"/menu"}>
              Explore Menu
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
