import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useSpring, animated, config } from "react-spring";

const About = ({ ready, clickHandler, display, color }) => {
    const [sendingState, setSendingState] = useState(false);
    const [completeState, setCompleteState] = useState(false);
    const [formVisible, setFormVisible] = useState(true);
    const [showTitle, setShowTitle] = useState(false);
    const [showText, setShowText] = useState(false);

    const [email, setEmail] = useState({
        email_address: "",
        message: "",
    });
    const [launchText, setLaunchText] = useState("Launching");

    const loadContent = () => {
        setShowTitle(true);
        setTimeout(() => {
            setShowText(true);
        }, 250);
    };

    useEffect(() => {
        if (display) {
            setTimeout(() => {
                loadContent();
            }, 500);
        }
    }, [display]);

    const handleSubmit = async () => {
        setSendingState(true);
        let result = await axios.post(
            "https://us-central1-qualifund-fc06f.cloudfunctions.net/email",
            { ...email },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        emailSuccess();
    };

    const emailSuccess = () => {
        setSendingState(false);
        setFormVisible(false);
        setTimeout(() => {
            setCompleteState(true);
        }, 150);
    };

    const handleInputChange = event => {
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        setEmail(state => ({
            ...state,
            [name]: value,
        }));
    };

    const loadingDots = (dots = 0) => {
        if (sendingState) {
            setTimeout(() => {
                if (dots < 3) {
                    setLaunchText(state => state + ".");
                    loadingDots(dots + 1);
                } else {
                    setLaunchText("launching");
                    loadingDots(0);
                }
            }, 500);
        }
    };

    useEffect(() => {
        if (sendingState) {
            loadingDots();
        }
    }, [sendingState]);

    const interp = () => r => `translate3d(0, ${25 * Math.sin(r)}px, 0)`;
    const { radians } = useSpring({
        to: async next => {
            while (1) await next({ radians: 2 * Math.PI, reset: true });
        },
        from: { radians: 0 },
        config: { duration: 4000 },
        reset: true,
    });

    return (
        <div
            className={`transform pb-10 ${
                display ? "block" : "hidden"
            } transition-all  ${
                ready > 0 ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 "
            }`}
        >
            <button
                style={{ borderColor: color, color }}
                onClick={() => clickHandler(0)}
                className="backButton px-5 py-2 uppercase mouseLink mx-auto transition monoFont text-3xl hover:bg-realGray-900 hover:bg-opacity-50"
            >
                <div className="w-40">{"< Back"}</div>
            </button>
            <div
                className={`transform transition-transform mb-20 mt-12 relative ${
                    showTitle
                        ? "scale-y-100 opacity-100"
                        : "scale-y-0 opacity-0"
                }`}
            >
                <animated.div
                    style={{ transform: radians.to(interp()) }}
                    className={`text-7xl monoFont transition-transform text-center `}
                >
                    Who am I and why am I here?!
                </animated.div>
            </div>
            <div
                className={`transform px-3 transition-transform ${
                    showText ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                }`}
            >
                <div className="text-xl font-mono text-center px-3">
                    My name is Dylan Brown, thanks for asking. Im a nearly
                    graduated software engineering student at the University of
                    Victoria. I never touched a piece of code 4.5 years ago and
                    yet here we are. Currently im all about web development of
                    all shapes and sizes. <br /> <br />
                    Outside of software, Im your typical we(s)t coast outdoor
                    buff. So if you ever wonder what I will spend my hard earned
                    money on, its probably freeze dried vegan meals for my next
                    mountain rambling excursion. Oh and I also enjoy
                    photography, digital design, video games, and anything
                    space/tech related.
                </div>

                <div
                    className={` ${
                        !completeState ? "block" : "hidden"
                    }  transform transition-all ${
                        formVisible
                            ? "scale-x-100 opacity-100"
                            : "scale-x-0 opacity-0"
                    }`}
                >
                    <div className="text-5xl monoFont my-10 text-center">
                        Contact me?
                        <span className="text-xl">(or dont, your loss)</span>
                    </div>
                    <div className="text-center">
                        <div
                            style={{ color }}
                            className="font-mono py-2 uppercase"
                        >
                            your Email Address
                        </div>
                        <input
                            style={{ borderColor: color }}
                            name="email_address"
                            value={email.email_address}
                            onChange={handleInputChange}
                            type="text"
                            className="hover:bg-realGray-900 hover:bg-opacity-50 bg-realGray-900 bg-opacity-10 contactInput lg:w-1/3 w-2/3 transition mouseLink"
                        />
                    </div>
                    <div className="mt-5 text-center">
                        <div
                            style={{ color }}
                            className="font-mono py-2 uppercase"
                        >
                            Message
                        </div>
                        <textarea
                            style={{ borderColor: color }}
                            name="message"
                            value={email.message}
                            onChange={handleInputChange}
                            type="text"
                            className="hover:bg-realGray-900 hover:bg-opacity-50 bg-realGray-900 bg-opacity-10 contactInput w-2/3 lg:w-1/2 h-64 transition mx-auto mouseLink "
                        />
                    </div>
                    <div className="w-full pt-5 text-center">
                        <button
                            onClick={handleSubmit}
                            style={{ borderColor: color }}
                            className="sendButton px-5 py-2 uppercase hover:bg-realGray-900 hover:bg-opacity-50 mx-auto monoFont text-2xl transition mouseLink"
                        >
                            <div className="w-40">
                                {!sendingState ? "Send the thing" : launchText}
                            </div>
                        </button>
                    </div>
                </div>

                <div
                    style={{ color: "#ff0077" }}
                    className={` ${
                        completeState ? "block" : "hidden"
                    }  text-5xl monoFont my-10 text-center mt-20 transform transition-all ${
                        completeState
                            ? "scale-x-100 opacity-100"
                            : "scale-x-0 opacity-0"
                    }`}
                >
                    You have been received! <br /> I will respond when im back
                    from my hike.
                </div>
            </div>
        </div>
    );
};

export default About;
