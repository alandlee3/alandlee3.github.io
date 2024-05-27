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
    </div>
  </div>
);

export default Home;
