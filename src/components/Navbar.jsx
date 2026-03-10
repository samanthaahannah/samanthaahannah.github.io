import { useState } from "react";
import '../index.css';
import '../layout.css';
import '../header.css';
import Header from './Header.jsx';
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { id: "link-001-nav", href: "/#intro-top", text: "About", dropdown: true },
    { id: "link-002-nav", href: "/portfolio#top", text: "Portfolio" },
    { id: "link-003-nav", href: "/publications#top", text: "Publications" },
    { id: "link-004-nav", href: "/blog#top", text: "Blog" },
    { id: "link-005-nav", href: "/contact#top", text: "Contact" }
  ];

  return (
    <header>
      <div className="header-wrapper">
        <Header />
        <nav>
          <ul>
            {links.map((link) => (
              <li
                key={link.id}
                className={link.dropdown ? "has-dropdown" : ""}
                onMouseEnter={() => link.dropdown && setOpen(true)}
                onMouseLeave={() => link.dropdown && setOpen(false)}
              >
                <HashLink smooth to={link.href}>{link.text}</HashLink>

                {link.dropdown && open && (
                  <ul className="dropdown">
                    <li><HashLink smooth to="/#intro-top">About Me</HashLink></li>
                    <li><HashLink smooth to="/#experience">Experience</HashLink></li>
                    <li><HashLink smooth to="/#education">Education</HashLink></li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}