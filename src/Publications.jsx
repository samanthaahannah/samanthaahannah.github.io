import "./index.css";
import PublicationCard from "./PublicationCard";

export default function Publications({ papers }) {

  return (
    <div className="publications-page">
      <div className="publications-div" id="above"></div>
        <h1>Publications</h1>
        <div className="paper-cards">
        {papers.map((paper) => (
            <PublicationCard key={paper.id} paper={paper} />
        ))}
        </div>
    </div>
  );
}