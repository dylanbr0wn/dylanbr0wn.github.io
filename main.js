var SPE_USES_PREVIEW_IMAGE = false;
const runtime1 = new SpeRuntime(
    SPLINE_EXPORTED_SCENE1,
    SPLINE_ASSETS_LIST,
    "canvas3d"
);
runtime1.run();
const runtime2 = new SpeRuntime(
    SPLINE_EXPORTED_SCENE2,
    SPLINE_ASSETS_LIST,
    "canvas3d2"
);
runtime2.run();

const runtime3 = new SpeRuntime(
    SPLINE_EXPORTED_SCENE3,
    SPLINE_ASSETS_LIST,
    "canvas3d3"
);
runtime3.run();
const runtime4 = new SpeRuntime(
    SPLINE_EXPORTED_SCENE4,
    SPLINE_ASSETS_LIST,
    "canvas3d4"
);
runtime4.run();
