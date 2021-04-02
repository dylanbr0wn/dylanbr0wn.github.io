import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import { useSpring, animated, config } from "react-spring";
import { getColor } from "../utils/color";
import NavLink from "./NavLink";

const HomeHero = ({ ready }) => {
    const [cursorVisible, setCursorVisible] = useState(true);
    const [displayName, setDisplayName] = useState("");
    const [ext, setExt] = useState("");
    const [nameComplete, setNameComplete] = useState(false);
    const [extColor, setExtColor] = useState("");
    const [color, setColor] = useState("");

    const name = "DYLAN_BROWN";
    const extensions = useMemo(
        () => [
            { name: ".exe", color: getColor() },
            { name: ".js", color: getColor() },
            { name: ".jsx", color: getColor() },
            { name: ".c", color: getColor() },
            { name: ".go", color: getColor() },
            { name: ".py", color: getColor() },
            { name: ".jpg", color: getColor() },
            { name: ".raw", color: getColor() },
            { name: ".svg", color: getColor() },
        ],
        []
    );

    useEffect(() => {
        void setTimeout(() => {
            setCursorVisible(state => !state);
        }, 500);
    }, [cursorVisible]);

    const removeExtension = (length, extensionIndex) => {
        if (length > 0) {
            setTimeout(() => {
                setExt(state => state.slice(0, -1));
                removeExtension(length - 1, extensionIndex);
            }, 150);
        } else {
            setTimeout(() => {
                let newIndex = extensionIndex;
                while (newIndex === extensionIndex) {
                    newIndex = Math.floor(Math.random() * extensions.length);
                }

                addExtensions(newIndex, 0);
            }, 500);
        }
    };

    const addExtensions = (extensionIndex, letterIndex) => {
        if (letterIndex < extensions[extensionIndex].name.length) {
            setExtColor(extensions[extensionIndex].color);
            let delay = 50 + Math.random() * 100;
            setExt(
                state => state + extensions[extensionIndex].name[letterIndex]
            );
            setTimeout(() => {
                addExtensions(extensionIndex, letterIndex + 1);
            }, delay);
        } else {
            setTimeout(() => {
                removeExtension(
                    extensions[extensionIndex].name.length,
                    extensionIndex
                );
            }, 1000);
        }
    };

    useEffect(() => {
        if (nameComplete) {
            addExtensions(0, 0);
        }
    }, [nameComplete]);

    const addLetter = index => {
        if (index < name.length) {
            let delay = 50 + Math.random() * 100;
            setDisplayName(state => state + name[index]);
            setTimeout(() => {
                addLetter(index + 1);
            }, delay);
        } else {
            setNameComplete(true);
        }
    };

    useEffect(() => {
        setColor(getColor());
        void setTimeout(() => {
            addLetter(0);
        }, 2000);
    }, []);

    const { opacity } = useSpring({
        opacity: cursorVisible ? 1 : 0,
        config: config.stiff,
    });

    return (
        <div className="relative overflow-hidden z-0">
            <div className="mx-auto px-12 md:px-24">
                <div className="m-auto py-8 lg:flex text-center justify-start">
                    <div className=" monoFont text-5xl lg:flex-grow">
                        <div
                            className="hover:bg-black hover:bg-opacity-20 transition-colors mx-auto text-center lg:text-left lg:inline-block lg:float-left w-96"
                            onClick={() => window.location.reload()}
                        >
                            <div
                                style={{
                                    borderColor: color ? color : "transparent",
                                }}
                                className=" mouseLink py-2"
                            >
                                <div className="inline-block text-white  my-auto px-1 align-middle ">
                                    {">"}
                                </div>
                                <div className="inline-block text-white my-auto px-1 align-middle">
                                    {displayName}
                                </div>
                                <div
                                    style={{ color: `${extColor}` }}
                                    className="inline-block text-white my-auto align-middle"
                                >
                                    {ext}
                                </div>
                                <div
                                    style={{ opacity: cursorVisible ? 1 : 0 }}
                                    className="inline-block w-1 h-10 align-middle bg-white transition-opacity"
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:flex-shrink lg:flex inline-block">
                        <NavLink
                            ready={ready}
                            alt={"GitHub"}
                            icon={"/github.svg"}
                            link={"https://github.com/dylanbr0wn"}
                        />
                        <NavLink
                            alt={"Instagram"}
                            ready={ready}
                            icon={"/instagram.svg"}
                            link={"https://www.instagram.com/dylansnothome/"}
                        />
                        <NavLink
                            ready={ready}
                            icon={"/linkedin.svg"}
                            alt={"LinkedIn"}
                            link={
                                "https://www.linkedin.com/in/dylan-brown-66b73a16a"
                            }
                        />
                        <NavLink
                            ready={ready}
                            alt={"dylan.bro#6869"}
                            icon={"/discord.svg"}
                            link={
                                "https://discord.com/users/306240852978696194"
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomeHero;
