# Help Notes

## Folder

This "data" folder contains information regarding FXA's _team_, _events_, _sponsors and partners_, and _publications_. Each category has it's own files. Any updates to any of the above categories can be done in these files.

Note: Using **Image URLs** assumes that all images used for the above categories are placed in the **public** folder. If you do not want to use the **public** folder, you must import the image: `import someImage from '../assets/some-image.jpg';` at the top of the relevant file (either one of the info files for the above categories), and wherever it says _{INSERT IMAGE URL}_ in the following guide below, replace with `someImage` (no apostrophes are needed).

## Formatting

#### Team Page

To add / update information about FXA's team, add the following to **"team"** in the **"teaminfo.jsx"** file:

`{
  name: "{INSERT NAME OF PERSON HERE}",
  role: "{INSERT ROLE OF PERSON HERE}",
  port: "{INSERT PORT OF PERSON HERE}",
  degree: "{INSERT DEGREE OF PERSON HERE}",
  year: "{INSERT THE YEAR THE PERSON WAS IN SOC}",
  photo: "{INSERT IMAGE URL}",
},`

EXAMPLE:

`{
  name: "Sam Liu",
  role: "Information Technology Director",
  port: "Internals",
  degree: "3rd Year Computer Science / Commerce",
  year: "2025",
  photo: "../assets/team/s-liu.jpg",
},`

#### Events Page

To add / update information about FXA's events, add the following to **"events"** in the **"eventsinfo.jsx"** file:

`{
  name: "{INSERT TITLE OF EVENT}",
  year: "{INSERT YEAR OF EVENT}",
  description: "{INSERT DESCRIPTION OF EVENT}",
  cp: "{INSERT IMAGE URL}",
  link: "{INSERT FB EVENT LINK}",
  type: "{INSERT EITHER 'past' OR 'upcoming'}",
},`

EXAMPLE:

`{
  name: "2025 Director Recruitment",
  year: "2025",
  description: "Take ownership of impactful initiatives, work alongside a collaborative team, and gain hands-on experience that strengthens both your personal and professional skills.",
  cp: "../assets/director-recruitment-cp.jpg",
  link: "https://fb.me/e/5nFCgMTuA",
  type: "past",
},`

#### Sponsors and Partners Page

To add / update information about FXA's sponsors, add the following to **"sponsors"** in the **"sponsorsandpartners.jsx"** file:

`{
  company: "{INSERT COMPANY NAME}",
  logo: "{INSERT IMAGE URL}",
  start: "{INSERT YEAR SPONSORSHIP STARTED}",
},`

EXAMPLE:

`{
  company: "Optiver",
  logo: "../assets/optiver-logo.jpg",
  start: "2025",
},`

To add / update information about FXA's partners, add the following to **"partners"** in the **"sponsorsandpartners.jsx"** file:

`{
  company: "{INSERT COMPANY NAME}",
  logo: "{INSERT IMAGE URL}",
  start: "{INSERT YEAR SPONSORSHIP STARTED}",
},`

EXAMPLE:

`{
  company: "Optiver",
  logo: "../assets/optiver-logo.jpg",
  start: "2025",
},`

#### Publications Page

To add / update information about FXA's blogs, add the following to **"blogs"** in the **"publicationsinfo.jsx"** file:

`{
  title: "{INSERT BLOG TITLE}",
  publishdate: "{INSERT PUBLISHING DATE OF BLOG}",
  authors: ["{INSERT AUTHOR 1}", "{INSERT AUTHOR 2 (IF ANY)}", etc...],
  text: "{INSERT BLOG TEXT}",
  images: ["{INSERT IMAGE URL 1}", "{INSERT IMAGE URL 2 (IF ANY)}", etc...],
},`

EXAMPLE:

`{
  title: "What is Foreign Exchange?",
  publishdate: "20 May 2025",
  authors: ["John Smith", "Jane Liu", "Amanda Xiao"],
  text: "This is an introduction to foreign exchange. So what is foreign exchange? ... some more text ...",
  images: ["../assets/market-trends.jpg", "../assets/crypto.png", "../assets/coin.jpg", "../assets/trading-graph.jpg"],
},`
