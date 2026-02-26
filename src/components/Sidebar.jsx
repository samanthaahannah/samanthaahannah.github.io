import "../index.css"

function decodeHTML(str) {
    const txt = document.createElement("textArea")
    txt.innerHTML = str;
    return txt.value;
}

export default function Sidebar( {setFilter, categories }) {
    return (
        <div className="sidebar">
            <button onClick={() => setFilter("all")}>All</button>
            {categories.map(cat => (
                <button key={cat.id} onClick={() => setFilter(cat.slug)}>
                    {decodeHTML(cat.name)} ({cat.count})
                </button>
            ))}
        </div>
    )
}