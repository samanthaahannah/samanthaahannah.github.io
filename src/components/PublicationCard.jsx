import "../index.css"
import '../header.css';
import '../publications.css';

export default function PublicationCard({ paper }) {
    let authorsStr = ""
    let etalStr = ""
    if (paper.etal) {
        authorsStr = paper.authors.join(", ");
        etalStr = "et al."
    } else {
    authorsStr = paper.authors.slice(0, -1).join(", ") +
    " and " + paper.authors[paper.authors.length - 1];
    etalStr = "";
    }

    const link = paper.link.startsWith("doi:")
    ? `https://doi.org/${paper.link.replace("doi:", "").trim()}`
    : paper.link;
    return (
        <div key={paper.id} className="paper-card">
            <h2>{paper.title}</h2>
            <p><strong>Authors: </strong>{authorsStr} <em>{etalStr}</em></p>
            <p>
              <strong>Venue: </strong>
              <em>{paper.venue[0]} {paper.venuePlus}</em> {paper.venue[1]}
            </p>
            <p><strong>Link: </strong>
            <a href={link} target="_blank" rel="noopener noreferrer">{paper.link}</a></p>
            <hr />
          </div>

    )
}