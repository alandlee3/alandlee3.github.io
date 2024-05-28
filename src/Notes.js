import "./Notes.css";

function DisplayNotes({ course }) {
  if (course === "6.036") {
    return (
      <iframe
        class="notes-pdf-display"
        src="./Notes/Introduction to ML.pdf"
        frameBorder="0"
      ></iframe>
    );
  } else if (course === "6.046") {
    return (
      <iframe
        class="notes-pdf-display"
        src="./Notes/Intermediate Algorithms.pdf"
        frameBorder="0"
      ></iframe>
    );
  } else if (course === "18.650") {
    return (
      <iframe
        class="notes-pdf-display"
        src="./Notes/Fundamentals of Statistics.pdf"
        frameBorder="0"
      ></iframe>
    );
  } else if (course === "6.006") {
    return (
      <iframe
        class="notes-pdf-display"
        src="./Notes/Introduction to Algorithms.pdf"
        frameBorder="0"
      ></iframe>
    );
  } else if (course === "24.900") {
    return (
      <iframe
        class="notes-pdf-display"
        src="./Notes/Introduction to Linguistics.pdf"
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
        during my time at MIT. Click on any class title below to access them! I
        took handwritten notes for 6.445 and 18.701, which I may or may not get
        around to uploading.
      </p>
    </div>
    <div className="coursework">
      <a href="/#/notes/6.006" className="course-notes-link">
        6.006 Intro to Algorithms [Fall 2023]
      </a>
      <a href="/#/notes/6.036" className="course-notes-link">
        6.036 Intro to Machine Learning [Spring 2024]
      </a>
      <a href="/#/notes/6.046" className="course-notes-link">
        6.046 Design and Analysis of Algorithms [Spring 2024]
      </a>
      <a href="/#/notes/18.650" className="course-notes-link">
        18.650 Fundamentals of Statistics [Spring 2024]
      </a>
      <a href="/#/notes/24.900" className="course-notes-link">
        24.900 Intro to Linguistics [Fall 2023]
      </a>
    </div>
    <DisplayNotes course={course} />
  </div>
);

export default Notes;
