import HomePageBox from "./HomePageBox";

import { useState, useEffect, useRef } from "react";
const Menu = ({ clickHandler, ready, display }) => {
    const [runtimes, setRuntimes] = useState([]);
    const parentRef1 = useRef();
    const parentRef2 = useRef();
    const parentRef3 = useRef();
    const parentRef4 = useRef();

    useEffect(() => {
        // loadCanvas(loadSpline);
    }, []);

    const loadCanvas = callback => {
        const existingCanvas1 = document.getElementById("canvas3d");
        const existingCanvas2 = document.getElementById("canvas3d2");
        const existingCanvas3 = document.getElementById("canvas3d3");
        const existingCanvas4 = document.getElementById("canvas3d4");

        if (!existingCanvas1) {
            const canvas = document.createElement("canvas");
            canvas.id = "canvas3d";
            canvas.className =
                " overflow-hidden w-full h-full border-0 border-none block mx-auto";
            parentRef1.current.appendChild(canvas);
        }
        if (!existingCanvas2) {
            const canvas2 = document.createElement("canvas");
            canvas2.id = "canvas3d2";
            canvas2.className =
                " overflow-hidden w-full h-full border-0 border-none block mx-auto";
            parentRef2.current.appendChild(canvas2);
        }
        if (!existingCanvas3) {
            const canvas3 = document.createElement("canvas");
            canvas3.id = "canvas3d3";
            canvas3.className =
                " overflow-hidden w-full h-full border-0 border-none block mx-auto";
            parentRef3.current.appendChild(canvas3);
        }
        if (!existingCanvas4) {
            const canvas4 = document.createElement("canvas");
            canvas4.id = "canvas3d4";
            canvas4.className =
                " overflow-hidden w-full h-full border-0 border-none block mx-auto";
            parentRef4.current.appendChild(canvas4);
        }

        callback();
    };

    const loadSpline = () => {
        const runtime1 = new SpeRuntime(
            SPLINE_EXPORTED_SCENE1,
            SPLINE_ASSETS_LIST,
            "canvas3d"
        );
        runtime1.run();
        const runtime2 = new SpeRuntime(
            SPLINE_EXPORTED_SCENE2,
            SPLINE_ASSETS_LIST,
            "canvas3d2"
        );
        runtime2.run();

        const runtime3 = new SpeRuntime(
            SPLINE_EXPORTED_SCENE3,
            SPLINE_ASSETS_LIST,
            "canvas3d3"
        );
        runtime3.run();
        const runtime4 = new SpeRuntime(
            SPLINE_EXPORTED_SCENE4,
            SPLINE_ASSETS_LIST,
            "canvas3d4"
        );
        runtime4.run();
        setRuntimes([runtime1, runtime2, runtime3, runtime4]);
    };

    return (
        <div style={{ display: display ? "block" : "none" }}>
            <div className="w-full lg:flex">
                <HomePageBox
                    clickHandler={() => clickHandler(1)}
                    color={"#ff0077"}
                    title={"About"}
                    content={""}
                    classes={`transform h-96 p-5 ${
                        ready > 0
                            ? "opacity-100 scale-x-100"
                            : "opacity-0 scale-x-50"
                    }`}
                    initialWidth={"w-full lg:w-2/3"}
                >
                    <div
                        ref={parentRef1}
                        className="w-2/3 h-full mx-auto"
                    ></div>
                </HomePageBox>
                <HomePageBox
                    clickHandler={() => clickHandler(2)}
                    color={"#7b00ff"}
                    title={"Design"}
                    content={""}
                    classes={`transform h-96 p-5 ${
                        ready > 1
                            ? "opacity-100 scale-y-100"
                            : "opacity-0 scale-y-50"
                    }`}
                    initialWidth={"w-full lg:w-1/3"}
                >
                    <div
                        ref={parentRef4}
                        className="w-full h-full mx-auto"
                    ></div>
                </HomePageBox>
            </div>
            <div className="w-full lg:flex">
                <HomePageBox
                    clickHandler={() => clickHandler(3)}
                    color={"#ffa200"}
                    title={"Software"}
                    content={""}
                    classes={`transform h-96 p-5 ${
                        ready > 2
                            ? "opacity-100 scale-x-100"
                            : "opacity-0 scale-x-50"
                    }`}
                    initialWidth={"w-full lg:w-1/2"}
                >
                    <div
                        ref={parentRef3}
                        className="w-2/3 h-full mx-auto"
                    ></div>
                </HomePageBox>
                <HomePageBox
                    clickHandler={() => clickHandler(4)}
                    color={"#00eeff"}
                    title={"Photography"}
                    content={""}
                    classes={`transform h-96 p-5  ${
                        ready > 3
                            ? "opacity-100 scale-y-100"
                            : "opacity-0 scale-y-50"
                    }`}
                    initialWidth={"w-full lg:w-1/2"}
                >
                    <div
                        ref={parentRef2}
                        className="w-2/3 h-full mx-auto"
                    ></div>
                </HomePageBox>
            </div>
        </div>
    );
};
export default Menu;
