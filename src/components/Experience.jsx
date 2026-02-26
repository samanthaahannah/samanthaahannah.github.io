import "../index.css"
import ExperienceCard from "./ExperienceCard.jsx";
import roles from "../data/roles.js";

export default function Experience() {
    return (
        <div className="experience-wrapper">
            <div className="experience-cards">
            {roles.map((role) => (
                <ExperienceCard key={role.id} role={role} />
            ))}
            </div>
        </div>
    )
}