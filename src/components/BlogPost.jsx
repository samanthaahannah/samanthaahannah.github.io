import { useEffect, useState } from "react";

export default function BlogPost() {
  const [post, setPost] = useState(null);
  const isAdmin = import.meta.env.VITE_ADMIN_MODE === "true";

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");

  const localUrl = window.location.href.split("?")[0];
  const currentUrl = localUrl.replace("http://localhost:5173", "https://www.hannahgraphics.com");

  const emailShareUrl = `mailto:?subject=Check out this blog post&body=${encodeURIComponent(currentUrl)}`;

  useEffect(() => {
    if (!slug) return;
    fetch(`https://public-api.wordpress.com/wp/v2/sites/hannahgraphicsblog.wordpress.com/posts?slug=${slug}`)
      .then(res => res.json())
      .then(data => setPost(data[0]));
  }, [slug]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="post-wrapper">
      <article className="single-post">
        <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </article>

      <a href="/blog" className="back-button">← Back to Blog</a>

      {isAdmin && (
        <div className="admin-share">
          <a 
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Share on LinkedIn
          </a>

          <a href={emailShareUrl}>Share via Email</a>
        </div>
      )}
    </div>
  );
}