import React from "react";
import { useNavigation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BiLike, BiAtom } from "react-icons/bi";
import { GiRiceCooker, GiCook } from "react-icons/gi";

const ChefDetails = ({ item }) => {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Spiner />;
  }
  const {
    id,
    chefPicture,
    chefName,
    yearsOfExperience,
    numberOfRecipes,
    likes,
    chefBio,
  } = item;
  // console.log(item)
  return (
    <>
      {/* Chef-Bio Banner   */}
      <div className="hero mt-4 mb-6 text-white">
        <div className="hero-content flex-col lg:flex-row gap-4">
          <img
            className="w-1/4 h-1/2"
            // effect="blur"
            src={chefPicture} // use normal <img> attributes as props
          />
          <div>
            <h1 className="text-5xl font-bold mb-2">{chefName}</h1>
            <span className="text-xl font-bold">Chef-Bio: {chefBio}</span>
            <div className="flex gap-2 items-center justify-start mt-2">
              <GiCook size="2em" color="white" />
              <span className="text-xl font-bold">
                Year of Experience: {yearsOfExperience}
              </span>
            </div>
            <div className="flex gap-2 items-center justify-start">
              <GiRiceCooker size="2em" color="white" />
              <span className="text-xl font-bold">
                Number of Recipes: {numberOfRecipes}
              </span>
            </div>
            <div className="flex gap-2 items-center justify-start">
              <BiLike size="2em" color="white" />
              <span className="text-xl font-bold">Total Likes: {likes}</span>
            </div>
            <button className="btn btn-primary mt-3 text-white">More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefDetails;
