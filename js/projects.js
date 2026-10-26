/*
 * ─────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT — this is the only file you need to edit.
 * ─────────────────────────────────────────────────────────────
 *
 *  1. Put your files in  assets/projects/<project-id>/
 *     (screenshots, videos, PDFs, .glb 3D models, zip downloads...)
 *  2. Reference them below in `cover` and `media`.
 *  3. Refresh the page. No build step.
 *
 *  Media types you can use in `media: [...]`:
 *    { type: "image",   src: "assets/projects/x/shot.png", caption: "..." }
 *    { type: "video",   src: "assets/projects/x/demo.mp4", caption: "..." }
 *    { type: "youtube", id:  "dQw4w9WgXcQ",                caption: "..." }
 *    { type: "model",   src: "assets/projects/x/part.glb",  caption: "..." }  // interactive 3D (export STL→GLB)
 *    { type: "pdf",     src: "assets/projects/x/report.pdf", caption: "..." }
 *    { type: "embed",   src: "assets/projects/x/web-build/index.html", caption: "..." } // playable game / live demo
 *
 *  Links (`links: [...]`) show as buttons: GitHub, live demo, downloads.
 *
 *  The explanations below are DRAFTS written from the project titles.
 *  Replace them with what you actually built.
 */

window.PORTFOLIO = {
  owner: {
    name: "Dennis Foley",
    title: "Electronics & Software Engineer",
    headline: "Hardware, mechanics and software, designed end to end.",
    intro:
      "I design circuit boards, model mechanical parts, simulate systems, and build interactive software. Here are some of the things I've made.",
    email: "dfoley2323@gmail.com",
    github: "https://github.com/kick3top-stack",
    linkedin: "", // leave empty to hide
    cv: "", // e.g. "assets/cv.pdf"
  },

  // Skills table. Leave `years` empty ("") to show the tool without a duration.
  skills: [
    { category: "Game Development", tool: "Cocos2d-x", years: "5+ years" },
    { category: "3D Development", tool: "Three.js Editor", years: "5+ years" },
    { category: "Scientific Computing", tool: "MATLAB", years: "" },
    { category: "CFD Simulation", tool: "SolidWorks Flow Simulation", years: "1–2 years" },
    { category: "Structural FEA", tool: "SolidWorks Simulation", years: "" },
  ],

  projects: [
    {
      id: "fishing-game",
      title: "Fishing Game",
      category: "Game Dev",
      tools: ["Cocos2d-x", "Sprite Animation", "Game Physics"],
      year: "",
      cover: "", // e.g. "assets/projects/fishing-game/cover.png"
      summary: "A 2D arcade fishing game built with the Cocos2d-x engine.",
      description: [
        "The player casts a line, waits for fish to swim past, and reels them in before the line breaks. Different fish have different speeds, sizes and point values.",
        "I built the game loop, the hook physics, sprite animations for the fish and water, and the scoring and level system in Cocos2d-x.",
      ],
      highlights: [
        "Scene management: menu, gameplay and game-over screens",
        "Collision detection between the hook and moving fish",
        "Sprite-sheet animations and sound effects",
      ],
      media: [
        // { type: "image", src: "assets/projects/fishing-game/gameplay.png", caption: "Gameplay" },
        // { type: "embed", src: "assets/projects/fishing-game/web-mobile/index.html", caption: "Play it here" },
      ],
      links: [
        // { label: "Source code", url: "https://github.com/..." },
      ],
    },

    {
      id: "aircraft-3d",
      title: "3D Aircraft Viewer",
      category: "3D / Web",
      tools: ["Three.js", "Three.js Editor", "WebGL"],
      year: "",
      cover: "",
      summary: "An interactive 3D aircraft you can fly or orbit around in the browser.",
      description: [
        "A Three.js scene that loads a 3D aircraft model and renders it in real time with lighting, shadows and a sky environment.",
        "The user can rotate the camera around the plane and control pitch, roll and yaw with the keyboard to see how each control surface affects flight.",
      ],
      highlights: [
        "GLTF model loading and PBR materials",
        "Camera controls and keyboard flight input",
        "Runs in any modern browser, no install",
      ],
      media: [],
      links: [],
    },

    {
      id: "pcb-design",
      title: "PCB Design",
      category: "Electronics",
      tools: ["KiCad / Altium", "Schematic Capture", "PCB Layout"],
      year: "",
      cover: "",
      summary: "A custom printed circuit board, taken from schematic to manufactured board.",
      description: [
        "I drew the schematic, chose the components, and laid out the board, routing power and signal traces and placing the ground planes.",
        "The design was checked with DRC, exported as Gerber files, manufactured, then assembled and tested.",
      ],
      highlights: [
        "Schematic and component selection",
        "Two-layer layout with ground plane",
        "Gerber export, assembly and bring-up testing",
      ],
      media: [
        // { type: "image", src: "assets/projects/pcb-design/schematic.png", caption: "Schematic" },
        // { type: "image", src: "assets/projects/pcb-design/layout.png", caption: "PCB layout" },
        // { type: "image", src: "assets/projects/pcb-design/assembled.jpg", caption: "Assembled board" },
      ],
      links: [],
    },

    {
      id: "solidworks",
      title: "SolidWorks Mechanical Design",
      category: "Mechanical / CAD",
      tools: ["SolidWorks", "SolidWorks Simulation (FEA)", "SolidWorks Flow Simulation (CFD)"],
      year: "",
      cover: "",
      summary: "3D parts and assemblies modeled in SolidWorks, tested with FEA and CFD simulation.",
      description: [
        "I modeled the individual parts in SolidWorks, combined them into an assembly with proper mates, and checked for interference and fit.",
        "From the model I produced dimensioned 2D drawings ready for manufacturing or 3D printing.",
      ],
      highlights: [
        "Part modeling and multi-part assembly",
        "Dimensioned 2D engineering drawings",
        "Structural FEA in SolidWorks Simulation",
        "Airflow / fluid CFD in SolidWorks Flow Simulation",
      ],
      media: [
        // Export your part as .glb (or STL → GLB) to make it spin in the browser:
        // { type: "model", src: "assets/projects/solidworks/assembly.glb", caption: "Drag to rotate" },
        // { type: "pdf", src: "assets/projects/solidworks/drawing.pdf", caption: "Engineering drawing" },
      ],
      links: [],
    },

    {
      id: "matlab",
      title: "MATLAB Simulation & Analysis",
      category: "Simulation",
      tools: ["MATLAB", "Simulink", "Signal Processing"],
      year: "",
      cover: "",
      summary: "Modeling and simulating an engineering system in MATLAB.",
      description: [
        "I wrote MATLAB scripts (and a Simulink model) to simulate how the system behaves over time, then plotted the results.",
        "Comparing the simulation with the expected or measured behavior helped me tune the design before building anything.",
      ],
      highlights: [
        "Mathematical model of the system",
        "Simulation and result plotting",
        "Parameter tuning based on results",
      ],
      media: [],
      links: [],
    },

    {
      id: "embedded",
      title: "Embedded Firmware",
      category: "Electronics",
      tools: ["C / C++", "Arduino / STM32", "Sensors"],
      year: "",
      cover: "",
      summary: "Microcontroller firmware that reads sensors and controls hardware.",
      description: [
        "Firmware for a microcontroller that reads sensor data, processes it, and drives outputs such as motors, LEDs or a display.",
        "Delete this project if you don't need it, or duplicate it for more projects.",
      ],
      highlights: ["Sensor interfacing (I2C / SPI / ADC)", "Real-time control loop", "Serial debugging"],
      media: [],
      links: [],
    },
  ],
};
