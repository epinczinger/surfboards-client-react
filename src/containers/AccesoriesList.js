import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Item from '../components/Item';
import { createFavourite, deleteFavourite } from '../actions';

const AccesoriesList = () => {
  const accesories = useSelector((state) => state.accesories);
  const authToken = useSelector((state) => state.session[0]);
  const dispatch = useDispatch();

  const addFavourite = (id, type) => {
    let kind;
    if (type === 'accesories') kind = 'Accesory';
    else if (type === 'surfboards') kind = 'Surfboard';
    dispatch(createFavourite(authToken, id, kind));
  };

  const removeFavourite = (id, type) => {
    let kind;
    if (type === 'accesories') kind = 'Accesory';
    else if (type === 'surfboards') kind = 'Surfboard';
    dispatch(deleteFavourite(authToken, id, kind));
  };

  const accesoriesList = accesories.map((a) => (
    <div key={`${a.id}${a.kind}`}>
      <Item
        id={a.id}
        model={a.model}
        brand={a.brand}
        price={a.price}
        description={a.description}
        img={a.image_url}
        type={a.kind}
        addFavourite={addFavourite}
        removeFavourite={removeFavourite}
      />
    </div>
  ));

  return (
    <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-3">
      {accesoriesList}
    </div>
  );
};

export default AccesoriesList;
