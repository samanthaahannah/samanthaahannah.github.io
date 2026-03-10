import '../index.css';
import "../layout.css";
import '../header.css';
import Experience from './Experience.jsx';
import Education from './Education.jsx';
import AboutMe from './AboutMe.jsx';

export default function Intro ({roles, qualifications}){
    return  (
        <div className="sayHi">
            <div id="intro-top"></div>
            <h1 id="about">About</h1>
            <AboutMe />
            <h2 id="experience">Experience</h2>
            <Experience roles={roles} />
            <h2 id="education">Education</h2>
            <Education qualifications={qualifications} />
        </div>
    );
}