import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export type FullPost ={
    id: number;
    title: {rendered: string};
    content: {rendered: string};
    categories: number[];
    date: string;
    excerpt?: { rendered: string };
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string}>();
  const [post, setPost] = useState<FullPost | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);
  const isAdmin = import.meta.env.VITE_ADMIN_MODE === "true";

  const localUrl = window.location.href.split("?")[0];
  const currentUrl = localUrl.replace("http://localhost:5173", "https://www.hannahgraphics.com");
  const emailShareUrl = `mailto:?subject=Check out this blog post&body=${encodeURIComponent(currentUrl)}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(!slug) return;
        const res = await fetch(`https://public-api.wordpress.com/wp/v2/sites/hannahgraphicsblog.wordpress.com/posts?slug=${slug}`);

        if(!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data: FullPost[] = await res.json();
        setPost(data[0] || null);
      } catch (err: unknown) {
        if(err instanceof Error){
          setError(err);
        } else {
          setError(new Error("Unknown error"));
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [slug]);

  useEffect(() => {
    if (!post) return;
    if(!slug) return;
    let base = slug;
    base = base.replace(/-/, " - ").replace(/([a-zA-Z0-9])-([a-zA-Z0-9])/, "$1 $2");
    const title = base.charAt(0).toUpperCase() + base.slice(1);

    document.title = title;

    const description =
      post.excerpt?.rendered?.replace(/<[^>]+>/g, "")?.slice(0, 150) ||
      "Blog post on Hannah Graphics";

    const setMeta = (selector: string, value: string) => {
      let tag = document.querySelector(selector);
      if (!tag) return;
      tag.setAttribute("content", value);
    };

    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', window.location.href);

    const imgMatch = post.content.rendered.match(/<img[^>]+src="([^">]+)"/);
    if (imgMatch) {
      setMeta('meta[property="og:image"]', imgMatch[1]);
    }
  }, [post]);

  if (loading) {
    return <div className="blog-page"><p>Loading...</p></div>;
  }

  if (error) {
    return <div className="blog-page"><p>Something went wrong.</p></div>;
  }

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