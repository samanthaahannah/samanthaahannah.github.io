import '../index.css'
import '../header.css';

import type { Role } from "../data/roles";

export type RoleProps = {
    role: Role;
}

export default function ExperienceCard({ role }: RoleProps) {
    return (
    <div className="experience-card">
        <h3>{role.title} {role.years}</h3>
        <h4>{role.duration}</h4>
        <p>{role.description}</p>
        <hr />
    </div>
    )
}