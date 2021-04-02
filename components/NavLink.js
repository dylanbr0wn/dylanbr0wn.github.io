import Link from "next/link";
import { useState, useEffect } from "react";
import { getColor } from "../utils/color";
import { useSpring, animated, config } from "react-spring";

const NavLink = ({ icon, link, ready, alt = "" }) => {
    const [linkHover, setLinkHover] = useState(false);
    const [color, setColor] = useState("");
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setColor(getColor());
    }, []);

    const { border, x } = useSpring({
        from: { border: "2px solid transparent", x: 0 },
        to: linkHover
            ? { border: `2px solid ${color}`, x: 1 }
            : { border: "2px solid transparent", x: 0 },
        config: { duration: 100 },
    });

    useEffect(() => {
        if (ready > 0 && !visible) setVisible(true);
    }, [ready]);

    return (
        <div
            className={` ${
                visible ? "opacity-100" : "opacity-0"
            } transition-opacity flex-shrink inline-block lg:block `}
        >
            <animated.a
                href={link}
                style={{
                    color: `${color}`,
                    borderColor: color ? color : "transparent",
                    // border: x.to({
                    //     range: [0, 0.25, 0.75, 1],
                    //     output: [
                    //         "2px solid transparent",
                    //         `2px solid ${color ? color : "transparent"}`,
                    //         "2px solid transparent",
                    //         `2px solid ${color ? color : "transparent"}`,
                    //     ],
                    // }),
                    cursor: "none",
                }}
                className={`inline-block h-16 w-16 text-center monoFont text-2xl p-4 mouseLink transition-colors  ${
                    linkHover ? "bg-black bg-opacity-20" : ""
                }`}
                onMouseEnter={() => setLinkHover(true)}
                onMouseLeave={() => setLinkHover(false)}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    className={`w-full h-full transition  ${
                        linkHover ? "opacity-100" : "opacity-50"
                    }`}
                    src={icon}
                    alt={alt}
                />
            </animated.a>
        </div>
    );
};

export default NavLink;
