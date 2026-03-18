import "../index.css";
import '../header.css';
import '../publications.css';

import PublicationCard from "./PublicationCard";
import papers from "../data/papers"

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