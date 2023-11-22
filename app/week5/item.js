import React from 'react';

export default function Item({ name, quantity, category }) {
  return (
    <main className="border border-pink-500 bg-pink-800 w-full max-w-xs m-4 p-2 text-white">
      <p>Name: {name}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </main>
  );
}
