import './index.css'

export default function ExperienceCard({ role }) {
    return (
    <div className="experience-card">
        <h3>{role.title} {role.years}</h3>
        <h4>{role.duration}</h4>
        <p>{role.description}</p>
        <hr />
    </div>
    )
}