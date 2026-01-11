import "./Projects.css";

const projects = [
  {
    title: "FPGA Surfers",
    url: "https://github.com/alandlee3/FPGA_Surfers",
    desc: "SystemVerilog implementation of a Subway Surfers-style game for FPGA; includes HDL, builds, simulation, and running instructions.",
  },
  {
    title: "Team Leduc Poker Challenge",
    url: "https://github.com/ChrisG777/Team-Leduc-Poker-Challenge",
    desc: "6.S890 final project implementing TB-DAG and fictitious play to compute correlated equilibria for Team Leduc Hold'em (Python).",
  },
  {
    title: "OSM Game (iD / HOT Maps)",
    url: "https://github.com/alandlee3/OSM_game",
    desc: "Fork of the iD/OpenStreetMap 'HOT Maps' gamified editor features — JavaScript/CSS mapping game and editor improvements.",
  },
];

const Projects = () => (
  <div className="Projects">
    <div className="projects-inner">
      <h1>Projects</h1>
      <div className="project-grid">
        {projects.map((p) => (
          <a
            key={p.url}
            className="project-card"
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>{p.title}</h2>
            <p className="project-desc">{p.desc}</p>
            <span className="project-link">View on GitHub →</span>
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
