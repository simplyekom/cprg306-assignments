import NewItem from './new-item.js';
import Link from "next/link"


export default function page() {
    return (
        <main>
            <NewItem/>
            <Link href="../">&lt;- Back</Link>
        </main>
    )
}