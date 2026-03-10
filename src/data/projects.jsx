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

export default [
    {
        id: "interactive-bedroom",
        title: "Interactive Bedroom",
        unityBuild: "/unity/Build/bedroom",
        description: 
            (
                <>
                <p>Click the items such as the books, bedcover, laptop, drawers, door and lamp to play with the animations. You can also toggle day and night.</p>
                </>
            ),
        method:
            (
                <>
                <p>Each model was created Blender with a single gradient texture and material before each were imported into unity. To prevent conflicts, separate models for open and close animations were created.</p>
                    <p>The animations were then extracted from the animated components, extra models were deleted, and the animations were added to an animator controller used by scripts to control the parameters in-game </p>
                    <p>The Drawer animations all contain the same script with each drawer assigned to it's own position on an array. The scene was then built in WebGL format and uploaded to React in this website.</p>
                    <p>The lighting and rendering were also optimised for WebGL. Unnecessary shadow casters were disabled and that the lamp lights were set to mixed rather than real-time. This brought the number of batches to 53, which is well within the 0 - 100 draw-call range for smooth WebGL performance.</p>
                    <div className="github-link-wrapper">
                        <a className="github-link" href="https://github.com/samanthaahannah/interactive-bedroom">Find the GitHub Repo here!</a>
                    </div>
                </>
            ),
        images: [
            {
                full: animScriptFull,
                src1000: animScript1000,
                src700: animScript700,
                4: animScript400,
                alt: "Animation script example in Unity"
            },
            {
                full: animContrFull,
                src1000: animContr1000,
                src700: animContr700,
                src400: animContr400,
                alt: "Animator Controller setup in Unity"
            },
            {
                full: blenderFull,
                src1000: blender1000,
                src700: blender700,
                src400: blender400,
                alt: "Blender scene screenshot"
            },
            {
                full: unityStatsFull,
                src1000: unityStats1000,
                src700: unityStats700,
                src400: unityStats400,
                alt: "Animation script example in Unity"
            }
        ],
        productName: "Bedroom",
        tech: ["Unity", "Blender", "C#"]
    }
]