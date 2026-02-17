import { useState } from 'react'
import {Link} from "react-router-dom"
import './index.css'
import Header from './Header.jsx'

export default function Navbar (){
    const links = [{id: "link-001-nav", href: "/", text: "About"},
                   {id: "link-002-nav", href: "/portfolio", text: "Portfolio"}, 
                   {id: "link-003-nav", href: "/projects", text: "Projects"}, 
                   {id: "link-004-nav", href: "/publications", text: "Publications"}, 
                   {id: "link-005-nav", href: "/contact", text: "Contact"}]
    return  (
        <div className="header-wrapper">
            <Header />
            <nav>
                <ul>
                    {links.map((link) => <li key={`${link.id}`}><Link to={link.href}>{link.text}</Link></li>)}
                </ul>
            </nav>
        </div>
    );
}