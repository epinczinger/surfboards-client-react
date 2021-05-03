import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

const SurfboardDetails = () => {
  const surfboards = useSelector((state) => state.surfboards);
  const params = useParams();
  const thisSurfboard = surfboards.filter((s) => s.id.toString() === params.id)[0];

  const {
    model, brand, price, description,
  } = thisSurfboard;

  return (
    <div className="w-full text-gray-800 bg-white min-h-screen shadow-md overflow-hidden flex flex-col justify-center">
      <div className="sm:flex sm:my-2 justify-around h-full">
        <div className="py-5 px-2 sm:ml-4 sm:my-auto shadow-lg">
          <img
            className="himg w-50 object-cover py-4"
            src={thisSurfboard.image_url}
            alt="surfboard"
          />
        </div>
        <div className="p-8 sm:max-w-sm sm:my-auto">
          <div className="p-8 sm:max-w-sm shadow-lg">
            <div className="uppercase text-lg font-semibold bg-gray-200 p-2">
              {model}
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
            <div className="mt-2 text-gray-800 p-2">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurfboardDetails;
