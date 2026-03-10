import "../index.css";
import "../layout.css";
import "../header.css";
import logo from "../assets/logo-redesign.svg";
import { HashLink } from "react-router-hash-link";

export default function Header() {
    return(
    <div className="logo-container">
        <HashLink smooth to="/#intro-top"><img src={logo} alt="Hannah Graphics Logo" /></HashLink>
    </div>
    )
}