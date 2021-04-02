import { useEffect, useState } from "react";
import Photo from "../components/Photo";

const Photography = ({ display, clickHandler, color }) => {
    const [click1, setClick1] = useState(false);
    const [click2, setClick2] = useState(false);

    const clickChange1 = () => {
        setTimeout(() => {
            setClick1(true);
            setTimeout(() => {
                setClick1(false);
            }, 150);
            clickChange1();
        }, Math.random() * 3000);
    };

    const clickChange2 = () => {
        setTimeout(() => {
            setClick2(true);
            setTimeout(() => {
                setClick2(false);
            }, 150);
            clickChange2();
        }, Math.random() * 3000);
    };

    useEffect(() => {
        clickChange1();
        setTimeout(() => {
            clickChange2();
        }, Math.random() * 1000);
    }, []);

    return (
        <div className={`w-full h-full ${display ? "block" : "hidden"}`}>
            <button
                onClick={() => clickHandler(0)}
                style={{ borderColor: color, color }}
                className="backButton px-5 py-2 mouseLink uppercase  mx-auto transition-colors monoFont text-3xl hover:bg-black hover:bg-opacity-20"
            >
                <div className="w-40 ">{"< Back"}</div>
            </button>
            <div className="w-full h-full">
                <div
                    className={`text-7xl monoFont transition-transform text-center uppercase`}
                >
                    <span
                        className={`transform transition-transform duration-75 inline-block ${
                            click1 ? "scale-110" : "scale-100"
                        }`}
                    >
                        Click
                    </span>{" "}
                    <span
                        className={`transform transition-transform duration-75 inline-block ${
                            click2 ? "scale-110" : "scale-100"
                        }`}
                    >
                        Click
                    </span>
                </div>
                <div className="w-full p-10 font-mono text-lg text-center">
                    Here is a sample of my favourite photos that I could easily
                    find when I made this website. Most of the photos here are
                    from hiking treks/road trips and are really just for memory
                    sake. The business side of destination photography is long
                    dead to me. That said, if you like a photo here and want to
                    use it, let me know and we can arrange something.
                </div>
                <div className="flex w-full">
                    <Photo maxWidth="max-w-4xl" src="/pics/frink.webp" />
                    <Photo maxWidth="max-w-4xl" src="/pics/wells.webp" />
                </div>
                <div className="flex w-full">
                    <Photo src="/pics/elkhorn.webp" />
                </div>
                <div className="flex w-full">
                    <Photo src="/pics/mary.webp" />
                    <Photo src="/pics/snow.webp" />
                </div>

                <div className="flex w-full">
                    <Photo src="/pics/tunnel.webp" />
                    <Photo src="/pics/kananaskis.webp" />
                </div>
                <div className="flex w-full">
                    <Photo src="/pics/canon.webp" />
                </div>
            </div>
        </div>
    );
};
export default Photography;
