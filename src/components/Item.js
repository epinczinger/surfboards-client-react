import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
}) => {
  const isLoggedIn = useSelector((state) => state.session.isLogged);
  const [isFavourite, setisFavourite] = useState(false);
  const favourites = useSelector((state) => state.favourites);

  useEffect(() => {
    if (favourites.filter((fav) => parseInt(fav.id, 10) === parseInt(id, 10)).length === 1) {
      setisFavourite(true);
    }
  }, []);

  return (
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
            {isLoggedIn && (
            <div className="text-red-500 p-2">
              {!isFavourite ? (
                <button
                  className="transform hover:scale-125"
                  type="button"
                  onClick={() => {
                    setisFavourite(true);
                    addFavourite({
                      id,
                      model,
                      brand,
                      price,
                      img,
                      category,
                    });
                  }}
                >
                  <Heart />
                </button>
              ) : (
                <button
                  className="transform hover:scale-125"
                  type="button"
                  onClick={() => {
                    setisFavourite(false);
                    removeFavourite({
                      id,
                      model,
                      brand,
                      price,
                      img,
                      category,
                    });
                  }}
                >
                  <HeartFull />
                </button>
              )}
            </div>
            )}
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
};
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
