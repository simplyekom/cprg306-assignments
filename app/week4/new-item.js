"use client";

import { useState } from "react";

export default function NewItem() {
    const [item, setItem] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [category, setCategory] = useState("Produce")
    const [itemCreated, setItemCreated] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            item,
            quantity,
            category,
        };

        console.log(newItem);
        alert (`Added Item: ${item} quantity: ${quantity} category: ${category}`);
        setItemCreated(true);
        setItem("");
        setQuantity(1);
        setCategory("Produce")
    };

    const handleItemChange = (e) => {
        setItem(e.target.value);
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };


    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    return(
        <main className="p-8">
            <h1 className="text-2x1 font-bold mb-4"> New Item</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label htmlFor="item" className="text-lg"> Item </label>

                <input
                    id = "item"
                    type="text"
                    value={item}
                    onChange={handleItemChange}
                    required  className="p-2 border border-pink-500"/>

                <label htmlFor="quantity" className="text-lg"> Quantity </label>

                <input
                    id = "quantity"
                    type="number"
                    value={quantity}
                    onChange = {handleQuantityChange}
                    required className="p-2 border border-pink-500"/>

                <label htmlFor="category" className="text-lg"> Category </label>

                <select className="p-2 border border-pink-500" >
                <input
                    id = "category"
                    value={category}
                    onChange={handleCategoryChange}
                    required />

                    <option value="Produce"> Produce</option>
                    <option value="Dairy"> Dairy</option>
                    <option value="Bakery"> Bakery</option>
                    <option value="Meat"> Meat</option>
                    <option value="Frozen Foods"> Frozen Foods</option>
                    <option value="Canned Goods"> Canned Goods</option>
                    <option value="Dry Goods"> Dry Goods</option>
                    <option value="Beverage"> Beverage</option>
                    <option value="Snacks"> Snacks</option>
                    <option value="Household"> Household</option>
                    <option value="Other"> Other</option>
                </select>
                <button type="submit" className="bg-pink-500 text-white p-2 rounded hover:bg-gray-400"> Add Item </button>

            </form>
        </main>
    )
}