# FXA Website

Welcome to UNSW FOREX Association!

# Guide

### Intro

This repo contains the source code for UNSW FXA's website. Work is still in progress...

### Working on the project

**1. Set up the project locally**

In your terminal, run the following:

- `git pull origin main`

- `npm install`

- `npm run dev`

`npm run dev` will produce a link - you can go to this to see the website locally.

**2. Set up your own branch**

- `git checkout -b {name}`

- e.g. `git checkout -b agnes`

We love good GIT practices, so just create one branch named as your name and you can do all the work in this branch.

**3. Pulling updates**

- `git pull origin main`

Before you start working on changes, make sure you are in your own branch and that you have the latest updates from the repo. This avoids any merge conflicts when you are trying to push your code.

**4. Merging changes**

Add your changes to your branch:

- `git add .`

- `git commit -m "{brief commit message}"`

- `git push`

Switch to the main branch and merge the main branch with your branch:

- `git checkout main`

- `git merge {branchname}`

- `git push origin main`

### Deploying

If you make changes and push to main run the following command:

- `npm run deploy`

Give it a couple of minutes, but official the website should display your changes soon.

### What's in this repo?

- **`src/` FOLDER:** contains the source code and is the main working folder for development (you will be working in this majority of the time)

  - **`App.jsx` FILE:** the root component of the React app - other pages and components are rendered here

  - **`index.css` FILE:** global CSS file for the app - styles here apply to the whole app (unless overridden)

  - **`main.jsx` FILE:** entry point of your React app - mounts the App component into the DOM

  - **`assets/` FOLDER:** contains static files (currently contains images); these files need to be imported to be used in other files - navigate to `assets/1-HelpNotes.md`for further information

  - **`components/` FOLDER:** contains files that are composed of reusable UI components which form parts of our website (headers, footers, menu, cards etc); these files need to be imported to be used in other files - navigate to `components/1-HelpNotes.md`for further information

  - **`data/` FOLDER:** contains files that have information regarding FXA's _team_, _events_, _sponsors and partners_, and _publications_ - navigate to `data/1-HelpNotes.md`for further information

  - **`pages/` FOLDER:** contains files that are composed of full page-level components - navigate to `pages/1-HelpNotes.md`for further information

- **`dist/` FOLDER:** output folder generated by vite build (you don't need to touch this)

- **`node_modules/` FOLDER:** project dependencies installed via npm (you don't need to touch this)

- **`public/` FOLDER:** static files accessible via /filename in browser and are copied into the `dist/` folder during build (you don't need to touch this)

- **`CNAME` FILE:** contains the domain for our website and links this repo to the domain (you don't need to touch this)

- **`eslint.config.js` FILE:** ESLint configuration file for code linting, i.e. checking for syntax/style errors (you don't need to touch this)

- **`index.html` FILE:** the HTML file Vite uses during developing and building the app (you don't need to touch this)

- **`package-lock.json` FILE:** locks down exact versions of all installed dependencies for consistent installs across machines (you don't need to touch this)

- **`package.json` FILE:** metadata file for any Node.js project such as this one (you don't need to touch this) - includes project name and version; scripts (npm run dev, npm run build, etc.); dependencies and devDependencies; module types (like "type": "module")

- **`README.md` FILE:** description and guide of the repo (the current file you are reading)

- **`vite.config.js` FILE:** configuration file for Vite, the build tool which customises build settings, plugins, aliases, base path, etc.
