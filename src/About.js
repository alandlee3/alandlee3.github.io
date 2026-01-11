import "./About.css";

const About = () => (
  <div className="About">
    <div className="about-container">
      <div className="resume-card">
        <header className="about-header">
          <h1>Alan Lee</h1>
          <div className="contact">
            (650) 281-7641 •{" "}
            <a href="mailto:alanlee@mit.edu">alanlee@mit.edu</a>
          </div>
        </header>

        <section className="about-summary">
          <h2 className="section-title">Summary</h2>
          <p>
            Mathematics & Computer Science student at MIT (BS ’26, MEng ’27).
            Interests include algorithms, machine learning, and systems.
            Experienced with research and software internships (CSAIL, Samsung
            Semiconductor, Optiver), and active in competition and teaching
            roles.
          </p>
        </section>

        <section className="about-education">
          <h2 className="section-title">Education</h2>
          <div className="edu-item edu-row">
            <div className="edu-left">
              <div className="school">
                Massachusetts Institute of Technology, Cambridge, MA
              </div>
            </div>
            <div className="edu-right">
              <div>B.S. Mathematics & Computer Science (May 2026)</div>
              <div>M.Eng. Computer Science (May 2027)</div>
              <div>GPA: 5.0</div>
            </div>
          </div>
          <div className="about-coursework">
            <ul className="bullet-list">
              <li>
                <strong>Relevant Coursework: </strong>
                (G) Machine Learning, (G) Algorithms, (G) Non-Asymptotic
                Statistics, (G) Multiagent Learning, Software Construction, (G)
                Quantum Computation, Digital Systems Laboratory, Computer
                Systems Engineering, Computation Structures, Probability and
                Random Variables, Algebraic Combinatorics, Linear and Abstract
                Algebra, Differential Equations
              </li>
            </ul>
          </div>
        </section>

        <section className="about-experience">
          <h2 className="section-title">Experience</h2>

          <div className="exp-item">
            <div className="exp-title">
              Optiver US LLC — Trading Intern{" "}
              <span className="exp-dates">(June–Aug 2025)</span>
            </div>
            <ul className="bullet-list">
              <li>
                Completed a rigorous options theory course; gained exposure to
                pricing models, option structures, and Greeks.
              </li>
              <li>
                Engaged in simulated options trading using live market data and
                internal trading tools.
              </li>
              <li>
                Produced data-driven, backtested trading strategies and won 1st
                place in the index options research competition.
              </li>
            </ul>
          </div>

          <div className="exp-item">
            <div className="exp-title">
              Samsung Semiconductor Inc. — Software Engineering Intern{" "}
              <span className="exp-dates">(June–Aug 2024)</span>
            </div>
            <ul className="bullet-list">
              <li>
                Designed Python scripts to automate SSD parameter extraction via
                the NVMe CLI on Linux.
              </li>
              <li>
                Improved extraction efficiency by ~50% and implemented a Django
                GUI to simplify comparison of SSD parameters using Pandas.
              </li>
            </ul>
          </div>

          <div className="exp-item">
            <div className="exp-title">
              MIT CSAIL — Software Engineering Intern{" "}
              <span className="exp-dates">(Dec 2023–Mar 2024)</span>
            </div>
            <ul className="bullet-list">
              <li>
                Designed a generalized hypergraph model in Python (NetworkX) to
                learn grammar rules for desirable chemical molecule synthesis.
              </li>
              <li>
                Reviewed existing grammar-rule ML frameworks and relevant
                literature in linguistics and computation theory.
              </li>
            </ul>
          </div>

          <div className="exp-item">
            <div className="exp-title">
              AiMFuture, Inc. — Machine Learning Research Intern{" "}
              <span className="exp-dates">(July–Aug 2023)</span>
            </div>
            <ul className="bullet-list">
              <li>
                Implemented view synthesis algorithms including NeRF and
                pixelNeRF in Python.
              </li>
              <li>
                Quickly learned and applied CNN and MLP architectures to improve
                rendering and generalization.
              </li>
            </ul>
          </div>

          <div className="exp-item">
            <div className="exp-title">
              MIT PRIMES-USA — Student Researcher{" "}
              <span className="exp-dates">(Jan 2022–Jan 2023)</span>
            </div>
            <ul className="bullet-list">
              <li>
                Conducted combinatorics research resulting in two submitted
                papers on the connectedness of friends-and-strangers graphs.
              </li>
              <li>
                Named a Regeneron STS Scholar (top 300) and presented work at
                the Joint Mathematics Meetings.
              </li>
            </ul>
          </div>
        </section>

        <section className="about-others">
          <div className="left-col">
            <h2 className="section-title">Leadership & Teaching</h2>
            <div className="plain-list">
              <ul className="bullet-list">
                <li>
                  <strong>HMMT</strong> — Tournament Director (Sep
                  2023–present): manage operations for a 1500-competitor event.
                </li>
                <li>
                  <strong>MIT EECS</strong> — TA for Introduction to Algorithms
                  (Jan 2024–present): lead recitations and grade problem sets.
                </li>
              </ul>
            </div>

            <h2 className="section-title">Awards & Research</h2>
            <div className="plain-list">
              <ul className="bullet-list">
                <li>
                  Regeneron STS Scholar; PRIMES-USA researcher with
                  combinatorics papers submitted.
                </li>
                <li>
                  USA Math Olympiad Program (MOP), USAMO qualifier (4×), USAJMO
                  top 24.
                </li>
              </ul>
            </div>
          </div>

          <div className="right-col">
            <h2 className="section-title">Skills</h2>
            <ul className="bullet-list skills-list">
              <li>Languages: Python, C++, C, Java, JavaScript</li>
              <li>
                Web & Data: React, Django, HTML/CSS, NumPy, Pandas, SQL, PyTorch
              </li>
              <li>Tools: Git, Linux, NVMe, Excel</li>
              <li>Languages: Korean (fluent), Spanish (intermediate)</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default About;
