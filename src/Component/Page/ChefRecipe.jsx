import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigation } from "react-router-dom";
import Spiner from "../Share/Spiner";

const ChefRecipe = ({ item }) => {
  const navigation = useNavigation()
  const [ratings, setRatings] = useState(0);
  const { chef_id, recipeName, ingredients, cookingMethod, rating } = item;
  const [mark, setmark] = useState(false);

  if(navigation.state === 'loading')
  {
    return <Spiner />
  }

  const handlefav = () => {
    setmark(!mark)
    toast.success("🦄 Marked Favorite Recipe!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <>
      <div className="card bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{recipeName}</h2>
          <p>
            <strong>Ingredients: </strong>
            {ingredients}
          </p>
          <p>
            <strong>Cooking Method: </strong>
            {cookingMethod}
          </p>
          <div className="flex items-center gap-2">
            <div>
              <p>
                <strong>Rating : </strong>
                {rating}
              </p>
            </div>
            <Rating
              style={{ maxWidth: 130 }}
              value={Math.round({ rating })}
              readOnly
            />
          </div>
          <div className="card-actions">
            {mark && (
              <button
                onClick={handlefav}
                className="btn btn-primary font-bold text-white w-full"
                disabled
              >
                Favorite
              </button>
            )}
            {mark || (
              <button
                onClick={handlefav}
                className="btn btn-primary font-bold text-white w-full disabled"
              >
                Favorite
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefRecipe;
