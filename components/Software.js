import { useEffect, useState } from "react";

const Software = ({ display, clickHandler, color, ready }) => {
    return (
        <div
            className={`transform pb-10 ${
                display ? "block" : "hidden"
            } transition-all  ${
                ready > 0 ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 "
            }`}
        >
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
                    Software
                </div>
                <div className="w-full p-10 font-mono text-lg text-center">
                    I mean after all, I am a software engineer... Kinda...
                    Right?
                </div>
                <div className="w-full">
                    <div>
                        <div className="text-3xl monoFont">Timesheet</div>
                        <div className="uppercase text-gray-400 mb-3">
                            City of Langford
                        </div>
                        <div>
                            Easily the largest project I have worked on. The
                            City of Langford required a new timesheet system to
                            replace their old, unmaintainabe system. My job
                            entailed respecifying the requirements of a new
                            system and then designing and building said system.
                            The final product was a new timesheet system writtin
                            in React, using NodeJS for the API, and integrating
                            with a Microsoft SQL Sever. The app leverages Azure
                            technologies for authentication, and deployment. Now
                            if that sounded like non-sense, just know, this was
                            hard and took a long time.
                        </div>
                    </div>
                    <hr className="my-5" />
                    <div>
                        <div className="flex justify-end">
                            <a
                                href="https://github.com/heyheyhello/uvic-localstar"
                                style={{
                                    borderColor: color,
                                    color,
                                    margin: "0 0 0 auto",
                                }}
                                className="backButton px-2 py-1 mouseLink uppercase transition-colors text-3xl monoFont inline-block hover:bg-black hover:bg-opacity-20"
                            >
                                <div className="">Localstar</div>
                            </a>
                        </div>
                        <div>
                            <div>
                                <div className="uppercase text-gray-400 text-right mb-3">
                                    SENG 499 Project
                                </div>
                                <div>
                                    If you have ever used Jupyter Notebooks, you
                                    probably know or heard of the pains of
                                    setting up the platform. All this command
                                    line stuff, but all you are here to do is
                                    draw a graph. Well we wanted to solve that.
                                    Enter Localstar. Localstar is a local-first
                                    single-file executable that runs a web
                                    application with an integrated Starboard
                                    Notebook, and filesystem navigator. What
                                    does this mean, it means you can pretty much
                                    do all you can do in Jupyter, and more,
                                    without the complication.
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-5" />
                    <div>
                        <div className="text-3xl monoFont">We Only Have 1</div>
                        <div className="uppercase text-gray-400 mb-3">
                            Personal
                        </div>
                        <div>
                            If you care about the planet, this ones for you.
                            Coming soon...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Software;
