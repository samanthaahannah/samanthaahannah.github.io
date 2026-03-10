import "../index.css";
import PublicationCard from "./PublicationCard.jsx";
import papers from "../data/papers.js"

export default function Publications() {

  return (
    <div className="publications-page">
      <div className="publications-div" id="top"></div>
        <h1>Publications</h1>
        <div className="paper-cards">
        {papers.map((paper) => (
            <PublicationCard key={paper.id} paper={paper} />
        ))}
        </div>
    </div>
  );
}