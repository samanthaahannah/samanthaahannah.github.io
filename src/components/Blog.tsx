import {useState, useEffect } from "react"
import BlogPosts from "./BlogPosts";
import Sidebar from "./Sidebar";
import '../index.css';
import '../header.css';
import '../blog.css';

import {WPPost, WPCategory} from "../types/wp";

export default function Blog() {
    const [filter, setFilter] = useState("all")
    const [posts, setPosts] = useState<WPPost[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [categories, setCategories] = useState<WPCategory[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(true);
    const [catError, setCatError] = useState<Error | null>(null);
    const [catLoading, setCatLoading] = useState(true);

     const categoryMap = Object.fromEntries(
        categories.map(cat => [cat.slug, cat.id])
    )

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const res = await fetch(`https://public-api.wordpress.com/wp/v2/sites/hannahgraphicsblog.wordpress.com/posts?per_page=5&page=${page}`);

                if (res.status === 400 || res.status === 404) {
                    setHasMore(false);
                    return;
                }

                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }

                const data: WPPost[] = await res.json();

                if (Array.isArray(data)) {
                    setPosts(prev => [...prev, ...data]);
                    if (data.length < 5) setHasMore(false);
                }
            } catch (err: unknown) {
                if(err instanceof Error) {
                    setError(err);
                } else {
                    setError(new Error("Unknown error"));
                }
                
            } finally {
                setLoading(false);
            }
        };
        
        fetchData();
    },[page]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://public-api.wordpress.com/wp/v2/sites/hannahgraphicsblog.wordpress.com/categories");

                if(!res.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await res.json();
                setCategories(data);
            } catch (err: unknown) {
                if(err instanceof Error) {
                    setCatError(err);
                } else {
                    setCatError(new Error("Unknown error"));
                }
                
            } finally {
                setCatLoading(false);
            }
        }
        fetchData();
    }, [])

    const filteredPosts = 
    filter === "all"
    ? posts
    : posts.filter(post => 
        post.categories.includes(categoryMap[filter])
    )

    if (loading || catLoading) {
    return <div className="blog-page"><p>Loading...</p></div>;
}

if (error || catError) {
    return <div className="blog-page"><p>Something went wrong.</p></div>;
}

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