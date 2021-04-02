import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { getColor } from "../utils/color";

const HomePageBox = ({
    title,
    content,
    classes,
    initialWidth,
    children = null,
    color,
    clickHandler,
    id,
    hoverHandler,
}) => {
    const [linkHover, setLinkHover] = useState(false);
    // const [color, setColor] = useState("");
    const [flash, setFlash] = useState(false);
    const [newTitle, setNewTitle] = useState(title);

    const randomChar = ["!", "?", "#", "^", "&"];

    useEffect(() => {
        void setTimeout(() => {}, 500);
    }, [linkHover]);

    const { border, x, opacity } = useSpring({
        from: { border: "2px solid transparent", x: 0, opacity: 0.3 },
        to: linkHover
            ? { border: `2px solid ${color}`, x: 1, opacity: 1 }
            : { border: "2px solid transparent", x: 0, opacity: 0.3 },
        config: { duration: 100 },
    });

    return (
        <div
            // className={`${classes} ${
            //     linkHover ? "w-full" : initialWidth
            // } transition-all duration-300 mouseLink`}
            className={`${classes} w-full text-center  transition-all duration-300 `}
        >
            <div
                style={{
                    // color: `${linkHover ? color : "#ffffff"}`,
                    color: "white",
                    borderColor: color,
                    // border: x.to({
                    //     range: [0, 0.25, 0.75, 1],
                    //     output: [
                    //         "2px solid transparent",
                    //         `2px solid ${color}`,
                    //         "2px solid transparent",
                    //         `2px solid ${color}`,
                    //     ],
                    // }),
                }}
                className=" relative cursor-none "
            >
                {/* <div
                    className={`bg-white absolute top-0 w-full h-full ${
                        flash ? "opacity-10" : "opacity-0"
                    } transition-opacity duration-75 `}
                ></div> */}
                {/* <div
                    style={{ backgroundColor: color }}
                    className={`absolute top-0 w-full h-full  ${
                        linkHover ? "opacity-20" : "opacity-0"
                    }`}
                ></div> */}
                <div style={{ borderColor: color }} className="inline-block">
                    <div
                        onClick={() => clickHandler(id)}
                        style={{ borderColor: color }}
                        onMouseEnter={() => {
                            hoverHandler(id);
                            setLinkHover(true);
                        }}
                        onMouseLeave={() => {
                            hoverHandler(0);
                            setLinkHover(false);
                        }}
                        className="inline-block px-16 pb-2 mx-auto mouseLink transition-colors relative "
                    >
                        {/* <div className={linkHover ? `scanlines` : ""}></div> */}
                        <animated.div
                            style={{ opacity }}
                            data-text={title}
                            className={`text-7xl lg:text-9xl  monoFont ${
                                linkHover ? "glitch" : ""
                            } transition-all inline-block`}
                        >
                            {title}
                        </animated.div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomePageBox;
