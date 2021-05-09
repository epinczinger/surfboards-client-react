import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import Item from '../components/Item';
import { createFavourite, deleteFavourite } from '../actions';

const ItemList = () => {
  const dispatch = useDispatch();
  const { path } = useRouteMatch();
  const surfboards = useSelector((state) => state.products[1]);
  const accesories = useSelector((state) => state.products[0]);
  const authToken = useSelector((state) => state.session[0]);

  const addFavourite = ({
    id, model, brand, price, img, category,
  }) => {
    dispatch(
      createFavourite(authToken, {
        id,
        model,
        brand,
        price,
        img,
        category,
      }),
    );
  };

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

  const accesoriesList = accesories.map((a) => (
    <div key={`${a.id}${a.category}`}>
      <Item
        id={a.id}
        model={a.model}
        brand={a.brand}
        price={a.price}
        description={a.description}
        img={a.image_url}
        category={a.category}
        addFavourite={addFavourite}
        removeFavourite={removeFavourite}
      />
    </div>
  ));

  const surfboardsList = surfboards.map((s) => (
    <div key={`${s.id}${s.category}`}>
      <Item
        id={s.id}
        model={s.model}
        brand={s.brand}
        price={s.price}
        description={s.description}
        img={s.image_url}
        category={s.category}
        addFavourite={addFavourite}
        removeFavourite={removeFavourite}
      />
    </div>
  ));

  let itemList;
  if (path === '/accesories') {
    itemList = accesoriesList;
  } else if (path === '/surfboards') {
    itemList = surfboardsList;
  }

  return (
    <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-3">
      {itemList}
    </div>
  );
};

export default ItemList;
