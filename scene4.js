var SPLINE_EXPORTED_SCENE4 = {
    scenes: [{ nodes: [0] }],
    nodes: [
        { children: [1, 2, 3] },
        {
            spe_empty_object: true,
            spe_interaction: 0,
            translation: [0, 0, 0],
            rotation: [
                -0.05877556752686751,
                -0.42104924530790727,
                0.03697622485347654,
                0.9043758756640523,
            ],
            scale: [1, 1, 1],
            hiddenMatrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            visible: true,
            uuid: "887E1962-DDF1-4789-826A-EB8AF0B5DBFB",
            children: [4],
        },
        {
            spe_interaction: 1,
            camera: 0,
            translation: [
                -90.0370734932749,
                -9.241142105394381,
                -995.0437268483222,
            ],
            rotation: [
                -0.00020773032384813558,
                0.9989764943978702,
                -0.004611902295546043,
                -0.044996120342435615,
            ],
            hiddenMatrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            visible: true,
            uuid: "37DA0DF8-FB57-4346-853C-27BD0B2A5DFD",
            children: [5],
        },
        { visible: true, extensions: { KHR_lights_punctual: { light: 0 } } },
        {
            mesh: 0,
            material: 0,
            spe_interaction: 2,
            translation: [0, 0, 0],
            rotation: [0, 0, 0, 1],
            scale: [1, 1, 1],
            visible: true,
            castShadow: false,
            receiveShadow: false,
            hiddenMatrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            type: "mesh3d",
            uuid: "4FBCFB2C-151B-4F01-90AD-70C5B7C4ED9F",
            spe_cloner_data: {},
        },
        {
            spe_interaction: null,
            translation: [850000, 1300000, 1000000],
            rotation: [0, 0, 0.5, 0],
            hiddenMatrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            uuid: "CA745C58-17FE-47A0-AD32-74EFE17720BE",
            visible: true,
            extensions: { KHR_lights_punctual: { light: 1 } },
        },
    ],
    meshes: [
        {
            primitives: [{ attributes: { POSITION: 0, NORMAL: 1 } }],
            parameters: {
                width: 110.22122192382812,
                height: 100,
                depth: 127.27259063720703,
            },
        },
    ],
    meshes_spe: [],
    materials: [
        {
            material_0_Basic: {
                extensions: {
                    KHR_materials_common: {
                        technique: "TOON",
                        values: { transparent: true, transparency: 1 },
                    },
                },
                spe_options: {
                    side: 0,
                    wireframe: false,
                    flatShading: false,
                    visible: true,
                },
                spe_layers: [
                    {
                        type: "color",
                        uniforms: {
                            alpha: { name: "alpha", value: 1, type: 1 },
                            mode: { name: "mode", value: 0, type: 1 },
                            color: { name: "color", value: 7953400, type: 6 },
                        },
                    },
                    {
                        type: "light",
                        uniforms: {
                            alpha: { name: "alpha", value: 1, type: 1 },
                            mode: { name: "mode", value: 0, type: 1 },
                        },
                    },
                    {
                        type: "fresnel",
                        uniforms: {
                            alpha: { name: "alpha", value: 1, type: 1 },
                            mode: { name: "mode", value: 0, type: 1 },
                            bias: { name: "bias", value: 0.1, type: 2 },
                            scale: { name: "scale", value: 1, type: 1 },
                            intensity: { name: "intensity", value: 2, type: 1 },
                            factor: { name: "factor", value: 1, type: 1 },
                            color: { name: "color", value: 16777215, type: 6 },
                        },
                    },
                ],
            },
        },
    ],
    cameras: [
        {
            type: "Orthographic",
            orthographic: {
                xmag: 2544,
                ymag: 1361,
                zfar: 100000,
                znear: -50000,
            },
            spe_options: { zoom: 3.6698523732399377 },
        },
    ],
    buffers: [
        {
            uri:
                "data:application/octet-stream;base64,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",
            byteLength: 2448,
        },
    ],
    bufferViews: [
        { buffer: 0, byteOffset: 0, byteLength: 2448, target: 34962 },
    ],
    accessors: [
        {
            bufferView: 0,
            byteOffset: 0,
            componentType: 5126,
            count: 102,
            type: "VEC3",
        },
        {
            bufferView: 0,
            byteOffset: 1224,
            componentType: 5126,
            count: 102,
            type: "VEC3",
        },
    ],
    extensions: {
        KHR_lights_punctual: {
            lights: [
                {
                    type: "hemispheric",
                    name: "Default Ambient Light",
                    color: [1, 1, 1],
                    intensity: -1.4,
                },
                {
                    type: "directional",
                    name: "Default Directional Light",
                    color: [1, 1, 1],
                    intensity: 2.9,
                    shadows: {
                        castShadow: false,
                        shadowmapViewRight: 5,
                        shadowmapViewLeft: -5,
                        shadowmapViewTop: 5,
                        shadowmapViewBottom: -5,
                        shadowmapViewNear: 0.5,
                        shadowmapViewFar: 500,
                    },
                },
            ],
        },
    },
    spline: {
        interactions: [
            {
                uuid: "38DAB40E-4851-4209-A0AB-F0D7C77FCC3D",
                selectedState: 1,
                states: [
                    "5B34EE69-AF5B-4A0C-9C9E-B50BA50332D5",
                    "6977A86B-3543-4124-90BE-CE07D0E60E4B",
                ],
                events: [
                    {
                        type: 7,
                        ui: { isCollapsed: false },
                        targets: [
                            {
                                easing: 4,
                                duration: 3500,
                                delay: 0,
                                cubicControls: [0.5, 0.05, 0.1, 0.3],
                                springParameters: {
                                    mass: 1,
                                    stiffness: 80,
                                    damping: 10,
                                    velocity: 0,
                                },
                                repeat: true,
                                cycle: true,
                                rewind: true,
                                object: "887E1962-DDF1-4789-826A-EB8AF0B5DBFB",
                                state: "6977A86B-3543-4124-90BE-CE07D0E60E4B",
                            },
                        ],
                    },
                ],
            },
            { uuid: "CCCD9F14-7CF7-439B-98C5-86431A8B5155" },
            { uuid: "56736EF1-84CE-492C-B69D-966634D81550" },
        ],
        interactionStates: {
            "5B34EE69-AF5B-4A0C-9C9E-B50BA50332D5": {
                uuid: "5B34EE69-AF5B-4A0C-9C9E-B50BA50332D5",
                name: "Base State",
                position: [0, 0, 0],
                rotation: [
                    3.002165836249835,
                    -0.08721446892712974,
                    3.1241393610698496,
                    "XYZ",
                ],
                scale: [0.5, 0.5, 0.5],
                hiddenMatrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            },
            "6977A86B-3543-4124-90BE-CE07D0E60E4B": {
                uuid: "6977A86B-3543-4124-90BE-CE07D0E60E4B",
                name: "State 1",
                position: [0, 0, 0],
                rotation: [
                    -0.11718920824265396,
                    -0.8724712934657091,
                    0.027044873065492577,
                    "XYZ",
                ],
                scale: [0.5, 0.5, 0.5],
                hiddenMatrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            },
        },
        textures: {},
        images: {},
        mainCameraIndex: 2,
        usePrimitives: true,
        bgColor: [
            0.09803921568627451,
            0.09803921568627451,
            0.09803921568627451,
        ],
        bgAlpha: 0,
        orbitDamped: true,
        orbitTarget: [
            -0.13885643480614362,
            -0.008084012672782137,
            0.8644321743856835,
        ],
        cameraType: "Orthographic",
        cameraRotate: true,
        cameraPan: false,
        cameraZoom: false,
        viewMode: 2,
        // viewWidth: 512,
        // viewHeight: 512,
        quality: "low",
        useOrbitControls: true,
        elementID: "canvas3d4",
    },
};
