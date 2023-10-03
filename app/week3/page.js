import ItemList from "./item-list";
import Link from "next/link"

export default function Page() {
    return (
        <main>
            <h1 class="text-brown text-4xl font-bold"> Shopping List</h1>
            <ItemList />
            <Link href="../">&lt;- Back</Link>
    
        </main>

    )
}