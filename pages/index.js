import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import HomeHero from "../components/HomeHero";
import ReactCursorPosition from "react-cursor-position";
import PointerDisplayThing from "../components/PointerDisplayThing";
import Menu from "../components/Menu";
import Header from "../components/Header";
import About from "../components/About";
import SixNine from "../components/SixNine";
import Metea from "../components/Metea";
import Snake from "../components/Snake";
import InstagramEmbed from "react-instagram-embed";
import Photography from "../components/Photography";
import Software from "../components/Software";

const Home = () => {
    const [ready, setReady] = useState(0);
    const [route, setRoute] = useState("home");
    const [keys, setKeys] = useState("");
    const [konami, setKonami] = useState(0);

    const [hover, setHover] = useState(0);

    const routes = [
        "home",
        "about",
        "design",
        "software",
        "photography",
        "69",
        "metea",
        "snake",
    ];

    const konamiCode = [
        "ArrowUp",
        "ArrowUp",
        "ArrowDown",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "ArrowLeft",
        "ArrowRight",
        "b",
        "a",
    ];

    const incrementReady = inc => {
        if (inc < 4) {
            setTimeout(() => {
                setReady(state => state + 1);
                incrementReady(inc + 1);
            }, 250);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            incrementReady(0);
        }, 1000);

        document.addEventListener("keydown", keyHandler);
    }, []);

    const keyHandler = event => {
        konamiHandler(event);
        naviagationHandler(event);
        const charList = "abcdefghijklmnopqrstuvwxyz0123456789";
        if (!event.key) return;
        const key = event.key.toLowerCase();

        // we are only interested in alphanumeric keys
        if (charList.indexOf(key) === -1) return;
        setKeys(state => {
            if (state.length > 4) {
                let substring = state + key;
                return substring.substr(-5);
            } else {
                return state + key;
            }
        });
    };

    const naviagationHandler = event => {
        setRoute(state => {
            if (event.key === "Escape") {
                if (state !== "home") {
                    clickHandler(0);
                }
            }
            return state;
        });
    };

    const konamiHandler = event => {
        setKonami(state => {
            if (
                konamiCode.indexOf(event.key) < 0 ||
                event.key !== konamiCode[state]
            ) {
                return 0;
            }
            return state + 1;
        });
    };

    useEffect(() => {
        if (konami === konamiCode.length) {
            clickHandler(7);
        }
    }, [konami]);

    useEffect(() => {
        if (keys === "metea") {
            setKeys("");
            var win = window.open(
                "https://youtu.be/EgT_us6AsDg?t=20",
                "_blank"
            );
            win.focus();
            clickHandler(6);
        }
    }, [keys]);

    const clickHandler = id => {
        if (id === 0) setHover(0);
        setReady(0);
        setTimeout(() => {
            setRoute(routes[id]);
            incrementReady(0);
        }, 200);
    };

    const hoverHandler = id => {
        if (route === "home") setHover(id);
    };

    const bgColors = [
        "transparent",
        "#ff0077",
        "#7b00ff",
        "#ffa200",
        "#00eeff",
    ];

    return (
        <div>
            <Header />

            <main className="overflow-auto min-h-screen h-full bg-realGray-900">
                <div
                    style={{
                        backgroundColor: bgColors[hover] || "transparent",
                    }}
                    className={`w-full h-screen opacity-5 fixed top-0 left-0 transition-colors`}
                ></div>
                <div className="w-full h-full">
                    {/* <div
                        onClick={() => {
                            if (route === "69") clickHandler(0);
                        }}
                        className="w-full h-screen bg-realGray-900  top-0"
                    ></div> */}
                    {/* <ReactCursorPosition className="w-full h-full"> */}
                    <PointerDisplayThing
                        route={route}
                        ready={ready}
                        sixtyNineHandler={() => clickHandler(5)}
                    />

                    <HomeHero ready={ready} />

                    <div className=" text-white relative mx-auto max-w-7xl h-full">
                        <Menu
                            hoverHandler={hoverHandler}
                            display={route === "home"}
                            ready={ready}
                            clickHandler={clickHandler}
                        />

                        <About
                            color={bgColors[1]}
                            display={route === "about"}
                            clickHandler={clickHandler}
                            ready={ready}
                        />

                        <Photography
                            color={bgColors[4]}
                            display={route === "photography"}
                            clickHandler={clickHandler}
                        />
                        {/* 
                        {route === "design" && (
                            <div>
                                <button
                                    onClick={() => clickHandler(0)}
                                    style={{ borderColor: "#ff0077" }}
                                    className="backButton px-5 py-2 uppercase mouseLink mx-auto transition-colors monoFont text-3xl"
                                >
                                    <div className="w-40">{"< Back"}</div>
                                </button>{" "}
                                Eat me
                            </div>
                        )} */}
                        <Software
                            color={bgColors[3]}
                            ready={ready}
                            display={route === "software"}
                            clickHandler={clickHandler}
                        />
                        {route === "69" && (
                            <SixNine clickHandler={() => clickHandler(0)} />
                        )}
                        {route === "metea" && (
                            <Metea clickHandler={() => clickHandler(0)} />
                        )}

                        <Snake
                            display={route === "snake"}
                            clickHandler={() => clickHandler(0)}
                        />
                    </div>
                    {/* </ReactCursorPosition> */}
                </div>
            </main>
        </div>
    );
};

export default Home;
