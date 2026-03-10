import '../index.css';
import "../layout.css";
import '../header.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import About from "../components/Intro.jsx";
import Portfolio from "../components/Portfolio.jsx";
import Publications from "../components/Publications.jsx";
import Blog from "../components/Blog.jsx";
import BlogPost from "../components/BlogPost.jsx"
import Contact from "../components/Contact.jsx";
import ScrollToHash from '../components/ScrollToHash.jsx';

function App() {
    const isAdmin = import.meta.env.VITE_ADMIN_MODE === "true"

  return (
    <div id="site-wrapper">
      {isAdmin && (
        <div className="admin-badge">Admin</div>
      )}
      <Navbar />
      <div className="app-wrapper">
        <ScrollToHash />
        <main>
          
          <Routes>
            <Route path="/" element={<About />}/>
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path="/publications" element={<Publications />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/blog/:slug" element={<BlogPost/>} />
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App