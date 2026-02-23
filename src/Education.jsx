import "./index.css"
import EducationCard from "./EducationCard.jsx";

export default function Education({ qualifications }) {
    return (
        <div className="qualification-cards">
            {qualifications.map((qualification) => (
                <EducationCard key={qualification.id} qualification={qualification} />
            ))}        
        </div>
    )
}