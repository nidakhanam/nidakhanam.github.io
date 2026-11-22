# 🌸 Nida Khanam — Portfolio

Personal portfolio site: **Software Developer · Backend & GenAI**.
Plain HTML + CSS + vanilla JS — no framework, no build step — so it runs on GitHub Pages straight from the repo root.

```
.
├── index.html      # page structure & content
├── styles.css      # pastel mint + blush theme (CSS variables at the top), light/dark
├── script.js       # CONFIG block (links) + PROJECTS array + animations
├── assets/
│   ├── og-image.png                 # social preview image (1200×630)
│   └── Nida_Khanam_Resume.pdf       # ← add your resume here
├── .nojekyll       # tells GitHub Pages to serve files as-is
└── README.md
```

## ✏️ Customize

- **Links** (GitHub, LinkedIn, email, resume path) and the **featured GenAI project** live in the `CONFIG` block at the top of `script.js`.
- **Add a project:** append an object to the `PROJECTS` array in `script.js`:
  ```js
  { title: "My App", description: "What it does.", tags: ["Python", "FastAPI"], github: "https://github.com/...", demo: "#" }
  ```
  Any link left as `"#"` shows as a disabled “Code soon” / “Demo soon” button.
- **Resume:** drop your PDF at `assets/Nida_Khanam_Resume.pdf`.
- **Colors / fonts:** edit the variables in `:root` (light) and `[data-theme="dark"]` in `styles.css`.
- **Social preview URL:** if your site URL differs from `https://nidakhanam.github.io/`, update the `og:url`, `og:image` and `twitter:image` tags in `index.html`.

## 👀 Preview locally

```bash
cd path/to/this/folder
python -m http.server 8000     # or: python3 -m http.server 8000
```
Then open <http://localhost:8000>.

## 🚀 Publish on GitHub Pages

1. On GitHub, create a **new public repository** named exactly **`<your-username>.github.io`** (e.g. `nidakhanam.github.io`). Don't add a README/license (keeps the first push simple).
2. Push these files to the repo's **root** on the `main` branch:
   ```bash
   cd path/to/this/folder
   git init
   git add .
   git commit -m "Launch portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Set **Branch** to **`main`** and folder to **`/ (root)`**, then click **Save**.
6. Wait ~1 minute, refresh the Pages settings page, and your site is live at **`https://<your-username>.github.io/`** ✨

To update later: edit files, then `git add . && git commit -m "Update" && git push`.

---
Designed & built by Nida Khanam with 💚 & 🩷
