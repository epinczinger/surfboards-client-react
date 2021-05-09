import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="w-fullbg-white font-semibold min-h-screen shadow-md py-5 sm:mx-auto overflow-hidden flex flex-col justify-around">
    <div className="text-3xl text-gray-800 text-center">
      <h1>Waves, waves waves.</h1>
    </div>
    <div className="sm:flex sm:my-2 justify-around">
      <img
        className="himg w-50 object-cover py-4"
        src="https://cdn.pixabay.com/photo/2016/03/09/15/16/wave-1246560_960_720.jpg"
        alt="surfboard"
      />
    </div>
    <div className="text-3xl text-gray-800 text-center">
      <h1>
        Everyone wants to be there, but first you need some
        <Link
          to="/surfboards"
          className="text-blue-500"
        >
          {' '}
          Equipment
        </Link>
      </h1>
    </div>
  </div>
);

export default Home;
