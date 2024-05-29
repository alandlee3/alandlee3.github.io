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
      <div className="contact-icons">
        <a href="https://www.facebook.com/alan.lee.278/">
          <img
            src="./Contacts/facebook.png"
            class="contact-icon"
            alt="Facebook"
          />
        </a>
        <a href="https://www.linkedin.com/in/alan-d-lee/">
          <img
            src="./Contacts/linkedin.png"
            class="contact-icon"
            alt="LinkedIn"
          />
        </a>
        <a href="https://github.com/alandlee3">
          <img src="./Contacts/github.png" class="contact-icon" alt="GitHub" />
        </a>
        <a href="https://www.instagram.com/alan.d.lee/">
          <img
            src="./Contacts/instagram.png"
            class="contact-icon"
            alt="Instagram"
          />
        </a>
        <a href="mailto:alanlee@mit.edu">
          <img src="./Contacts/email.png" class="contact-icon" alt="Email" />
        </a>
      </div>
      <div className="legal-stuff">
        © 2024 by Alan Lee. All rights reserved.
      </div>
      <div className="legal-stuff">
        Built using React.js, Bootstrap, HTML, and CSS. Hosted on GitHub.
      </div>
    </div>
  </div>
);

export default Home;
