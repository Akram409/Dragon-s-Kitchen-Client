import { Rating } from "@smastrom/react-rating";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { removeFromDb } from "../../utilities/fakedb";
import { useNavigation } from "react-router-dom";
import Spiner from "../Share/Spiner";

const FavCard = ({ items , handleRemoveBtn}) => {
  const navigation = useNavigation()
  const [card, setCard] = useState([]);
  const [chef, setChef] = useState([]);

  if (navigation.state === "loading") {
    return <Spiner />;
  }
  useEffect(() => {
    const loadData = async() =>{
        const res = await fetch(`https://dragons-kitchen-server-akram409.vercel.app/recipesData/${items}`)
        const data = await res.json()
        setCard(data)
    }
    loadData()
  }, []);

  const { chef_id, ingredients, cookingMethod, rating, recipeName  } = card;

  useEffect(() => {
    const loadData = async() =>{
        const res = await fetch(`https://dragons-kitchen-server-akram409.vercel.app/ChefData/${chef_id}`)
        const data = await res.json()
        setChef(data)
    }
    loadData()
  }, []);

  const { chefPicture, chefName,chefBio } = chef;


//   console.log(card)
//   console.log(chef)

  return (
    <div className="container mx-auto my-4 w-2/3">
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row md:gap-16">
          <img src={chefPicture} className="w-1/4 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold mb-2">{chefName}</h1>
            <h1 className="text-xl">
              <strong>Recipe Name: </strong>
              {recipeName}
            </h1>
            <p className="py-3">
              <strong>Chef Biography: </strong>{chefBio}
            </p>
          </div>
          {/* <button onClick={() => handleRemoveBtn(items)}  className="btn btn-error text-white">Remove</button> */}
        </div>
      </div>
    </div>
  );
};

export default FavCard;
