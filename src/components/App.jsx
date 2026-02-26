import '../index.css'
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function App({ children }) {
    const isAdmin = import.meta.env.VITE_ADMIN_MODE === "true"

  return (
    <div id="site-wrapper">
      {isAdmin && (
        <div className="admin-badge">Admin</div>
      )}
      <Navbar />
      <div className="app-wrapper">
        <main>
          { children }
        </main>
      <Footer />
    </div>
    </div>
  )
}

export default App