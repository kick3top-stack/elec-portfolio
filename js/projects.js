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
    github: "", // leave empty to hide
    linkedin: "", // leave empty to hide
    cv: "", // e.g. "assets/cv.pdf"
  },

  projects: [
    {
      id: "fishing-game",
      title: "Fishing Game",
      category: "Game Dev",
      tools: ["Cocos2d-x", "Sprite Animation", "Game Physics"],
      year: "",
      cover: "assets/images/fishing.jpg",
      summary: "An underwater arcade shooting game built with the Cocos2d-x engine.",
      description: [
        "The player controls a cannon at the bottom of the screen and fires at the fish swimming across a coral reef. Each catch pays out coins, and bigger creatures such as the sea turtle and hammerhead shark are worth more.",
        "I built the game in Cocos2d-x: the fish movement paths, cannon aiming and firing, hit detection, the coin counter and cannon-level controls, and the animated reef scene. It runs at a steady 60 FPS.",
      ],
      highlights: [
        "Fish spawning and movement paths across the screen",
        "Cannon aiming, bullets and hit detection",
        "Coin scoring, cannon-level controls and HUD",
        "Animated sprites for fish, coral and effects",
      ],
      media: [
        // { type: "embed", src: "assets/projects/fishing-game/web-mobile/index.html", caption: "Play it here" },
      ],
      links: [
        // { label: "Source code", url: "https://github.com/..." },
      ],
    },

    {
      id: "aircraft-3d",
      title: "3D Flight Game",
      category: "3D / Web",
      tools: ["Three.js", "Three.js Editor", "WebGL"],
      year: "",
      cover: "assets/images/aircraft.jpg",
      summary: "A browser-based 3D flight game where you pilot a fighter jet over an open world.",
      description: [
        "Built with Three.js, the game puts the player behind a fighter jet flying over hills, forests, houses, towers and a castle, with a cloud-filled sky.",
        "A heads-up display shows live speed, altitude and the number of connected players, and the game supports multiple players in the same world. It runs in any modern browser with no install.",
      ],
      highlights: [
        "Third-person flight camera and keyboard controls",
        "Open world with terrain, trees, buildings and clouds",
        "HUD with speed, altitude and player count",
        "Multiplayer: several pilots share one world",
      ],
      media: [],
      links: [],
    },

    {
      id: "pcb-design",
      title: "PCB Design",
      category: "Electronics",
      tools: ["Altium Designer", "Multi-layer PCB Layout", "High-speed Routing"],
      year: "",
      cover: "assets/images/PCB-board.jpg",
      summary: "A multi-layer processor board based on the Rockchip RV1126, laid out in Altium Designer.",
      description: [
        "This module is built around the Rockchip RV1126 vision processor. The layout uses several copper layers to fan out the processor's dense BGA package, route memory and high-speed signals, and carry power on wide copper pours.",
        "I placed the components, routed the board, and set up the power planes, length-matched traces and the four mounting holes in Altium Designer.",
      ],
      highlights: [
        "Multi-layer stack-up with dedicated power and ground pours",
        "BGA fan-out and dense via routing around the processor",
        "Length-matched (serpentine) traces for high-speed signals",
        "Mounting holes and board outline for the enclosure",
      ],
      media: [{ type: "image", src: "assets/images/PCB-altium.jpg", caption: "Board layout in Altium Designer" }],
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
      title: "Direction-of-Arrival Estimation (MUSIC)",
      category: "Simulation",
      tools: ["MATLAB", "Array Signal Processing"],
      year: "",
      cover: "assets/images/matlab.png",
      coverFit: "contain",
      summary: "Finding where radio signals come from, using the MUSIC algorithm in MATLAB.",
      description: [
        "When several signals reach an array of antennas, each one arrives at a slightly different time at each antenna. The MUSIC algorithm uses those differences to estimate the angle each signal came from.",
        "I simulated signals arriving at a sensor array in MATLAB and computed the MUSIC spectrum. The plot shows three sharp peaks, at about −12°, 0° and 85°, one for each source.",
      ],
      highlights: [
        "Simulated sensor array and incoming signals",
        "MUSIC algorithm implemented in MATLAB",
        "Spectrum plot with clearly separated peaks for each source",
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
