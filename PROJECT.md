# Alan Lee's Personal Website

A modern, interactive personal portfolio website showcasing Alan Lee's professional profile, projects, course notes, and a fun incremental clicker game.

## Overview

This is a single-page application (SPA) built with React.js and deployed on GitHub Pages. The website serves as both a professional portfolio and a creative showcase, featuring multiple sections with smooth navigation and responsive design.

**Live Site:** [https://alandlee3.github.io](https://alandlee3.github.io)

## Project Structure

```
alandlee3.github.io/
├── public/               # Static assets
├── src/
│   ├── App.js           # Main application component with routing
│   ├── NavBar.js        # Navigation bar component
│   ├── Home.js          # Landing page with social links
│   ├── About.js         # Resume/CV page
│   ├── Projects.js      # Portfolio projects showcase
│   ├── Notes.js         # Academic course notes viewer
│   ├── Misc.js          # Interactive clicker game
│   └── *.css            # Component-specific stylesheets
├── package.json         # Dependencies and scripts
└── README.md            # Create React App documentation
```

## Features

### Pages & Navigation

1. **Home** - Landing page featuring:
   - Personal introduction
   - Subway-themed visual element
   - Social media links (Facebook, LinkedIn, GitHub, Instagram, Email)
   - Copyright and attribution footer

2. **About** - Professional resume/CV displaying:
   - Educational background (MIT BS '26, MEng '27)
   - Work experience (Optiver, Samsung, MIT CSAIL, etc.)
   - Leadership roles and teaching positions
   - Awards and research achievements
   - Technical skills and languages

3. **Projects** - Portfolio showcase featuring:
   - FPGA Surfers (SystemVerilog game)
   - Team Leduc Poker Challenge (Multi-agent learning)
   - OSM Game (OpenStreetMap editor fork)
   - Direct links to GitHub repositories

4. **Notes** - Academic course notes with routes for:
   - 6.036 (Machine Learning)
   - 6.046 (Algorithms)
   - 6.006 (Introduction to Algorithms)
   - 18.650 (Statistics)
   - 24.900 (Linguistics)

5. **Game** - Interactive incremental clicker game:
   - Click-based currency generation
   - Multiple upgrade levels with exponential scaling
   - Passive income generation
   - Win condition and replay functionality
   - Dynamic UI that scales with button width

## Technology Stack

- **Framework:** React 18.3.1
- **Routing:** React Router DOM 6.23.1
- **Build Tool:** Create React App 5.0.1
- **Deployment:** GitHub Pages (via gh-pages)
- **Styling:** Custom CSS with modern flexbox/grid layouts

## Development

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation
```bash
npm install
```

### Available Scripts

```bash
# Start development server (http://localhost:3000)
npm start

# Build for production
npm run build

# Run tests
npm test

# Deploy to GitHub Pages
npm run deploy
```

## Game Mechanics (Misc.js)

The incremental clicker game features:

- **Click Rewards:** Earn currency scaled by button width (2^(width/100))
- **Passive Income:** Each level generates 2^(level+1) points per second
- **Level System:** Purchase upgrades with exponentially increasing costs (3^level)
- **Progression:** Unlock new levels by purchasing 3 of the previous level
- **End Game:** Complete level 21 to win and reset

### Game Formula
- Click reward: `2^(buttonWidth/100)`
- Passive income per level: `2^(level+1) * quantity`
- Level cost: `3^level`
- Unlock condition: 3 purchases of current max level

## Deployment

The site is automatically deployed to GitHub Pages using:
```bash
npm run deploy
```

This builds the production bundle and pushes to the `gh-pages` branch.

## Design Philosophy

- **Clean & Minimalist:** Focus on content without unnecessary clutter
- **Professional Yet Personal:** Balances resume content with creative elements
- **Responsive:** Works across desktop and mobile devices
- **Interactive:** Includes an engaging game element for visitors
- **Fast Loading:** Optimized React build with code splitting

## Future Enhancements

Potential additions could include:
- Blog/articles section
- Photo gallery
- More interactive demos
- Dark mode toggle
- Enhanced game features (achievements, save states, etc.)
- Analytics integration

## Author

**Alan Lee**
- Email: alanlee@mit.edu
- GitHub: [@alandlee3](https://github.com/alandlee3)
- LinkedIn: [alan-d-lee](https://www.linkedin.com/in/alan-d-lee/)

## License

© 2024-2026 by Alan Lee. All rights reserved.

Built with React.js, Bootstrap, HTML, and CSS. Hosted on GitHub.