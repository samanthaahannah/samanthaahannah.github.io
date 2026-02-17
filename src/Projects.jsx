import UnityPlayer from "./UnityPlayer.jsx";
import "./index.css"

export default function Projects() {
    return (
        <div className="projects-page">
            <h1>Interactive bedroom</h1>
            <p>Click the items such as the books, bedcover, laptop, drawers, door and lamp to play with the animations. You can also toggle day and night</p>
            <UnityPlayer />
            <h2 className="method-title">Method</h2>
            <div className="method-description">
                <p>Each model was created Blender with a single gradient texture and material before each were imported into unity. To prevent conflicts, separate models for open and close animations were created.</p>
                <p>The animations were then extracted from the animated components, extra models were deleted, and the animations were added to an animator controller used by scripts to control the parameters in-game </p>
                <p>The Drawer animations all contain the same script with each drawer assigned to it's own position on an array. The scene was then built in WebGL format and uploaded to React in this website.</p>
            </div>

        </div>
    )
}