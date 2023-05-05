import { Rating } from "@smastrom/react-rating";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigation } from "react-router-dom";
import Spiner from "../Share/Spiner";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BiDish } from "react-icons/bi";
import { SiCodechef } from "react-icons/si";
import { GiRiceCooker } from "react-icons/gi";


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
    if(chef_id)
    {
      loadData()
    }
  }, [chef_id]);

  const { chefPicture, chefName,chefBio } = chef;


  // console.log(card)
  // console.log(chef)

  return (
    <div className="container mx-auto my-4 w-2/3">
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row md:gap-16">
          <img src={chefPicture} className="w-1/4 rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold mb-2">{chefName}</h1>
            <div className="flex gap-2 items-center justify-start">
              <GiRiceCooker size="2em" color="black" />
              <span className="text-xl font-bold">
                Recipe: {recipeName}
              </span>
            </div>
            <p className="py-2 ">
              <strong className="text-xl">Chef Biography: </strong>{chefBio}
            </p>
          </div>
          <button onClick={() => handleRemoveBtn(items)}  className="btn btn-error text-white">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default FavCard;
