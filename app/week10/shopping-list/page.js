"use client";
import ItemList from "./item-list";
import { useUserAuth } from "../_utils/auth-context";
import Link from 'next/link';
import NewItem from './new-items';
import itemsData from './items.json'
import MealIdeas from './meal-ideas';
import { useState, useEffect } from "react";

export default function Page() {

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");
    const [loading, setLoading] = useState(true);
    const { user } = useUserAuth();

    useEffect(() => {
        setLoading(false); // Set loading to false once user authentication information is available
    }, [user]);

    if (loading) {
        return <p>Loading...</p>; // Show a loading state until authentication information is available
    }

    if (!user) {
        return (
            <div>
                <p className="p-4">You are not logged in. Please log in to view the shopping list.</p>
                <a className="text-white bg-violet-600 p-2 rounded-lg m-4" href="../week8">Go to Landing Page</a>
            </div>
        );
    }

    function handleAddItem(newItem) {
        setItems((prevItems) => {
            return[...prevItems, newItem];
        });
    }

    function handleItemSelect(item) {
        const cleanedItemName = item.name.trim().toLowerCase();
        setSelectedItemName(cleanedItemName);
    }
    
    return (
      <main>
          <h1 className = "flex justify-center text-5xl font-bold m-3 text-pink-700">Shopping List</h1>
          <div className="flex">
              <div className="w-full sm:w-1/2 p-4">
                  <NewItem onAddItem={handleAddItem}></NewItem>
                  <ItemList items={items} onItemSelect={handleItemSelect} />
              </div>
              <div className="w-full sm:w-1/2 p-4">
                  <MealIdeas ingredients={selectedItemName}></MealIdeas>
              </div>
          </div>
          <p className="flex justify-end">
          </p>
          <Link href="../">&lt;- Back</Link>
      </main>
  );
}