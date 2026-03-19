import "../index.css";
import '../header.css';
import ExperienceCard from "./ExperienceCard";
import roles from "../data/roles";

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