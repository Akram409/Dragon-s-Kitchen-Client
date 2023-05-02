import React from "react";
import food from "/public/Chinese-Cuisine1.png";
import '../Style/Home.css'
const Home = () => {
  return (
    <div className="container mx-auto text-center text-white mt-5">
      <div>
        <h1 className="text-5xl font-bold mb-2">
          Finally,the dish you have been <br /> waiting for on your table
        </h1>
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempora
          consequuntur suscipit possimus magnam molestiae
        </p>
        <button className="btn btn-primary text-white mb-3">Order Now</button>
      </div>
      
      <div class="grid grid-cols-3 gap-4">
        <div className="">
          <img className="img-fluid" src={food} alt="" />
        </div>
        <div>
          <img className="img-fluid " src={food} alt="" />
        </div>
        <div>
          <img className="img-fluid" src={food} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
