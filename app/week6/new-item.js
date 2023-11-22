"use client";

import React, { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");
  const [itemCreated, setItemCreated] = useState(false);

  const handleSubmit = (item) => {
    item.preventDefault();

    const newItem = {
      name,
      quantity,
      category,
      onAddItem,
    };
    console.log(newItem);
    onAddItem(newItem);
    setItemCreated(true);
    setItem("");
    setQuantity(1);
    setCategory("Produce");
  };

  const handleItemChange = (item) => {
    setItem(item.target.value);
  };

  const handleQuantityChange = (quantity) => {
    setQuantity(quantity.target.value);
  };

  const handleCategoryChange = (category) => {
    setCategory(category.target.value);
  };

  return (
    <main className="container mx-auto my-8 p-8 bg-pink-200 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-4 text-pink-800">Add New Item</h1>
      <form onSubmit={handleSubmit}>
        <label className="block text-pink-800 mb-2" htmlFor="item">
          Item
        </label>
        <input
          className="border border-pink-500 bg-pink-100 w-full p-2 mb-4"
          id="item"
          type="text"
          value={name}
          onChange={handleItemChange}
          required
        />
        <label className="block text-pink-800 mb-2" htmlFor="quantity">
          Quantity
        </label>
        <input
          className="border border-pink-500 bg-pink-100 w-full p-2 mb-4"
          id="quantity"
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          required
        />
        <label className="block text-pink-800 mb-2" htmlFor="category">
          Category
        </label>
        <select
          className="border border-pink-500 bg-pink-100 w-full p-2 mb-4"
          id="category"
          value={category}
          onChange={handleCategoryChange}
          required
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Pantry">Pantry</option>
          <option value="Meat">Meat</option>
          <option value="Frozen">Frozen</option>
        </select>
        <button
          className="btn btn-primary hover:bg-pink-700 text-white"
          type="submit"
        >
          Add Item
        </button>
      </form>
    </main>
  );
}
