import item from "./item";
import Sorting from "./item-list";
import Link from "next/link"

export default function Page(){
    return(
        <main className="flex flex-col items-center justify-between">
            <h1></h1>
            <Sorting/>
            <Link href="../">&lt;- Back</Link>
        </main>
    );
}