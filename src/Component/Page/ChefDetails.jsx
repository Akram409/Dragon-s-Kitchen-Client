import React from "react";
const ChefDetails = ({ item }) => {
  const {
    id,
    chefPicture,
    chefName,
    yearsOfExperience,
    numberOfRecipes,
    likes,
    chefBio
  } = item;
  // console.log(item)
  return (
    <>
      {/* Chef-Bio Banner   */}
      <div className="hero mt-4 mb-6 text-white">
        <div className="hero-content flex-col lg:flex-row gap-4">
            <img className="w-1/4 h-1/2" src={chefPicture} alt="" />
          <div>
            <h1 className="text-5xl font-bold">{chefName}</h1>
            <p className="pt-6 text-xl">{chefBio}</p>
            <br />
            <p className="text-xl">Year of Experience: {yearsOfExperience}</p>
            <br />
            <p className="text-xl">Number of Recipes: {numberOfRecipes}</p>
            <br />
            <p className="text-xl">Total Likes: {likes}</p>
            <br />
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefDetails;
