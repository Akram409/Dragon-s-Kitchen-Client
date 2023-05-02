import React, { useContext, useEffect, useState } from "react";
import ChefDetails from "./ChefDetails";
import ChefRecipe from "./ChefRecipe";
import { useParams } from "react-router-dom";
import { key } from "localforage";

const VeiwDetails = () => {
    const { id } = useParams();

  const [item, setItem] = useState([]);
  const [recipes,setRecipes] = useState([])

  useEffect(() => {
    fetch(`https://dragons-kitchen-server-akram409.vercel.app/ChefData/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  useEffect(() =>{
    fetch('https://dragons-kitchen-server-akram409.vercel.app/recipesData')
    .then((res) => res.json())
    .then((data) => setRecipes(data));
  },[])

  const filterRecipes = recipes.filter(it => it.chef_id == id)

  return (
    <div>
      {
        <ChefDetails item={item}/>
      }
      {
        <ChefRecipe item={filterRecipes}/>
      }
    </div>
  );
};

export default VeiwDetails;
