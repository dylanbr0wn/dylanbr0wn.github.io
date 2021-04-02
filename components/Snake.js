import { useState, useEffect, useRef } from "react";
import { getColor } from "../utils/color";
const Snake = ({ clickHandler, display }) => {
    const [reload, setReload] = useState(false);
    const ref = useRef();

    useEffect(() => {
        if (display) {
            loadCanvas(loadSnake);
        }
    }, [display]);

    useEffect(() => {
        if (reload) {
            unloadSnake();
            loadCanvas(loadSnake);
            setReload(false);
        }
    }, [reload]);

    const onClick = () => {
        setReload(true);
    };

    const unloadSnake = () => {
        document.getElementById("c").remove();
        document.getElementById("snake").remove();
    };

    const loadCanvas = callback => {
        const existingCanvas = document.getElementById("c");
        if (!existingCanvas) {
            const canvas = document.createElement("canvas");
            canvas.id = "c";
            canvas.className =
                " overflow-hidden w-full h-full border-0 border-none block mx-auto monoFont";
            ref.current.appendChild(canvas);
        }
        callback();
    };

    const loadSnake = () => {
        const existingScript = document.getElementById("snake");
        if (!existingScript) {
            const script = document.createElement("script");
            script.id = "snake";
            script.src = "/snake.js";

            document.head.appendChild(script);
        }
    };

    return (
        <div
            onClick={onClick}
            className={`w-full h-full ${display ? "block" : "hidden"}`}
        >
            <button
                style={{ borderColor: "#ff0077" }}
                onClick={() => clickHandler(0)}
                className="backButton px-5 py-2 uppercase  mx-auto transition monoFont text-3xl mouseLink"
            >
                <div className="w-40">{"< Back"}</div>
            </button>
            <div ref={ref} className="w-full h-full "></div>
        </div>
    );
};

export default Snake;
