"use client"

import Sorting from './item-list.js';
import NewItem from './new-item';
import React, { useState} from "react";
import itemsData from './items.json';
import Link from "next/link"


export default function Page() {


const [items, setItems] = useState(itemsData);

const [newItem, setItem] = useState(false);

const handleAddItem = (item) => {
    setItems([...items, item]);
    };

    
return(
        <main>
            <NewItem onAddItem={handleAddItem} />
            <Sorting items={items}/>
            <Link href="../">&lt;- Back</Link>
        </main>
    )

}