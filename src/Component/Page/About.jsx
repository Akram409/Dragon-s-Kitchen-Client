import React from "react";
import image from "/public/banner.jpg";
const About = () => {
  return (
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 my-14 shadow-2xl rounded-md">
      <div className="px-6 pt-4">
        <h1 className="text-4xl font-bold text-red-500 mb-1">About</h1>
        <h1 className="text-3xl font-bold mb-5">Why Dragons Kitchen?</h1>
        <p>
          <strong>Chef-Crafter for Pure joy</strong>
        </p>
        <p className="mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vitae
          neque, tempore similique amet esse
        </p>

        <p>
          <strong>Ingredient You Can Trust</strong>
        </p>
        <p className="mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vitae
          neque, tempore similique amet esse
        </p>

        <p>
          <strong>Special Dishes As You Like</strong>
        </p>
        <p className="mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vitae
          neque, tempore similique amet esse
        </p>
        <button className="btn btn-error text-white font-bold mb-1">
          Learn More
        </button>
      </div>
      <div className="w-full h-full">
        <img className="" src={image} alt="" />
      </div>
    </div>
  );
};

export default About;
