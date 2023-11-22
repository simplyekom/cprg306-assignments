"use client";

import Item from "./item.js";
import React, { useState, useEffect } from "react";

export default function Sorting({items}) {
  const [sortBy, setSortBy] = useState("name");

  if (sortBy === "name") {
    console.log("sort by name");
    items.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  } else if (sortBy === "category") {
    console.log("sort by category");
    items.sort((a, b) => {
      if (a.category < b.category) {
        return -1;
      }
      if (a.category > b.category) {
        return 1;
      }
      return 0;
    });
  }

  return (
    <main className="container mx-auto my-8 p-8 bg-pink-200 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-4 text-pink-800">Shopping List</h1>
      <div className="flex items-center justify-between mb-8">
        <button
          className="btn btn-primary border border-pink-800 font-bold mb-4 text-pink-800"
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className="btn btn-primary border border-pink-800 font-bold mb-4 text-pink-800"
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Item
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            key={item.id}
          />
        ))}
      </div>
    </main>
  );
}