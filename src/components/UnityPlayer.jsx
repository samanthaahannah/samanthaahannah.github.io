import { useEffect } from "react"

export default function UnityPlayer({unityBuild, productName}) {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = `${unityBuild}.loader.js`;

        script.onload = () => {
            createUnityInstance(
    document.querySelector("#unity-canvas"),
    {
        dataUrl: `${unityBuild}.data`,
        frameworkUrl: `${unityBuild}.framework.js`,
        codeUrl: `${unityBuild}.wasm`,
        streamingAssetsUrl: "/unity/StreamingAssets",
        companyName: "YourCompany",
        productName: productName,
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