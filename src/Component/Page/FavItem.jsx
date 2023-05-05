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

  console.log(favItem)
  const handleRemoveBtn = (id) =>{
    const remaining = favItem.filter((it) => it !== id);
    setFavItem(remaining);
    removeFromDb(id);
}

  return (
    <div>
      {
            favItem.map(items => <FavCard
                key={items.recipe_id} 
                items ={items}
                handleRemoveBtn={handleRemoveBtn}
            ></FavCard>)
        }
    </div>
  );
};

export default FavItem;
