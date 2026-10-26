# Portfolio

A static portfolio site with no build step. Open `index.html` in a browser to view it.

## Adding your work

1. Copy your files into the project's folder, for example `assets/projects/pcb-design/`.
2. Open `js/projects.js` and fill in that project:
   - `cover`: the main image shown on the card
   - `summary`, `description`, `highlights`: the explanation
   - `media`: the gallery (images, videos, YouTube, PDFs, 3D models, playable builds)
   - `links`: buttons for GitHub, a live demo, or downloads
3. Set your name, email and links in `owner` at the top of the same file.

To add a project, copy one `{ ... }` block in `projects` and give it a new `id` and folder.
To remove one, delete its block.

## Tips per project type

| Project            | What to upload                                                                                     |
| ------------------ | -------------------------------------------------------------------------------------------------- |
| Cocos2d game       | Screenshots, a gameplay `.mp4`, and the **web build** folder so people can play it (`type: "embed"`) |
| Three.js aircraft  | The whole built site in a subfolder (`type: "embed"`), plus a screen recording                       |
| PCB                | Schematic PNG, 2D layout, 3D render, and a photo of the real board                                   |
| SolidWorks         | Renders, drawing as PDF, and a `.glb` export so the part rotates in the browser (`type: "model"`)    |
| MATLAB             | Plot images (`saveas(gcf,'plot.png')`), Simulink screenshot, report PDF                              |

SolidWorks can't export `.glb` directly. Export STL or STEP, then convert it with Blender or an online STL-to-GLB converter.

Keep videos under ~20 MB. Use YouTube for longer ones.

## After editing CSS or JS

Bump the `?v=...` number on the `css/style.css`, `js/projects.js` and `js/main.js` links in both
`index.html` and `project.html`. Otherwise visitors' browsers may keep old copies and mix them with new ones.

## Publishing (GitHub Pages)

1. Push this folder to a GitHub repo.
2. In the repo, go to **Settings → Pages → Deploy from branch → `main` / root**.
3. The site goes live at `https://<username>.github.io/<repo>/`.

Note: playable game embeds and some PDF previews work only when the site is served over http(s),
such as GitHub Pages or `npx serve .`. They may not load when you double-click the file.
