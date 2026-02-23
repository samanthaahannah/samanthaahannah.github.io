import {useState, useEffect } from "react"
import './index.css'

export default function BlogPosts({ posts, loadMore, hasMore}) {
    const authors = { 100395726: "Samantha Hannah"}

    return (
        <div className="blog-page">
            <div className="blog-wrapper">
                {Array.isArray(posts) && posts.map(post => (
                    <article key={post.id}>
                        
                        <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        
                        <p className="post-author">by {authors[post.author]}</p>

                        <small className="post-date">Posted:{" "}
                            {new Date(post.date).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                            })}
                        </small>

                        <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                        <small className="post-modified">
                            <em>
                            Edited:{" "}
                            {new Date(post.modified).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                            })}
                            </em>
                        </small>
                        <hr></hr>
                    </article>
                ))}
                {hasMore && (<button className="load-more" onClick={loadMore}>
  Load more posts
</button>)}
            </div>
            

        </div>
    )
}