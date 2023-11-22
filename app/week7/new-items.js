"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      name,
      quantity,
      category,
    };

    console.log(newItem);
    onAddItem(newItem);

    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  const nameChange = (event) => {
    setName(event.target.value);
  };

  const quantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const categoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <main className="flex justify-center items-center bg-pink-200 min-h-screen">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl text-pink-800 font-bold mb-8 text-center">
          Add New Item
        </h1>
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            <span className="text-pink-800">Item Name </span>
            <input
              required
              onChange={nameChange}
              value={name}
              className="bg-gray-200 text-pink-800 focus:bg-gray-200 focus:outline-none mt-1 p-1 rounded-xl"
            ></input>
          </label>

          <label className="block mb-4">
            <span className="text-pink-800"> Quantity </span>
            <input
              required
              onChange={quantityChange}
              value={quantity}
              type="number"
              min={1}
              max={99}
              className="bg-gray-200 text-pink-800 focus:bg-gray-200 focus:outline-none mt-1 p-1 rounded-xl"
            ></input>
          </label>

          <label className="block mb-4">
            <span className="text-pink-800"> Category </span>
            <select
              required
              onChange={categoryChange}
              value={category}
              className="bg-gray-200 text-pink-800 focus:bg-gray-200 focus:outline-none mt-1 p-1 rounded-xl"
            >
              <option value="Produce">Produce</option>
              <option value="Dairy">Dairy</option>
              <option value="Bakery">Bakery</option>
              <option value="Meat">Meat</option>
              <option value="Frozen Foods">Frozen Foods</option>
              <option value="Canned Goods">Canned Goods</option>
              <option value="Dry Goods">Dry Goods</option>
              <option value="Beverages">Beverages</option>
              <option value="Snacks">Snacks</option>
              <option value="Household">Household</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <button
            type="submit"
            className="text-white bg-pink-700 rounded-xl py-1 focus:outline-none w-full hover:bg-pink-900"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
