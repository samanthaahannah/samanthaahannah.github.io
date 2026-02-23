import { useState } from "react"
import { HashLink } from "react-router-hash-link";
import {Link} from "react-router-dom"
import './index.css'
import Header from './Header.jsx'

export default function Navbar (){
    const [open, setOpen] = useState(false)
    const links = [{id: "link-001-nav", href: "/", text: "About", dropdown: true},
                   {id: "link-002-nav", href: "/portfolio#top", text: "Portfolio"}, 
                   {id: "link-003-nav", href: "/publications#above", text: "Publications"}, 
                   {id: "link-004-nav", href: "/blog", text: "Blog"}, 
                   {id: "link-005-nav", href: "/contact", text: "Contact"}]
    return  (
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