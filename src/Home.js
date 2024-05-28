import "./Home.css";

const Home = () => (
  <div className="Home">
    <div className="calculator-container">
      <img src="./subway.png" />
    </div>
    <div className="intro-text">
      <h1>
        Hello, I'm <span className="my-name">Alan</span>.
      </h1>
      <p> This is my personal website.</p>
      <div className="legal-stuff">
        © 2024 by Alan Lee. All rights reserved.
      </div>
      <div className="legal-stuff">
        Built using React.js, HTML, and CSS. Hosted on GitHub.
      </div>
    </div>
  </div>
);

export default Home;
