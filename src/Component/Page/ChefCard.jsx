import React from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import Spiner from "../Share/Spiner";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BiLike } from "react-icons/bi";
import { GiRiceCooker, GiCook } from "react-icons/gi";



const ChefCard = ({ item }) => {
  const {
    id,
    chefPicture,
    chefName,
    yearsOfExperience,
    numberOfRecipes,
    likes,
  } = item;
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Spiner />;
  }

  return (
    <div className="card bg-base-100 shadow-2xl text-center">
      <figure className="img-fluid w-full h-1/2">
      <LazyLoadImage src={chefPicture}
        width={200} height={300}
        effect="blur"
        alt="Image Alt"
      />
      </figure>
      <div className="card-body mx-auto">
        <h2 className="text-3xl font-bold pb-1">{chefName}</h2>
        <div className="flex gap-2 items-center justify-start">
        <GiCook size="2em" color="red"/>
        <span className="text-xl font-bold">Year of Experience: {yearsOfExperience}</span>
        </div>
        <div className="flex gap-2 items-center justify-start">
        <GiRiceCooker size="2em" color="blue"/>
        <span className="text-xl font-bold">Number of Recipes: {numberOfRecipes}</span>
        </div>
        <div className="flex gap-2 items-center justify-start">
        <BiLike size="2em" color="green"/>
        <span className="text-xl font-bold">Total Likes: {likes}</span>
        </div>
        <div className="card-actions justify-center pt-2">
          <Link to={`/viewdetail/${id}`}>
            <button className="btn btn-primary text-white">View Recipes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
