/*
 * ─────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT — this is the only file you need to edit.
 * ─────────────────────────────────────────────────────────────
 *
 *  1. Put your files in  assets/images/  (or any folder under assets/)
 *  2. Reference them below in `cover` and `media`.
 *  3. Refresh the page. No build step.
 *
 *  Media types you can use in `media: [...]`:
 *    { type: "image",   src: "assets/images/shot.jpg",   caption: "..." }
 *    { type: "video",   src: "assets/images/demo.mp4",   caption: "..." }
 *    { type: "youtube", id:  "dQw4w9WgXcQ",              caption: "..." }
 *    { type: "model",   src: "assets/images/part.glb",   caption: "..." }  // interactive 3D (export STL→GLB)
 *    { type: "pdf",     src: "assets/images/report.pdf", caption: "..." }
 *    { type: "embed",   src: "assets/game/index.html",   caption: "..." }  // playable game / live demo
 *
 *  Links (`links: [...]`) show as buttons: GitHub, live demo, downloads.
 *  `coverFit: "contain"` shows the whole cover image (good for plots) instead of cropping it.
 */

window.PORTFOLIO = {
  owner: {
    name: "Dennis Foley",
    title: "Electronics & Software Engineer",
    headline: "Hardware, mechanics and software, designed end to end.",
    intro:
      "I design RF circuit boards, simulate antennas, structures and fluid flow, and build games and 3D software. Here are some of the things I've made.",
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
      media: [],
      links: [],
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
      id: "rf-pcb",
      title: "RF PCB Design",
      category: "Electronics",
      tools: ["Altium Designer", "Keysight ADS", "AD9361 SDR", "Smith Chart"],
      year: "",
      cover: "assets/images/PCB-board.jpg",
      summary: "An 8-layer RF board with antenna interfaces, LNAs, filters and an AD9361 software-defined radio.",
      description: [
        "I designed an 8-layer RF PCB that takes signals from the antenna interfaces through low-noise amplifiers (LNAs) and filters into an AD9361 software-defined radio. RF traces are impedance-matched so the signal reaches the radio with as little loss and reflection as possible.",
        "Before layout, I simulated the matching networks and signal paths in ADS. I checked impedance on Smith Charts and tuned the RF front end until it met its targets.",
      ],
      highlights: [
        "8-layer stack-up with dedicated RF, power and ground layers",
        "Antenna interfaces, LNAs and filters in the RF front end",
        "Impedance-matched RF traces",
        "AD9361 SDR circuitry",
        "Matching networks simulated and optimized in ADS",
      ],
      media: [{ type: "image", src: "assets/images/PCB-altium.jpg", caption: "Board layout in Altium Designer" }],
      links: [],
    },

    {
      id: "fea",
      title: "Mechanical Design & Structural FEA",
      category: "Mechanical",
      tools: ["3D CAD", "Onshape", "CAEplex (FEA)"],
      year: "",
      cover: "assets/images/fea.jpg",
      summary: "3D mechanical parts checked with finite element analysis to see where they bend and how much stress they carry.",
      description: [
        "I model antenna structures and mechanical assemblies in 3D CAD, check mounting constraints and structural stability, and refine the designs so they hold up reliably in use.",
        "For this component I ran a finite element analysis with Onshape and CAEplex. Under load, the curved neck carries the highest Von Mises stress, at 17 MPa (red), while the base stays almost unstressed (blue). The maximum displacement is only 0.01997 mm.",
      ],
      highlights: [
        "3D modeling of antenna structures and assemblies",
        "Mounting constraints and structural stability checks",
        "FEA: mesh, loads and boundary conditions",
        "Max Von Mises stress 17 MPa, max displacement 0.01997 mm",
      ],
      media: [{ type: "image", src: "assets/images/fea-full.jpg", caption: "Stress results in Onshape with CAEplex" }],
      links: [],
    },

    {
      id: "cfd",
      title: "CFD Flow Simulation",
      category: "Simulation",
      tools: ["OpenFOAM", "icoFoam", "ParaView / modelbuilder"],
      year: "",
      cover: "assets/images/cfd.jpg",
      summary: "Simulating how air flows around a 3D body and where pressure builds up, using OpenFOAM.",
      description: [
        "I set up a fluid-flow simulation in OpenFOAM with the icoFoam solver. I defined the inlet flow velocity, outlet pressure and fluid viscosity, then meshed the domain around a 3D body.",
        "The result shows how pressure is distributed around the body. Pressure is highest on the front face, where the flow hits it head-on (red), and drops along the top and sides as the flow speeds up around it (blue).",
      ],
      highlights: [
        "Boundary conditions: inlet velocity, outlet pressure, viscosity",
        "Block mesh and snappyHexMesh refinement around the body",
        "Transient solve with icoFoam",
        "Pressure-field post-processing and visualization",
      ],
      media: [{ type: "image", src: "assets/images/cfd-full.jpg", caption: "OpenFOAM case setup and pressure results" }],
      links: [],
    },

    {
      id: "matlab",
      title: "Antenna Array Angle-of-Arrival (MATLAB)",
      category: "Simulation",
      tools: ["MATLAB", "Array Signal Processing", "MUSIC Algorithm"],
      year: "",
      cover: "assets/images/matlab.png",
      coverFit: "contain",
      summary: "Finding which direction radio signals come from, using an 8-element antenna array simulated in MATLAB.",
      description: [
        "When a signal reaches an array of antennas, it arrives at each element at a slightly different time, which shows up as a phase difference. Measuring those differences tells you the angle the signal came from.",
        "I built MATLAB simulations of an 8-element antenna array, analyzed the phase differences and signal correlation between elements, and verified angle-of-arrival estimation algorithms. The MUSIC spectrum here shows three sharp peaks, at about −12°, 0° and 85°, one for each source.",
      ],
      highlights: [
        "8-element antenna array model",
        "Phase-difference and signal-correlation analysis",
        "Angle-of-arrival estimation with the MUSIC algorithm",
        "Clearly separated peaks for multiple sources",
      ],
      media: [],
      links: [],
    },

    {
      id: "embedded",
      title: "Wire Rope Sensor Unit",
      category: "Electronics",
      tools: ["Embedded C / C++", "Sensors", "Field Hardware"],
      year: "",
      cover: "assets/images/embedded.jpg",
      summary: "A rugged embedded sensor unit mounted on steel wire ropes in an industrial installation.",
      description: [
        "This sensor unit clamps onto running steel wire ropes, with a guide roller that keeps it aligned with the rope. It is installed in an industrial hoisting setup.",
        "The embedded electronics read the sensors, process the data and send it over a cable to the control side.",
      ],
      highlights: [
        "Sensor electronics in a rugged metal enclosure",
        "Guide-roller mounting on the moving rope",
        "Embedded firmware for data acquisition",
        "Tested in a real industrial installation",
      ],
      media: [],
      links: [],
    },
  ],
};
