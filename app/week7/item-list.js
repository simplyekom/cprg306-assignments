"use client";
import { useState } from "react";
import Item from "./item.js";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    let aData = a[sortBy] || '';
    let bData = b[sortBy] || '';
    return aData.localeCompare(bData);
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="space-y-4">
        <span className="text-pink-600 font-bold">Sort by:</span>
        <button
          className={`px-4 py-2 ${
            sortBy === "name"
              ? 'bg-pink-700 text-white'
              : 'bg-pink-200 text-pink-700'
          }`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>

        <button
          className={`px-4 py-2 ${
            sortBy === "category"
              ? 'bg-pink-500 text-white'
              : 'bg-pink-200 text-pink-700'
          }`}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>

        {sortedItems.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </div>
    </div>
  );
}
