import { useState, useEffect } from "react";
import { getColor } from "../utils/color";
import { useSpring, animated, config } from "react-spring";

const Photo = ({ src, width = false, maxWidth }) => {
    const [linkHover, setLinkHover] = useState(false);
    const [color, setColor] = useState("");

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

    return (
        <div className="p-10 flex-grow my-auto ">
            <animated.img
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
                }}
                onMouseEnter={() => setLinkHover(true)}
                onMouseLeave={() => setLinkHover(false)}
                className={`${width ? width : "w-full"} m-auto  ${maxWidth}`}
                src={src}
            ></animated.img>
        </div>
    );
};

export default Photo;
