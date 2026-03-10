import {useState, useEffect } from "react"
import BlogPosts from "./BlogPosts";
import Sidebar from "./Sidebar";
import '../index.css';
import '../header.css';
import '../blog.css';

export default function Blog() {
    const [filter, setFilter] = useState("all")
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [categories, setCategories] = useState([])

     const categoryMap = Object.fromEntries(
        categories.map(cat => [cat.slug, cat.id])
    )

    useEffect(() => {
        fetch(`https://public-api.wordpress.com/wp/v2/sites/hannahgraphicsblog.wordpress.com/posts?per_page=5&page=${page}`)
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data)) {
                setPosts(prev => [...prev, ...data]);
                if (data.length < 5) setHasMore(false);
            }
        })
    },[page]);

    useEffect(() => {
        fetch("https://public-api.wordpress.com/wp/v2/sites/hannahgraphicsblog.wordpress.com/categories")
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    const filteredPosts = 
    filter === "all"
    ? posts
    : posts.filter(post => 
        post.categories.includes(categoryMap[filter])
    )

    return (
        <div className="blog-page">
            <h1 id="top">Blog</h1>
            <div className="blog-main-wrapper">
                <BlogPosts posts={filteredPosts} 
                loadMore={() => setPage((prev) => prev + 1)}
                hasMore={hasMore}/>
                <Sidebar setFilter={setFilter} categories={categories}/>
            </div>
        </div>
    )
}