import React from "react";
import food1 from "/public/Chinese-Cuisine1.png";
import food2 from "/public/Chinese-Cuisine2.png";
import food3 from "/public/Chinese-Cusine4.png";
import Chef from "./Chef";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center text-white mt-5 w-full h-screen">
        <div>
          <h1 className="text-5xl font-bold mb-2">
            Finally,the dish you have been <br /> waiting for on your table
          </h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempora
            consequuntur suscipit possimus magnam molestiae
          </p>
          <Link to="/"><button className="btn btn-primary text-white mb-3">Order Now</button></Link>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <img className="img-fluid" src={food1} alt="" />
          </div>
          <div>
            <img className="img-fluid " src={food2} alt="" />
          </div>
          <div>
            <img className="img-fluid" src={food3} alt="" />
          </div>
        </div>
      </div>
      <Chef />
    </div>
  );
};

export default Home;
