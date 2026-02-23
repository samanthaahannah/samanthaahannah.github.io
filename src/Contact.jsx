import './index.css'
import artStationLogo from "./assets/ArtStation-logomark-white.svg"
import LinkedInLogo from "./assets/InBug-white.png"
import GitHubLogo from "./assets/GitHub_Invertocat_White_Clearspace.svg"

export default function Contact() {
    return (
        <div className='contact-me'>
            <h2 className='contact-title'>Feel free to contact me, or see more content!</h2>
            <div className='contact-imgs'>
                <a href="https://www.artstation.com/samhannah"><img src={artStationLogo} alt="ArtStation Logo" /></a>
                <a href="https://www.linkedin.com/in/samanthaahannah"><img src={LinkedInLogo} alt="LinkedIn Logo"/></a>
                <a href="https://github.com/samanthaahannah"><img src={GitHubLogo} alt="GitHub Logo"/></a>
            </div>
        </div>
    )
}