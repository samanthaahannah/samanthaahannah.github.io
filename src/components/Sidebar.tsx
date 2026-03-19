import "../index.css";
import '../header.css';

import type { WPCategory } from "../types/wp";

function decodeHTML(str: string): string {
    const txt = document.createElement("textarea")
    txt.innerHTML = str;
    return txt.value;
}

type SidebarProps = {
    setFilter: (value: string) => void;
    categories: WPCategory[];
}

export default function Sidebar( {setFilter, categories }: SidebarProps) {
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