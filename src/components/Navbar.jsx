import { useState } from "react";
import '../index.css';
import Header from './Header.jsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { id: "link-001-nav", href: "/", text: "About", dropdown: true },
    { id: "link-002-nav", href: "/portfolio/", text: "Portfolio" },
    { id: "link-003-nav", href: "/publications/", text: "Publications" },
    { id: "link-004-nav", href: "/blog/", text: "Blog" },
    { id: "link-005-nav", href: "/contact/", text: "Contact" }
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
                <a href={link.href}>{link.text}</a>

                {link.dropdown && open && (
                  <ul className="dropdown">
                    <li><a href="/#intro-top">About Me</a></li>
                    <li><a href="/#experience">Experience</a></li>
                    <li><a href="/#education">Education</a></li>
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