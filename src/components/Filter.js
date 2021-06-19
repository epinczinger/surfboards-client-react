import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ handleChange }) => (
  <div className="mx-auto text-center my-3 shadow-lg">
    <div className="py-4 relative mx-auto text-gray-600">
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
        onChange={handleChange}
      />
    </div>
  </div>
);

export default Filter;

Filter.defaultProps = {
  handleChange: () => {},
};

Filter.propTypes = {
  handleChange: PropTypes.func,
};
