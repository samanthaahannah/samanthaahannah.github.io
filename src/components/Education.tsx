import "../index.css";
import '../header.css';
import EducationCard from "./EducationCard";
import qualifications from "../data/qualifications";

export default function Education() {
    return (
        <div className="qualification-cards">
            {qualifications.map((qualification) => (
                <EducationCard key={qualification.id} qualification={qualification} />
            ))}        
        </div>
    )
}