import React from 'react';
import { useSelector } from 'react-redux';
import Accesory from '../components/Accesory';

const AccesoriesList = () => {
  const accesories = useSelector((state) => state.accesories);

  const accesoriesList = accesories.map((a) => (
    <div key={a.id}>
      <Accesory
        id={a.id}
        model={a.model}
        brand={a.brand}
        price={a.price}
        description={a.description}
        img={a.image_url}
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
