import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Item from '../components/Item';
import { getFavourites } from '../actions';

const FavouritesList = () => {
  const dispatch = useDispatch();
  const authToken = useSelector((state) => state.session[0]);
  const isLoggedIn = useSelector((state) => state.session[1]);
  let favouritesList;
  if (isLoggedIn) {
    useEffect(() => {
      dispatch(getFavourites(authToken));
    }, []);

    const favourites = useSelector((state) => state.favourites);

    console.log(favourites);

    favouritesList = favourites !== []
      ? favourites.map((a) => (
        <div key={`${a.id}${a.model}`}>
          <Item
            id={a.id}
            model={a.model}
            brand={a.brand}
            price={a.price}
            description={a.description}
            img={a.image_url}
            type="favourites"
          />
        </div>
      )) : '';
  }
  return (
    <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-3">
      {favouritesList}
    </div>
  );
};
export default FavouritesList;
