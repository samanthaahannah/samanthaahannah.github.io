import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://public-api.wordpress.com/wp/v2/sites/hannahgraphicsblog.wordpress.com/posts?slug=${slug}`)
      .then(res => res.json())
      .then(data => setPost(data[0]));
  }, [slug]);

  if (!post) return <p>Loading...</p>;

  return (
    <div class="post-wrapper">
    <article className="single-post">
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </article>
    <Link to="/blog" className="back-button">← Back to Blog</Link>
    </div>
  );
}