import HomePageBox from "./HomePageBox";

import { useState, useEffect, useRef } from "react";
const Menu = ({ clickHandler, ready, display, hoverHandler }) => {
    useEffect(() => {
        // loadCanvas(loadSpline);
    }, []);

    return (
        <div style={{ display: display ? "block" : "none" }}>
            <div className="w-full text-center p-5">
                <HomePageBox
                    hoverHandler={hoverHandler}
                    clickHandler={clickHandler}
                    id={1}
                    color={"#ff0077"}
                    title={"About"}
                    content={""}
                    classes={`transform  ${
                        ready > 0
                            ? "opacity-100 scale-x-100"
                            : "opacity-0 scale-x-50"
                    }`}
                    initialWidth={"w-full"}
                />
                <HomePageBox
                    id={3}
                    hoverHandler={hoverHandler}
                    clickHandler={clickHandler}
                    color={"#ffa200"}
                    title={"Software"}
                    content={""}
                    classes={`transform  p-5 ${
                        ready > 1
                            ? "opacity-100 scale-x-100"
                            : "opacity-0 scale-x-50"
                    }`}
                    initialWidth={"w-full"}
                />
                {/* <HomePageBox
                    hoverHandler={hoverHandler}
                    id={2}
                    clickHandler={clickHandler}
                    color={"#7b00ff"}
                    title={"Design"}
                    content={""}
                    classes={`transform  ${
                        ready > 2
                            ? "opacity-100 scale-x-100"
                            : "opacity-0 scale-x-50"
                    }`}
                    initialWidth={"w-full"}
                /> */}

                <HomePageBox
                    id={4}
                    hoverHandler={hoverHandler}
                    clickHandler={clickHandler}
                    color={"#00eeff"}
                    title={"Photography"}
                    content={""}
                    classes={`transform  ${
                        ready > 2
                            ? "opacity-100 scale-x-100"
                            : "opacity-0 scale-x-50"
                    }`}
                    initialWidth={"w-full"}
                />
            </div>
            <div className="w-full lg:flex"></div>
        </div>
    );
};
export default Menu;
