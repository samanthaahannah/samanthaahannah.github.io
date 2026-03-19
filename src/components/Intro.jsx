import '../index.css';
import "../layout.css";
import '../header.css';
import Experience from './Experience';
import Education from './Education';
import AboutMe from './AboutMe.jsx';

export default function Intro (){
    return  (
        <div className="sayHi">
            <div id="intro-top"></div>
            <h1 id="about">About</h1>
            <AboutMe />
            <h2 id="experience">Experience</h2>
            <Experience />
            <h2 id="education">Education</h2>
            <Education />
        </div>
    );
}