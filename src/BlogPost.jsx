import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const isAdmin = import.meta.env.VITE_ADMIN_MODE === "true"
      console.log("Admin mode:", import.meta.env.VITE_ADMIN_MODE);

const localUrl = window.location.href.split("?")[0];
const currentUrl = localUrl.replace("http://localhost:5173", "https://www.hannahgraphics.com");

const emailShareUrl = `mailto:?subject=Check out this blog post&body=${encodeURIComponent(currentUrl)}`;

  useEffect(() => {
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
    <Link to="/blog" className="back-button">← Back to Blog</Link>
    {isAdmin && (
  <div className="admin-share">
    <a 
      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Share on LinkedIn
    </a>

    <a 
      href={emailShareUrl}
    >
      Share via Email
    </a>
  </div>
)}
    </div>
  );
}