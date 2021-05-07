import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Heart, HeartFull } from './Icons';

const Item = ({
  id,
  model,
  brand,
  price,
  img,
  category,
  addFavourite,
  removeFavourite,
}) => (
  <div id={id} className="flex-col m-2">
    <div className="py-5 px-2 sm:ml-4 shadow-lg">
      <img
        className="himglist object-cover py-4 mx-auto"
        src={img}
        alt={category}
      />
    </div>
    <div className="py-5 px-2 sm:ml-4 shadow-lg">
      <div className="font-semibold bg-gray-200 p-2 flex justify-between">
        <div className="p-2 uppercase text-lg">{model}</div>
        <div className="flex">
          <div className="text-red-500 p-2">
            <button type="button" onClick={() => addFavourite(id)}>
              <Heart />
            </button>
            <button type="button" onClick={() => removeFavourite(id)}>
              <HeartFull />
            </button>
          </div>
          <div className="p-2 border text-blue-400">
            <Link to={`/${category}/${id}`}>Details</Link>
          </div>
        </div>
      </div>
      <div className="mt-2 text-gray-800 p-2">
        <span className="font-semibold">Material: </span>
        {' '}
        Foam
      </div>
      <div className="mt-2 text-gray-800 bg-gray-200 p-2">
        <p className="font-semibold">
          Brand:
          <span className="font-normal">{brand}</span>
        </p>
      </div>
      <div className="mt-2 text-gray-800 p-2">
        <p className="font-semibold">
          Price: $
          <span className="font-normal">{price}</span>
        </p>
      </div>
      <div className="mt-2 text-gray-800 bg-gray-200 p-2">
        <p className="font-semibold">
          Shipping:
          <span className="font-normal"> Yes</span>
        </p>
      </div>
    </div>
  </div>
);

export default Item;

Item.defaultProps = {
  id: '',
  model: '',
  price: '',
  brand: '',
  img: '',
  category: '',
  addFavourite: () => {},
  removeFavourite: () => {},
};

Item.propTypes = {
  id: PropTypes.number,
  model: PropTypes.string,
  price: PropTypes.string,
  img: PropTypes.string,
  brand: PropTypes.string,
  category: PropTypes.string,
  addFavourite: PropTypes.func,
  removeFavourite: PropTypes.func,
};
