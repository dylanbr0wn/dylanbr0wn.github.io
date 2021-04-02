import { useSpring, animated, useChain } from "react-spring";
import { useRef, useState } from "react";

const FlipCard = ({
    title,
    subtitle,
    background,
    openHeight = 600,
    imageURL = null,
    children,
}) => {
    const [open, set] = useState(false);
    const [actual, setActual] = useState(false);

    const outerRef = useRef();
    const innerRef = useRef();

    const { height } = useSpring({
        // config: config.stiff,
        from: { height: 200 },
        to: { height: open ? openHeight : 200 },
        ref: outerRef,
    });

    const { transform, opacity } = useSpring({
        // config: config.stiff,
        from: { transform: `translate3d(0,0,0)`, opacity: 0 },
        to: {
            opacity: open ? 1 : 0,
            transform: `translate3d(0,${open ? 0 : openHeight}px,0)`,
        },
        ref: innerRef,
    });

    useChain(
        !open ? [innerRef, outerRef] : [outerRef, innerRef],
        open ? [0, 0.3] : [0, 0]
    );

    return (
        <>
            <div className="relative hidden lg:block">
                <animated.div
                    style={{ height }}
                    className={`${background} bg-cover bg-center rounded-md shadow w-full mt-10 relative h-full transition-colors`}
                >
                    <div
                        className={`${
                            open
                                ? "bg-gray-100"
                                : "bg-realGray-900 hover:bg-opacity-30 bg-opacity-60"
                        }  h-full rounded-md w-full  transition-colors  `}
                    >
                        <div className="flex">
                            <div className="flex-grow">
                                <h2
                                    className={`text-3xl font-extrabold tracking-tight ${
                                        open ? "text-gray-900" : "text-white"
                                    } sm:text-4xl p-8`}
                                >
                                    <span className="block">{title}</span>
                                    <span className="block text-opacity-100 text-3xl font-semibold">
                                        {subtitle}
                                    </span>
                                </h2>
                            </div>
                            <div className="text-center p-10">
                                <div className="inline-flex rounded-md shadow mt-10">
                                    <a
                                        onClick={() => set(state => !state)}
                                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-qblue-600 bg-white hover:bg-qblue-100 transition-all"
                                    >
                                        {open ? "Close" : "Learn more"}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <animated.div
                            className={`${
                                !open ? "hidden" : ""
                            } relative h-full w-full p-10`}
                            style={{ transform, opacity }}
                        >
                            {imageURL && (
                                <div className="mb-10 px-5">
                                    <img
                                        className="object-cover h-80 w-full"
                                        src={imageURL}
                                    />
                                </div>
                            )}

                            {children}
                        </animated.div>
                    </div>
                </animated.div>
            </div>
            <div className="bg-gray-100 rounded-md shadow w-full lg:hidden my-10">
                <div className="  w-full h-auto ">
                    <div className=" p-8">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl pb-10">
                            <span className="block">{title}</span>
                            <span className="block text-opacity-100 text-3xl font-semibold">
                                {subtitle}
                            </span>
                        </h2>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};
export default FlipCard;
