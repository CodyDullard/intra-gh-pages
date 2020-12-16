import Table from"../components/Table";
import "../styles/main.css";
import CvViewer from "../components/Cv"

function Student() {
    return (
      <body>
        <div title="Job section" aria-label="Job Section" id="job-display">
          <h2>Student</h2>
          <CvViewer />
        </div>
      </body>
    );
  }
  

export default Student;