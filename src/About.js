import "./About.css";

const About = () => (
  <div className="About">
    <div className="about-text">
      <h1>About</h1>
      <p>
        I am currently an undergrad at MIT studying math and computer science. I
        am particularly interested in algorithms and machine learning. In high
        school, I competed in numerous competitions, receiving various
        accolades. I also participated in the MIT PRIMES-USA program,
        culminating in{" "}
        <a href="https://math.mit.edu/research/highschool/primes/papers.html">
          two research papers.
        </a>
      </p>
    </div>
    <div className="class-awards">
      <div className="about-coursework">
        <div className="h4">Coursework</div>
        <div className="adjust-font">
          6.0004 Low-Level Programming in C and Assembly
        </div>
        <div className="adjust-font">6.006 Intro to Algorithms</div>
        <div className="adjust-font">6.036 Intro to Machine Learning</div>
        <div className="adjust-font">
          6.046 Design and Analysis of Algorithms
        </div>
        <div className="adjust-font">6.445 (Grad) Quantum Computation</div>
        <div className="adjust-font">18.650 Fundamentals of Statistics</div>
        <div className="adjust-font">18.701 Algebra I</div>
      </div>

      <div className="about-coursework">
        <div className="h4">Awards</div>
        <div className="adjust-font">Regeneron STS Scholar (2023)</div>
        <div className="adjust-font">
          Math Olympiad Program (2021), 4-time USAMO Qualifier
        </div>
        <div className="adjust-font">
          US National Chemistry Olympiad Honors (2022, 2023)
        </div>
        <div className="adjust-font">
          USA Biology Olympiad top 90 (2022), 4-time Semifinalist
        </div>
      </div>
    </div>
  </div>
);

export default About;
