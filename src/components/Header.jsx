import "../index.css"
import logo from "../assets/logo-redesign.svg"

export default function Header() {
    return(
    <div className="logo-container">
        <a href="/#site-wrapper"><img src={logo} alt="Hannah Graphics Logo" /></a>
    </div>
    )
}