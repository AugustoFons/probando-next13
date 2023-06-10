import Link from "next/link"

export default async function page() {
    const data = await getData()
    return (
        <>
        <div>
        <h2>Soy un Blog</h2>
        {data.map(({id, title, body})=>(
            <div>
                <Link href='/blog/[id]' as={`/blog/${id}`}>
                    <h3>{id} - {title}</h3>
                </Link>
                <p>{body}</p>
            </div>
        )
        )}
        </div>
        </>
    )
}

    async function getData() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts') //con el segundo parametro evitamos que al recargar muestre el cache y en cambio vuelva a realizar la peticion
        if(!res.ok) {
            throw new Error('Fallo la solicitud')
        }
        return res.json()
}


