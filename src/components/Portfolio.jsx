import UnityPlayer from "../components/UnityPlayer.jsx";
import "../index.css";
import '../header.css';
import '../portfolio.css';
import PortfolioImages from "./PortfolioImages.jsx";
import projects from "../data/projects.jsx";

export default function Portfolio() {
    return (
        <div className="portfolio-page" id="top">   
            {projects.map(({id,title,unityBuild,description,method,images,productName}) => (
                <div key={id}>
                    <h1>{title}</h1>
                    <div className="portfolio-wrapper">
                    {description}
                    <UnityPlayer unityBuild={unityBuild} productName={productName} />
                    <h2 className="method-title">Method</h2>
                    <div className="method-section">
                        <div className="method-description">
                            {method}
                        </div>
                        <PortfolioImages images={images} />
                    </div>
                    </div>
                </div>
            ))}
        </div>
    )
}