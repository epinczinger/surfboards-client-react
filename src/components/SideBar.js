import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../actions';

const SideBar = () => {
  const authToken = useSelector((state) => state.session[0]);
  const isLoggedIn = useSelector((state) => state.session[1]);
  const dispatch = useDispatch();

  return (
    <div className="sm:flex text-gray-800 flex-col justify-between sm:w-56 bg-white sm:h-screen border-r">
      <div className="">
        <div className="p-4 text-center hover:bg-blue-300 text-3xl hover:text-gray-100 font-semibold">
          <Link to="/" className="p-2">
            Surfshop
          </Link>
        </div>
        {!isLoggedIn && (
          <div className="flex justify-center text-sm text-gray-600 p-3">
            <div className="hover:text-blue-400">
              <Link to="/sign_in" className="p-3">
                Sign In
              </Link>
            </div>
            <div className="hover:text-blue-400">
              <Link to="/sign_up" className="p-3">
                Sign Up
              </Link>
            </div>
          </div>
        )}
        {isLoggedIn && (
          <div className="flex justify-center text-sm text-gray-600">
            <div className="hover:text-blue-400">
              <button
                type="button"
                onClick={() => dispatch(signOut(authToken))}
                className="p-3"
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="text-left pl-3 font-semibold text-xl">
        <div className="hover:bg-blue-300 p-3 hover:text-gray-100">
          <Link to="/surfboards" className="">
            Surfboards
          </Link>
        </div>
        <div className="hover:bg-blue-300 p-3 hover:text-gray-100">
          <Link to="/accesories" className="">
            Accesories
          </Link>
        </div>
        <div className="hover:bg-blue-300 p-3 hover:text-gray-100">
          <Link to="/lifestyle" className="">
            Lifestyle
          </Link>
        </div>
        <div className="hover:bg-blue-300 p-3 hover:text-gray-100">
          <Link to="/favourites" className="">
            Favourites
          </Link>
        </div>
      </div>
      <div>
        <div className="py-3 flex text-lg items-center justify-around">
          <a
            href="mailto:epinczinger@gmail.com"
            className="hover:text-blue-400"
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="text-lg"
              viewBox="0 0 125 100"
            >
              <path d="M60,0 l50,0 a10,10 0 0,1 7,17 l-50,50 a10,10 0 0,1 -13,0 l-50,-50 a10,10 0 0,1 7,-17z" />
              <path d="M60,90 l54,0 a10,10 0 0,0 7,-7 l0,-60 -50,50 a15,15 0 0,1 -21,0 l-50,-50 0,60 a10,10 0 0,0 7,7z" />
            </svg>
          </a>
          <a
            href="https://www.github.com/epinczinger"
            className="hover:text-blue-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 1792 1792"
            >
              <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/esteban-pinczinger"
            className="hover:text-blue-400"
          >
            <svg
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z" />
            </svg>
          </a>
        </div>
        <div className="text-center text-sm pb-3 font-light">
          <p> Created by </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.github.com/epinczinger"
            className="hover:text-blue-500"
          >
            Esteban Pinczinger
          </a>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
