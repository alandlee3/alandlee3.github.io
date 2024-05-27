import "./Notes.css";

function DisplayNotes({ course }) {
  if (course === "6.036") {
    return (
      <iframe
        src="https://drive.google.com/file/d/17TT9ud794hXyNk5SaJwe7wf6BOJ-GcAL"
        style={{ width: "718px", height: "700px" }}
        frameBorder="0"
      ></iframe>
    );
  }
}

const Notes = ({ course }) => (
  <div className="Notes">
    <div className="notes-text">
      <h1>Notes</h1>
      <p>
        This page contains my notes from a variety of classes taken so far
        during my time at MIT.
      </p>
    </div>

    <div className="coursework">
      <div>6.006 Intro to Algorithms</div>
      <div>6.036 Intro to Machine Learning</div>
      <div>6.046 Design and Analysis of Algorithms</div>
      <div>18.650 Fundamentals of Statistics</div>
      <div>24.900 Intro to Linguistics</div>
    </div>
    <DisplayNotes course={course} />
  </div>
);

export default Notes;
