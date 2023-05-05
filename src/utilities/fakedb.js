// use local storage to manage cart data
const addToDb = id => {
    let favouriteCard = getFavouriteCard();
    // add quantity
    const item = favouriteCard[id];
    if (!item) {
        favouriteCard[id] = id;
    }
    localStorage.setItem('favourite-card', JSON.stringify(favouriteCard));
}

const removeFromDb = id => {
    const favouriteCard = getFavouriteCard();
    if (id in favouriteCard) {
        delete favouriteCard[id];
        localStorage.setItem('favourite-card', JSON.stringify(favouriteCard));
    }
}

const getFavouriteCard = () => {
    let favouriteCard = {};

    //get the Favourite Card from local storage
    const storedCart = localStorage.getItem('favourite-card');
    if (storedCart) {
        favouriteCard = JSON.parse(storedCart);
    }
    return favouriteCard;
}

const deleteFavouriteCard = () => {
    localStorage.removeItem('favourite-card');
}

export {
    addToDb,
    removeFromDb,
    getFavouriteCard,
    deleteFavouriteCard
}
