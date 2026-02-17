import {useState} from "react"
import "./index.css"
import logo from "./assets/logo-redesign.svg"

export default function Header() {
    return(
    <div className="logo-container">
        <img src={logo} alt="Hannah Graphics Logo" />
    </div>
    )
}