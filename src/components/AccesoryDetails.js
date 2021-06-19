import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

const AccesoryDetails = () => {
  const accesories = useSelector((state) => state.products.accesories);
  const params = useParams();
  const thisAccesory = accesories.filter(
    (a) => a.id.toString() === params.id,
  )[0];

  const {
    model, brand, price, description,
  } = thisAccesory;

  return (
    <div className="w-full text-gray-800 bg-white min-h-screen shadow-md overflow-hidden flex flex-col justify-center">
      <div className="sm:flex sm:my-2 justify-around h-full">
        <div className="py-5 px-2 sm:ml-4 sm:my-auto shadow-lg">
          <img
            className="himg w-50 object-cover py-4"
            src={thisAccesory.image_url}
            alt="accesory"
          />
        </div>
        <div className="p-8 sm:max-w-sm sm:my-auto">
          <div className="p-8 sm:max-w-sm shadow-lg">
            <div className="uppercase text-lg font-semibold bg-gray-200 p-2">
              {model}
            </div>
            <div className="mt-2 text-gray-800 p-2">
              <span className="font-semibold">Guarantee: </span>
              {' '}
              Yes
            </div>
            <div className="mt-2 text-gray-800 bg-gray-200 p-2">
              <p className="font-semibold">
                Brand:
                <span className="font-normal">
                  {' '}
                  {brand}
                </span>
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
            <div className="mt-2 text-gray-800 p-2">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccesoryDetails;
