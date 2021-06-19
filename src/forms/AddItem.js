import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../actions';

const AddItem = () => {
  const [category, setCategory] = useState('accesories');
  const [article, setArticle] = useState('');
  const [shipping, setShipping] = useState('yes');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [brand, setBrand] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    dispatch(
      addProduct({
        category,
        article,
        shipping,
        price,
        brand,
        img_url: imgUrl,
        description,
      }),
    );
    event.preventDefault();
    alert(
      'Only Admins are allowed to add Items. Ask for credentials. This is visible only for the purpose of showing the admin features.',
    );
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === 'category') {
      setCategory(value);
    } else if (name === 'article') {
      setArticle(value);
    } else if (name === 'brand') {
      setBrand(value);
    } else if (name === 'price') {
      setPrice(value);
    } else if (name === 'shipping') {
      setShipping(value);
    } else if (name === 'imgUrl') {
      setImgUrl(value);
    } else if (name === 'description') {
      setDescription(value);
    }
  };

  return (
    <div className="flex flex-row items-center mx-auto pt-4">
      <form
        className="bg-white shadow-md text-xl rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="form-category"
          className="pb-2 block text-gray-700 font-bold mb-2"
        >
          Category
          <select
            name="category"
            value={category}
            onChange={handleChange}
            id="form-category"
            className="mt-2 bg-white h-11 text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="accesories">Accesories</option>
            <option value="surfboards">Surfboards</option>
          </select>
        </label>
        <label
          htmlFor="form-article"
          className="pb-2 block text-gray-700 font-bold mb-2"
        >
          Article
          <input
            name="article"
            value={article}
            onChange={handleChange}
            className="mt-2 h-11 text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="form-article"
          />
        </label>
        <label
          htmlFor="form-brand"
          className="pb-2 block text-gray-700 font-bold mb-2"
        >
          Brand
          <input
            name="brand"
            value={brand}
            onChange={handleChange}
            className="mt-2 h-11 text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="form-brand"
          />
        </label>
        <label
          htmlFor="form-imgUrl"
          className="pb-2 block text-gray-700 font-bold mb-2"
        >
          Image url
          <input
            name="imgUrl"
            value={imgUrl}
            onChange={handleChange}
            className="mt-2 h-11 text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="form-imgUrl"
          />
        </label>
        {imgUrl ? (
          <div className="py-3 px-2 shadow-lg">
            <img
              className="imgForm object-cover py-2 mx-auto"
              src={imgUrl}
              alt=""
            />
          </div>
        ) : (
          ''
        )}
        <label
          htmlFor="form-price"
          className="pb-2 block text-gray-700 font-bold mb-2"
        >
          Price
          <input
            name="price"
            value={price}
            onChange={handleChange}
            className="mt-2 h-11 text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            id="form-price"
            step=".1"
          />
        </label>
        <label
          htmlFor="form-shipping"
          className="pb-2 block text-gray-700 font-bold mb-2"
        >
          Shipping
          <select
            name="shipping"
            value={shipping}
            onChange={handleChange}
            id="form-shipping"
            className="mt-2 bg-white h-11 text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        <label
          htmlFor="form-description"
          className="pb-2 block text-gray-700 font-bold mb-2"
        >
          Description
          <textarea
            name="description"
            value={description}
            onChange={handleChange}
            className="mt-2 text-lg h-36 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="textarea"
            id="form-description"
          />
        </label>
        <input
          type="submit"
          value="Add Item"
          className="w-full mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        />
      </form>
    </div>
  );
};

export default AddItem;
