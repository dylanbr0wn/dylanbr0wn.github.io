import Head from "next/head";
const Header = () => {
    return (
        <Head>
            <title>Dylan Brown</title>
            <link rel="shortcut icon" href="/favicon.ico" />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />

            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=VT323&display=swap"
                rel="stylesheet"
            ></link>
            <meta
                name="Description"
                content="Come explore Dylan Brown's software, design, and photography portfolio"
            />
            {/* <script src="/spe.js"></script>
            <script src="/three.min.js"></script>
            <script src="/anime.min.js"></script>
            <script src="/spline.runtime.min.js"></script>

            <script src="/assets.js"></script>
            <script src="/scene1.js"></script>
            <script src="/scene2.js"></script>
            <script src="/scene3.js"></script>
            <script src="/scene4.js"></script> */}
            {/* <script src="/main.js"></script> */}
        </Head>
    );
};

export default Header;
