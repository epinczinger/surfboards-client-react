import React from 'react';
import { useSelector } from 'react-redux';
import Surfboard from '../components/Surfboard';

const SurfboardsList = () => {
  const surfboards = useSelector((state) => state.surfboards);

  const surfboardsList = surfboards.map((s) => (
    <div key={surfboards.id}>
      <Surfboard
        id={s.id}
        model={s.model}
        brand={s.brand}
        price={s.price}
        description={s.description}
        img={s.image_url}
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
