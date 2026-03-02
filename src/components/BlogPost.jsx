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

  useEffect(() => {
  if (!post) return;

  // Title
// 1. Replace the FIRST hyphen with " - "
let base = slug;

// 2. Replace all REMAINING hyphens with spaces
base = base.replace(/-/, " - ").replace(/([a-zA-Z0-9])-([a-zA-Z0-9])/,"$1 $2");

// 3. Capitalize the first letter
const title = base.charAt(0).toUpperCase() + base.slice(1);

document.title = title;

  // Description (use excerpt or first 150 chars of content)
  const description = post.excerpt?.rendered
    ?.replace(/<[^>]+>/g, "")
    ?.slice(0, 150) || "Blog post on Hannah Graphics";

  const setMeta = (selector, value) => {
    let tag = document.querySelector(selector);
    if (!tag) return;
    tag.setAttribute("content", value);
  };

  setMeta('meta[name="description"]', description);
  setMeta('meta[property="og:title"]', title);
  setMeta('meta[property="og:description"]', description);
  setMeta('meta[property="og:url"]', window.location.href);

  // Optional: use the first image in the post content as OG image
  const imgMatch = post.content.rendered.match(/<img[^>]+src="([^">]+)"/);
  if (imgMatch) {
    setMeta('meta[property="og:image"]', imgMatch[1]);
  }

}, [post]);

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