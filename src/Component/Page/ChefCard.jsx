import React from "react";
import { Link } from "react-router-dom";

const ChefCard = ({item}) => {
  const {chefPicture, chefName, yearsOfExperience , numberOfRecipes , likes } = item;
console.log(item)

  return (
    <div className="card bg-base-100 shadow-2xl text-center">
      <figure className="img-fluid w-full h-1/2" >
        <img
          className="w-1/2 h-full"
          src={chefPicture}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="text-3xl font-bold">{chefName}</h2>
        <p className="">Year of Experience: {yearsOfExperience}</p>
        <p>Number of Recipes: {numberOfRecipes}</p>
        <p>Total Likes: {likes}</p>
        <div className="card-actions justify-center">
          <Link to="/"><button className="btn btn-primary text-white">View Recipes</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
