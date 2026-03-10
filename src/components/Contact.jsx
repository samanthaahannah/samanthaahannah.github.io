import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArtstation, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    return (
        <div className='contact-me'>
            <div id="top"></div>
            <h2 className='contact-title'>Feel free to contact me, or see more content!</h2>
            <div className='contact-imgs'>
                <a href="https://www.artstation.com/samhannah"><FontAwesomeIcon icon={faArtstation} /></a>
                <a href="https://www.linkedin.com/in/samanthaahannah"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/samanthaahannah"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
        </div>
    )
}