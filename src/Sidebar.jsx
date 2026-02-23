import "./index.css"

export default function Sidebar( {setFilter, categories }) {
    return (
        <div className="sidebar">
            <button onClick={() => setFilter("all")}>All</button>
            {categories.map(cat => (
                <button key={cat.id} onClick={() => setFilter(cat.slug)}>
                    {cat.name} ({cat.count})
                </button>
            ))}
        </div>
    )
}