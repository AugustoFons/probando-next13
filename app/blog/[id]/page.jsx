function getSingleData(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
}

export default async function StaticPage({ params }) {
    const { id } = params
    const singleData = await getSingleData(id)
    return (
        <>
            <article>
                <h1>{singleData.id} - {singleData.title}</h1>
                <p>{singleData.body}</p>
            </article>
        </>
    )
}