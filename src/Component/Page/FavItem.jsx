import React from "react";
import { getFavouriteCard, removeFromDb } from "../../utilities/fakedb";
import { useState } from "react";
import { useEffect } from "react";
import FavCard from "./FavCard";

const FavItem = () => {
const [favItem,setFavItem] = useState([])
  

  useEffect(() => {
    let storeCard = getFavouriteCard();
    let savedCard = [];
    for (const id in storeCard) {
        if (id) {
          savedCard.push(id);
        }
      }
      setFavItem(savedCard)
  },[])


  const handleRemoveBtn = (id) =>{
    const remaining = favItem.filter((it) => it.recipe_id !== id);
    setFavItem(favItem);
    removeFromDb(id);
}

  return (
    <div>
      {
            favItem.map(items => <FavCard
                key={items.recipe_id} 
                handleRemoveBtn={handleRemoveBtn}
                items ={items}
            ></FavCard>)
        }
    </div>
  );
};

export default FavItem;
