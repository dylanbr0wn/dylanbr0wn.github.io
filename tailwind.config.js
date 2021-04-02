// tailwind.config.js
module.exports = {
    purge: ["./pages/**/*.js", "./components/**/*.js"],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "realGray-900": "#121212",
                "realGray-800": "#1f1f1f",
            },
            transitionProperty: {
                cursor: "height, width, border, opacity, transform, top, left",
            },
        },
    },
    variants: {
        extend: {},
        transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
    },
    plugins: [
        // require('@tailwindcss/forms'),
    ],
};
