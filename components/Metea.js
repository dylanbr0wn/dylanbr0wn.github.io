import { useState, useEffect, useRef } from "react";
import { getColor } from "../utils/color";
const Metea = ({ clickHandler }) => {
    const [niceColor, setNiceColor] = useState("");
    const [scaleChange, setScaleChange] = useState(true);

    const changeNiceColor = () => {
        setTimeout(() => {
            setNiceColor(getColor());
            setScaleChange(state => !state);
            changeNiceColor();
        }, 350);
    };

    useEffect(() => {
        changeNiceColor();
    }, []);

    return (
        <div onClick={clickHandler} className="w-full h-full text-center ">
            <div
                style={{ color: niceColor }}
                className={`text-9xl my-32 transform transition-all uppercase monoFont ${
                    scaleChange ? "scale-75" : "scale-125"
                }`}
            >
                OH HEY
            </div>
            <div
                style={{ color: niceColor }}
                className={`text-9xl my-32 transform transition-all uppercase monoFont ${
                    scaleChange ? "scale-75" : "scale-125"
                }`}
            >
                UR CUTE
            </div>
            <div style={{ color: niceColor }} className="font-mono ">
                Click to exit
            </div>
        </div>
    );
};

export default Metea;
