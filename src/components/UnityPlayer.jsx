import { useEffect } from "react"

export default function UnityPlayer() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/unity/Build/bedroom.loader.js";

        script.onload = () => {
            createUnityInstance(
    document.querySelector("#unity-canvas"),
    {
        dataUrl: "/unity/Build/bedroom.data",
        frameworkUrl: "/unity/Build/bedroom.framework.js",
        codeUrl: "/unity/Build/bedroom.wasm",
        streamingAssetsUrl: "/unity/StreamingAssets",
        companyName: "YourCompany",
        productName: "Bedroom",
        productVersion: "1.0",
        matchWebGLToCanvasSize: true,
        devicePixelRatio: 1,
    }
);


            setTimeout(() => {
                window.dispatchEvent(new Event("resize"));
            }, 50);
        };
        document.body.appendChild(script)
    }, []);
    return (
        <div className="unity-container">
            <canvas id="unity-canvas"></canvas>
            <div id="unity-fullscreen-button"></div>
        </div>
    )
}