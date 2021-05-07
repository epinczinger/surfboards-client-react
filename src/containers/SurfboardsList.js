import React from 'react';
import { useSelector } from 'react-redux';
import Item from '../components/Item';
// import { createFavourite, deleteFavourite } from '../actions';

const SurfboardsList = () => {
  const surfboards = useSelector((state) => state.products[1]);
  // const authToken = useSelector((state) => state.session[0]);
  // const dispatch = useDispatch();

  // const addFavourite = (id, type) => {
  //   let kind;
  //   if (type === 'accesories') kind = 'Accesory';
  //   else if (type === 'surfboards') kind = 'Surfboard';
  //   dispatch(createFavourite(authToken, id, kind));
  // };
  // const removeFavourite = (id, type) => {
  //   let kind;
  //   if (type === 'accesories') kind = 'Accesory';
  //   else if (type === 'surfboards') kind = 'Surfboard';
  //   dispatch(deleteFavourite(authToken, id, kind));
  // };

  const surfboardsList = surfboards.map((s) => (
    <div key={`${s.id}${s.kind}`}>
      <Item
        id={s.id}
        model={s.model}
        brand={s.brand}
        price={s.price}
        description={s.description}
        img={s.image_url}
        type={s.kind}
        // addFavourite={addFavourite}
        // removeFavourite={removeFavourite}
      />
    </div>
  ));

  return (
    <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-3">
      {surfboardsList}
    </div>
  );
};

export default SurfboardsList;
