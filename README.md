# Arun Kumar M. — Engineering Portfolio

> **Editorial, dark-first developer portfolio and technical notebook.**
> Built with React, TypeScript, and modern CSS for Arun Kumar M., Aspiring Data Scientist & Software Engineer.

---

## ⚡ Overview

This repository houses the personal developer portfolio website for **Arun Kumar M.** (Brand: **AKM**).
It is intentionally crafted as an authentic engineering notebook and technical case-study archive, highlighting foundational coursework, low-level systems programming in C, relational database management in SQL, and progression into data science.

### Featured Projects & Technical Case Studies
- **01: Line Editor in C** — Dynamic memory buffer allocation (`char**`), row index management, file persistence.
- **02: LeetCode Solutions** — Algorithmic problem-solving in C with time/space complexity analysis.
- **03: 2D Graphics Editor** — Terminal character canvas, rasterizing rectangles, circles, lines, and triangles.
- **04: PureSip** — Academic entrepreneurship & product design study for a portable water purification concept.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Tooling & Bundler**: Vite
- **Styling**: Vanilla CSS with custom tokens & dark-first editorial layout
- **Typography**: Inter & JetBrains Mono (Google Fonts)
- **Icons**: Lucide Icons

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized static bundle is emitted to the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ✏️ Customization & Updating Content

All portfolio content is decoupled from UI presentation and centrally managed in:
`src/data/portfolioData.ts`

To edit:
- **Profile / Bio**: Modify `PERSONAL_INFO`.
- **Projects & Case Studies**: Add or edit objects in `PROJECTS`.
- **Skills**: Update `SKILL_CATEGORIES`.
- **Learning Timeline**: Update `LEARNING_JOURNEY`.
- **Education placeholders**: Edit `EDUCATION_DATA` (`college`, `degree`, `expectedGraduation`).
- **Contact Channels**: Edit `CONTACT_DATA` (`githubUrl`, `linkedinUrl`, `email`).

---

## 📄 License
MIT © 2026 Arun Kumar M.