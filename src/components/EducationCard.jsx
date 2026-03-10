import "../index.css";
import '../header.css';

export default function EducationCard({ qualification }) {
    return(
        <div className="education-card">
            <h3>{qualification.type} {qualification.title}</h3>
            <h4>{qualification.institution}</h4>
            
            <p className="education-meta">{qualification.years} • Grade: {qualification.grade}</p>
            <p className="education-description">{qualification.description}</p>
            <hr />
        </div>
    )
}