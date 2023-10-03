export default function Item({name, quantity, category}){
    return (
        <section className="border bg-pink-500 bg-white-800 w- max-w-xs m-4 p-5 rounded shadow-lg">
            <h3 className="text-white text-xl font-bold">Name: {name}</h3>
            <p> Quantity: {quantity}</p>
            <p> Category: {category}</p> 
        </section>

    )
}