import { HashLink } from "react-router-hash-link";
import "./index.css"
import logo from "./assets/logo-redesign.svg"

export default function Header() {
    return(
    <div className="logo-container">
        <HashLink smooth to="/#site-wrapper"><img src={logo} alt="Hannah Graphics Logo" /></HashLink>
    </div>
    )
}