import React from 'react';


export default function Item({ name, quantity, category }) {
  return (
    <main className="border border-pink-500 bg-pink-200 w-full max-w-xs m-4 p-4 rounded-lg">
      <p className="text-pink-800 font-semibold">Name: {name}</p>
      <p className="text-pink-600">Quantity: {quantity}</p>
      <p className="text-pink-600">Category: {category}</p>
    </main>
  );
}
