import { getColor } from "../utils/color";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PointerDisplayThing = ({ ready, sixtyNineHandler, route }) => {
    const [color, setColor] = useState("");
    const [initColor, setInitColor] = useState("");
    const [swapBottom, setSwapBottom] = useState(false);
    const [swapTop, setSwapTop] = useState(true);
    const [positionX, setPositionX] = useState(-100);
    const [positionY, setPositionY] = useState(-100);
    const [initLoad, setInitLoad] = useState(false);
    const [visible, setVisible] = useState(false);
    const [showAnger, setShowAnger] = useState(false);
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [stuckX, setStuckX] = useState(0);
    const [stuckY, setStuckY] = useState(0);
    const [isStuck, setIsStuck] = useState(false);
    const [linkBox, setLinkBox] = useState(null);
    const [linkHeight, setLinkHeight] = useState(30);
    const [linkWidth, setLinkWidth] = useState(30);

    useEffect(() => {
        let initColor = getColor();
        setInitColor(initColor);
        setColor(initColor);
        document.body.addEventListener("mousemove", updatePosition);
        const linkItems = document.querySelectorAll(".mouseLink");
        linkItems.forEach(item => {
            item.addEventListener("mouseenter", handleMouseEnter);
            item.addEventListener("mouseleave", handleMouseLeave);
        });
    }, []);

    const handleMouseEnter = e => {
        const navItem = e.currentTarget;
        const navItemBox = navItem.getBoundingClientRect();
        setLinkBox(navItem);
        setStuckX(Math.round(navItemBox.left + navItemBox.width / 2));
        setStuckY(Math.round(navItemBox.top + navItemBox.height / 2));
        setIsStuck(true);
    };

    const handleMouseLeave = () => {
        setIsStuck(false);
    };
    const updatePosition = e => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        setIsStuck(false);
        setColor(initColor);
        setLinkHeight(30);
        setLinkWidth(30);
        setPositionX(position.x - 15);
        setPositionY(position.y - 15);
    }, [route]);

    useEffect(() => {
        if (ready > 0 && !visible) setVisible(true);
    }, [ready]);

    useEffect(() => {
        if (position.x === 69 && position.y === 69) {
            sixtyNineHandler();
        }
        if (position.x !== -100 || position.y !== -100) setInitLoad(true);

        if (isStuck) {
            let boundingClient = linkBox.getBoundingClientRect();
            setPositionX(stuckX - boundingClient.width / 2);
            setPositionY(stuckY - boundingClient.height / 2);
            setLinkWidth(boundingClient.width);
            setLinkHeight(boundingClient.height);
            setColor(linkBox.style.borderColor);
        } else {
            setColor(initColor);
            setLinkHeight(30);
            setLinkWidth(30);
            setPositionX(position.x - 15);
            setPositionY(position.y - 15);
        }
    }, [position]);

    return (
        <div className="w-screen h-screen fixed top-0 z-50 pointer-events-none">
            <motion.div
                // style={{ y: positionY, x: positionX }}
                animate={{
                    color,
                    opacity: visible && initLoad ? (isStuck ? 1 : 0.5) : 0,
                    y: positionY,
                    x: positionX,
                    width: `${linkWidth}px`,
                    height: `${linkHeight}px`,
                    borderRadius: !isStuck ? "15px" : "0px",
                    border: `${isStuck ? "4px" : "2px"} solid ${
                        color ? color : "rgba(0,0,0,0)"
                    }`,
                    // transform: `translate3d(-${linkWidth / 2}px, -${
                    //     linkHeight / 2
                    // }px, 0)`,
                }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 30,
                    mass: 0.1,
                }}
                className="absolute"
            />
            <div
                style={{ color, opacity: initLoad ? 1 : 0 }}
                className="absolute bottom-1 w-full text-center text-sm"
            >
                x: {position.x} y: {position.y}
            </div>
        </div>
    );
};
export default PointerDisplayThing;
