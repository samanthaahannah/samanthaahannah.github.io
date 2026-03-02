import UnityPlayer from "../components/UnityPlayer.jsx";
import "../index.css";
import { useState } from "react";
import animScriptFull from "../assets/animation-script-setup-full.png";
import animScript1000 from "../assets/animation-script-setup-1000.png";
import animScript700 from "../assets/animation-script-setup-700.png";
import animScript400 from "../assets/animation-script-setup-400.png";
import animContrFull from "../assets/Animator-controller-setup-full.png";
import animContr1000 from "../assets/Animator-controller-setup-1000.png";
import animContr700 from "../assets/Animator-controller-setup-700.png";
import animContr400 from "../assets/Animator-controller-setup-400.png";
import blenderFull from "../assets/Blender-screenshot-full.png";
import blender1000 from "../assets/Blender-screenshot-1000.png";
import blender700 from "../assets/Blender-screenshot-700.png";
import blender400 from "../assets/Blender-screenshot-400.png";
import unityStatsFull from "../assets/Unity-batches-draw-calls-full.png";
import unityStats1000 from "../assets/Unity-batches-draw-calls-1000.png";
import unityStats700 from "../assets/Unity-batches-draw-calls-700.png";
import unityStats400 from "../assets/Unity-batches-draw-calls-400.png";
export default function Portfolio() {
    const [selectedImage, setSelectedImage] = useState(null)
    return (
        <div className="portfolio-page" id="portfolio-main">
            <div id="top"></div>
            <h1>Interactive bedroom</h1>
            <div className="portfolio-wrapper">
            <p>Click the items such as the books, bedcover, laptop, drawers, door and lamp to play with the animations. You can also toggle day and night</p>
            <UnityPlayer />
            <h2 className="method-title">Method</h2>
            <div className="method-section">
                <div className="method-description">
                    <p>Each model was created Blender with a single gradient texture and material before each were imported into unity. To prevent conflicts, separate models for open and close animations were created.</p>
                    <p>The animations were then extracted from the animated components, extra models were deleted, and the animations were added to an animator controller used by scripts to control the parameters in-game </p>
                    <p>The Drawer animations all contain the same script with each drawer assigned to it's own position on an array. The scene was then built in WebGL format and uploaded to React in this website.</p>
                    <p>The lighting and rendering were also optimised for WebGL. Unnecessary shadow casters were disabled and that the lamp lights were set to mixed rather than real-time. This brought the number of batches to 53, which is well within the 0 - 100 draw-call range for smooth WebGL performance.</p>
                    <div className="github-link-wrapper">
                        <a className="github-link" href="https://github.com/samanthaahannah/interactive-bedroom">Find the GitHub Repo here!</a>
                    </div>
                </div>
                <div className="method-images">
                    <img 
                        src={animScript1000}
                        srcSet={`
                            ${animScript400} 400w,
                            ${animScript700} 700w,
                            ${animScript1000} 1000w
                        `}
                        sizes="(max-width: 600px) 400px,
                            (max-width: 900px) 700px,
                            1000px"
                        alt="animation script example in Unity"
                        className="img-thumb"
                        onClick={() => setSelectedImage(animScriptFull)}
                    />
                    <img 
                        src={animContr1000}
                        srcSet={`
                            ${animContr400} 400w,
                            ${animContr700} 700w,
                            ${animContr1000} 1000w
                        `}
                        sizes="(max-width: 600px) 400px,
                            (max-width: 900px) 700px,
                            1000px"
                        alt="animation Controller setup in Unity"
                        className="img-thumb"
                        onClick={() => setSelectedImage(animContrFull)}
                    />
                    <img 
                        src={blender1000}
                        srcSet={`
                            ${blender400} 400w,
                            ${blender700} 700w,
                            ${blender1000} 1000w
                        `}
                        sizes="(max-width: 600px) 400px,
                            (max-width: 900px) 700px,
                            1000px"
                        alt="Blender scene screenshot"
                        className="img-thumb"
                        onClick={() => setSelectedImage(blenderFull)}
                    />
                    <img 
                        src={unityStats1000}
                        srcSet={`
                            ${unityStats400} 400w,
                            ${unityStats700} 700w,
                            ${unityStats1000} 1000w
                        `}
                        sizes="(max-width: 600px) 400px,
                            (max-width: 900px) 700px,
                            1000px"
                        alt="Unity Editor stats with batches/draw calls and tris"
                        className="img-thumb"
                        onClick={() => setSelectedImage(unityStatsFull)}
                    />
                    {selectedImage && (
                        <div className="img-full" onClick={() => setSelectedImage(null)}>
                            <div className="img-style">
                                <img src={selectedImage} alt="Full view" className="full-img" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            </div>
        </div>
    )
}