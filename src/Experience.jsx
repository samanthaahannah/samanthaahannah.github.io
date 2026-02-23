import "./index.css"
import ExperienceCard from "./ExperienceCard.jsx";

export default function Experience({ roles }) {
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