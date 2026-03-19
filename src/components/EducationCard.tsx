import "../index.css";
import '../header.css';

import type { Qualification } from "../data/qualifications";

export type QualificationProps ={
    qualification: Qualification;
}

export default function EducationCard({ qualification }: QualificationProps) {
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