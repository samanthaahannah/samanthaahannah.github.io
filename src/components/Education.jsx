import "../index.css";
import '../header.css';
import EducationCard from "./EducationCard.jsx";
import qualifications from "../data/qualifications.js"

export default function Education() {
    return (
        <div className="qualification-cards">
            {qualifications.map((qualification) => (
                <EducationCard key={qualification.id} qualification={qualification} />
            ))}        
        </div>
    )
}