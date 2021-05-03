import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Surfboard = ({
  id, model, brand, price, img,
}) => (
  <div id={id} className="flex-col m-2">
    <div className="py-5 px-2 sm:ml-4 shadow-lg">
      <img
        className="himglist object-cover py-4 mx-auto"
        src={img}
        alt="surfboard"
      />
    </div>
    <div className="py-5 px-2 sm:ml-4 shadow-lg">
      <div className="font-semibold bg-gray-200 p-2 flex justify-between">
        <div className="p-2 uppercase text-lg">{model}</div>
        <div className="p-2 border text-blue-400">
          <Link to={`/surfboards/${id}`}>Details</Link>
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

export default Surfboard;

Surfboard.defaultProps = {
  id: '',
  model: '',
  price: '',
  brand: '',
  img: '',
};

Surfboard.propTypes = {
  id: PropTypes.number,
  model: PropTypes.string,
  price: PropTypes.string,
  img: PropTypes.string,
  brand: PropTypes.string,
};
