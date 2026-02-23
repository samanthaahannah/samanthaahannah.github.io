import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Intro from "./Intro.jsx";
import Navbar from "./Navbar.jsx";
import Portfolio from "./Portfolio.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import Publications from './Publications.jsx';
import Blog from "./Blog.jsx";
import { papers } from './data/papers.js';
import { roles } from './data/roles.js';
import { qualifications } from './data/qualifications.js';
import NotFound from "./NotFound";

function App() {
  const info = {name: "Samantha Hannah", location: "Edinburgh"}
  return (
    <div id="site-wrapper">
      <Navbar />
      <div className="app-wrapper">
        <main>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Intro info={info} roles={roles} qualifications={qualifications} />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/publications" element={<Publications papers={papers} />} />
          </Routes>
        </main>
      <Footer />
    </div>
    </div>
  )
}

export default App