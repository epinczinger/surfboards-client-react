import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Item from '../components/Item';
import { getFavourites, deleteFavourite } from '../actions';

const FavouritesList = () => {
  const dispatch = useDispatch();
  const authToken = useSelector((state) => state.session[0]);
  const isLoggedIn = useSelector((state) => state.session[1]);
  const favourites = useSelector((state) => state.favourites);

  let favouritesList;
  if (isLoggedIn) {
    useEffect(() => {
      dispatch(getFavourites(authToken));
    }, []);
    const removeFavourite = ({
      id, model, brand, price, img, category,
    }) => {
      dispatch(
        deleteFavourite(authToken, {
          id,
          model,
          brand,
          price,
          img,
          category,
        }),
      );
    };

    favouritesList = favourites !== []
      ? favourites.map((f) => (
        <div key={`${f.id}${f.kind}`}>
          <Item
            id={f.id}
            model={f.model}
            brand={f.brand}
            price={f.price}
            description={f.description}
            img={f.image_url}
            category={f.category}
            removeFavourite={removeFavourite}
          />
        </div>
      ))
      : '';
  }
  return (
    <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-3">
      {favouritesList}
    </div>
  );
};
export default FavouritesList;
