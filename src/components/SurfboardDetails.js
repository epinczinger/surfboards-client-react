import React from 'react';

const SurfboardDetails = () => (
  <div className="w-full text-gray-800 bg-white min-h-screen shadow-md overflow-hidden flex flex-col justify-center">
    <div className="sm:flex sm:my-2 justify-around h-full">
      <div className="py-5 px-2 sm:ml-4 shadow-lg">
        <img
          className="himg w-50 object-cover py-4"
          src="https://cabiancasurfboards.com/wp-content/uploads/2019/09/cabianca_DFK_20.jpg"
          alt="surfboard"
        />
      </div>
      <div className="p-8 sm:max-w-sm">
        <div className="p-8 sm:max-w-sm shadow-lg">
          <div className="uppercase text-lg font-semibold bg-gray-200 p-2">
            Scorpion
          </div>
          <div className="mt-2 text-gray-800 p-2">
            <span className="font-semibold">Material: </span>
            {' '}
            Foam
          </div>
          <div className="mt-2 text-gray-800 bg-gray-200 p-2">
            <p className="font-semibold">
              Brand:
              <span className="font-normal"> CR surfboards</span>
            </p>
          </div>
          <div className="mt-2 text-gray-800 p-2">
            <p className="font-semibold">
              Price: $
              <span className="font-normal"> 654</span>
            </p>
          </div>
          <div className="mt-2 text-gray-800 bg-gray-200 p-2">
            <p className="font-semibold">
              Shipping:
              <span className="font-normal"> Yes</span>
            </p>
          </div>
          <div className="mt-2 text-gray-800 p-2">
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you canard work.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SurfboardDetails;
